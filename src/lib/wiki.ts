import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

export type WikiPage = {
  entry: WikiEntry;
  route: string;
  title: string;
  htmlTitle: string;
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

type WikiEntry = CollectionEntry<"wiki">;

type WikiRecord = {
  entry: WikiEntry;
  route: string;
  title: string;
  excerpt: string;
  tags: string[];
};

let cachedPagesPromise: Promise<WikiPage[]> | null = null;

export async function getAllPages(): Promise<WikiPage[]> {
  if (!cachedPagesPromise) {
    cachedPagesPromise = loadPages();
  }

  return cachedPagesPromise;
}

export async function getPageByRoute(
  route: string,
): Promise<WikiPage | undefined> {
  const pages = await getAllPages();
  return pages.find((page) => page.route === route);
}

async function loadPages(): Promise<WikiPage[]> {
  const pageRecords = (await getCollection("wiki"))
    .map((entry) => parsePage(entry))
    .sort((left, right) => left.route.localeCompare(right.route));

  const titleByRoute = new Map(
    pageRecords.map((page) => [page.route, page.title]),
  );
  const tree = buildTree(pageRecords);

  return pageRecords.map((page) => ({
    ...page,
    htmlTitle: `${page.title} | Matt's Wiki`,
    breadcrumbs: buildBreadcrumbs(page, titleByRoute),
    children: tree,
  }));
}

function parsePage(entry: WikiEntry): WikiRecord {
  const content = entry.body ?? "";
  const route = entryIdToRoute(entry.id);
  const title = extractTitle(content, entry.data.title, entry.id);
  const excerpt = extractExcerpt(content);
  const tags = route === "/" ? [] : route.split("/").filter(Boolean);

  return {
    entry,
    route,
    title,
    excerpt,
    tags,
  };
}

function entryIdToRoute(id: string): string {
  const normalized = id.replace(/\\/gu, "/");

  if (/^(?:index|readme)$/iu.test(normalized)) {
    return "/";
  }

  if (/\/(?:index|readme)$/iu.test(normalized)) {
    return `/${normalized.replace(/\/(?:index|readme)$/iu, "")}/`;
  }

  return `/${normalized}/`;
}

function extractTitle(
  content: string,
  frontmatterTitle: unknown,
  entryId: string,
): string {
  if (typeof frontmatterTitle === "string" && frontmatterTitle.trim()) {
    return frontmatterTitle.trim();
  }

  const match = content.match(/^#\s+(.+)$/mu);
  if (match?.[1]) {
    return match[1].trim();
  }

  return humanizeId(entryId);
}

function humanizeId(entryId: string): string {
  const fileName = entryId.split("/").at(-1) ?? entryId;
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

function buildTree(pages: WikiRecord[]): WikiNode[] {
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

  const root = pages.find((page) => page.route === "/");
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
