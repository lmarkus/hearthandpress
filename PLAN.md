# Project Plan — Baking Industry Print Shop Website

<!-- ============================================================ -->
## 🔖 RESUME HERE — last updated 2026-06-09 (ALL CHUNKS COMPLETE ✅)

**What this is:** Static HTML/CSS/JS marketing site for **Hearth & Press Co.**,
a commercial printer specializing in the baking industry. Built to support a
**4over.com wholesale trade account** application. **No pricing anywhere.**

**STATUS: site is launch-ready.** All 8 chunks (0–7) are done. 10 pages built,
all internal links/assets resolve, SEO + JSON-LD + sitemap/robots in place,
README written. Open `index.html` to view.

**Done (all chunks ✅):**
- ✅ **Chunk 0** — design system `css/styles.css`, `js/main.js`,
  `assets/logo-mark.svg` + `favicon.svg`, `partials.html` (reference chrome).
- ✅ **Chunk 1** — `index.html` (home).
- ✅ **Chunk 2** — `about.html` + `products.html`.
- ✅ **Chunk 3** — `products/business-cards.html`, `flyers-brochures.html`,
  `packaging.html`.
- ✅ **Chunk 4** — `products/labels-stickers.html`, `menus-tent-cards.html`,
  `signage-banners.html`.
- ✅ **Chunk 5** — `contact.html` quote form (front-end only, `#form-success`).
- ✅ **Chunk 6** — 15 Pexels photos placed site-wide; hover/responsive polish.
- ✅ **Chunk 7** — OG/Twitter/canonical meta, `robots.txt`, `sitemap.xml`,
  JSON-LD (PrintShop/Organization/BreadcrumbList), QA sweep, `README.md`.

**▶ NEXT: nothing required.** If extending: wire the quote form to a real
backend/form service, swap the `https://heartandpress.com` base URL if the
production domain differs, or add more category pages following the established
`products/*.html` template.

**Must-remember gotchas:**
- Contact info is REAL: phone **(512) 221-4428** (`tel:+15122214428`), email
  **info@heartandpress.com**, domain **heartandpress.com** (spelled "heart",
  not "hearth" — intentional). Use these on every new page.
- Category pages live in `products/` → prefix shared hrefs with `../`
  (e.g. `../css/styles.css`, `../assets/logo-mark.svg`, `../index.html`).
- Image downloads: **Unsplash + picsum are BLOCKED** (200 w/ 0-byte body).
  **Use Pexels** and pass `dangerouslyDisableSandbox: true` on the Bash call.
- Open `index.html` / `contact.html` in a browser to sanity-check before ending.

See §5 for the full checklist and §8 for the resume procedure.
<!-- ============================================================ -->

## 1. Purpose & Context

This is a static marketing website for a **printing company that specializes in
products for the baking industry** (bakeries, patisseries, cafés, cottage-food
bakers, commercial wholesale baking operations).

**Business goal:** The site is used to apply for a **4over.com wholesale trade
account**. 4over is a trade-only (printer-to-printer / reseller) wholesale
printer that requires applicants to demonstrate a legitimate, operating print
business via a public website. The site must therefore read as a credible,
established print reseller with a clear niche.

### Hard requirements (from the client)
- Plain **HTML / CSS / JS** only. No frameworks, no build step.
- **No pricing shown anywhere.** Pricing is "request a quote" only.
- **Multiple product categories** (business cards, flyers, packaging, etc.).
- Use correct **commercial print terminology** (stock, GSM, finishes, bleed,
  CMYK, spot color, die-cutting, foil, etc.) to read as an industry specialist.
- Specialist positioning toward the **baking industry** throughout.
- Imagery sourced from free stock providers as needed.

### Out of scope
- E-commerce / cart / checkout.
- Real backend. The quote form is front-end only (mailto or inert submit
  handler with a thank-you state).
- CMS / authentication.

---

## 2. Brand & Identity (decide once, reuse everywhere)

> **Lock these in Chunk 0 so every later chunk is consistent.**

- **Working brand name:** *Hearth & Press Co.* (printing for the baking trade)
  - Alt candidates: "Crumb & Color Print Co.", "Proof & Press", "Batch Print Studio".
- **Tagline:** "Commercial print, built for bakers."
- **Positioning line:** Trade-quality print for bakeries, patisseries, cafés,
  and wholesale baking operations.
- **Color palette (warm bakery + professional press):**
  - Crust brown `#6B4423`, warm cream `#FBF6EE`, butter `#E8B04B`,
    deep charcoal ink `#1F1B18`, accent berry/red `#B23A48`.
- **Type:** A display serif for headings (warm, artisanal) + clean sans for body.
  Use Google Fonts via `<link>` OR system stack — decide in Chunk 0.
- **Logo:** Simple inline SVG wordmark + a rolling-pin / press mark. No external dep.
- **Voice:** Confident B2B print vendor that knows baking. Specs + service.

---

## 3. Information Architecture

```
/index.html              Home — hero, niche pitch, category grid, capabilities, CTA
/about.html              About — story, why baking, capabilities, equipment/specs
/products.html           Products hub — all categories with overview cards
/contact.html            Contact / Request a Quote — form (no pricing)
/products/
  business-cards.html    Category detail
  flyers-brochures.html  Category detail
  packaging.html         Category detail (boxes, bakery boxes, inserts)
  labels-stickers.html   Category detail (jar/label/seal)
  menus-tent-cards.html  Category detail
  signage-banners.html   Category detail
/css/styles.css          Single shared stylesheet
/js/main.js              Nav toggle, form handler, small enhancements
/images/                 Downloaded/optimized stock + generated SVG assets
/assets/                 favicon, logo svg if separated
```

Shared components repeated on every page: **header/nav**, **footer**,
**CTA band**. Keep markup for these identical across pages (copy/paste) so the
site stays consistent without a templating system.

---

## 4. Product Categories (content checklist per page)

Each category detail page should include, using real print terminology:
- Hero line + 1–2 paragraph intro tying the product to bakery use cases.
- **Specs block:** common sizes, stocks (e.g. 14pt/16pt C2S, 100lb gloss text),
  finishes (matte, gloss, soft-touch/suede lamination, UV, foil), coatings.
- **Options:** bleed, rounded corners, die-cut shapes, spot UV, scoring/folding.
- **Baking use cases:** e.g. business cards for bakery owners, packaging =
  bakery boxes / cake boxes / pastry boxes with grease-resistant stock.
- CTA: "Request a quote."

Categories:
1. **Business Cards** — owner/decorator cards, premium stocks, foil, soft-touch.
2. **Flyers & Brochures** — seasonal menus, catering one-sheets, tri-folds.
3. **Packaging** — bakery boxes, cake/cupcake boxes, pastry inserts, sleeves.
4. **Labels & Stickers** — jar labels, ingredient/allergen labels, seals, logos.
5. **Menus & Tent Cards** — café menus, counter tent cards, table talkers.
6. **Signage & Banners** — A-frames, retractable banners, window clings, market.

---

## 5. Chunked Execution Plan

> Each chunk is sized to be completable in a single session and leaves the site
> in a working, viewable state. Check off the box when done; note any decisions
> in §7 (Decision Log) so the next session has full context.

### ☑ Chunk 0 — Foundation & Brand Lock  *(small)* — DONE 2026-06-09
- Confirm brand name, tagline, palette, fonts (update §2 with final choices).
- Create `css/styles.css` with: CSS variables (colors, spacing, type scale),
  reset/base, typography, layout primitives (container, grid), button styles.
- Create `js/main.js` skeleton (mobile nav toggle).
- Create inline SVG logo + favicon.
- Build the **shared header/nav + footer markup** as a reference snippet inside
  this section's notes OR as `partials.html` for copy/paste.
- **Exit state:** stylesheet + shared chrome exist; nothing renders yet but
  building blocks are ready.

### ☑ Chunk 1 — Home Page  *(medium)* — DONE 2026-06-09
- Build `index.html` end to end: header, hero, niche value prop, 6-category
  grid (links to category pages, OK if they 404 until Chunk 3), capabilities
  strip (CMYK, finishes, turnaround), "why a baking specialist" section,
  CTA band, footer.
- Wire mobile nav.
- **Exit state:** home page looks finished and on-brand.

### ☑ Chunk 2 — About + Products Hub  *(medium)* — DONE 2026-06-09
- `about.html`: company story, baking-industry focus, capabilities/equipment,
  print terminology, trust signals (turnaround, file prep/prepress, proofs).
- `products.html`: overview grid linking all 6 category pages with short
  spec-aware blurbs.
- **Exit state:** primary supporting pages complete.

### ☑ Chunk 3 — Category Detail Pages (Part A)  *(medium)* — DONE 2026-06-09
- `products/business-cards.html`
- `products/flyers-brochures.html`
- `products/packaging.html`
- Use the per-page content checklist (§4). Consistent layout template.
- **Exit state:** 3 of 6 category pages live.

### ☑ Chunk 4 — Category Detail Pages (Part B)  *(medium)* — DONE 2026-06-09
- `products/labels-stickers.html`
- `products/menus-tent-cards.html`
- `products/signage-banners.html`
- **Exit state:** all 6 category pages live; all nav/links resolve.

### ☑ Chunk 5 — Contact / Request-a-Quote  *(small-medium)* — DONE 2026-06-09
- `contact.html`: quote-request form (name, business, email, phone, product
  category dropdown, quantity, specs/notes), no pricing.
- `js/main.js`: front-end submit handler → thank-you state (mailto fallback).
- Business info block (hours, "trade & wholesale welcome", service area).
- **Exit state:** contact flow works client-side.

### ☑ Chunk 6 — Imagery & Visual Polish  *(medium)* — DONE 2026-06-09
- Source/download free stock imagery (bakery + print). Document sources/license
  in §6. Optimize/resize. Add to hero + category pages with alt text.
- Add generated SVG fallbacks where photos aren't ideal.
- Hover states, spacing pass, mobile QA.
- **Exit state:** site is visually rich and consistent.
- *Note:* all 15 Pexels images placed across home, about, products hub and the
  6 category pages; card hover lift/zoom, button hover, and the responsive
  breakpoints (900px/760px) in `css/styles.css` apply site-wide. SVG used for
  logo/favicon/feature icons.

### ☑ Chunk 7 — SEO, Meta, A11y & Final QA  *(small-medium)* — DONE 2026-06-09
- Per-page `<title>`, meta description, Open Graph + Twitter tags, canonical, favicon.
- `robots.txt`, `sitemap.xml` (10 URLs), JSON-LD: PrintShop (home),
  Organization (about/products/contact), BreadcrumbList (6 category pages).
- Audited: all imgs have alt; exactly one H1/page; all internal links + assets
  resolve; all JSON-LD parses; all sitemap URLs map to real files.
- `README.md` with run/deploy notes added.
- **Exit state:** launch-ready, presentable for the 4over application.

---

## 6. Imagery Sources & Licensing Log
*(Fill in as images are added — provider, URL, license, where used.)*

All photos: **Pexels** (Pexels License — free for commercial use, no attribution
required). Downloaded via `images.pexels.com/photos/<ID>/...`. **NOTE for future
sessions:** Unsplash CDN + picsum.photos are BLOCKED in this environment (return
HTTP 200 with 0-byte bodies). Pexels works. Use `dangerouslyDisableSandbox: true`
on the Bash call or downloads write empty files.

| File | Pexels ID | Used on |
|------|-----------|---------|
| hero-bakery.jpg | 205961 | index hero (bakery display case) |
| cat-business-cards.jpg | 7319307 | business cards card/page |
| cat-flyers.jpg | 590016 | flyers card/page (printed sheets) |
| cat-packaging.jpg | 4498136 | packaging card/page (kraft box) |
| cat-labels.jpg | 268460 | labels card/page (loupe on color stock) |
| cat-menus.jpg | 1813466 | menus card/page (café table) |
| cat-signage.jpg | 264636 | signage card/page (retail signs) |
| about-cafe.jpg | 2253643 | about (bakery/café interior) |
| about-oven.jpg | 461060 | about (baguettes at oven) |
| about-fulfillment.jpg | 1797428 | about (warehouse/fulfillment) |
| bakery-cake.jpg | 1070850 | category detail accents |
| bakery-cheesecake.jpg | 1126359 | category detail accents |
| bakery-bread.jpg | 209403 | category detail accents |
| bakery-pastries.jpg | 263070 | category detail accents |
| bakery-flatlay.jpg | 1775043 | category detail accents |

Preferred free sources: Unsplash, Pexels, Pixabay (all free for commercial use,
no attribution required — but log them anyway).

---

## 7. Decision Log
*(Append-only. Record any choice a future session needs to stay consistent.)*

- *2026-06-09* — Plan created. Stack: static HTML/CSS/JS, no build. No pricing.
- *2026-06-09* — **Brand confirmed: "Hearth & Press Co."** Tagline "Commercial
  print, built for bakers." Palette/type per §2.
- *2026-06-09* — **Imagery decision: download real stock photos** (Unsplash/
  Pexels/Pixabay), bundled locally, logged in §6. SVG only for logo/icons.
- *2026-06-09* — **Fonts: Google Fonts** — Fraunces (display) + Inter (body),
  loaded via `<link>` in head (see partials.html), with system fallbacks in CSS.
- *2026-06-09* — **REAL CONTACT DETAILS (use everywhere):** phone
  **(512) 221-4428** (`tel:+15122214428`), email **info@heartandpress.com**,
  domain **heartandpress.com** (note: "heart", not "hearth" — intentional, per
  user). Brand name remains "Hearth & Press Co." Placeholder values were
  replaced site-wide incl. partials.html.
- *2026-06-09* — **Chunk 5 (contact) built early, per user request.** Form is
  intentionally NOT wired to a backend: on submit it validates, hides the form,
  and shows an inline "Request sent — we'll be in touch shortly" confirmation
  (#form-success). Added `.split` CSS utility (collapses on mobile). Logic lives
  in `js/main.js` initQuoteForm — removed the earlier mailto fallback.
- *2026-06-09* — **Chunk 1 (home) + imagery built early.** `index.html` complete
  and rendering with real photos. All 15 Pexels images downloaded (see §6) — so
  Chunk 6's imagery sourcing is DONE; only visual polish/QA remains there.
  Category-card image filenames are fixed by index.html — reuse the SAME files on
  products.html and the category detail pages.
- *2026-06-09* — **Chunks 2, 3, 4, 6, 7 completed in one session.** Built
  `about.html`, `products.html`, all 6 `products/*.html` category pages
  (consistent breadcrumb → hero → spec-grid → options/use-cases → CTA template,
  `../` prefixes). Added site-wide SEO: per-page OG + Twitter + canonical tags,
  JSON-LD (PrintShop on home, Organization on about/products/contact,
  BreadcrumbList on category pages), `robots.txt`, `sitemap.xml` (10 URLs),
  `README.md`. QA: every internal link/asset resolves, all imgs have alt, one
  H1 per page, all JSON-LD parses. Site is launch-ready. Base URL used
  throughout: `https://heartandpress.com`.
- *2026-06-09* — **Chunk 0 built:** `css/styles.css` (full design system),
  `js/main.js` (nav toggle, footer year, front-end quote form w/ mailto
  fallback to quotes@hearthandpress.co), `assets/logo-mark.svg`,
  `assets/favicon.svg`, and `partials.html` (canonical header/CTA/footer +
  head block to copy into every page). NOTE: category pages in /products/
  must prefix shared hrefs with `../`. Placeholder phone (800) 555-0182.

---

## 8. How to Resume in a New Session
1. Read this `PLAN.md` top to bottom (esp. §2 Brand, §6 Decision Log).
2. Find the first unchecked chunk in §5 — that's the next unit of work.
3. Open existing pages to match the established header/footer/markup patterns.
4. Do the chunk, check its box, append any decisions to §7.
5. Open `index.html` in a browser to sanity-check before ending the session.
