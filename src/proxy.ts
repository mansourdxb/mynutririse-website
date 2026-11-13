import { NextResponse, type NextRequest } from "next/server";

// Keep in sync with src/i18n/config.ts (proxy code must stay self-contained).
const PREFIXED = ["ar", "de", "es", "fr", "ru"];

/**
 * English keeps its original unprefixed URLs (/about), served internally from
 * the /en route tree. Explicit /en URLs redirect permanently (308) to the
 * unprefixed form so there is exactly one English URL per page.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const parts = pathname.split("/");
  const first = parts[1] ?? "";

  // Embeds: /embed/tools/<name>?lang=<lang> -> /embed/<lang>/tools/<name>.
  if (first === "embed") {
    if (parts[2] !== "tools") return NextResponse.next();
    const requested = request.nextUrl.searchParams.get("lang") ?? "";
    const lang = PREFIXED.includes(requested) ? requested : "en";
    const url = request.nextUrl.clone();
    url.pathname = `/embed/${lang}${pathname.slice("/embed".length)}`;
    url.search = "";
    return NextResponse.rewrite(url);
  }

  if (PREFIXED.includes(first)) return NextResponse.next();

  if (first === "en") {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, metadata routes and any file with an extension.
  matcher: [
    "/((?!_next/|api/|robots\\.txt|sitemap\\.xml|icon\\.png|apple-icon\\.png|favicon\\.ico|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
