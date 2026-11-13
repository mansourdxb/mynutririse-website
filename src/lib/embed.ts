import { BASE_URL, type Locale } from "@/i18n/config";

/** postMessage type the embed sends to its parent page with its height. */
export const EMBED_RESIZE_MESSAGE = "mynutririse:resize";

/** "/tools/bmi-calculator" -> "bmi-calculator" (the embed URL segment). */
export function embedName(toolHref: string): string {
  return toolHref.split("/").pop()!;
}

/** Public embed URL; the proxy maps it to /embed/<lang>/tools/<name>. */
export function embedUrl(lang: Locale, toolHref: string): string {
  return `${BASE_URL}/embed/tools/${embedName(toolHref)}?lang=${lang}`;
}

const escapeAttr = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * Copy-paste snippet: the iframe plus an optional script that resizes it.
 * The script only accepts messages from our origin, only for our iframes,
 * and only plausible heights.
 */
export function embedSnippet(lang: Locale, toolHref: string, title: string): string {
  const iframe =
    `<iframe src="${embedUrl(lang, toolHref)}" title="${escapeAttr(title)}" width="100%" height="720" ` +
    `style="border:0;width:100%;max-width:720px" loading="lazy"></iframe>`;
  const script =
    `<script>/* Optional: resizes the MyNutriRise calculator to fit. */` +
    `window.addEventListener("message",function(e){` +
    `if(e.origin!=="${BASE_URL}"||!e.data||e.data.type!=="${EMBED_RESIZE_MESSAGE}")return;` +
    `var h=Number(e.data.height);if(!(h>0&&h<5000))return;` +
    `document.querySelectorAll('iframe[src^="${BASE_URL}/embed/"]').forEach(function(f){` +
    `if(f.contentWindow===e.source)f.style.height=Math.ceil(h)+"px";});});</script>`;
  return `${iframe}\n${script}`;
}
