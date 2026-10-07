import type { Facts } from "@/data/facts";
import type en from "../en/blog";

/*
 * Article bodies are ordered blocks:
 *   { type: "h2", text } | { type: "p", text } | { type: "ul", items } | { type: "table", head, rows }
 * Text may contain <em>, <b> (bold) and link tags (named per article, see the page).
 */
export default (f: Facts): ReturnType<typeof en> => ({
  index: {
    metaTitle: "Guides nutrition et jeûne",
    metaDescription:
      "Des guides pratiques sur la nutrition, le jeûne, le suivi des macros et les bonnes habitudes, par l’équipe MyNutriRise.",
    title: "Le blog MyNutriRise",
    subtitle: "Des guides pratiques sur la nutrition, le jeûne et les habitudes qui durent.",
    breadcrumb: "Blog",
  },
  cta: {
    intermittentFasting: {
      heading: "Suivez votre jeûne automatiquement",
      body: "MyNutriRise propose le 16:8, le 5:2 et d’autres protocoles de jeûne, avec minuteurs, analyses et enregistrement des repas, dans une seule app.",
    },
    aiPhoto: {
      heading: "Essayez l’analyse des repas par IA",
      body: "MyNutriRise identifie vos aliments, estime les portions et enregistre calories et macros à partir d’une seule photo.",
    },
    halalMacros: {
      heading: "Votre cuisine, enfin bien suivie",
      body: "MyNutriRise propose des recettes compatibles halal et des bibliothèques de cuisines du monde : afghane, arabe, bangladaise et bien d’autres.",
    },
  },
  intermittentFasting: {
    title: "Jeûne intermittent 16:8 : le guide du débutant",
    description:
      "Ce qu’est la méthode de jeûne 16:8, comment elle fonctionne, à qui elle convient et comment se lancer sans commettre les erreurs classiques.",
    breadcrumb: "Jeûne intermittent 16:8",
    dateLabel: "9 juin 2026",
    readTime: "5 min de lecture",
    blocks: [
      {
        type: "p",
        text: "La méthode 16:8 est la forme de jeûne intermittent la plus populaire, et pour une bonne raison : elle est simple. Vous mangez pendant une fenêtre de 8 heures chaque jour et jeûnez pendant les 16 heures restantes, dont vous passez de toute façon la majeure partie à dormir.",
      },
      { type: "h2", text: "Comment ça marche" },
      {
        type: "p",
        text: "Un programme 16:8 classique consiste à terminer le dîner avant 20 h et à prendre son premier repas à midi le lendemain. Pendant la fenêtre de jeûne, vous buvez de l’eau, du café noir ou du thé non sucré. Plutôt que de changer <em>ce que</em> vous mangez, le 16:8 change <em>le moment</em> où vous mangez, ce qui, pour beaucoup, réduit naturellement le grignotage du soir et l’apport calorique total.",
      },
      { type: "h2", text: "Choisir sa fenêtre alimentaire" },
      {
        type: "p",
        text: "La meilleure fenêtre est celle qui s’adapte à votre vie. Les lève-tôt préfèrent souvent 10 h–18 h ; ceux qui aiment les repas en famille ou entre amis optent plutôt pour 12 h–20 h, afin de garder le dîner partagé. Si 16 heures vous semblent difficiles au début, commencez par du 12:12 ou du 14:10 et allongez progressivement : la régularité prime sur l’intensité.",
      },
      { type: "h2", text: "Les erreurs classiques du débutant" },
      {
        type: "ul",
        items: [
          "<b>Trop manger pendant la fenêtre.</b> Le jeûne n’annule pas les calories : suivez vos repas pour que la fenêtre ne devienne pas un buffet à volonté.",
          "<b>Négliger les protéines.</b> Avec moins de repas, il est facile de manquer de protéines : construisez chaque repas autour d’une source de protéines.",
          "<b>Oublier de s’hydrater.</b> Une bonne partie de vos apports habituels en eau provient de l’alimentation. Buvez plus d’eau que ce qui vous semble nécessaire.",
          "<b>Penser en tout ou rien.</b> Rompre votre jeûne un peu plus tôt de temps en temps ne change presque rien. C’est la tendance sur la semaine qui compte.",
        ],
      },
      { type: "h2", text: "16:8 et Ramadan : quelles différences ?" },
      {
        type: "p",
        text: `Le jeûne du Ramadan va approximativement de l’aube au coucher du soleil, sans nourriture <em>ni boisson</em>, alors que le 16:8 autorise l’eau et les boissons non sucrées à tout moment. L’hydratation est donc la principale différence : pendant le Ramadan, misez sur les boissons au suhoor et à l’iftar. La logique nutritionnelle reste la même dans les deux cas : vos besoins caloriques quotidiens ne changent pas, alors prévoyez vos deux repas pour les couvrir. Utilisez notre <calorieCalculator>calculateur de calories</calorieCalculator> gratuit pour connaître ce chiffre, et sachez que MyNutriRise propose un programme Ramadan dédié parmi ses ${f.FASTING_PLAN_COUNT} programmes de jeûne.`,
      },
      { type: "h2", text: "Qui doit être prudent ?" },
      {
        type: "p",
        text: "Le jeûne intermittent ne convient pas à tout le monde. Si vous êtes enceinte, si vous allaitez, si vous avez moins de 18 ans, si vous avez des antécédents de troubles du comportement alimentaire ou si vous suivez un traitement pour une maladie comme le diabète, parlez-en à votre médecin avant de modifier vos horaires de repas.",
      },
    ],
  },
  aiPhoto: {
    title: "Comment fonctionne vraiment le suivi des calories par photo avec l’IA",
    description:
      "Prenez une photo, obtenez calories et macros. Voici ce qui se passe en coulisses, et comment obtenir les résultats les plus précis.",
    breadcrumb: "Le suivi des calories par photo avec l’IA",
    dateLabel: "9 juin 2026",
    readTime: "4 min de lecture",
    blocks: [
      {
        type: "p",
        text: "La principale raison pour laquelle on abandonne le suivi des calories, ce sont les contraintes : chercher dans des bases de données, peser les portions, enregistrer chaque ingrédient un par un. Le suivi par photo avec l’IA s’attaque directement à ces contraintes : vous photographiez votre assiette et l’app fait le reste.",
      },
      { type: "h2", text: "Ce qui se passe quand vous prenez une photo" },
      {
        type: "p",
        text: "Les modèles modernes de reconnaissance des aliments fonctionnent en trois étapes. D’abord, l’IA détecte les différents aliments présents dans l’assiette : riz, poulet grillé, salade, sauce. Ensuite, elle estime la taille des portions à partir d’indices visuels comme le diamètre de l’assiette, la hauteur et la densité des aliments. Enfin, elle associe chaque élément à une base de données nutritionnelle pour calculer les calories, les protéines, les glucides et les lipides, puis vous présente le résultat pour que vous le confirmiez ou l’ajustiez.",
      },
      { type: "h2", text: "Quelle est sa précision ?" },
      {
        type: "p",
        text: "Pour les repas du quotidien, l’estimation par photo est généralement assez proche pour que vos totaux quotidiens restent pertinents ; surtout, elle est précise <em>de manière constante</em>, ce qui compte davantage que la perfection. Une méthode de suivi que vous utilisez vraiment chaque jour vaut mieux qu’une méthode précise que vous abandonnez au bout d’une semaine. Les plats composés, les huiles cachées et les aliments superposés sont les cas les plus difficiles : c’est pourquoi une bonne app vous permet de corriger l’estimation de l’IA en un geste.",
      },
      { type: "h2", text: "Cinq conseils pour de meilleures analyses" },
      {
        type: "ul",
        items: [
          "Photographiez légèrement de biais (30–45°) plutôt qu’à la verticale : cela aide l’IA à évaluer la hauteur des aliments.",
          "Cadrez l’assiette entière, en laissant le bord visible pour donner l’échelle.",
          "Un bon éclairage compte plus qu’un bon appareil photo.",
          "Pour les plats composés comme le biryani ou les ragoûts, indiquez le nom du plat quand l’app vous le demande : l’estimation sera plus précise.",
          "Vérifiez la portion estimée par l’IA pour les aliments très caloriques comme le riz, l’huile et les fruits à coque.",
        ],
      },
      { type: "h2", text: "Quand utiliser d’autres méthodes d’enregistrement" },
      {
        type: "p",
        text: "Les photos sont idéales pour les repas servis à l’assiette. Pour les produits emballés, le scan du code-barres est plus rapide et exact. Pour un café vite pris ou une poignée de dattes, la saisie vocale (« deux dattes et un latte ») l’emporte. La meilleure méthode combine les trois.",
      },
    ],
  },
  halalMacros: {
    title: "Suivre ses macros avec une alimentation halal et les plats de sa culture",
    description:
      "Kabuli pulao, mandi, biryani : les plats traditionnels méritent un vrai suivi. Comment enregistrer précisément les cuisines du monde.",
    breadcrumb: "Suivre ses macros",
    dateLabel: "9 juin 2026",
    readTime: "5 min de lecture",
    blocks: [
      {
        type: "p",
        text: "La plupart des applis de nutrition ont été pensées autour des menus occidentaux. Cherchez « kabuli pulao », « mandi » ou « machher jhol » et, bien souvent, vous ne trouverez rien, ou une entrée générique « riz à la viande » qui tombe à côté. C’est un vrai problème : si votre plat ne figure pas dans la base de données, soit vous l’estimez mal, soit vous arrêtez complètement le suivi.",
      },
      { type: "h2", text: "Pourquoi les plats traditionnels sont difficiles à suivre" },
      {
        type: "p",
        text: "Les plats traditionnels sont généralement composés : riz, viande, huiles, fruits à coque et sauces cuisinés ensemble. Leurs macros dépendent fortement de la préparation : un biryani fait maison et un biryani de restaurant peuvent différer de plusieurs centaines de calories par portion, principalement à cause de la matière grasse de cuisson. Les entrées génériques des bases de données ne peuvent pas refléter de tels écarts, et peser chaque ingrédient d’une recette familiale n’est pas réaliste.",
      },
      { type: "h2", text: "Une approche pratique" },
      {
        type: "ul",
        items: [
          "<b>Utilisez une app avec des bibliothèques de cuisines du monde.</b> Des entrées conçues spécialement pour les cuisines afghane, arabe et moyen-orientale, bangladaise et d’autres vous rapprochent bien plus de la réalité que des équivalents génériques.",
          "<b>Analysez vos assiettes en photo.</b> L’analyse par IA estime la portion réellement devant vous, ce qui est particulièrement utile pour les plats servis à partager, où « une portion » reste floue.",
          "<b>Surveillez la matière grasse, pas les épices.</b> Les épices sont négligeables sur le plan nutritionnel ; c’est dans le ghee et l’huile que se cachent les calories. Si un plat a l’air brillant, revoyez l’estimation des lipides à la hausse.",
          "<b>Enregistrez une fois vos plats de base.</b> Sauvegardez les plats habituels de votre foyer comme modèles de repas : les enregistrer à nouveau ne prendra plus qu’un geste.",
        ],
      },
      { type: "h2", text: "Les macros de plats populaires (par portion)" },
      {
        type: "p",
        text: "Des chiffres réels issus de la bibliothèque d’aliments de MyNutriRise, à utiliser comme repères pour estimer vos portions au restaurant ou à la maison :",
      },
      {
        type: "table",
        head: ["Plat", "kcal", "Protéines", "Glucides", "Lipides"],
        rows: [
          ["Biryani au poulet (pakistanais)", "480", "28 g", "52 g", "18 g"],
          ["Kabuli pulao (afghan)", "480", "28 g", "55 g", "16 g"],
          ["Nihari (pakistanais)", "450", "35 g", "15 g", "28 g"],
          ["Tajine de poulet (marocain)", "380", "30 g", "25 g", "18 g"],
          ["Adana kebab (turc)", "380", "32 g", "8 g", "24 g"],
          ["Koshari (égyptien)", "380", "14 g", "62 g", "8 g"],
          ["Chakchouka", "354", "18 g", "14 g", "24 g"],
        ],
      },
      {
        type: "p",
        text: "Retrouvez d’autres plats avec leurs valeurs nutritionnelles complètes sur notre <recipes>page recettes</recipes> ; pour transformer votre objectif calorique en objectifs en grammes, utilisez le <macroCalculator>calculateur de macros</macroCalculator>.",
      },
      { type: "h2", text: "Manger halal, c’est plus qu’une question d’ingrédients" },
      {
        type: "p",
        text: "Manger halal tout en poursuivant un objectif de forme ne devrait pas vous obliger à vous contenter de programmes « poulet-brocoli ». La voie durable consiste à garder les plats que vous aimez en ajustant les portions et la fréquence, et c’est exactement ce que permet un vrai suivi. Pendant le Ramadan, associer l’enregistrement des repas à un suivi du jeûne aide aussi à garder un suhoor et un iftar équilibrés, au lieu de passer d’un extrême à l’autre. Pour tout savoir sur le suivi compatible halal, consultez notre page <halalApp>appli de nutrition halal</halalApp>.",
      },
    ],
  },
});
