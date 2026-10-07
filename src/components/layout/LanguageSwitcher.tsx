"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, localePath, type Locale } from "@/i18n/config";

/** The current page's path with any language prefix removed ("/ar/about" -> "/about"). */
function basePath(pathname: string): string {
  const parts = pathname.split("/");
  if ((locales as readonly string[]).includes(parts[1] ?? "")) parts.splice(1, 1);
  return parts.join("/") || "/";
}

export function LanguageSwitcher({
  lang,
  label,
  variant = "menu",
}: {
  lang: Locale;
  label: string;
  variant?: "menu" | "list";
}) {
  const path = basePath(usePathname() ?? "/");

  const links = locales.map((l) => (
    <Link
      key={l}
      href={localePath(l, path)}
      hrefLang={l}
      lang={l}
      aria-current={l === lang ? "true" : undefined}
      className={
        variant === "menu"
          ? `block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-surface-2 ${l === lang ? "font-semibold text-accent-strong" : "text-ink-2"}`
          : `text-sm transition-colors hover:text-accent-strong ${l === lang ? "font-semibold text-ink" : ""}`
      }
    >
      {localeNames[l]}
    </Link>
  ));

  if (variant === "list") {
    return (
      <nav aria-label={label} className="flex flex-wrap gap-x-4 gap-y-2">
        {links}
      </nav>
    );
  }

  return (
    <details className="group relative">
      <summary
        aria-label={label}
        className="flex cursor-pointer list-none items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-ink-2 transition-colors hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent [&::-webkit-details-marker]:hidden"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
        </svg>
        <span className="uppercase">{lang}</span>
      </summary>
      <div className="glass absolute end-0 top-full z-50 mt-2 w-44 rounded-2xl p-1.5">{links}</div>
    </details>
  );
}
