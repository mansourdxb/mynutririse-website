import type { Facts } from "@/data/facts";
import type en from "../en/press";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Kit presse",
  metaDescription:
    "Ressources presse de MyNutriRise : présentation, fiche d’information, éléments de marque et contact médias.",
  title: "Kit presse",
  intro: "Tout ce qu’il vous faut pour parler de MyNutriRise.",
  boilerplateTitle: "Présentation",
  boilerplate: `MyNutriRise est une application de nutrition et de remise en forme propulsée par l’IA, conçue pour les personnes que les grandes applis de suivi oublient. Il suffit de photographier n’importe quel repas pour que l’IA enregistre instantanément les calories et les macros — avec ${f.RECIPES} recettes et ${f.CUISINES} cuisines du monde, des programmes alimentaires compatibles halal, ${f.FASTING_PLAN_COUNT} programmes de jeûne intermittent dont un programme pour le Ramadan, le suivi des entraînements et un coach IA. Disponible sur iOS et Android en anglais, arabe, allemand, espagnol, français et russe.`,
  factSheetTitle: "Fiche d’information",
  factSheet: [
    { key: "Produit", value: "MyNutriRise — suivi nutrition et forme propulsé par l’IA" },
    { key: "Plateformes", value: "iOS et Android" },
    { key: "Langues", value: "Anglais, arabe, allemand, espagnol, français, russe" },
    {
      key: "Recettes",
      value: `${f.RECIPES}, avec de vraies quantités d’ingrédients et les étapes de préparation, réparties sur ${f.DISHES} plats`,
    },
    { key: "Cuisines", value: `${f.CUISINES} cuisines du monde, filtrage halal vérifié sur chaque plat` },
    {
      key: "Programmes de jeûne",
      value: `${f.FASTING_PLAN_COUNT} programmes, dont 16:8, 5:2, OMAD et un programme pour le Ramadan`,
    },
    { key: "Programmes alimentaires", value: `${f.DIET_PLAN_COUNT} programmes guidés de 4 semaines, dont « Moyen-Orient équilibré »` },
    {
      key: "Bibliothèque d’entraînements",
      value: `${f.STRENGTH_EXERCISE_COUNT} exercices de musculation, ${f.CARDIO_ACTIVITY_COUNT} activités cardio et sportives, et des routines prêtes à l’emploi`,
    },
    { key: "Tarifs", value: "Téléchargement gratuit ; abonnement Premium facultatif" },
    { key: "Site web", value: "www.mynutririse.com" },
  ],
  assetsTitle: "Éléments de marque",
  logo: "Logo de l’app (PNG)",
  screenshots: "Captures d’écran de l’app : disponibles sur demande, ou utilisez les écrans présentés sur ce site.",
  colors: "Couleurs de la marque : émeraude <code>#10b981</code>, blanc <code>#FFFFFF</code>, ardoise <code>#1e293b</code>",
  contactTitle: "Contact médias",
  contact: "Pour une interview, un accès test ou toute autre demande : <link>contact@mynutririse.com</link>",
});
