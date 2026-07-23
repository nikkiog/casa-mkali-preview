# casa mkali — website

Live site: **https://casamkali.com** (GitHub Pages; every push to main deploys in ~1 min)

Shared working repo for the Casa Mkali site (Nikki + Natasha).

## Structure
- Pages live at the repo root (static HTML/CSS/JS, no build step):
  `index` · `n-n` · `natasha` · `nikki` · `the-lab` · `the-team` · `ai-services` · `projects` · `work-with-us`
- `cm-site.css` — the brand system (ink `#0E0E0E` / flame `#FC4B2E` / bone `#F1EFE8`, Helvetica Neue + Jost)
- `cm-site.js` — injects the shared header/footer on every page + behaviors (nav, cycle word, reveals) + Google Analytics
- `uploads/` — photography (B&W treatment applied in CSS, files are color)
- `og-image.jpg` — 1200×630 image shown when links are shared (social/link previews)
- `sitemap.xml` / `robots.txt` — SEO
- `site/` — redirect stubs only, kept so old preview links still work
- `CNAME` — the custom domain (don't delete)

Design source of truth for look & feel: the "Casa Mkali Design System" project on claude.ai/design.

## Working on it
1. `git pull` before you start (someone else may have pushed)
2. Edit, then preview locally: `npx serve . -l 4173` → open http://localhost:4173/
3. `git add -A && git commit -m "..." && git push` → live link updates itself

### Adding a new page
- Copy an existing page and keep the whole `<head>` block — update `<title>`, `meta description`, `canonical`, and the `og:` tags for the new page
- Add the page's URL to `sitemap.xml`
- Header/footer/analytics come free via `cm-site.js`

### Adding photos
- Export at max 1600px on the long edge, JPEG quality ~70–75, aim for under ~300 KB per file

## Analytics
GA4 (`G-2CN8D4QZF7`) loads from `cm-site.js` on the live domain only — local previews are never counted. Stats: [analytics.google.com](https://analytics.google.com).

## Open TODOs
- Substack: footer links to casamkali.substack.com — needs content
