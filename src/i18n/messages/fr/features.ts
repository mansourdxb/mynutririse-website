import type { Facts } from "@/data/facts";
import type en from "../en/features";

export default (f: Facts): ReturnType<typeof en> => ({
  // /features page
  metaTitle: "Fonctionnalités : scan IA, recettes et jeûne",
  metaDescription:
    "Découvrez les fonctionnalités de MyNutriRise pour suivre votre nutrition, adopter de bonnes habitudes et atteindre vos objectifs bien-être.",
  pageTitle: "Des fonctionnalités puissantes pour vivre plus sainement",
  pageIntro:
    "Tout ce qu’il vous faut pour comprendre votre alimentation, améliorer vos habitudes et vous sentir au mieux — réuni dans une seule app au design soigné.",

  // Section header
  eyebrow: "Nutrition, jeûne et coaching tout-en-un",
  titleLine1: "Une seule app pour tout votre",
  titleLine2: "parcours bien-être",
  intro:
    "De l’analyse des repas par IA au coaching personnalisé, MyNutriRise réunit tous les aspects d’une vie saine dans une expérience unique et soignée.",

  // Deep-dive blocks. Titles use <hl>…</hl> for the highlighted part.
  nutrition: {
    eyebrow: "Nutrition",
    title: "Une nutrition <hl>intelligente</hl>",
    body: `Chaque bouchée, parfaitement comprise. Notre IA analyse vos repas en temps réel et suit non seulement les calories et les macros, mais aussi ${f.MICRONUTRIENT_COUNT} micronutriments essentiels, pour vous donner une vue complète de votre alimentation.`,
    bullets: [
      "Scan repas par IA : prenez une photo pour obtenir instantanément le détail nutritionnel",
      "Suivi intelligent des calories et des macros avec base de données alimentaire",
      `${f.MICRONUTRIENT_COUNT} micronutriments clés — fer, calcium, vitamines A, C, D, B12 et plus encore (Premium)`,
      "Comparez des aliments face à face grâce aux scores santé",
      "Statistiques sur les horaires des repas : vos habitudes selon le moment de la journée",
      "Lecteur de codes-barres et saisie vocale pour un suivi mains libres",
      "Unités métriques ou impériales, dans toutes les langues de l’app",
    ],
  },
  ecosystem: {
    eyebrow: "Écosystème",
    title: "Votre <hl>écosystème</hl> bien-être",
    body: "Jeûne, forme, hydratation, sommeil, recettes et programmes de repas fonctionnent ensemble. MyNutriRise relie toutes vos habitudes bien-être dans un système unique et intelligent qui s’adapte à votre mode de vie.",
    bullets: [
      `Jeûne intermittent avec ${f.FASTING_PLAN_COUNT} programmes (16:8, 5:2, OMAD, Ramadan) + Masterclass`,
      `${f.RECIPES} recettes et des cuisines du monde (afghane, arabe, bangladaise et plus encore)`,
      "Programmes de repas IA quotidiens ou hebdomadaires : céto, méditerranéen, végan et bien d’autres",
      "Planificateur de préparation des repas avec listes de courses générées automatiquement",
      `${f.EXERCISES_AND_ACTIVITIES} exercices et activités : marche, course, vélo, salle de sport, yoga, sports`,
      "Suivi de l’eau avec objectif quotidien, et sommeil importé d’Apple Health et de Health Connect",
      "Activités en direct pour vos jeûnes et entraînements sur l’écran verrouillé de votre iPhone",
    ],
  },
  coaching: {
    eyebrow: "Coaching IA",
    title: "Coaching intelligent <hl>et analyses</hl>",
    body: "Votre coach bien-être IA personnel comprend vos objectifs, vos habitudes et vos préférences. Il relie chaque donnée — de la nutrition au sommeil — pour vous donner des conseils concrets qui vous aident vraiment à progresser.",
    bullets: [
      "Coach nutritionnel IA avec idées de repas et conseils personnalisés",
      "Score bien-être (0-100) détaillé selon 6 habitudes",
      "Rapports hebdomadaires avec % de régularité, moyennes quotidiennes et partage",
      "Leçons de nutrition quotidiennes avec séries et actions à réaliser",
      "Suivi de la glycémie avec moyenne sur 7 jours et estimation de l’HbA1c",
      "Synchronisation santé : lit les pas, les entraînements et le sommeil depuis Apple Health et Health Connect",
    ],
  },
  recipes: {
    eyebrow: "Recettes",
    title: `${f.RECIPES} recettes <hl>de ${f.CUISINES} cuisines</hl>`,
    body: "Des kebabs turcs au pulao afghan, chaque recette est accompagnée de toutes ses valeurs nutritionnelles, et la cuisine de votre culture y a toute sa place — pas une entrée manquante dans la base de données.",
    bullets: [
      `${f.RECIPES} recettes avec de vraies quantités d’ingrédients et les étapes de préparation`,
      `${f.CUISINES} cuisines du monde, halal vérifié partout`,
      "Filtres intelligents : végétarien, céto, riche en protéines et sans gluten",
      "Importez des recettes depuis AllRecipes, BBC Good Food et d’autres sites de cuisine",
      "Parcourez par catégorie : petit-déjeuner, soupes, desserts et des dizaines d’autres",
      "Ajoutez n’importe quelle recette à votre journée en un geste",
    ],
    halalLink: "Pensée pour l’alimentation halal et les cuisines du monde : découvrez comment →",
  },
  fitness: {
    eyebrow: "Forme",
    title: "Entraînements, routines <hl>et exercices</hl>",
    body: "La nutrition n’est que la moitié de l’histoire. Entraînez-vous avec une bibliothèque d’exercices complète, suivez des routines prêtes à l’emploi ou créez les vôtres, et voyez chaque calorie brûlée s’intégrer directement à votre bilan quotidien.",
    bullets: [
      `${f.STRENGTH_EXERCISE_COUNT} exercices de musculation avec instructions pas à pas et muscles ciblés`,
      "Routines prêtes à l’emploi : Corps entier, Séance push, Séance pull et plus encore",
      "Créez vos propres routines avec séries, répétitions et historique des exercices",
      "Suivi cardio : marche, course, vélo, natation, yoga et plus encore",
      "Les calories brûlées alimentent automatiquement votre bilan énergétique quotidien",
      "Synchronisation avec Apple Health et Google Health Connect",
    ],
  },
  community: {
    eyebrow: "Communauté",
    title: "Restez motivés <hl>ensemble</hl>",
    body: "Le bien-être, c’est mieux entre amis. Débloquez des succès, grimpez dans les classements, relevez des défis hebdomadaires et partagez vos progrès. MyNutriRise transforme vos bonnes habitudes en un parcours gratifiant.",
    bullets: [
      "Badges de succès et système de niveaux basé sur l’XP",
      "Défis quotidiens et hebdomadaires : Hydrate Habit, Cinq jeûnes, Bâtisseur de série",
      "Amis et classements par série, XP, repas et précision",
      "Suivi des séries avec motivation quotidienne et hebdomadaire",
      "Photos de progression et mensurations (taille, poitrine, bras)",
      "Rapports hebdomadaires partageables et fonctionnalités Premium/Pro",
    ],
  },

  // Floating mock cards. {placeholders} are filled with demo values in code;
  // <count></count> marks where the animated number goes.
  cards: {
    nutritionAlt: "Résultat d’un scan repas par IA dans MyNutriRise affichant calories, macros et score santé",
    calories: "Calories",
    caloriesOf: "/ {n} kcal",
    kcalRemaining: "{n} kcal restantes",
    macros: "Macros",
    protein: "Protéines",
    carbs: "Glucides",
    fat: "Lipides",
    gramUnit: "g",

    wellnessAlt: "Tableau de bord MyNutriRise avec suivi des calories, de l’eau, de l’exercice et du sommeil",
    fasting: "Jeûne",
    remaining: "restant",
    protocol: "Protocole 16:8",
    sleep: "{h} h {m} min de sommeil",
    goodQuality: "Bonne qualité",

    coachingAlt: "Conversation avec le coach IA de MyNutriRise, avec conseils sur les repas, l’exercice et le poids",
    weeklyReport: "Rapport hebdomadaire",
    consistency: "Régularité",
    avgKcal: "kcal moy.",
    shareable: "Partageable · Export PDF",
    coachName: "Nutri · Coach IA",
    online: "En ligne",
    coachMessage: "Vos matinées affichent en moyenne 15 g de protéines : essayez un yaourt grec avec des noix. Ajouté à votre programme ✓",

    recipesAlt: "Écran des recettes MyNutriRise avec recettes saines et catégories",
    dishKcal: "<count></count> kcal",
    dishName: "Tajine de poulet",
    dishCuisine: "Marocaine",
    dishProtein: "<b>{n} g</b> de protéines",
    dishCarbs: "<b>{n} g</b> de glucides",
    dishFat: "<b>{n} g</b> de lipides",
    cuisinesCount: "<count></count> cuisines",
    cuisineChips: ["Turque", "Marocaine", "Pakistanaise", "Afghane", "Golfe"],
    cultureIncluded: "La cuisine de votre culture, incluse",

    workoutsAlt: "Routines d’entraînement MyNutriRise — Corps entier, Séance push et Séance pull avec boutons de démarrage",
    cardioAlt: "Suivi cardio MyNutriRise avec marche, course, vélo et natation",
    cardioTracker: "Suivi cardio",
    exercisesCount: `${f.STRENGTH_EXERCISE_COUNT} exercices`,
    muscleTargets: "Muscles ciblés et instructions",
    weekActivity: "Activité de la semaine",
    kcalBurned: "<count></count> kcal brûlées",
    activitySummary: "{min} min · {n} entraînements",

    motivationAlt: "Écran amis et classement de MyNutriRise avec le classement XP",
    level: "Niveau {n}",
    xpSuffix: " XP",
    xpProgress: "{a} / {b} XP",
    dayStreak: "Jours de suite",
    weekdayInitials: ["L", "M", "M", "J", "V", "S", "D"],
  },

  // Feature grid (features page only). Order matches the icons in code.
  grid: {
    eyebrow: "Et bien plus encore",
    title: "Tout ce qu’il vous faut",
    body: "Chaque outil, chaque analyse, chaque fonctionnalité est conçu pour accompagner l’ensemble de votre parcours bien-être.",
    hint: "Touchez une carte pour afficher l’aperçu de l’écran",
    flipBack: "Touchez pour retourner la carte",
    showPreview: "{name} — afficher l’aperçu de l’écran",
    hidePreview: "{name} — masquer l’aperçu de l’écran",
    screenAlt: "Écran {name}",
    items: [
      { name: "Photos de repas", desc: "Un journal alimentaire visuel de tous vos repas" },
      { name: "Calendrier nutritionnel", desc: "Une vue mensuelle de votre régularité" },
      { name: "Guide des couleurs", desc: `${f.FOOD_COLOR_GROUP_COUNT} groupes de couleurs d’aliments et leurs bienfaits` },
      { name: "Comparer des aliments", desc: "Comparaison nutritionnelle face à face" },
      { name: "Cuisines du monde", desc: "Afghane, arabe, bangladaise et plus encore" },
      { name: "Importer des recettes", desc: "Depuis AllRecipes, BBC Good Food et d’autres" },
      { name: "Liste de courses", desc: "Classée par rayon : fruits et légumes, laitages, viande, céréales" },
      { name: "Modèles de repas", desc: "Ajoutez vos repas fréquents en un instant" },
      { name: "Préparation de repas", desc: "Planificateur hebdomadaire avec liste de courses automatique" },
      { name: "Exporter les données", desc: `Rapports PDF couvrant de ${f.PDF_REPORT_MIN_DAYS} à ${f.PDF_REPORT_MAX_DAYS} jours` },
      { name: "Leçons quotidiennes", desc: "Éducation nutritionnelle avec séries" },
      { name: "Suivi glycémie", desc: "Moyenne sur 7 jours et HbA1c estimée" },
    ],
  },
});
