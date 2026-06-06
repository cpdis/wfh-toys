import { amazonTag, resources, sections, updatedLabel } from "../data/gear.mjs";
import { writeFile } from "node:fs/promises";

const site = {
  title: "WFH Toys - Current Gear For Working From Home",
  description:
    "Current work-from-home equipment picks for better video, audio, desks, lighting, docks, and network reliability.",
  url: "https://wfh.toys",
};

const accentClasses = {
  amber: "bg-yellow-100 text-yellow-900 border-yellow-300",
  pink: "bg-pink-100 text-pink-900 border-pink-300",
  red: "bg-red-100 text-red-900 border-red-300",
  teal: "bg-teal-100 text-teal-900 border-teal-300",
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const attr = escapeHtml;

// Amazon affiliate links should be identified as sponsored while direct source links stay ordinary external links.
const externalAttrs = (href) => {
  const rel = href.includes("www.amazon.com")
    ? "sponsored noopener noreferrer"
    : "noopener noreferrer";

  return `target="_blank" rel="${rel}"`;
};

const nav = () => `
  <nav class="site-nav">
    <a class="site-mark" href="#top" aria-label="WFH Toys home">WFH Toys</a>
    <div class="site-nav-links">
      ${sections
        .map(
          (section) =>
            `<a href="#${attr(section.id)}">${escapeHtml(section.navLabel)}</a>`,
        )
        .join("\n      ")}
      <a href="#resources">Resources</a>
    </div>
  </nav>`;

const card = (item, accent) => `
  <article class="product-card">
    <a class="product-image-frame" href="${attr(item.href)}" ${externalAttrs(item.href)} aria-label="${attr(item.name)}">
      <img class="product-image" src="${attr(item.image)}" alt="${attr(item.imageAlt)}" loading="lazy" />
    </a>
    <div class="product-body">
      <div class="product-meta">
        <span class="product-badge ${accentClasses[accent]}">${escapeHtml(item.badge)}</span>
        <a class="source-link" href="${attr(item.sourceUrl)}" ${externalAttrs(item.sourceUrl)}>Source: ${escapeHtml(item.sourceName)}</a>
      </div>
      <h3>${escapeHtml(item.name)}</h3>
      <p>${escapeHtml(item.description)}</p>
      <a class="product-link" href="${attr(item.href)}" ${externalAttrs(item.href)}>${escapeHtml(item.linkLabel)}</a>
    </div>
  </article>`;

const section = (entry) => `
  <section class="catalog-section" id="${attr(entry.id)}">
    <div class="section-heading">
      <p class="eyebrow">${escapeHtml(entry.eyebrow)}</p>
      <h2>${escapeHtml(entry.title)}</h2>
      <p>${escapeHtml(entry.summary)}</p>
    </div>
    <div class="product-grid">
      ${entry.items.map((item) => card(item, entry.accent)).join("\n      ")}
    </div>
  </section>`;

const resourceList = () => `
  <section class="catalog-section" id="resources">
    <div class="section-heading">
      <p class="eyebrow">Research trail</p>
      <h2>Why these picks made the refresh.</h2>
      <p>Official product pages anchor specs. Independent reviews and buying guides keep the list from becoming pure manufacturer karaoke.</p>
    </div>
    <div class="resource-list">
      ${resources
        .map(
          (resource) => `
      <a class="resource-row" href="${attr(resource.href)}" ${externalAttrs(resource.href)}>
        <span class="resource-type">${escapeHtml(resource.type)}</span>
        <span class="resource-copy">
          <strong>${escapeHtml(resource.title)}</strong>
          <span>${escapeHtml(resource.description)}</span>
        </span>
      </a>`,
        )
        .join("\n")}
    </div>
  </section>`;

const html = `<!DOCTYPE html>
<html lang="en" id="top">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Colin Dismuke" />
    <meta name="description" content="${attr(site.description)}" />
    <meta property="og:title" content="${attr(site.title)}" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="${attr(site.description)}" />
    <meta property="og:url" content="${attr(site.url)}" />
    <meta property="og:site_name" content="WFH Toys" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@cpdis" />
    <meta name="twitter:title" content="${attr(site.title)}" />
    <meta name="twitter:description" content="${attr(site.description)}" />
    <link rel="canonical" href="${attr(site.url)}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700;9..144,900&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <link href="styles/output.css" type="text/css" rel="stylesheet" />
    <link rel="icon" type="image/png" href="favicon.png" />

    <title>${escapeHtml(site.title)}</title>
  </head>
  <body>
    ${nav()}
    <main class="page-shell">
      <header class="hero">
        <p class="eyebrow">Updated ${escapeHtml(updatedLabel)}</p>
        <h1>WFH Toys</h1>
        <p class="hero-copy">
          Current work-from-home gear for looking clear, sounding normal, and making the desk stop fighting back.
        </p>
        <p class="affiliate-note">
          Amazon links use tracking ID <strong>${escapeHtml(amazonTag)}</strong>. As an Amazon Associate, Colin earns from qualifying purchases.
        </p>
      </header>
      ${sections.map(section).join("\n")}
      ${resourceList()}
    </main>
    <footer class="site-footer">
      <p>As an Amazon Associate, Colin earns from qualifying purchases. Maker links are direct unless marked otherwise.</p>
      <p>Built with Tailwind CSS, static HTML, and enough restraint to avoid publishing 2020 webcam panic forever.</p>
    </footer>
  </body>
</html>
`;

await writeFile("index.html", html.replace(/[ \t]+$/gm, ""));
