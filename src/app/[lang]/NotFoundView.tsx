"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale, localePath, type Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";

type NotFoundText = Messages["common"]["notFound"];

export function NotFoundView({ all }: { all: Record<string, NotFoundText> }) {
  const first = (usePathname() ?? "/").split("/")[1] ?? "";
  const lang: Locale = isLocale(first) ? first : "en";
  const t = all[lang];

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 className="mt-4 text-h1 text-ink">{t.title}</h1>
      <p className="mt-4 max-w-md text-lead text-ink-3">{t.body}</p>
      <Link
        href={localePath(lang, "/")}
        className="mt-8 btn-primary px-8 py-3 text-base transition-all duration-200 hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
      >
        {t.back}
      </Link>
    </section>
  );
}
