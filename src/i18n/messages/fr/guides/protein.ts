import type { Facts } from "@/data/facts";
import type en from "../../en/guides/protein";

// Long-form explainer and FAQ for /tools/protein-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <macro>…</macro> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Ce que ce calculateur vous indique" },
    {
      type: "p",
      text: "Ce calculateur vous donne une <b>fourchette quotidienne de protéines en grammes</b> selon votre poids corporel et votre objectif, puis la répartit entre vos repas. Les besoins en protéines s’expriment le mieux par kilogramme de poids corporel, car une femme de 55 kg et un homme de 95 kg ont besoin de quantités très différentes, même s’ils mangent le même nombre de calories.",
    },
    { type: "h2", text: "Les fourchettes et leur origine" },
    {
      type: "table",
      head: ["Objectif", "Grammes par kg de poids corporel et par jour", "Référence"],
      rows: [
        ["Santé générale, peu d’exercice", "0,8–1,0", "Apport nutritionnel recommandé (0,8 g/kg)"],
        ["Mode de vie actif", "1,2–1,6", "Recommandations de nutrition sportive pour les pratiquants réguliers"],
        ["Prendre du muscle", "1,6–2,2", "Méta-analyse d’études sur la musculation"],
        ["Perdre du gras, garder le muscle", "1,6–2,4", "Études sur des pratiquants de musculation en déficit calorique"],
      ],
    },
    {
      type: "p",
      text: "L’apport recommandé de 0,8 g/kg est fixé pour couvrir les besoins de base de presque tous les adultes en bonne santé ; c’est un minimum, pas un optimum pour les personnes actives. L’International Society of Sports Nutrition recommande 1,4 à 2,0 g/kg pour la plupart des personnes qui font de l’exercice. Une méta-analyse de 2018 a montré que le bénéfice des protéines pour la prise de muscle plafonne autour de <b>1,6 g/kg</b>, certaines personnes en profitant encore jusqu’à environ 2,2 g/kg. En déficit calorique, des apports plus élevés aident à préserver le muscle, c’est pourquoi la fourchette pour la perte de gras monte plus haut.",
    },
    {
      type: "formula",
      items: [
        "Protéines par jour (g) = poids corporel (kg) × grammes par kg pour votre objectif",
        "Par repas (g)          = protéines par jour ÷ nombre de repas",
      ],
    },
    { type: "h2", text: "Exemple chiffré" },
    {
      type: "p",
      text: "Un homme de 75 kg qui fait de la musculation et veut prendre du muscle : 75 × 1,6 = <b>120 g</b> à 75 × 2,2 = <b>165 g</b> par jour. Sur quatre repas, cela fait environ 30 à 41 g par repas : par exemple des œufs et du labneh au petit-déjeuner, une assiette de shawarma au poulet au déjeuner, un yaourt grec en collation et du poisson grillé avec des lentilles au dîner.",
    },
    { type: "h2", text: "Répartissez-les sur la journée" },
    {
      type: "p",
      text: "Les recommandations de nutrition sportive suggèrent environ 0,25 g par kg de poids corporel, soit à peu près 20 à 40 g de protéines par repas, répartis régulièrement toutes les 3 à 4 heures. La plupart des gens mangent peu de protéines au petit-déjeuner et beaucoup au dîner ; en avancer une partie est une amélioration facile.",
    },
    { type: "h2", text: "Les protéines pour perdre du poids" },
    {
      type: "p",
      text: "Quand vous mangez moins, votre corps peut dégrader du muscle en plus de la graisse. Garder un apport élevé en protéines et continuer la musculation permet que ce que vous perdez soit davantage de la graisse. Les protéines sont aussi le macronutriment le plus rassasiant, ce qui aide à gérer la faim. Fixez d’abord vos calories avec le <calorie>calculateur de calories</calorie> ou le <deficit>calculateur de déficit calorique</deficit>, puis vérifiez que vos protéines atteignent la fourchette indiquée ici.",
    },
    { type: "h2", text: "Les protéines pour la prise de muscle" },
    {
      type: "p",
      text: "Les protéines favorisent la croissance musculaire, mais elles ne remplacent pas l’entraînement. Les meilleurs résultats viennent d’une musculation progressive, de suffisamment de calories au total (un léger surplus) et du sommeil. Une fois atteint environ 1,6 g/kg, des calories supplémentaires issues des glucides alimentent généralement mieux votre entraînement que davantage de protéines. Pour voir comment les protéines s’articulent avec les glucides et les lipides, utilisez le <macro>calculateur de macros</macro>.",
    },
    { type: "h2", text: "De bonnes sources de protéines" },
    {
      type: "ul",
      items: [
        "Animales : poulet, dinde, bœuf et agneau maigres, poisson, œufs, yaourt grec, labneh, cottage cheese.",
        "Végétales : lentilles, pois chiches, ful medames, haricots, tofu, edamame. Combiner différentes sources végétales au cours de la journée couvre tous les acides aminés essentiels.",
        "Beaucoup de plats traditionnels sont de bonnes sources de protéines, par exemple les brochettes grillées, le shish taouk ou la soupe de lentilles ; notre guide pour <macroguide>suivre ses macros avec des plats traditionnels</macroguide> vous montre comment les enregistrer.",
      ],
    },
    { type: "h2", text: "Limites" },
    {
      type: "ul",
      items: [
        "Si vous avez beaucoup de masse grasse, utiliser votre poids total peut surestimer vos besoins ; baser le calcul sur un poids cible réaliste donne un chiffre plus raisonnable.",
        "Les personnes atteintes d’une maladie rénale ne doivent pas augmenter leurs protéines sans avis médical.",
        "Les besoins sont plus élevés pendant la grossesse et l’allaitement, et diffèrent pour les enfants et les personnes âgées.",
        "Il s’agit d’informations générales, qui ne constituent pas un avis médical. Parlez-en à un médecin ou à un diététicien diplômé pour un conseil personnalisé.",
      ],
    },
    {
      type: "sources",
      sources: [
        {
          label: "Jäger R et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017.",
          url: "https://pubmed.ncbi.nlm.nih.gov/28642676/",
        },
        {
          label: "Morton RW et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. Br J Sports Med, 2018.",
          url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
        },
        {
          label: "Helms ER et al. A systematic review of dietary protein during caloric restriction in resistance trained lean athletes. Int J Sport Nutr Exerc Metab, 2014.",
          url: "https://pubmed.ncbi.nlm.nih.gov/24092765/",
        },
        {
          label: "Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids. National Academies Press, 2005.",
          url: "https://nap.nationalacademies.org/catalog/10490",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "De combien de protéines ai-je besoin par jour ?",
      answer:
        "Au moins 0,8 g par kg de poids corporel pour les adultes en bonne santé qui font peu d’exercice, 1,2 à 1,6 g/kg si vous êtes actif, et environ 1,6 à 2,2 g/kg si vous cherchez à prendre du muscle.",
    },
    {
      question: "De combien de protéines ai-je besoin pour prendre du muscle ?",
      answer:
        "Les recherches suggèrent qu’environ 1,6 g par kg de poids corporel et par jour suffit à la plupart des gens, certains en profitant jusqu’à environ 2,2 g/kg, en association avec une musculation régulière.",
    },
    {
      question: "Dois-je manger plus de protéines quand je perds du poids ?",
      answer:
        "Oui : un apport plus élevé en protéines (environ 1,6 à 2,4 g/kg), associé à la musculation, vous aide à garder votre muscle en déficit calorique et facilite la gestion de la faim.",
    },
    {
      question: "Peut-on manger trop de protéines ?",
      answer:
        "Pour les adultes en bonne santé, les apports compris dans les fourchettes indiquées ici sont considérés comme sûrs. Les personnes atteintes d’une maladie rénale ou d’autres problèmes de santé doivent suivre l’avis de leur médecin.",
    },
    {
      question: "Combien de protéines puis-je absorber en un repas ?",
      answer:
        "Votre corps digère toutes les protéines que vous mangez ; répartir 20 à 40 g sur 3 à 5 repas est simplement une façon pratique de soutenir vos muscles tout au long de la journée.",
    },
    {
      question: "Peut-on avoir assez de protéines avec une alimentation végétale ?",
      answer:
        "Oui. Combinez légumineuses, soja, céréales, noix et graines au cours de la journée, et visez le haut de votre fourchette, car les protéines végétales sont un peu moins digestibles.",
    },
  ],
});
