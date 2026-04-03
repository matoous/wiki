import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const wiki = defineCollection({
  loader: glob({
    base: ".",
    generateId: ({ entry }) => entry.replace(/\.md$/u, ""),
    pattern: [
      "{README,ideas,other,random}.md",
      "{computer_science,design,economics,food,history,language,life,math,meta,movies,music,nature,photography,politics,products,reading,science,sports,travel,work}/**/*.md",
    ],
  }),
  schema: z
    .object({
      title: z.string().optional(),
    })
    .passthrough(),
});

export const collections = { wiki };
