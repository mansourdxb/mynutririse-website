import type { Facts } from "@/data/facts";
import type en from "../../en/guides/macro";

// Long-form explainer and FAQ for /tools/macro-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <calorie>…</calorie> are listed in LINK_TAGS there; keep them when translating.
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Ce que ce calculateur vous indique" },
    {
      type: "p",
      text: "Les macronutriments, ou « macros », sont les trois nutriments qui fournissent de l’énergie : les protéines, les glucides et les lipides. Ce calculateur prend votre objectif calorique quotidien et le répartit en <b>grammes de chaque macro</b> selon le style d’alimentation que vous choisissez. Les calories déterminent si vous perdez, maintenez ou prenez du poids ; la répartition influence votre sensation de satiété, la qualité de vos entraînements et la quantité de muscle que vous conservez.",
    },
    { type: "h2", text: "La formule" },
    {
      type: "p",
      text: "Chaque gramme de protéines et de glucides apporte environ 4 kcal, et chaque gramme de lipides environ 9 kcal. Le calculateur multiplie vos calories par chaque pourcentage, puis divise par ces valeurs énergétiques :",
    },
    {
      type: "formula",
      items: [
        "Protéines (g) = calories × % protéines ÷ 4",
        "Glucides (g)  = calories × % glucides ÷ 4",
        "Lipides (g)   = calories × % lipides ÷ 9",
      ],
    },
    {
      type: "table",
      head: ["Style", "Protéines", "Glucides", "Lipides", "Idéal pour"],
      rows: [
        ["Équilibré", "30 %", "40 %", "30 %", "La plupart des gens, santé générale"],
        ["Riche en protéines", "40 %", "30 %", "30 %", "Perte de graisse et prise de muscle"],
        ["Céto / pauvre en glucides", "25 %", "5 %", "70 %", "Les personnes qui préfèrent très peu de glucides"],
        ["Endurance", "25 %", "50 %", "25 %", "Coureurs, cyclistes, gros volume d’entraînement"],
      ],
    },
    { type: "h2", text: "Exemple chiffré" },
    {
      type: "p",
      text: "Avec <b>2 000 kcal</b> et la répartition équilibrée : protéines 2 000 × 30 % ÷ 4 = <b>150 g</b>, glucides 2 000 × 40 % ÷ 4 = <b>200 g</b>, lipides 2 000 × 30 % ÷ 9 = <b>67 g</b>. Passer à la répartition riche en protéines avec les mêmes calories donne 200 g de protéines, 150 g de glucides et 67 g de lipides.",
    },
    { type: "h2", text: "Les macros pour perdre de la graisse" },
    {
      type: "p",
      text: "En déficit calorique, les protéines sont la macro à protéger. Les recherches menées sur des personnes minces pratiquant la musculation suggèrent qu’un apport plus élevé en protéines aide à conserver le muscle pendant un régime ; les protéines sont aussi la macro la plus rassasiante, ce qui rend le déficit plus facile à tenir. Choisissez la répartition riche en protéines, gardez les lipides à un niveau confortable (un régime très pauvre en lipides est difficile à tenir) et laissez les glucides compléter le reste.",
    },
    {
      type: "p",
      text: "Un repère utile : quand vous perdez de la graisse et que vous vous entraînez, les protéines devraient se situer autour de 1,6 à 2,4 g par kg de poids corporel. Si votre répartition en donne bien moins, augmentez le pourcentage de protéines.",
    },
    { type: "h2", text: "Les macros pour la prise de muscle" },
    {
      type: "p",
      text: "Pour prendre du muscle, une méta-analyse d’études sur la musculation a montré que les bénéfices des protéines plafonnent autour de <b>1,6 g par kg de poids corporel et par jour</b>, certaines personnes en profitant jusqu’à environ 2,2 g/kg. Au-delà, des glucides supplémentaires alimentent mieux l’entraînement que des protéines supplémentaires. La répartition équilibrée ou riche en protéines, avec un léger surplus calorique, convient à la plupart des gens.",
    },
    { type: "h2", text: "Rester dans des fourchettes saines" },
    {
      type: "p",
      text: "Les apports nutritionnels de référence américains (Dietary Reference Intakes) fixent pour les adultes des fourchettes acceptables de 10 à 35 % des calories issues des protéines, 45 à 65 % des glucides et 20 à 35 % des lipides. La répartition équilibrée en est proche. Le style céto en sort délibérément, il ne convient donc pas à tout le monde ; consultez d’abord un médecin si vous êtes diabétique, avez une maladie rénale ou prenez des médicaments.",
    },
    { type: "h2", text: "Atteindre vos macros avec de vrais aliments" },
    {
      type: "ul",
      items: [
        "Construisez chaque repas autour d’une source de protéines : poulet, poisson, œufs, yaourt grec, lentilles, pois chiches ou agneau maigre.",
        "Adaptez les glucides à votre activité : plus les jours d’entraînement, moins les jours de repos.",
        "Considérez les lipides comme le reste ; l’huile d’olive, les noix et le tahini s’additionnent vite.",
        "Arriver à environ 10 g près de chaque objectif, c’est une bonne journée ; la régularité sur plusieurs semaines compte plus que la précision.",
        "Les plats composés comme le biryani, le mandi ou le tajine se suivent aussi ; notre guide pour <macroguide>suivre ses macros avec des plats traditionnels</macroguide> vous montre comment.",
      ],
    },
    { type: "h2", text: "Limites" },
    {
      type: "ul",
      items: [
        "La répartition ne vaut que ce que valent les calories qu’elle divise. Si vous ne connaissez pas encore votre objectif, commencez par le <calorie>calculateur de calories</calorie>.",
        "Les pourcentages ignorent la corpulence : une petite personne avec un programme riche en calories peut obtenir plus de protéines que nécessaire, et une grande personne avec un programme pauvre en calories trop peu. Vérifiez les grammes par kg de poids corporel.",
        "Il s’agit d’informations générales, qui ne constituent pas un avis médical. Les personnes atteintes d’une maladie rénale, de diabète ou d’autres pathologies, ainsi que les femmes enceintes ou allaitantes, doivent demander un avis personnalisé à un médecin ou à un diététicien diplômé.",
      ],
    },
    {
      type: "sources",
      sources: [
        {
          label: "Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids. National Academies Press, 2005.",
          url: "https://nap.nationalacademies.org/catalog/10490",
        },
        {
          label: "Morton RW et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. Br J Sports Med, 2018.",
          url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
        },
        {
          label: "Helms ER et al. A systematic review of dietary protein during caloric restriction in resistance trained lean athletes. Int J Sport Nutr Exerc Metab, 2014.",
          url: "https://pubmed.ncbi.nlm.nih.gov/24092765/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Quelle répartition des macros est la meilleure pour perdre du poids ?",
      answer:
        "Une répartition plus riche en protéines (environ 35 à 40 % de protéines) aide à préserver le muscle et à rester rassasié en déficit. C’est le déficit calorique lui-même, et non la répartition exacte, qui fait perdre du poids.",
    },
    {
      question: "De combien de protéines ai-je besoin pour prendre du muscle ?",
      answer:
        "Environ 1,6 g par kg de poids corporel et par jour suffit à la plupart des gens, et jusqu’à environ 2,2 g/kg peut aider certains. Répartissez-les sur 3 à 4 repas.",
    },
    {
      question: "Les macros comptent-elles plus que les calories ?",
      answer:
        "Les calories déterminent si votre poids change ; les macros influencent la part de ce changement qui est de la graisse ou du muscle, et votre ressenti. Fixez d’abord les calories, puis la répartition.",
    },
    {
      question: "Le régime céto est-il plus efficace pour perdre de la graisse ?",
      answer:
        "Pas à calories et protéines égales. Les régimes pauvres en glucides peuvent convenir à ceux qui les trouvent plus faciles à suivre, mais ils ne sont pas automatiquement plus efficaces, et ils ne conviennent pas à tout le monde.",
    },
    {
      question: "Puis-je suivre mes macros avec une alimentation halal ou traditionnelle ?",
      answer: `Oui. Les plats composés comme le biryani ou le tajine ont des profils de macros connus, et MyNutriRise couvre ${f.CUISINES} cuisines du monde avec les protéines, glucides et lipides par portion.`,
    },
  ],
});
