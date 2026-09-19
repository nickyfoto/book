# MacWorks

MacWorks is a lightweight editorial front end for the Markdown editions in `content/docs/`. It keeps Hugo as the renderer, but replaces the documentation theme with a small set of purpose-built templates.

## What changed

- Article URLs are based on identity, not storage tier. A daily file named `apple-2026-08-09.md` always renders at `/articles/apple-2026-08-09/`, whether the file is in `today`, `week`, or `archives`.
- Archived weekly summaries include their category to avoid filename collisions: `/articles/apple/weekly-2026-W13/`.
- Old `/docs/.../<filename>/` links are redirected by the custom 404 page when possible.
- Taxonomy rendering is disabled, and collection pages render at most 30 article rows. Current weekly summaries still render, without duplicating thousands of full articles across tag, category, and deeply paginated list pages.
- Search uses a metadata-only `search-index.json`; RSS contains the newest 30 editions.
- GitHub Actions no longer checks out the unused theme submodule and uses a pinned Hugo version.

## Local preview

Requires Hugo 0.158.0 or newer.

```bash
hugo server
```

Open [http://localhost:1313](http://localhost:1313).

## Production build

```bash
hugo --minify
```

Pushing to `main` triggers `.github/workflows/deploy.yml` and deploys `public/` to GitHub Pages.

## Analytics

Cloudflare Web Analytics tracks page views, visits, referrers, and page performance for `macworks.dev` without analytics cookies.

- [View analytics](https://dash.cloudflare.com/68d2537f29c6c8669b77f5aeb507e897/web-analytics/overview?siteTag~in=dcf4e16a3015491ea7bfe60128f0a9dd&excludeBots=Yes).
- The public site token is configured under `[params.cloudflareWebAnalytics]` in `hugo.toml`. This is not a Cloudflare API token or secret.
- `layouts/_partials/site/analytics.html` loads the official beacon once per HTML page, only for production builds. `hugo server` (even with `--environment production`) and non-production builds omit it.
- Keep Cloudflare's site setting on **Enable with JS Snippet installation**, not automatic injection, to avoid duplicate tracking. No DNS or hosting change is required.
- To disable the integration, remove or empty the site token and redeploy. To replace it, update the token and redeploy.
- After deploying, check the browser Network panel for `beacon.min.js` and a successful RUM request. The dashboard may take a few minutes to show data; blocked scripts and bots can affect counts.

## Publishing

The publisher may keep writing and rotating Markdown exactly as it does today. Permanent daily URLs depend only on the filename, so rotation does not need to rewrite front matter or maintain redirect records.

The homepage reads the current pages in `content/docs/today/`. Topic pages and the archive are intentionally bounded lists; the search dialog covers the complete metadata index.
