import Link from "next/link";
import { JsonLd } from "./JsonLd";

const BASE_URL = "https://www.mynutririse.com";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const trail = [{ name: "Home", href: "/" }, ...items];

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
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <JsonLd data={jsonLd} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {trail.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === trail.length - 1 ? (
              <span className="font-medium text-slate-700">{item.name}</span>
            ) : (
              <Link
                href={item.href}
                className="transition-colors hover:text-emerald-600"
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
