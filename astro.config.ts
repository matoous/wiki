import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "https://wiki.dzx.cz",
  output: "static",
  trailingSlash: "always",
  publicDir: "./static",
  integrations: [sitemap(), icon()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      wrap: true,
    },
  },
});
