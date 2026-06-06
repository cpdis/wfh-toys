---
title: Generate static affiliate catalogs from product data
date: 2026-06-06
category: docs/solutions/tooling-decisions
module: static catalog
problem_type: tooling_decision
component: tooling
severity: medium
applies_when:
  - A static product catalog has many repeated cards, affiliate links, and source URLs
  - Product data changes more often than the page structure
  - SEO still benefits from generated static HTML instead of client-rendered cards
tags: [static-site, affiliate-links, generated-html, product-catalog, amazon-associates]
---

# Generate static affiliate catalogs from product data

## Context

The original WFH Toys page had one large hand-edited `index.html` with repeated card markup, hard-coded prices, stale short Amazon links, and old product availability notes. Refreshing the gear list safely required changing content, links, compliance copy, and layout without making every future update a 3,000-line diff hunt.

## Guidance

Keep the deployed page static, but generate it from a small product data module.

- Put products, source URLs, images, and shopping links in `data/gear.mjs`.
- Use a generator such as `scripts/build-site.mjs` to render `index.html`.
- Copy the built static assets into a dedicated deploy directory such as `public/`.
- Keep the CSS build dependency-free when the catalog only needs project CSS.
- Generate Amazon links through one helper that always appends the configured associate tag.
- Avoid hard-coded prices unless they come from a compliant live source.
- Keep manufacturer or review source links visible so future editors know why a product is present.
- Strip trailing whitespace in the generator output so generated HTML passes `git diff --check`.

## Why This Matters

Static HTML keeps hosting simple and crawlable. A data file keeps product refreshes sane. The affiliate helper prevents a mix of old short links, missing tags, and accidental untracked Amazon URLs. Removing prices avoids publishing stale or non-compliant pricing text.

A dedicated deploy directory keeps Vercel from serving source files, docs, or build scripts when the source repo root is also the editing workspace.

Removing unused CSS tooling keeps the production build compatible with current Node versions and avoids installing stale transitive dependencies for a static page.

## When to Apply

- A page is mostly repeated product or resource cards.
- Product links need affiliate tracking consistency.
- Source attribution matters for future refreshes.
- The project does not need a client-side app just to render a catalog.

## Examples

Use the Amazon helper in `data/gear.mjs`:

```js
const amazon = (query) =>
  `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${amazonTag}`;
```

Then keep card data boring:

```js
{
  name: "Logitech MX Brio 4K",
  href: amazon("Logitech MX Brio 4K webcam"),
  sourceName: "Logitech",
  sourceUrl: "https://www.logitech.com/en-us/products/webcams/mx-brio.html",
}
```

Regenerate the site with:

```bash
npm run build
```

## Related

- `docs/plans/2026-06-06-wfh-equipment-refresh.md`
- `data/gear.mjs`
- `scripts/build-site.mjs`
