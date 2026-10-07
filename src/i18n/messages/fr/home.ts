import type { Facts } from "@/data/facts";
import type en from "../en/home";

export default (f: Facts): ReturnType<typeof en> => ({
  jsonLd: {
    appDescription:
      "Suivez vos calories, analysez vos repas grâce à l’IA, suivez des programmes alimentaires halal et des cuisines du monde, surveillez votre jeûne et profitez d’un coaching nutritionnel intelligent.",
  },
  hero: {
    title: "Le suivi nutrition et forme <hl>pour la vraie vie</hl>",
    lead: "Prenez une photo et l’IA enregistre votre repas. Suivez des programmes alimentaires halal et des cuisines du monde, suivez votre jeûne et vos entraînements, et profitez d’un coaching intelligent — tout ce qu’il vous faut pour une vie plus saine et plus épanouie.",
    quizLink: "Vous ne savez pas par où commencer ? Obtenez votre programme personnalisé en 1 minute →",
    screenshotAlt: "Tableau de bord MyNutriRise",
    pills: ["Scan repas par IA", "Halal et cuisines du monde", `${f.RECIPES} recettes`],
  },
  pressBar: {
    heading: "Vu dans",
  },
  howItWorks: {
    eyebrow: "Comment ça marche",
    title: "Plus en forme en <hl>trois étapes simples</hl>",
    steps: [
      {
        title: "Téléchargez l’app et fixez votre objectif",
        description:
          "Installez MyNutriRise gratuitement, indiquez votre objectif — perdre du poids, prendre du muscle ou mieux manger — et choisissez un programme adapté à votre vie et à votre culture.",
      },
      {
        title: "Photographiez vos repas",
        description:
          "Prenez une photo : l’IA identifie les aliments, les portions, les calories et les macros. Vous pouvez aussi enregistrer à la voix, par code-barres ou par recherche, en quelques secondes.",
      },
      {
        title: "Constatez de vrais résultats",
        description:
          "Suivez vos tendances, laissez-vous coacher par l’IA et enchaînez des séries qui durent : les rapports hebdomadaires montrent précisément le chemin parcouru.",
      },
    ],
  },
  goals: {
    eyebrow: "Votre objectif, à votre façon",
    title: "Quel que soit votre objectif, <hl>on vous accompagne</hl>",
    items: [
      { title: "Perdre du poids", description: "Des objectifs caloriques et des programmes calibrés pour un rythme sain." },
      { title: "Prendre du muscle", description: "Des programmes riches en protéines, des routines d’entraînement et un journal d’exercices." },
      {
        title: "Manger halal et selon votre culture",
        description: `${f.CUISINES} cuisines — turque, pakistanaise, afghane et plus encore, halal vérifié partout.`,
      },
      { title: "Essayer le jeûne intermittent", description: "16:8, 5:2 et bien d’autres, avec minuteurs et analyses de jeûne." },
      { title: "Suivre vos macros", description: "Protéines, glucides et lipides, détaillés précisément chaque jour." },
      { title: "Manger équilibré", description: `${f.RECIPES} recettes saines et des programmes de repas générés par l’IA.` },
      { title: "Être plus en forme", description: "Entraînements, cardio et synchronisation avec Apple Health et Health Connect." },
      { title: "Prendre de bonnes habitudes", description: "Séries, leçons quotidiennes et un score bien-être qui vous motive." },
    ],
  },
  showcase: {
    eyebrow: "Découvrez-la en action",
    title: "De beaux écrans, <hl>des possibilités infinies</hl>",
    lead: "Chaque écran est conçu avec soin. Explorez l’expérience MyNutriRise dans son ensemble.",
    row1: [
      "Statistiques et tendances",
      "Minuteur de jeûne",
      "Programmes IA",
      "Recherche d’aliments",
      "Bibliothèque d’exercices",
      "Score bien-être",
      "Micronutriments",
      "Journal des repas",
      "Catégories de recettes",
      "Modèles de repas",
    ],
    row2: [
      "Programmes alimentaires",
      "Objets connectés",
      "Succès",
      "Défis",
      "Rapport hebdomadaire",
      "Évolution du poids",
      "Horaires des repas",
      "Actions rapides",
      "Cuisines du monde",
      "Comparer des aliments",
    ],
  },
  premium: {
    badge: "Premium",
    title: "Libérez tout votre potentiel",
    lead: "Premium vous offre des analyses plus poussées et des outils plus intelligents pour un bien-être optimal.",
    heroFeatures: [
      {
        title: "Micronutriments avancés",
        description: `Suivez ${f.MICRONUTRIENT_COUNT} vitamines et minéraux essentiels. Repérez vos carences grâce à des analyses détaillées et des suggestions intelligentes.`,
      },
      {
        title: "Analyses par IA",
        description:
          "Une analyse approfondie de vos habitudes alimentaires et de vos tendances, avec des plans d’amélioration personnalisés, adaptés à votre corps.",
      },
      {
        title: "Programmes de repas intelligents",
        description:
          "Des programmes quotidiens et hebdomadaires générés par l’IA et calibrés selon vos objectifs. Céto, méditerranéen, protéiné et bien d’autres.",
      },
      {
        title: "Coaching renforcé",
        description: `Plus de coaching IA : jusqu’à ${f.PREMIUM_COACH_MESSAGES_PER_DAY} messages au coach par jour au lieu de ${f.FREE_COACH_MESSAGES_PER_DAY}.`,
      },
    ],
    moreTitle: "Et encore plus d’outils Premium",
    moreFeatures: [
      {
        title: "Scan repas par IA",
        description: `Photographiez n’importe quel repas : l’IA identifie les aliments et les portions, et enregistre instantanément calories et macros. ${f.PREMIUM_PHOTO_SCANS_PER_DAY} analyses/jour.`,
      },
      { title: "Listes de courses intelligentes", description: "Des listes de courses générées automatiquement à partir de vos programmes de repas et de vos recettes." },
      {
        title: "Programmes et analyses de jeûne",
        description: "Accès complet aux protocoles de jeûne intermittent, avec des statistiques de progression détaillées.",
      },
      {
        title: "Export des données et rapports PDF",
        description: "Exportez vos données nutritionnelles sous forme de rapports PDF détaillés, pour vous ou pour votre diététicien.",
      },
      {
        title: "Comparateur d’aliments",
        description:
          "Comparez deux aliments que vous avez enregistrés selon leurs calories, leurs macros et un score santé pour faire de meilleurs choix.",
      },
      {
        title: "Intégration des objets connectés",
        description: "Synchronisez Apple Health et Google Health Connect pour l’activité, les pas et les calories brûlées.",
      },
      { title: "Planificateur de préparation des repas", description: "Planifiez et organisez la préparation de vos repas de la semaine, avec portions et listes de courses." },
      {
        title: "Score nutritionnel",
        description: "Obtenez chaque jour un score bien-être basé sur vos habitudes alimentaires et l’équilibre de vos nutriments.",
      },
      {
        title: "Tableau de bord statistiques",
        description: "Des graphiques et des tendances détaillés sur votre nutrition, votre poids et votre santé.",
      },
    ],
    trialButton: "Commencer l’essai gratuit",
  },
  science: {
    eyebrow: "Pourquoi nous faire confiance",
    title: "Fondée sur <hl>une vraie science</hl>",
    lead: "Pas de promesses miracles : des calculs nutritionnels reconnus, des données fiables et une IA qui montre son travail.",
    pillars: [
      {
        title: "Des calculs caloriques éprouvés",
        description:
          "Les objectifs quotidiens reposent sur l’équation de Mifflin–St Jeor — la formule utilisée par les diététiciens pour estimer les besoins énergétiques —, ajustée à votre objectif et à votre activité.",
      },
      {
        title: "Des données alimentaires vérifiées",
        description:
          "Les valeurs nutritionnelles proviennent de bases de données alimentaires vérifiées — pas d’estimations participatives — et couvrent les aliments du quotidien, les produits emballés et les plats du monde entier.",
      },
      {
        title: "Une IA que vous pouvez corriger",
        description:
          "Chaque analyse photo affiche son estimation avant l’enregistrement — aliments, portions et macros — pour que vous gardiez le contrôle. Un geste suffit pour tout ajuster.",
      },
      {
        title: "Honnête par conception",
        description:
          "Pas d’objectifs de régime express : des seuils caloriques minimaux vous protègent contre les apports insuffisants, et un rythme hebdomadaire durable vaut mieux que des promesses extrêmes.",
      },
    ],
  },
  community: {
    eyebrow: "Communauté",
    title: "Les créateurs qui suivent leur nutrition avec nous",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Vos questions, nos réponses",
    more: "D’autres questions ? <link>Consultez le centre d’aide</link>",
    items: [
      {
        question: "MyNutriRise est-elle gratuite ?",
        answer:
          "Oui. MyNutriRise est gratuite à télécharger et à utiliser, y compris l’analyse photo des repas par IA dans une limite quotidienne. Premium est facultatif : il augmente cette limite et débloque le suivi des micronutriments et les rapports PDF. Vous pouvez résilier à tout moment.",
      },
      {
        question: "Prend-elle en charge l’alimentation halal et les cuisines du monde ?",
        answer: `Oui. MyNutriRise couvre ${f.CUISINES} cuisines du monde — turque, marocaine, persane, pakistanaise, afghane, bangladaise, du Golfe et émiratie, et bien d’autres —, ainsi que des recettes compatibles halal, le programme alimentaire « Moyen-Orient équilibré » et même un programme de jeûne pour le Ramadan. L’app parle aussi anglais, arabe, allemand, espagnol, français et russe.`,
      },
      {
        question: "Comment fonctionne l’analyse des repas par IA ?",
        answer:
          "Photographiez votre assiette : l’IA identifie les aliments, estime les portions et enregistre automatiquement calories et macros. Vous pouvez aussi enregistrer à la voix, en scannant un code-barres ou par recherche.",
      },
      {
        question: "Puis-je aussi suivre mon jeûne et mes entraînements ?",
        answer:
          "Oui : des protocoles de jeûne intermittent comme le 16:8 et le 5:2, avec minuteurs et analyses, ainsi que des routines d’entraînement, une bibliothèque d’exercices et la synchronisation avec Apple Health et Google Health Connect.",
      },
      {
        question: "Sur quels appareils est-elle disponible ?",
        answer:
          "MyNutriRise est conçue pour les iPhone et les téléphones Android. Téléchargez-la via les liens vers les boutiques d’applications sur cette page : vos données se synchronisent avec votre compte.",
      },
    ],
  },
  cta: {
    title: "Commencez votre parcours bien-être dès aujourd’hui",
    lead: "Une vie plus saine, à un téléchargement près.",
  },
});
