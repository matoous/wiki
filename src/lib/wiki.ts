import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

export type WikiPage = {
  route: string;
  filePath: string;
  title: string;
  htmlTitle: string;
  body: string;
  html: string;
  excerpt: string;
  tags: string[];
  breadcrumbs: BreadcrumbItem[];
  children: WikiNode[];
};

export type WikiNode = {
  title: string;
  route: string;
  children: WikiNode[];
};

export type BreadcrumbItem = {
  title: string;
  route: string;
};

type WikiRecord = {
  route: string;
  filePath: string;
  title: string;
  body: string;
  html: string;
  excerpt: string;
  tags: string[];
};

const ROOT_DIR = process.cwd();
const SKIP_DIRS = new Set([
  ".git",
  ".github",
  ".mwp-cache",
  "dist",
  "node_modules",
  "public",
  "src",
  "static",
  "target",
]);

let cachedPages: WikiPage[] | null = null;

export function getAllPages(): WikiPage[] {
  if (cachedPages) {
    return cachedPages;
  }

  const pageRecords = collectMarkdown(ROOT_DIR)
    .map((filePath) => parsePage(filePath))
    .sort((left, right) => left.route.localeCompare(right.route));

  const titleByRoute = new Map(
    pageRecords.map((page) => [page.route, page.title]),
  );
  const tree = buildTree(pageRecords);

  cachedPages = pageRecords.map((page) => ({
    ...page,
    htmlTitle: `${page.title} | Matt's Wiki`,
    breadcrumbs: buildBreadcrumbs(page, titleByRoute),
    children: tree,
  }));

  return cachedPages ?? [];
}

export function getPageByRoute(route: string): WikiPage | undefined {
  return getAllPages().find((page) => page.route === route);
}

function collectMarkdown(dirPath: string): string[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".") && entry.name !== ".well-known") {
      continue;
    }

    const absolutePath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) {
        continue;
      }
      files.push(...collectMarkdown(absolutePath));
      continue;
    }

    if (!entry.isFile() || !entry.name.endsWith(".md")) {
      continue;
    }

    files.push(absolutePath);
  }

  return files;
}

function parsePage(filePath: string): WikiRecord {
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  const route = filePathToRoute(filePath);
  const title = extractTitle(content, data.title, filePath);
  const html = renderMarkdown(content);
  const excerpt = extractExcerpt(content);
  const tags = route === "/" ? [] : route.split("/").filter(Boolean);

  return {
    route,
    filePath,
    title,
    body: content,
    html,
    excerpt,
    tags,
  };
}

function filePathToRoute(filePath: string): string {
  const relativePath = path.relative(ROOT_DIR, filePath);
  const withoutExtension = relativePath.replace(/\.md$/u, "");
  const normalized = withoutExtension.split(path.sep).join("/");

  if (normalized === "README" || normalized === "index") {
    return "/";
  }

  if (normalized.endsWith("/index") || normalized.endsWith("/README")) {
    return `/${normalized.replace(/\/(?:index|README)$/u, "")}/`;
  }

  return `/${normalized}/`;
}

function extractTitle(
  content: string,
  frontmatterTitle: unknown,
  filePath: string,
): string {
  if (typeof frontmatterTitle === "string" && frontmatterTitle.trim()) {
    return frontmatterTitle.trim();
  }

  const match = content.match(/^#\s+(.+)$/mu);
  if (match?.[1]) {
    return match[1].trim();
  }

  return humanizePath(filePath);
}

function humanizePath(filePath: string): string {
  const fileName = path.basename(filePath, ".md");
  return fileName
    .replace(/[-_]+/gu, " ")
    .replace(/\b\w/gu, (char) => char.toUpperCase());
}

function extractExcerpt(content: string): string {
  const cleaned = content
    .replace(/^---[\s\S]*?---$/mu, "")
    .replace(/^#.*$/gmu, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/gu, "$1")
    .replace(/[*_`>#-]/gu, " ")
    .replace(/\s+/gu, " ")
    .trim();

  return cleaned.slice(0, 180);
}

function renderMarkdown(content: string): string {
  const lines = content.split("\n");
  const output: string[] = [];
  let inCodeBlock = false;
  let codeLanguage = "";
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let blockquote: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) {
      return;
    }

    output.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length) {
      return;
    }

    output.push(`<ul>${listItems.join("")}</ul>`);
    listItems = [];
  };

  const flushQuote = () => {
    if (!blockquote.length) {
      return;
    }

    output.push(
      `<blockquote><p>${inlineMarkdown(blockquote.join(" "))}</p></blockquote>`,
    );
    blockquote = [];
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      flushParagraph();
      flushList();
      flushQuote();

      if (inCodeBlock) {
        output.push("</code></pre>");
        inCodeBlock = false;
        codeLanguage = "";
      } else {
        inCodeBlock = true;
        codeLanguage = line.slice(3).trim();
        const className = codeLanguage
          ? ` class="language-${escapeHtml(codeLanguage)}"`
          : "";
        output.push(`<pre><code${className}>`);
      }
      continue;
    }

    if (inCodeBlock) {
      output.push(`${escapeHtml(line)}\n`);
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/u);
    if (headingMatch) {
      flushParagraph();
      flushList();
      flushQuote();
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();
      const id = slugify(text);
      output.push(`<h${level} id="${id}">${inlineMarkdown(text)}</h${level}>`);
      continue;
    }

    const listMatch = line.match(/^\s*[-*]\s+(.+)$/u);
    if (listMatch) {
      flushParagraph();
      flushQuote();
      listItems.push(`<li>${inlineMarkdown(listMatch[1].trim())}</li>`);
      continue;
    }

    const quoteMatch = line.match(/^>\s?(.+)$/u);
    if (quoteMatch) {
      flushParagraph();
      flushList();
      blockquote.push(quoteMatch[1].trim());
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      flushList();
      flushQuote();
      continue;
    }

    paragraph.push(line.trim());
  }

  flushParagraph();
  flushList();
  flushQuote();

  if (inCodeBlock) {
    output.push("</code></pre>");
  }

  return output.join("");
}

function inlineMarkdown(input: string): string {
  let output = escapeHtml(input);

  output = output.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/gu,
    '<img src="$2" alt="$1" loading="lazy" />',
  );
  output = output.replace(
    /\[([^\]]+)\]\(([^)]+)\)/gu,
    (_match, label: string, href: string) => {
      const external = /^(?:[a-z]+:)?\/\//iu.test(href);
      const attrs = external
        ? ' target="_blank" rel="noreferrer noopener"'
        : "";
      return `<a href="${href}"${attrs}>${label}</a>`;
    },
  );
  output = output.replace(/\*\*([^*]+)\*\*/gu, "<strong>$1</strong>");
  output = output.replace(/\*([^*]+)\*/gu, "<em>$1</em>");
  output = output.replace(/`([^`]+)`/gu, "<code>$1</code>");

  return output;
}

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/&amp;/gu, " and ")
    .replace(/[^a-z0-9]+/gu, "-")
    .replace(/(^-|-$)/gu, "");
}

function buildTree(pages: WikiRecord[]): WikiNode[] {
  const pageByRoute = new Map(pages.map((page) => [page.route, page]));

  const buildChildren = (parentRoute: string): WikiNode[] => {
    const depth =
      parentRoute === "/"
        ? 1
        : parentRoute.split("/").filter(Boolean).length + 1;

    return pages
      .filter((page) => page.route !== "/")
      .filter((page) =>
        page.route.startsWith(parentRoute === "/" ? "/" : parentRoute),
      )
      .filter((page) => page.route.split("/").filter(Boolean).length === depth)
      .filter((page) => {
        if (parentRoute === "/") {
          return page.route.split("/").filter(Boolean).length === 1;
        }
        return page.route.startsWith(parentRoute) && page.route !== parentRoute;
      })
      .sort((left, right) => left.title.localeCompare(right.title))
      .map((page) => ({
        title: page.title,
        route: page.route,
        children: buildChildren(page.route),
      }));
  };

  const root = pageByRoute.get("/");
  if (!root) {
    return [];
  }

  return buildChildren(root.route);
}

function buildBreadcrumbs(
  page: WikiRecord,
  titleByRoute: Map<string, string>,
): BreadcrumbItem[] {
  if (page.route === "/") {
    return [{ title: page.title, route: "/" }];
  }

  const segments = page.route.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { title: titleByRoute.get("/") ?? "Wiki", route: "/" },
  ];

  for (let index = 0; index < segments.length; index += 1) {
    const route = `/${segments.slice(0, index + 1).join("/")}/`;
    breadcrumbs.push({
      title: titleByRoute.get(route) ?? humanizeSegment(segments[index]),
      route,
    });
  }

  return breadcrumbs;
}

function humanizeSegment(segment: string): string {
  return segment
    .replace(/[-_]+/gu, " ")
    .replace(/\b\w/gu, (char) => char.toUpperCase());
}
