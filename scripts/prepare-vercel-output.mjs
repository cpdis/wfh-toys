import { copyFile, cp, mkdir, rm } from "node:fs/promises";

const outputDir = "public";

await rm(outputDir, { force: true, recursive: true });
await mkdir(`${outputDir}/styles`, { recursive: true });

await copyFile("index.html", `${outputDir}/index.html`);
await copyFile("favicon.png", `${outputDir}/favicon.png`);
await copyFile("robots.txt", `${outputDir}/robots.txt`);
await copyFile("sitemap.xml", `${outputDir}/sitemap.xml`);
await copyFile("styles/output.css", `${outputDir}/styles/output.css`);
await cp("assets", `${outputDir}/assets`, {
  filter: (source) => !source.endsWith(".DS_Store"),
  recursive: true,
});
