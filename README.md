# Heart & Press Co. — Website

Static marketing website for **Heart & Press Co.**, a commercial printer
specializing in the **baking industry** (bakeries, patisseries, cafés and
wholesale baking operations). Built to support a **4over.com wholesale trade
account** application.

Tagline: *Commercial print, built for bakers.*

## Tech

- Plain **HTML / CSS / JS** — no frameworks, no build step.
- One shared stylesheet (`css/styles.css`) and one progressive-enhancement
  script (`js/main.js`).
- Google Fonts (Fraunces + Inter) loaded via `<link>`, with system fallbacks.
- All imagery is bundled locally under `images/` (Pexels License — free for
  commercial use). No pricing is shown anywhere; quoting is "request a quote".

## Structure

```
index.html               Home
about.html               About / capabilities
products.html            Products hub
contact.html             Request-a-Quote form (front-end only)
products/
  business-cards.html
  flyers-brochures.html
  packaging.html
  labels-stickers.html
  menus-tent-cards.html
  signage-banners.html
css/styles.css           Design system + all page styles
js/main.js               Mobile nav, footer year, quote-form handler
assets/                  logo-mark.svg, favicon.svg
images/                  Bundled stock photography
robots.txt, sitemap.xml  SEO
partials.html            NOT served — reference copy of shared header/footer/CTA
```

## Run locally

It's a static site — open `index.html` directly, or serve the folder:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000/
```

Any static file server works (e.g. `npx serve`).

## Deploy

Upload the repository root to any static host (Netlify, Cloudflare Pages,
GitHub Pages, S3 + CloudFront, or a plain Apache/Nginx docroot). No build
step or server runtime is required.

Before going live, update the canonical/Open Graph/sitemap base URL
(`https://heartandpress.com`) if the production domain differs.

## Notes

- **Contact details are real and used site-wide:** phone (512) 221-4428,
  email info@heartandpress.com, domain heartandpress.com. Brand name and
  domain both use "Heart" (e.g. "Heart & Press Co.").
- The quote form (`contact.html`) is **front-end only**: it validates, hides
  the form and shows an inline confirmation. There is no backend; wire
  `initQuoteForm` in `js/main.js` to an endpoint or form service to collect
  submissions.
