import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { BASE_URL, localePath, type Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";

/** `items` hrefs are language-neutral paths ("/blog"); they are localized here. */
export function Breadcrumbs({
  lang,
  t,
  items,
}: {
  lang: Locale;
  t: Messages["common"]["breadcrumbs"];
  items: { name: string; href: string }[];
}) {
  const trail = [{ name: t.home, href: "/" }, ...items].map((item) => ({
    ...item,
    href: localePath(lang, item.href),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };

  return (
    <nav aria-label={t.label} className="text-sm text-ink-3">
      <JsonLd data={jsonLd} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {trail.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === trail.length - 1 ? (
              <span className="font-medium text-ink-2">{item.name}</span>
            ) : (
              <Link
                href={item.href}
                className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
