# WFH Toys

WFH Toys is a static catalog of current work-from-home equipment: webcams, microphones, headsets, desk gear, lighting, docks, and network hardware.

The site is generated from a small data file so product refreshes do not require hand-editing a giant HTML document.

## Project Structure

- `data/gear.mjs` contains product sections, source links, images, and Amazon shopping links.
- `scripts/build-site.mjs` renders `index.html` from the gear data.
- `styles/styles.css` is the source stylesheet copied into the generated static output.
- `styles/output.css` is the generated stylesheet used by the static page.
- `assets/img/` contains legacy local product images still used by some cards.

## Affiliate Links

Amazon links are generated with tracking ID `heismukamily-20`.

The data file intentionally avoids hard-coded Amazon prices. Amazon inventory and pricing change constantly, so buttons use labels like `View on Amazon` or `Search Amazon` instead of stale price copy.

## Install

Use Node.js 24.x. Vercel also reads this from `package.json` so production builds do not fall back to an old project-level runtime.

```bash
npm install
```

## Build

```bash
npm run build
```

This regenerates `index.html`, rebuilds `styles/output.css`, then copies the deployable site into `public/` for Vercel.

## Run Locally

The site is static. After building, serve the same `public/` directory Vercel uses:

```bash
python3 -m http.server 4173 --directory public
```

Then open `http://localhost:4173`.

## Updating Gear

1. Edit `data/gear.mjs`.
2. Prefer official product pages for `sourceUrl`.
3. Use Amazon links through the `amazon("search terms")` helper.
4. Avoid exact prices unless they are pulled from a compliant live source.
5. Run `npm run build`.
6. Inspect the rendered page at desktop and mobile widths.

## Debugging

- If styles look missing, rebuild with `npm run build:css`, then `npm run build:public`.
- If the page content does not match `data/gear.mjs`, run `npm run build:site`.
- If production deploys with missing files, run `npm run build` locally and inspect `public/`.
- If an external product image fails, replace it with a stable manufacturer asset or a local file in `assets/img/`.
