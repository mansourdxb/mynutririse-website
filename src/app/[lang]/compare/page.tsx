import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { hasPage } from "@/data/pages";
import { localePath, type Locale } from "@/i18n/config";
import { compareSlugs, getCompare } from "@/i18n/compare";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";

export async function generateMetadata({ params }: PageProps<"/[lang]/compare">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const t = getMessages(lang).compare.index;
  return pageMetadata(lang, "/compare", { title: { absolute: t.metaTitle }, description: t.metaDescription });
}

const cardClass =
  "group flex h-full flex-col card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-emerald-200 dark:hover:ring-emerald-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500";

/** Every comparison available in this language. */
export default async function CompareIndexPage({ params }: PageProps<"/[lang]/compare">) {
  const lang = (await params).lang as Locale;
  const { compare, common } = getMessages(lang);
  const t = compare.index;

  const cards = [
    { href: "/compare/mynutririse-vs-myfitnesspal", title: compare.title, description: compare.metaDescription },
    ...compareSlugs
      .filter((slug) => hasPage(lang, `/compare/${slug}`))
      .map((slug) => {
        const c = getCompare(slug, lang)!;
        return { href: `/compare/${slug}`, title: c.title, description: c.metaDescription };
      }),
  ];

  return (
    <div className="wash-mint pt-24 pb-8">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Breadcrumbs lang={lang} t={common.breadcrumbs} items={[{ name: t.breadcrumb, href: "/compare" }]} />
        <h1 className="mt-6 text-center text-h1 text-ink">{t.title}</h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lead text-ink-3">{t.intro}</p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <li key={card.href}>
              <Link href={localePath(lang, card.href)} className={cardClass}>
                <h2 className="font-semibold text-ink transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                  {card.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-3">{card.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
