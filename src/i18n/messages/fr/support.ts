import type { Facts } from "@/data/facts";
import type en from "../en/support";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Aide",
  metaDescription:
    "Obtenez de l’aide pour MyNutriRise. Contactez notre équipe d’assistance, parcourez la FAQ ou proposez une fonctionnalité.",
  title: "Comment pouvons-nous vous aider ?",
  subtitle:
    "Une question, un problème à résoudre ou une idée à partager ? Nous sommes là pour vous.",
  cards: {
    email: {
      title: "Assistance par e-mail",
      text: "Nous répondons généralement sous 24 heures.",
      link: "support@mynutririse.com",
    },
    faq: {
      title: "FAQ",
      text: "Trouvez les réponses aux questions fréquentes sur l’app.",
      link: "Parcourir la FAQ →",
    },
    feature: {
      title: "Suggestion de fonctionnalité",
      text: "Dites-nous ce que vous aimeriez voir ensuite.",
      link: "contact@mynutririse.com",
    },
  },
  faqEyebrow: "Centre d’aide",
  faqTitle: "Questions fréquentes",
  faqSubtitle:
    "Parcourez les rubriques d’aide de l’app MyNutriRise. Vous ne trouvez pas ce qu’il vous faut ? Contactez notre équipe d’assistance.",
  questionCount: {
    // One form per CLDR plural category; languages use the ones they need.
    zero: "{n} question",
    one: "{n} question",
    two: "{n} questions",
    few: "{n} questions",
    many: "{n} questions",
    other: "{n} questions",
  },
  categories: {
    all: "Toutes les rubriques",
    gettingStarted: "Premiers pas",
    mealTracking: "Suivi des repas",
    nutrition: "Nutrition et recettes",
    health: "Suivi santé",
    fasting: "Jeûne",
    progress: "Progression et analyses",
    account: "Compte",
  },
  faqs: [
    {
      category: "gettingStarted",
      question: "Bienvenue dans MyNutriRise",
      answer:
        "MyNutriRise est votre compagnon nutrition et santé tout-en-un. Suivez vos repas grâce à la reconnaissance des aliments par IA, surveillez votre consommation d’eau, gérez votre poids, explorez des recettes du monde entier et bien plus encore, le tout dans une seule app.",
    },
    {
      category: "gettingStarted",
      question: "Configurer votre profil",
      answer:
        "Lors de la prise en main, MyNutriRise vous demande votre âge, votre poids, votre taille, votre niveau d’activité et vos objectifs. Ces informations servent à calculer vos objectifs quotidiens de calories et de macros. Vous pouvez les modifier à tout moment depuis votre profil.",
    },
    {
      category: "gettingStarted",
      question: "Votre premier scan repas",
      answer:
        "Touchez le bouton d’analyse (au centre de la barre inférieure) pour photographier n’importe quel repas. Notre IA identifie les ingrédients, estime les portions et fournit le détail nutritionnel complet. Vous pouvez modifier les résultats si nécessaire.",
    },
    {
      category: "gettingStarted",
      question: "Naviguer dans l’app",
      answer:
        "Utilisez les onglets du bas pour passer de l’Accueil au Jeûne, au Nutri Hub (actions rapides), aux Recettes, aux Statistiques et au Chat IA. Le Nutri Hub vous donne un accès rapide à toutes les fonctionnalités. Touchez Modifier pour personnaliser la disposition.",
    },
    {
      category: "mealTracking",
      question: "Comment fonctionne l’analyse des aliments par IA ?",
      answer:
        "Pointez votre appareil photo vers n’importe quel repas et touchez Analyser. Notre IA analyse l’image pour identifier les aliments, estimer la taille des portions et calculer les valeurs nutritionnelles : calories, protéines, glucides, lipides, fibres et plus encore.",
    },
    {
      category: "mealTracking",
      question: "Conseils pour de meilleures analyses",
      answer:
        "Pour des résultats plus précis : photographiez vos repas par le dessus, assurez-vous d’avoir un bon éclairage, gardez l’assiette au centre du cadre et cadrez-la en entier. L’IA fonctionne mieux lorsque chaque plat est bien visible.",
    },
    {
      category: "mealTracking",
      question: "Comment scanner des produits emballés ?",
      answer:
        "Touchez l’icône code-barres pour scanner un produit emballé. L’app recherche le produit dans une base de données alimentaire mondiale et remplit automatiquement les informations nutritionnelles. Si un code-barres ne figure pas dans notre base, vous pouvez saisir manuellement les valeurs nutritionnelles indiquées sur l’emballage.",
    },
    {
      category: "mealTracking",
      question: "Qu’est-ce que l’Ajout rapide ?",
      answer:
        "L’Ajout rapide vous permet d’enregistrer rapidement calories et macros sans analyse. Idéal lorsque vous connaissez approximativement les valeurs nutritionnelles ou que vous êtes pressé. Vous pouvez aussi rechercher le nom de n’importe quel aliment pour remplir automatiquement les données nutritionnelles depuis notre base.",
    },
    {
      category: "nutrition",
      question: "Comment fonctionnent les programmes IA ?",
      answer:
        "Les programmes IA génèrent un programme de repas hebdomadaire personnalisé selon votre objectif calorique, vos objectifs de macros, vos préférences alimentaires et vos cuisines préférées. Chaque programme comprend petit-déjeuner, déjeuner, dîner et collations. Touchez Actualiser pour régénérer n’importe quel repas.",
    },
    {
      category: "nutrition",
      question: "Puis-je explorer les cuisines du monde ?",
      answer:
        "Oui ! Parcourez des plats issus de cuisines du monde entier : moyen-orientale, méditerranéenne, asiatique, latino-américaine, indienne et bien d’autres. Chaque cuisine propose des plats authentiques avec leurs données nutritionnelles complètes, classés par type de repas.",
    },
    {
      category: "nutrition",
      question: "Comment fonctionnent les listes de courses ?",
      answer:
        "Touchez Liste de courses dans le Nutri Hub pour créer vos listes. Ajoutez des articles manuellement ou générez une liste à partir de votre programme de repas ou de vos recettes enregistrées. Cochez les articles au fil de vos achats et classez-les par catégorie.",
    },
    {
      category: "nutrition",
      question: "Puis-je importer des recettes depuis des sites web ?",
      answer:
        "Oui ! Collez l’URL d’une recette provenant d’un site de cuisine populaire et MyNutriRise extrait automatiquement les ingrédients et les informations nutritionnelles. Vérifiez et ajustez après l’import, puis enregistrez la recette dans votre collection personnelle.",
    },
    {
      category: "health",
      question: "Comment fonctionne le suivi de l’eau ?",
      answer:
        "MyNutriRise fixe un objectif d’eau quotidien personnalisé selon votre poids et votre niveau d’activité (environ 30 à 35 ml par kg de poids corporel). Touchez l’icône goutte d’eau pour enregistrer des verres ou des quantités personnalisées. Les boutons d’ajout rapide vous permettent d’enregistrer les contenances courantes en un geste. Activez les notifications pour recevoir des rappels d’hydratation réguliers.",
    },
    {
      category: "health",
      question: "Comment suivre mon poids ?",
      answer:
        "Enregistrez votre poids régulièrement (idéalement à la même heure chaque jour). MyNutriRise affiche l’évolution de votre poids dans le temps avec une courbe de moyenne lissée. Définissez un poids cible dans votre profil et l’app calcule un rythme d’évolution sain. Une perte de poids sans risque se situe entre 0,5 et 1 kg par semaine.",
    },
    {
      category: "health",
      question: "Puis-je connecter des objets connectés ?",
      answer:
        "MyNutriRise s’intègre à Health Connect (Android) et Apple Health (iOS) pour synchroniser les pas, la fréquence cardiaque, le sommeil et les données d’exercice de vos objets connectés. Ces données affinent le calcul de vos calories quotidiennes.",
    },
    {
      category: "health",
      question: "Quels micronutriments sont suivis ?",
      answer:
        "Au-delà des macros, MyNutriRise suit des micronutriments clés comme les fibres, le sodium, le sucre, le fer, le calcium et les vitamines à partir des repas que vous enregistrez. Comparez vos apports quotidiens aux valeurs recommandées et repérez d’éventuelles carences.",
    },
    {
      category: "fasting",
      question: "Qu’est-ce que le jeûne intermittent ?",
      answer:
        "Le jeûne intermittent est un mode d’alimentation qui alterne périodes de jeûne et périodes d’alimentation. Parmi les méthodes courantes : la méthode 16:8 (16 heures de jeûne, 8 heures d’alimentation), le régime 5:2 et l’Eat-Stop-Eat. Pendant le jeûne, votre corps commence à puiser dans les graisses pour produire de l’énergie, le taux d’insuline baisse et des processus de réparation cellulaire se mettent en place.",
    },
    {
      category: "fasting",
      question: "Comment commencer ma première semaine de jeûne ?",
      answer:
        "Commencez par un jeûne de 12 heures (par exemple de 20 h à 8 h). Vers le 3e ou 4e jour, passez à 14 heures. Entre le 5e et le 7e jour, essayez 16 heures si vous vous sentez bien. Restez hydraté avec de l’eau, des tisanes ou du café noir. Les difficultés courantes de la première semaine sont les maux de tête (buvez plus d’eau), l’irritabilité et les troubles du sommeil ; elles s’atténuent généralement après la première semaine.",
    },
    {
      category: "fasting",
      question: "Que puis-je consommer pendant le jeûne ?",
      answer:
        "Limitez-vous aux boissons sans calories : eau (plate ou gazeuse), café noir (sans sucre ni crème), tisanes et thé vert. Même une petite quantité de calories peut rompre votre jeûne et interrompre ses bienfaits métaboliques.",
    },
    {
      category: "fasting",
      question: "Quand dois-je arrêter de jeûner ?",
      answer:
        "Arrêtez de jeûner et consultez un médecin si vous ressentez des vertiges persistants ou des malaises, une fatigue extrême, d’importants changements d’humeur, un rythme cardiaque irrégulier ou une perte de poids rapide. Le jeûne ne convient pas à tout le monde : consultez votre médecin si vous êtes enceinte, si vous allaitez, si vous avez des antécédents de troubles du comportement alimentaire ou si vous êtes diabétique.",
    },
    {
      category: "progress",
      question: "Que montre le tableau de bord de progression ?",
      answer:
        "L’onglet Statistiques affiche vos tendances nutritionnelles, votre bilan calorique, la répartition de vos macros et la progression vers vos objectifs au fil du temps. Passez d’une vue quotidienne à hebdomadaire ou mensuelle. Suivez votre bilan calorique (calories consommées et brûlées) et repérez les tendances de vos macros.",
    },
    {
      category: "progress",
      question: "Comment fonctionne le calendrier nutritionnel ?",
      answer:
        "Le calendrier nutritionnel offre une vue d’ensemble du mois avec des jours colorés : vert pour un objectif atteint, jaune pour un objectif presque atteint, rouge pour un écart. Touchez un jour pour voir le détail de ce que vous avez mangé et sa comparaison avec vos objectifs.",
    },
    {
      category: "progress",
      question: "Qu’est-ce que le score bien-être ?",
      answer:
        "Votre score bien-être (0-100) prend en compte la qualité de votre alimentation, votre hydratation, votre niveau d’activité, votre sommeil et votre régularité. Il offre une vue globale de vos habitudes de santé. Concentrez-vous sur les domaines où votre score est le plus bas pour progresser le plus.",
    },
    {
      category: "progress",
      question: "Puis-je exporter mes données ?",
      answer:
        "Oui ! Exportez vos données nutritionnelles sous forme de rapports détaillés. Choisissez la période et les éléments à inclure : repas, macros, poids, eau, exercice. Exportez au format PDF ou CSV pour les partager avec votre médecin, votre nutritionniste ou votre coach sportif.",
    },
    {
      category: "account",
      question: "Que comprend Premium ?",
      answer:
        "MyNutriRise propose une version gratuite généreuse avec l’enregistrement des repas de base, le suivi de l’eau et un accès limité aux recettes. Premium débloque les programmes IA, les statistiques avancées, l’accès illimité aux recettes et les cuisines du monde. Gérez votre abonnement depuis l’App Store ou le Play Store.",
    },
    {
      category: "account",
      question: "Comment restaurer mes achats ?",
      answer:
        "Si vous réinstallez l’app ou changez d’appareil, votre statut Premium est automatiquement restauré lorsque vous vous connectez. Sinon, allez dans Paramètres > Abonnement > Restaurer les achats.",
    },
    {
      category: "account",
      question: "MyNutriRise propose-t-elle un mode sombre ?",
      answer:
        "Oui ! Activez ou désactivez le mode sombre dans les Paramètres. Par défaut, MyNutriRise suit le thème de votre système : si votre téléphone passe en mode sombre le soir, l’app suit automatiquement.",
    },
    {
      category: "account",
      question: "Comment supprimer mon compte ?",
      answer:
        "Pour supprimer votre compte et toutes les données associées, ouvrez le centre d’aide dans l’app et sélectionnez Supprimer le compte. Cette action est définitive et irréversible : tous vos repas enregistrés, votre progression et vos paramètres seront supprimés.",
    },
  ],
});
