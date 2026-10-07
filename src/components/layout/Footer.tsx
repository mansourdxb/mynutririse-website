import Image from "next/image";
import Link from "next/link";
import { AppStoreButton } from "@/components/ui/Button";
import { localePath, type Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer({ lang, t }: { lang: Locale; t: Messages["common"] }) {
  const f = t.footer;
  const footerColumns = [
    {
      title: f.product,
      links: [
        { label: f.features, href: "/features" },
        { label: f.recipes, href: "/recipes" },
        { label: f.halal, href: "/halal-nutrition-app" },
        { label: f.premium, href: "/#premium" },
        { label: f.compare, href: "/compare/mynutririse-vs-myfitnesspal" },
        { label: f.download, href: "/download" },
      ],
    },
    {
      title: f.resources,
      links: [
        { label: f.helpCenter, href: "/support" },
        { label: f.blog, href: "/blog" },
        { label: f.quiz, href: "/quiz" },
        { label: f.tools, href: "/tools" },
      ],
    },
    {
      title: f.company,
      links: [
        { label: f.about, href: "/about" },
        { label: f.press, href: "/press" },
        { label: f.privacy, href: "/privacy" },
        { label: f.terms, href: "/terms" },
        { label: f.contact, href: "/support" },
      ],
    },
  ];
  const [madeBefore, madeAfter] = f.madeWith.split("{heart}");

  return (
    <footer className="border-t border-line bg-surface text-ink-3">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href={localePath(lang, "/")} className="flex items-center gap-2">
              <Image src="/logo.png" alt="" width={28} height={28} className="h-7 w-7" />
              <span className="font-display text-lg font-bold tracking-tight text-ink">
                MyNutriRise
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-3">
              {f.tagline}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <AppStoreButton store="apple" t={t.store} />
              <AppStoreButton store="google" t={t.store} />
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={localePath(lang, link.href)}
                      className="text-sm transition-colors hover:text-accent-strong"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-14">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink">
            {f.languages}
          </h3>
          <LanguageSwitcher lang={lang} label={f.languages} variant="list" />
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 md:flex-row">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} {f.rights}
            </p>
            <p className="text-xs text-ink-3">
              {madeBefore}
              <span role="img" aria-label={f.heartLabel}>
                💚
              </span>
              {madeAfter}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
