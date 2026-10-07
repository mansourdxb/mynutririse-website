import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { formatNumber } from "@/data/facts";
import { localePath, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";
import { fill, rich } from "@/i18n/rich";

export async function generateMetadata({ params }: PageProps<"/[lang]/recipes">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const t = getMessages(lang).recipes;
  return pageMetadata(lang, "/recipes", { title: t.metaTitle, description: t.metaDescription });
}

// Real dishes from the MyNutriRise food library (per serving).
// Names and cuisines live in messages (recipes.dishes), same order.
const featuredDishes = [
  { kcal: 380, p: 32, c: 8, f: 24, emoji: "🍢" },
  { kcal: 380, p: 30, c: 25, f: 18, emoji: "🍲" },
  { kcal: 480, p: 28, c: 55, f: 16, emoji: "🍚" },
  { kcal: 480, p: 28, c: 52, f: 18, emoji: "🍛" },
  { kcal: 350, p: 28, c: 18, f: 18, emoji: "🥘" },
  { kcal: 380, p: 14, c: 62, f: 8, emoji: "🍝" },
  { kcal: 450, p: 35, c: 8, f: 32, emoji: "🥩" },
  { kcal: 380, p: 12, c: 58, f: 12, emoji: "🍅" },
  { kcal: 450, p: 35, c: 15, f: 28, emoji: "🍖" },
  { kcal: 354, p: 18, c: 14, f: 24, emoji: "🍳" },
  { kcal: 520, p: 35, c: 30, f: 28, emoji: "🥙" },
  { kcal: 420, p: 16, c: 50, f: 18, emoji: "🥥" },
];

// Real category counts from the app's recipe library.
// Names live in messages (recipes.categories), same order.
const categoryCounts = [1335, 1283, 389, 301, 222, 208, 187, 187, 125, 120, 87, 84];

const linkClass =
  "font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300";

export default async function RecipesPage({ params }: PageProps<"/[lang]/recipes">) {
  const lang = (await params).lang as Locale;
  const { recipes: t, common } = getMessages(lang);

  const dishes = featuredDishes.map((dish, i) => ({ ...dish, ...t.dishes[i] }));
  const categories = categoryCounts.map((count, i) => ({
    name: t.categories[i],
    count: formatNumber(count, lang),
  }));

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.itemListName,
    itemListElement: dishes.map((dish, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: dish.name,
    })),
  };

  return (
    <div className="wash-mint pt-24 pb-8">
      <JsonLd data={itemListJsonLd} />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-center text-h1 text-ink">
          {rich(t.title, {
            accent: (c) => <span className="text-emerald-600 dark:text-emerald-400">{c}</span>,
          })}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lead text-ink-3">
          {rich(t.intro, {
            link: (c) => (
              <Link href={localePath(lang, "/halal-nutrition-app")} className={linkClass}>
                {c}
              </Link>
            ),
          })}
        </p>

        <h2 className="mt-12 text-center text-2xl font-bold text-ink">{t.featuredTitle}</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="card p-6 card-hover"
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl" aria-hidden="true">{dish.emoji}</span>
                <span className="rounded-full bg-emerald-50 dark:bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  {fill(t.kcal, { n: dish.kcal })}
                </span>
              </div>
              <h3 className="mt-3 font-semibold text-ink">{dish.name}</h3>
              <p className="text-xs text-ink-3">{dish.cuisine}</p>
              <div className="mt-3 flex gap-3 text-xs text-ink-3">
                <span>
                  {rich(fill(t.protein, { n: dish.p }), {
                    b: (c) => <strong className="text-rose-500 dark:text-rose-400">{c}</strong>,
                  })}
                </span>
                <span>
                  {rich(fill(t.carbs, { n: dish.c }), {
                    b: (c) => <strong className="text-blue-500 dark:text-blue-400">{c}</strong>,
                  })}
                </span>
                <span>
                  {rich(fill(t.fat, { n: dish.f }), {
                    b: (c) => <strong className="text-amber-500 dark:text-amber-400">{c}</strong>,
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-center text-2xl font-bold text-ink">{t.categoriesTitle}</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <span
              key={cat.name}
              className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-ink-2 shadow-sm ring-1 ring-line"
            >
              {cat.name} <span className="text-emerald-600 dark:text-emerald-400">{cat.count}</span>
            </span>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 shadow-[0_30px_60px_-30px_rgb(4_120_87/0.55)] dark:from-emerald-900 dark:via-emerald-800 dark:to-teal-900 dark:shadow-none dark:ring-1 dark:ring-white/10 p-8 text-center sm:p-10">
          <h2 className="text-h3 text-white">{t.cta.title}</h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">{t.cta.body}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <AppStoreButton store="apple" t={common.store} />
            <AppStoreButton store="google" t={common.store} />
          </div>
        </div>
      </div>
    </div>
  );
}
