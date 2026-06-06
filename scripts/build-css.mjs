import { readFile, writeFile } from "node:fs/promises";

const css = await readFile("styles/styles.css", "utf8");

await writeFile("styles/output.css", css.replace(/[ \t]+$/gm, ""));
