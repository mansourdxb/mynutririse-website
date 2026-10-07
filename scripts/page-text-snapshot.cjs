// Snapshots the visible text (title, meta description, header, main, footer)
// of every built page, so a refactor can be proven not to change content.
// Usage: node scripts/page-text-snapshot.cjs <out.json> [lang-prefix]
const fs = require("fs");
const path = require("path");

const dir = path.resolve(".next/server/app");
const prefix = process.argv[3] || "";
const walk = (d) =>
  fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith(".html") ? [path.join(d, e.name)] : []);

const text = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<!-- -->/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const out = {};
// A language's home page is written next to its folder (en.html), not inside it.
const files = walk(path.join(dir, prefix)).map((f) => [f, path.relative(path.join(dir, prefix), f).replace(/\\/g, "/")]);
if (prefix && fs.existsSync(path.join(dir, `${prefix}.html`))) files.push([path.join(dir, `${prefix}.html`), "index.html"]);
for (const [f, rel] of files) {
  if (/_not-found|_global/.test(rel)) continue;
  const html = fs.readFileSync(f, "utf8");
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  const body = (html.match(/<body[\s\S]*<\/body>/) || [""])[0];
  out[rel] = { title: text(title), desc: text(desc), body: text(body) };
}
fs.writeFileSync(process.argv[2], JSON.stringify(out, null, 1));
console.log(`snapshot: ${Object.keys(out).length} pages -> ${process.argv[2]}`);
