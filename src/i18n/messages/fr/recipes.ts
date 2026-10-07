import type { Facts } from "@/data/facts";
import type en from "../en/recipes";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: `${f.RECIPES} recettes halal, saines et du monde entier`,
  metaDescription: `Découvrez les recettes MyNutriRise issues de ${f.CUISINES} cuisines du monde — turque, marocaine, pakistanaise, afghane et plus encore — avec calories et macros détaillées, ainsi que des petits-déjeuners, des soupes et des plats riches en protéines.`,
  title: `${f.RECIPES} recettes. <accent>Votre culture incluse.</accent>`,
  intro: `Des kebabs turcs au pulao afghan : ${f.CUISINES} cuisines du monde avec calories et macros détaillées, compatibles halal de bout en bout. Pour en savoir plus, consultez la page <link>appli de nutrition halal</link>. Un avant-goût de ce que contient l’app :`,
  featuredTitle: "Plats à la une de la bibliothèque",
  itemListName: "Recettes MyNutriRise à la une",
  // Same order as the per-dish nutrition data in the page.
  dishes: [
    { name: "Adana kebab", cuisine: "Turque" },
    { name: "Tajine de poulet", cuisine: "Marocaine" },
    { name: "Kabuli pulao", cuisine: "Afghane" },
    { name: "Biryani au poulet", cuisine: "Pakistanaise" },
    { name: "Ghormeh sabzi", cuisine: "Persane" },
    { name: "Koshari", cuisine: "Égyptienne · Végane" },
    { name: "Rendang de bœuf", cuisine: "Indonésienne" },
    { name: "Riz jollof", cuisine: "Nigériane" },
    { name: "Nihari", cuisine: "Pakistanaise" },
    { name: "Chakchouka", cuisine: "Moyen-orientale" },
    { name: "Iskender kebab", cuisine: "Turque" },
    { name: "Nasi lemak", cuisine: "Malaisienne" },
  ],
  kcal: "{n} kcal",
  protein: "<b>{n} g</b> de protéines",
  carbs: "<b>{n} g</b> de glucides",
  fat: "<b>{n} g</b> de lipides",
  categoriesTitle: "Et des milliers d’autres, classées à votre façon",
  // Same order as the category counts in the page.
  categories: [
    "Végétarien",
    "Desserts",
    "Poulet",
    "Soupes",
    "Pâtes",
    "Petit-déjeuner",
    "Fruits de mer",
    "Bœuf",
    "Accompagnements",
    "Riz",
    "Sandwichs",
    "Mijotés",
  ],
  cta: {
    title: "Chaque recette, entièrement suivie",
    body: "Parcourez par cuisine, filtrez halal, végétarien, céto ou riche en protéines, et ajoutez n’importe quel plat en un geste.",
  },
});
