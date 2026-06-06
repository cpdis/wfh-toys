# WFH Toys

WFH Toys is a static catalog of current work-from-home equipment: webcams, microphones, headsets, desk gear, lighting, docks, and network hardware.

The site is generated from a small data file so product refreshes do not require hand-editing a giant HTML document.

## Project Structure

- `data/gear.mjs` contains product sections, source links, images, and Amazon shopping links.
- `scripts/build-site.mjs` renders `index.html` from the gear data.
- `styles/styles.css` is the Tailwind input plus project CSS.
- `styles/output.css` is the generated stylesheet used by the static page.
- `assets/img/` contains legacy local product images still used by some cards.

## Affiliate Links

Amazon links are generated with tracking ID `heismukamily-20`.

The data file intentionally avoids hard-coded Amazon prices. Amazon inventory and pricing change constantly, so buttons use labels like `View on Amazon` or `Search Amazon` instead of stale price copy.

## Install

```bash
npm install
```

## Build

```bash
npm run build
```

This regenerates `index.html` first, then rebuilds `styles/output.css`.

## Run Locally

The site is static. Any local static server works:

```bash
python3 -m http.server 4173
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

- If styles look missing, rebuild with `npm run build:css`.
- If the page content does not match `data/gear.mjs`, run `npm run build:site`.
- If an external product image fails, replace it with a stable manufacturer asset or a local file in `assets/img/`.
