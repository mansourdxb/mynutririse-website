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
  const first = pathname.split("/")[1] ?? "";

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
    "/((?!_next/|api/|robots\\.txt|sitemap\\.xml|icon\\.svg|opengraph-image|favicon\\.ico|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
