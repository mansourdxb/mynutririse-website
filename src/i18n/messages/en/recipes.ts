import type { Facts } from "@/data/facts";

export default (f: Facts) => ({
  metaTitle: `${f.RECIPES} Recipes — Halal, Cultural & Healthy`,
  metaDescription: `MyNutriRise recipes from ${f.CUISINES} world cuisines — Turkish, Moroccan, Pakistani, Afghan and more — with full calories and macros, from breakfasts to mains.`,
  title: `${f.RECIPES} recipes. <accent>Your culture included.</accent>`,
  intro: `From Turkish kebabs to Afghan pulao — ${f.CUISINES} world cuisines with full calories and macros, halal-friendly throughout — see the <link>halal nutrition app</link> page for the full story. A taste of what's in the app:`,
  featuredTitle: "Featured dishes from the library",
  itemListName: "Featured MyNutriRise recipes",
  // Same order as the per-dish nutrition data in the page.
  dishes: [
    { name: "Adana Kebab", cuisine: "Turkish" },
    { name: "Chicken Tagine", cuisine: "Moroccan" },
    { name: "Kabuli Pulao", cuisine: "Afghan" },
    { name: "Chicken Biryani", cuisine: "Pakistani" },
    { name: "Ghormeh Sabzi", cuisine: "Persian" },
    { name: "Koshari", cuisine: "Egyptian · Vegan" },
    { name: "Beef Rendang", cuisine: "Indonesian" },
    { name: "Jollof Rice", cuisine: "Nigerian" },
    { name: "Nihari", cuisine: "Pakistani" },
    { name: "Shakshuka", cuisine: "Middle Eastern" },
    { name: "Iskender Kebab", cuisine: "Turkish" },
    { name: "Nasi Lemak", cuisine: "Malaysian" },
  ],
  kcal: "{n} kcal",
  protein: "<b>{n}g</b> protein",
  carbs: "<b>{n}g</b> carbs",
  fat: "<b>{n}g</b> fat",
  categoriesTitle: "And thousands more, organized your way",
  // Same order as the category counts in the page.
  categories: [
    "Vegetarian",
    "Desserts",
    "Chicken",
    "Soups",
    "Pasta",
    "Breakfast",
    "Seafood",
    "Beef",
    "Sides",
    "Rice",
    "Sandwiches",
    "Slow Cooked",
  ],
  cta: {
    title: "Every recipe, fully tracked",
    body: "Browse by cuisine, filter halal, vegetarian, keto or high-protein, and log any dish in one tap.",
  },
});
