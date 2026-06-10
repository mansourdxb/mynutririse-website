import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "9,000+ Recipes — Halal, Cultural & Healthy",
  description:
    "Explore MyNutriRise recipes: Turkish, Moroccan, Pakistani, Afghan and 50+ more cuisines with full calories and macros — plus breakfasts, soups, and high-protein mains.",
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
    <div className="bg-white pt-24">
      <JsonLd data={itemListJsonLd} />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-center text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
          9,000+ recipes.{" "}
          <span className="text-emerald-600">
            Your culture included.
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-500">
          From Turkish kebabs to Afghan pulao — 50+ cuisine libraries with full
          calories and macros, halal-friendly throughout — see the{" "}
          <Link href="/halal-nutrition-app" className="font-medium text-emerald-600 hover:text-emerald-700">
            halal nutrition app
          </Link>{" "}
          page for the full story. A taste of what&apos;s in the app:
        </p>

        <h2 className="mt-12 text-center text-2xl font-bold text-slate-800">
          Featured dishes from the library
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredDishes.map((dish) => (
            <div
              key={dish.name}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-shadow duration-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl" aria-hidden="true">{dish.emoji}</span>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  {dish.kcal} kcal
                </span>
              </div>
              <h3 className="mt-3 font-semibold text-slate-800">{dish.name}</h3>
              <p className="text-xs text-slate-500">{dish.cuisine}</p>
              <div className="mt-3 flex gap-3 text-xs text-slate-500">
                <span><strong className="text-rose-500">{dish.p}g</strong> protein</span>
                <span><strong className="text-blue-500">{dish.c}g</strong> carbs</span>
                <span><strong className="text-amber-500">{dish.f}g</strong> fat</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-center text-2xl font-bold text-slate-800">
          And thousands more, organized your way
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <span
              key={cat.name}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm ring-1 ring-slate-100"
            >
              {cat.name} <span className="text-emerald-600">{cat.count}</span>
            </span>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-400 p-8 text-center sm:p-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
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
