import type { Facts } from "@/data/facts";
import type en from "../en/recipes";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: `${f.RECIPES} Rezepte – halal, kulturell & gesund`,
  metaDescription: `Entdecke MyNutriRise-Rezepte aus ${f.CUISINES} Küchen der Welt – türkisch, marokkanisch, pakistanisch, afghanisch und mehr – mit allen Kalorien und Makros, dazu Frühstücksideen, Suppen und proteinreiche Hauptgerichte.`,
  title: `${f.RECIPES} Rezepte. <accent>Deine Kultur inklusive.</accent>`,
  intro: `Vom türkischen Kebab bis zum afghanischen Pulao – ${f.CUISINES} Küchen der Welt mit allen Kalorien und Makros, durchgehend halal-freundlich. Die ganze Geschichte findest du auf der Seite zur <link>Halal-Ernährungs-App</link>. Ein Vorgeschmack auf die App:`,
  featuredTitle: "Ausgewählte Gerichte aus der Bibliothek",
  itemListName: "Ausgewählte MyNutriRise-Rezepte",
  // Same order as the per-dish nutrition data in the page.
  dishes: [
    { name: "Adana Kebap", cuisine: "Türkisch" },
    { name: "Hähnchen-Tajine", cuisine: "Marokkanisch" },
    { name: "Kabuli Pulao", cuisine: "Afghanisch" },
    { name: "Hähnchen-Biryani", cuisine: "Pakistanisch" },
    { name: "Ghormeh Sabzi", cuisine: "Persisch" },
    { name: "Koshari", cuisine: "Ägyptisch · Vegan" },
    { name: "Rindfleisch-Rendang", cuisine: "Indonesisch" },
    { name: "Jollof-Reis", cuisine: "Nigerianisch" },
    { name: "Nihari", cuisine: "Pakistanisch" },
    { name: "Shakshuka", cuisine: "Nahöstlich" },
    { name: "Iskender Kebap", cuisine: "Türkisch" },
    { name: "Nasi Lemak", cuisine: "Malaysisch" },
  ],
  kcal: "{n} kcal",
  protein: "<b>{n} g</b> Protein",
  carbs: "<b>{n} g</b> KH",
  fat: "<b>{n} g</b> Fett",
  categoriesTitle: "Und Tausende mehr, so sortiert, wie es dir passt",
  // Same order as the category counts in the page.
  categories: [
    "Vegetarisch",
    "Desserts",
    "Hähnchen",
    "Suppen",
    "Pasta",
    "Frühstück",
    "Meeresfrüchte",
    "Rind",
    "Beilagen",
    "Reis",
    "Sandwiches",
    "Schmorgerichte",
  ],
  cta: {
    title: "Jedes Rezept, komplett getrackt",
    body: "Stöbere nach Küche, filtere nach halal, vegetarisch, Keto oder proteinreich und trag jedes Gericht mit einem Tipp ein.",
  },
});
