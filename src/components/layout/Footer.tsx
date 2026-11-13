import Image from "next/image";
import Link from "next/link";
import { AppStoreButton } from "@/components/ui/Button";
import { SOCIAL_LINKS, localePath, type Locale } from "@/i18n/config";
import { toolPages } from "@/data/tools";
import type { Messages } from "@/i18n/messages";
import { LanguageSwitcher } from "./LanguageSwitcher";

/** Decorative icons; each link carries a localized aria-label. */
const SOCIAL_ICONS: Record<(typeof SOCIAL_LINKS)[number]["key"], React.ReactNode> = {
  instagram: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  x: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

export function Footer({
  lang,
  t,
  tools,
}: {
  lang: Locale;
  t: Messages["common"];
  /** Heading and calculator names for the "Free tools" column. */
  tools: { heading: string; cards: Messages["tools"]["index"]["cards"] };
}) {
  const f = t.footer;
  const footerColumns = [
    {
      title: f.product,
      links: [
        { label: f.features, href: "/features" },
        { label: f.recipes, href: "/recipes" },
        { label: f.halal, href: "/halal-nutrition-app" },
        { label: f.premium, href: "/#premium" },
        { label: f.compare, href: "/compare" },
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
      title: tools.heading,
      links: toolPages.map((p) => ({ label: tools.cards[p.key].title, href: p.href })),
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
        <div className="grid gap-12 md:grid-cols-6">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href={localePath(lang, "/")} className="flex items-center gap-2">
              <Image src="/logo.png" alt={t.nav.logoAlt} width={28} height={28} className="h-7 w-7" />
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
            <ul className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ key, url }) => (
                <li key={key}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={f.social[key]}
                    title={f.social[key]}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-ink-3 ring-1 ring-line transition-colors hover:bg-surface-2 hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {SOCIAL_ICONS[key]}
                  </a>
                </li>
              ))}
            </ul>
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
