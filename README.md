# casa mkali — website

Live site: **https://casamkali.com** (GitHub Pages; every push to main deploys in ~1 min)

Shared working repo for the Casa Mkali site (Nikki + Natasha). Every push to `main`
auto-deploys the live preview via GitHub Pages (~1 minute).

## Structure
- `site/` — the website pages (static HTML/CSS/JS, no build step)
  - `cm-site.css` — the brand system (ink `#0E0E0E` / flame `#FC4B2E` / bone `#F1EFE8`, Helvetica Neue + Jost)
  - `cm-site.js` — injects the shared header/footer on every page + behaviors (nav, cycle word, reveals)
  - pages: `index` · `n-n` · `natasha` · `nikki` · `the-lab` · `the-team` · `ai-services` · `projects` · `work-with-us`
- `uploads/` — photography (B&W treatment applied in CSS, files are color)
- `index.html` (root) — redirect to `site/`

Design source of truth for look & feel: the "Casa Mkali Design System" project on claude.ai/design.

## Working on it
1. `git pull` before you start (someone else may have pushed)
2. Edit, then preview locally: `npx serve . -l 4173` → open http://localhost:4173/
3. `git add -A && git commit -m "..." && git push` → live link updates itself

## Open TODOs
- Calendly embed on `work-with-us.html` (placeholder box)
- Lab rates on `the-lab.html` (all `$[X]`)
- Nikki bio: custom SaaS credential line (`[TODO]` in `nikki.html`)
- Team portraits (`the-team.html`) and project imagery (`projects.html`)
- Social links in footer (`cm-site.js`, currently `#`)
- Real domain + production hosting when ready
