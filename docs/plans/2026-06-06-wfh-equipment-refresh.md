---
title: WFH equipment refresh
created: 2026-06-06
status: completed
---

# WFH Equipment Refresh

## Problem

The existing page is a static 2020-era catalog with many hard-coded prices, old `amzn.to` links, discontinued software, and a DSLR-heavy default story. Colin wants the repo learned first, then updated with current work-from-home equipment and the Amazon associate tracking ID from the screenshot: `heismukamily-20`.

## Scope

- Refresh hardware recommendations around 2026 work-from-home norms.
- Prefer official product pages and current review guides for selection evidence.
- Keep the deployed site static.
- Replace stale Amazon prices with tagged Amazon links that do not promise current pricing.
- Add enough build documentation that future product refreshes are data edits, not markup spelunking.

## Decisions

- Generate `index.html` from `data/gear.mjs` using `scripts/build-site.mjs`.
- Use Amazon search links with `tag=heismukamily-20` for Amazon destinations, avoiding brittle short links and stale product-specific prices.
- Keep product manufacturer source links visible on cards for traceability.
- Treat software/resources as supporting content because this refresh is equipment-focused.
- Drop the old Fathom script because `https://shrew.colindismuke.com/script.js` returns 404 during local browser verification.

## Verification

- `npm run build`
- Confirm generated Amazon links include `tag=heismukamily-20`.
- Serve locally and inspect desktop and mobile rendering.
- Check the working tree for accidental `.DS_Store` staging.

## Outcome

- Replaced the hand-maintained catalog page with generated static HTML.
- Added 15 current WFH equipment picks across video, audio, desk, infrastructure, and resources.
- Added `data/gear.mjs` as the single product-editing surface.
- Added `scripts/build-site.mjs` and `npm run build` to regenerate the page and CSS.
- Added a Vercel `public/` build artifact step so production serves only deployable static files.
- Removed the obsolete Tailwind/PostCSS dependency chain after the generated catalog no longer needed it.
- Verified Amazon shopping links carry `tag=heismukamily-20`.
- Verified desktop and mobile rendering with Playwright: no broken images, failed requests, console errors, or horizontal overflow.
