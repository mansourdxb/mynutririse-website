import type { Facts } from "@/data/facts";
import type en from "../en/recipes";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: `${f.RECIPES} recetas: halal, culturales y saludables`,
  metaDescription: `Recetas de MyNutriRise de ${f.CUISINES} cocinas del mundo —turca, marroquí, pakistaní, afgana y más— con calorías y macros completos.`,
  title: `${f.RECIPES} recetas. <accent>Tu cultura, incluida.</accent>`,
  intro: `De los kebabs turcos al pulao afgano: ${f.CUISINES} cocinas del mundo con calorías y macros completos, aptas para halal en todo el catálogo. Consulta la página sobre la <link>app de nutrición halal</link> para conocer toda la historia. Una muestra de lo que encontrarás en la app:`,
  featuredTitle: "Platos destacados de la biblioteca",
  itemListName: "Recetas destacadas de MyNutriRise",
  // Same order as the per-dish nutrition data in the page.
  dishes: [
    { name: "Adana kebab", cuisine: "Turca" },
    { name: "Tajín de pollo", cuisine: "Marroquí" },
    { name: "Kabuli pulao", cuisine: "Afgana" },
    { name: "Biryani de pollo", cuisine: "Pakistaní" },
    { name: "Ghormeh sabzi", cuisine: "Persa" },
    { name: "Koshari", cuisine: "Egipcia · Vegana" },
    { name: "Rendang de ternera", cuisine: "Indonesia" },
    { name: "Arroz jollof", cuisine: "Nigeriana" },
    { name: "Nihari", cuisine: "Pakistaní" },
    { name: "Shakshuka", cuisine: "De Oriente Medio" },
    { name: "Iskender kebab", cuisine: "Turca" },
    { name: "Nasi lemak", cuisine: "Malasia" },
  ],
  kcal: "{n} kcal",
  protein: "<b>{n} g</b> de proteína",
  carbs: "<b>{n} g</b> de carbohidratos",
  fat: "<b>{n} g</b> de grasa",
  categoriesTitle: "Y miles más, organizadas a tu manera",
  // Same order as the category counts in the page.
  categories: [
    "Vegetarianas",
    "Postres",
    "Pollo",
    "Sopas",
    "Pasta",
    "Desayunos",
    "Pescados y mariscos",
    "Ternera",
    "Guarniciones",
    "Arroz",
    "Sándwiches",
    "Cocción lenta",
  ],
  cta: {
    title: "Cada receta, con seguimiento completo",
    body: "Explora por cocina, filtra por halal, vegetariana, keto o alta en proteína, y registra cualquier plato con un solo toque.",
  },
});
