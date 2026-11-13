#!/usr/bin/env node
/**
 * SEO verification for a running production build.
 *
 *   npm run build && npx next start -p 3100 &
 *   node scripts/verify-seo.mjs [--base http://localhost:3100]
 *
 * Crawls every URL in /sitemap.xml (fetched from the local server, URLs mapped
 * from the production origin to --base) and checks each page for: status 200,
 * exactly one <h1>, title <= 60 chars, description 120-160 chars, a
 * self-referencing canonical, a hreflang set that matches the sitemap's
 * alternates (plus x-default), og:url = canonical, <html lang>/dir, valid
 * JSON-LD, no "webp-0"-style strings, and no internal links to non-200 pages.
 * Prints a Markdown table and exits 1 on any failure.
 */

const SITE = "https://www.mynutririse.com";
const argBase = process.argv.indexOf("--base");
const BASE = (argBase > -1 ? process.argv[argBase + 1] : "http://localhost:3100").replace(/\/$/, "");
const RTL = new Set(["ar"]);

const decode = (s) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`, "i"));
  return m ? decode(m[1]) : undefined;
};

const tags = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, "gi")) ?? [];

const toLocal = (url) => url.replace(SITE, BASE);

async function get(url) {
  const res = await fetch(url, { redirect: "manual" });
  return { status: res.status, text: res.status === 200 ? await res.text() : "" };
}

async function main() {
  const sitemap = await get(`${BASE}/sitemap.xml`);
  if (sitemap.status !== 200) throw new Error(`sitemap.xml: HTTP ${sitemap.status}`);

  // url -> { hreflang: href } from the sitemap's xhtml:link alternates.
  const entries = [];
  for (const block of sitemap.text.match(/<url>[\s\S]*?<\/url>/g) ?? []) {
    const loc = decode(block.match(/<loc>([^<]+)<\/loc>/)[1]);
    const alternates = {};
    for (const link of block.match(/<xhtml:link\b[^>]*>/g) ?? []) {
      alternates[attr(link, "hreflang")] = attr(link, "href");
    }
    entries.push({ loc, alternates });
  }

  const linkStatus = new Map(); // internal path -> status
  const rows = [];

  for (const { loc, alternates } of entries) {
    const fails = [];
    const { status, text: html } = await get(toLocal(loc));
    const row = { url: loc.replace(SITE, "") || "/", status, h1: "-", title: "-", desc: "-", ld: "-", fails };
    rows.push(row);
    if (status !== 200) {
      fails.push(`status ${status}`);
      continue;
    }
    const head = html.slice(0, html.indexOf("</head>") + 7);

    // <html lang dir>
    const htmlTag = tags(html, "html")[0] ?? "";
    const lang = attr(htmlTag, "lang");
    const expectedLang = Object.entries(alternates).find(([, href]) => href === loc)?.[0];
    if (!expectedLang) fails.push("url missing from its own sitemap alternates");
    else if (lang !== expectedLang) fails.push(`html lang=${lang}, expected ${expectedLang}`);
    const expectedDir = RTL.has(lang) ? "rtl" : "ltr";
    if (attr(htmlTag, "dir") !== expectedDir) fails.push(`dir=${attr(htmlTag, "dir")}`);

    // Exactly one H1.
    const h1 = (html.match(/<h1\b/gi) ?? []).length;
    row.h1 = h1;
    if (h1 !== 1) fails.push(`${h1} h1`);

    // Title and description.
    const titles = head.match(/<title>([\s\S]*?)<\/title>/g) ?? [];
    const title = titles.length ? decode(titles[0].replace(/<\/?title>/g, "")) : "";
    row.title = [...title].length;
    if (titles.length !== 1) fails.push(`${titles.length} titles`);
    if (row.title > 60) fails.push(`title ${row.title} chars`);
    const metas = tags(head, "meta");
    const meta = (key, val) => metas.filter((m) => attr(m, key) === val).map((m) => attr(m, "content"));
    const descs = meta("name", "description");
    row.desc = descs.length ? [...descs[0]].length : 0;
    if (descs.length !== 1) fails.push(`${descs.length} descriptions`);
    else if (row.desc < 120 || row.desc > 160) fails.push(`description ${row.desc} chars`);

    // Canonical and hreflang.
    const links = tags(head, "link");
    const canon = links.filter((l) => attr(l, "rel") === "canonical").map((l) => attr(l, "href"));
    if (canon.length !== 1 || canon[0] !== loc) fails.push(`canonical ${canon.join(",") || "missing"}`);
    const hreflang = {};
    for (const l of links.filter((l) => attr(l, "rel") === "alternate" && attr(l, "hreflang"))) {
      hreflang[attr(l, "hreflang")] = attr(l, "href");
    }
    if (!hreflang["x-default"]) fails.push("no x-default");
    const want = JSON.stringify(Object.entries(alternates).sort());
    const got = JSON.stringify(Object.entries(hreflang).sort());
    if (want !== got) fails.push("hreflang != sitemap alternates");

    // Open Graph.
    const ogUrl = meta("property", "og:url")[0];
    if (ogUrl !== loc) fails.push(`og:url ${ogUrl ?? "missing"}`);
    for (const p of ["og:title", "og:description", "og:image"]) {
      if (!meta("property", p)[0]) fails.push(`${p} missing`);
    }
    const ogImage = meta("property", "og:image")[0] ?? "";
    if (expectedLang && expectedLang !== "x-default" && !ogImage.includes(`/og/${expectedLang}.`)) {
      fails.push(`og:image not ${expectedLang}`);
    }

    // JSON-LD.
    const scripts = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g) ?? [];
    row.ld = scripts.length;
    for (const s of scripts) {
      try {
        JSON.parse(s.replace(/^<script[^>]*>/, "").replace(/<\/script>$/, ""));
      } catch (e) {
        fails.push(`invalid JSON-LD: ${e.message}`);
      }
    }

    // Image-path-plus-index strings (React keys leaking into the RSC payload).
    const leak = html.match(/\.(webp|png|jpe?g|avif)-\d/gi);
    if (leak) fails.push(`path-key strings: ${[...new Set(leak)].join(",")}`);

    // Internal links.
    for (const a of tags(html, "a")) {
      let href = attr(a, "href");
      if (!href) continue;
      if (href.startsWith(SITE)) href = href.slice(SITE.length) || "/";
      if (!href.startsWith("/") || href.startsWith("//")) continue;
      href = href.split("#")[0].split("?")[0] || "/";
      if (!linkStatus.has(href)) linkStatus.set(href, { status: null, from: loc });
    }
  }

  for (const [path, info] of linkStatus) {
    info.status = (await fetch(`${BASE}${path}`, { redirect: "manual" })).status;
  }
  const broken = [...linkStatus].filter(([, i]) => i.status !== 200);

  console.log("| URL | Status | H1 | Title | Desc | JSON-LD | Result |");
  console.log("|---|---|---|---|---|---|---|");
  for (const r of rows) {
    const result = r.fails.length ? `FAIL: ${r.fails.join("; ")}` : "OK";
    console.log(`| ${r.url} | ${r.status} | ${r.h1} | ${r.title} | ${r.desc} | ${r.ld} | ${result} |`);
  }
  const failed = rows.filter((r) => r.fails.length).length;
  console.log(`\n${rows.length} sitemap URLs, ${failed} failing. ${linkStatus.size} internal links, ${broken.length} not 200.`);
  for (const [path, i] of broken) console.log(`  link ${path} -> ${i.status} (first seen on ${i.from})`);
  if (failed || broken.length) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
