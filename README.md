# Wiki

👋 Welcome to my personal Wiki/Knowledge base.

This Wiki is heavily inspired by [this one](https://wiki.nikitavoloboev.xyz/) by [Nikita Voloboev](https://nikitavoloboev.xyz/) and I strongly recommend you take a look at it as I still find it incomprehensible how much information, links and most importantly knowledge can one collect over the time.

Small disclaimer before you hop in: my technical writing skills are still severely lacking, please excuse that while I work on it.

## Purpose

This wiki server several purposes, some personal, some public:

- I like to read a lot and I sadly forgot a lot, by putting what I read into a few quick summarizing lines and link to the source I make sure that I can search and refresh my knowledge
- [Wiki is a great automatic responder, instead of crafting fresh response to each request/question I get I can point friends to what I have already written or found out on the subject](https://review.firstround.com/the-engineering-leader's-guide-to-crafting-a-personal-brand-that-stands-out-from-the-crowd)
- This wiki also serves as a great resource of materials for blog posts
- And also as a cheat sheet to various tools and languages

## Approach

- I don't put _everything_ I read hear, instead, I subjectively select things that I find worth it
- I always try to summarize the content of the link to provide additional context without the necessity to revisit the whole article when coming back to various topics

## Usage

- If you are reading this at [wiki.dzx.cz](https://wiki.dzx.cz/) you can easily use the navigation bar at the side to explore the wiki or the search bar in the top right corner to search for specific things
- Locally I prefer to use [ag](https://github.com/ggreer/the_silver_searcher) and search for keywords when looking for something, [Nikita Voloboev uses Alfred workflow](https://wiki.nikitavoloboev.xyz/#using-the-wiki-well) which seems like a great solution too. It's up to you 🤷
- I build the structure on the fly as I add more links and text thus the wiki is still quite messy in that sense

### Building the static site

This repo now builds directly with Astro. The markdown tree in the repository root is rendered into a static site, and Pagefind indexes the generated docs pages from `dist/` without crawling linked destinations.

```sh
cd /Users/matousdzivjak/code/github.com/matoous/wiki
npm install --ignore-scripts
npm run build
```

## Cloudflare Deploy

This repo now contains [wrangler.toml](/Users/matousdzivjak/code/github.com/matoous/wiki/wrangler.toml) configured to deploy the generated site as Cloudflare Workers static assets from `dist/`.

Local flow:

```sh
cd /Users/matousdzivjak/code/github.com/matoous/wiki
npm install --ignore-scripts
npm run build
npx wrangler login
npx wrangler deploy
```

If you are already authenticated locally, you can verify that with:

```sh
npx wrangler whoami
```

CI deploys from `.github/workflows/cd.yaml`. To enable deployment, set this repository secret:

- `CLOUDFLARE_API_TOKEN`

The current `wrangler.toml` deploys to `workers.dev`. If you want the site on a custom domain, add `routes` or a `custom_domain` mapping there.
