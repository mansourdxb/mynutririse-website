import type { Facts } from "@/data/facts";
import type en from "../en/compare";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Alternative à MyFitnessPal : MyNutriRise vs MyFitnessPal (2026)",
  metaDescription:
    "MyNutriRise face à MyFitnessPal pour le suivi de l’alimentation halal et des cuisines du monde, l’enregistrement des repas par photo avec l’IA, le jeûne et les entraînements.",
  breadcrumb: "Comparatif",
  title: "MyNutriRise vs MyFitnessPal",
  intro: "Les deux comptent bien les calories. La différence : ce que vous mangez, et l’effort que demande l’enregistrement.",
  table: {
    feature: "Fonctionnalité",
    ours: "MyNutriRise",
    theirs: "MyFitnessPal",
  },
  rows: [
    {
      feature: "Bibliothèques halal et cuisines du monde",
      ours: `${f.CUISINES} cuisines du monde — turque, marocaine, pakistanaise, afghane, du Golfe et plus encore, halal vérifié partout`,
      theirs: "Vaste base de données alimentaire généraliste ; pas de bibliothèques halal ni de cuisines du monde dédiées",
    },
    {
      feature: "Analyse photo des repas par IA",
      ours: `Oui, incluse gratuitement (${f.FREE_PHOTO_SCANS_PER_DAY} analyses/jour), ${f.PREMIUM_PHOTO_SCANS_PER_DAY}/jour avec Premium`,
      theirs: "Meal Scan disponible avec les formules Premium",
    },
    {
      feature: "Jeûne intermittent",
      ours: `${f.FASTING_PLAN_COUNT} programmes, dont 16:8, 5:2, OMAD et un programme Ramadan`,
      theirs: "Suivi du jeûne inclus avec Premium",
    },
    {
      feature: "Programmes alimentaires guidés",
      ours: `${f.DIET_PLAN_COUNT} programmes de quatre semaines, dont « Moyen-Orient équilibré », « Compatible keto » et « Méditerranéen »`,
      theirs: "Programmes de repas disponibles avec Premium",
    },
    {
      feature: "Suivi des entraînements",
      ours: `Bibliothèque de ${f.STRENGTH_EXERCISE_COUNT} exercices de musculation, routines, cardio et synchronisation des objets connectés`,
      theirs: "Enregistrement des exercices avec une vaste base d’exercices",
    },
    {
      feature: "Langues de l’app",
      ours: "Anglais, arabe, allemand, espagnol, français, russe",
      theirs: "Nombreuses langues, dont l’anglais, l’espagnol, le français et l’allemand",
    },
    {
      feature: "Coach IA",
      ours: `Coach IA nutrition et forme intégré (${f.FREE_COACH_MESSAGES_PER_DAY} messages gratuits/jour)`,
      theirs: "Pas de coach IA conversationnel",
    },
    {
      feature: "Prix",
      ours: "Téléchargement gratuit ; Premium facultatif",
      theirs: "Version gratuite ; abonnement Premium avec essai de 7 jours",
    },
  ],
  disclaimer:
    "Comparatif fondé sur des informations publiques, juin 2026. Les fonctionnalités et les tarifs peuvent évoluer : vérifiez les détails actuels dans les deux applis.",
  pickTheirs: {
    title: "Pour qui MyFitnessPal est le bon choix",
    body: "Vous mangez surtout des plats occidentaux et des produits emballés, vous utilisez beaucoup le scan de codes-barres et vous voulez la plus grande base de données alimentaire participative du marché. MyFitnessPal est peaufinée depuis plus de dix ans et son enregistrement est excellent pour cet usage — surtout si vous y avez déjà des années d’historique.",
  },
  pickOurs: {
    title: "Pour qui MyNutriRise est le bon choix",
    body: "Votre assiette ressemble plutôt à un biryani, un tajine, un mandi ou un kabuli pulao — des plats que les bases de données généralistes ignorent. Vous voulez des programmes alimentaires compatibles halal, un programme de jeûne pour le Ramadan, une app qui parle arabe et l’enregistrement des repas par photo avec l’IA sans payer d’abord. C’est précisément le manque que MyNutriRise a été conçue pour combler — consultez la page <link>appli de nutrition halal</link> pour en savoir plus.",
  },
  pricing: {
    title: "Les tarifs comparés",
    body: "Les deux applis sont gratuites au téléchargement, avec des abonnements facultatifs. MyFitnessPal réserve le scan de codes-barres, Meal Scan et le jeûne à Premium (essai de 7 jours). MyNutriRise inclut l’analyse photo par IA et ses bibliothèques de cuisines du monde dès la version gratuite, Premium débloquant des limites d’IA plus élevées, les analyses complètes et tous les programmes de jeûne.",
  },
  faqTitle: "Questions fréquentes",
  faqs: [
    {
      question: "MyNutriRise est-elle une bonne alternative à MyFitnessPal ?",
      answer:
        "Si vous mangez des plats de votre culture ou halal, si vous jeûnez pendant le Ramadan ou si vous voulez l’enregistrement des repas par photo avec l’IA dans la version gratuite, MyNutriRise est faite pour vous. Si votre alimentation repose surtout sur des produits emballés occidentaux, la base de codes-barres plus étendue de MyFitnessPal vous conviendra peut-être mieux.",
    },
    {
      question: "MyFitnessPal est-elle compatible halal ?",
      answer: `MyFitnessPal dispose d’une vaste base de données alimentaire généraliste, mais pas de bibliothèques halal ni de cuisines du monde dédiées. MyNutriRise couvre ${f.CUISINES} cuisines du monde, vérifie le filtrage halal sur chaque plat de son catalogue et propose un programme alimentaire compatible halal, « Moyen-Orient équilibré ».`,
    },
    {
      question: "Quelle app propose la meilleure analyse photo par IA ?",
      answer: `MyNutriRise inclut l’analyse photo des repas par IA dès la version gratuite (${f.FREE_PHOTO_SCANS_PER_DAY} analyses/jour, ${f.PREMIUM_PHOTO_SCANS_PER_DAY}/jour avec Premium). Meal Scan de MyFitnessPal est disponible avec ses formules Premium.`,
    },
    {
      question: "Puis-je suivre le jeûne du Ramadan dans l’une ou l’autre app ?",
      answer: `MyNutriRise intègre un programme Ramadan dédié parmi ses ${f.FASTING_PLAN_COUNT} programmes de jeûne. MyFitnessPal propose le suivi du jeûne intermittent avec Premium, mais aucun programme spécifique au Ramadan.`,
    },
  ],
  summary: {
    title: "Le bilan, en toute honnêteté",
    body: "MyFitnessPal est une appli de suivi mature, dotée de l’une des plus grandes bases de données alimentaires qui existent : si vos repas sont surtout occidentaux et à base de produits emballés, elle vous servira bien. MyNutriRise est conçue pour les personnes que ces bases de données servent mal : si vous mangez du kabuli pulao, du nihari ou du tajine, si vous voulez des programmes compatibles halal, si vous jeûnez pendant le Ramadan ou préférez une app en arabe, c’est exactement pour vous que nous existons — avec l’enregistrement des repas par photo grâce à l’IA inclus dès la version gratuite.",
    quiz: "Essayez le <link>quiz programme en 1 minute</link> pour découvrir à quoi ressemblerait votre programme.",
  },
  ctaTitle: "Suivez ce que vous mangez vraiment",
});
