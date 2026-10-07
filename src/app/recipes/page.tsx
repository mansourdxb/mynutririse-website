import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { CUISINES, RECIPES } from "@/data/facts";

export const metadata: Metadata = {
  title: `${RECIPES} Recipes — Halal, Cultural & Healthy`,
  description:
    `Explore MyNutriRise recipes from ${CUISINES} world cuisines — Turkish, Moroccan, Pakistani, Afghan and more — with full calories and macros, plus breakfasts, soups, and high-protein mains.`,
  alternates: { canonical: "/recipes" },
};

// Real dishes from the MyNutriRise food library (per serving)
const featuredDishes = [
  { name: "Adana Kebab", cuisine: "Turkish", kcal: 380, p: 32, c: 8, f: 24, emoji: "🍢" },
  { name: "Chicken Tagine", cuisine: "Moroccan", kcal: 380, p: 30, c: 25, f: 18, emoji: "🍲" },
  { name: "Kabuli Pulao", cuisine: "Afghan", kcal: 480, p: 28, c: 55, f: 16, emoji: "🍚" },
  { name: "Chicken Biryani", cuisine: "Pakistani", kcal: 480, p: 28, c: 52, f: 18, emoji: "🍛" },
  { name: "Ghormeh Sabzi", cuisine: "Persian", kcal: 350, p: 28, c: 18, f: 18, emoji: "🥘" },
  { name: "Koshari", cuisine: "Egyptian · Vegan", kcal: 380, p: 14, c: 62, f: 8, emoji: "🍝" },
  { name: "Beef Rendang", cuisine: "Indonesian", kcal: 450, p: 35, c: 8, f: 32, emoji: "🥩" },
  { name: "Jollof Rice", cuisine: "Nigerian", kcal: 380, p: 12, c: 58, f: 12, emoji: "🍅" },
  { name: "Nihari", cuisine: "Pakistani", kcal: 450, p: 35, c: 15, f: 28, emoji: "🍖" },
  { name: "Shakshuka", cuisine: "Middle Eastern", kcal: 354, p: 18, c: 14, f: 24, emoji: "🍳" },
  { name: "Iskender Kebab", cuisine: "Turkish", kcal: 520, p: 35, c: 30, f: 28, emoji: "🥙" },
  { name: "Nasi Lemak", cuisine: "Malaysian", kcal: 420, p: 16, c: 50, f: 18, emoji: "🥥" },
];

// Real category counts from the app's recipe library
const categories = [
  { name: "Vegetarian", count: "1,335" },
  { name: "Desserts", count: "1,283" },
  { name: "Chicken", count: "389" },
  { name: "Soups", count: "301" },
  { name: "Pasta", count: "222" },
  { name: "Breakfast", count: "208" },
  { name: "Seafood", count: "187" },
  { name: "Beef", count: "187" },
  { name: "Sides", count: "125" },
  { name: "Rice", count: "120" },
  { name: "Sandwiches", count: "87" },
  { name: "Slow Cooked", count: "84" },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Featured MyNutriRise recipes",
  itemListElement: featuredDishes.map((dish, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: dish.name,
  })),
};

export default function RecipesPage() {
  return (
    <div className="wash-mint pt-24 pb-8">
      <JsonLd data={itemListJsonLd} />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-center text-h1 text-ink">
          {RECIPES}{" "}recipes.{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            Your culture included.
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lead text-ink-3">
          From Turkish kebabs to Afghan pulao — {CUISINES}{" "}world cuisines with full
          calories and macros, halal-friendly throughout — see the{" "}
          <Link href="/halal-nutrition-app" className="font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
            halal nutrition app
          </Link>{" "}
          page for the full story. A taste of what&apos;s in the app:
        </p>

        <h2 className="mt-12 text-center text-2xl font-bold text-ink">
          Featured dishes from the library
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredDishes.map((dish) => (
            <div
              key={dish.name}
              className="card p-6 card-hover"
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl" aria-hidden="true">{dish.emoji}</span>
                <span className="rounded-full bg-emerald-50 dark:bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  {dish.kcal} kcal
                </span>
              </div>
              <h3 className="mt-3 font-semibold text-ink">{dish.name}</h3>
              <p className="text-xs text-ink-3">{dish.cuisine}</p>
              <div className="mt-3 flex gap-3 text-xs text-ink-3">
                <span><strong className="text-rose-500 dark:text-rose-400">{dish.p}g</strong> protein</span>
                <span><strong className="text-blue-500 dark:text-blue-400">{dish.c}g</strong> carbs</span>
                <span><strong className="text-amber-500 dark:text-amber-400">{dish.f}g</strong> fat</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-center text-2xl font-bold text-ink">
          And thousands more, organized your way
        </h2>
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
          <h2 className="text-h3 text-white">
            Every recipe, fully tracked
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            Browse by cuisine, filter halal, vegetarian, keto or high-protein,
            and log any dish in one tap.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <AppStoreButton store="apple" />
            <AppStoreButton store="google" />
          </div>
        </div>
      </div>
    </div>
  );
}
