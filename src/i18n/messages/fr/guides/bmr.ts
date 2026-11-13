import type { Facts } from "@/data/facts";
import type en from "../../en/guides/bmr";

// Long-form explainer and FAQ for /tools/bmr-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <calorie>…</calorie> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Ce que signifie le métabolisme de base" },
    {
      type: "p",
      text: "Votre métabolisme de base (MB) est l’énergie que votre corps utilise au repos complet pour vous maintenir en vie : respirer, faire circuler le sang, maintenir la température corporelle et réparer les cellules. Pour la plupart des gens, c’est la plus grande part de la dépense énergétique quotidienne, généralement autour de 60 à 70 % du total, c’est pourquoi tout objectif calorique part de lui.",
    },
    { type: "h2", text: "La formule : Mifflin–St Jeor" },
    {
      type: "p",
      text: "Ce calculateur utilise l’<b>équation de Mifflin–St Jeor</b>, publiée en 1990. Une revue systématique de 2005 comparant les équations courantes l’a jugée la plus fiable pour les adultes en bonne santé, en situation d’obésité ou non.",
    },
    {
      type: "formula",
      items: [
        "Hommes :  MB = 10 × poids (kg) + 6,25 × taille (cm) − 5 × âge + 5",
        "Femmes :  MB = 10 × poids (kg) + 6,25 × taille (cm) − 5 × âge − 161",
      ],
    },
    {
      type: "p",
      text: "L’équation reflète trois tendances : les corps plus lourds et plus grands ont besoin de plus d’énergie, la dépense au repos diminue lentement avec l’âge, et les hommes dépensent en moyenne plus au repos que les femmes de même gabarit parce qu’ils ont généralement plus de muscle.",
    },
    { type: "h2", text: "Exemple chiffré" },
    {
      type: "p",
      text: "Une femme de 28 ans, 162 cm et 60 kg : 10 × 60 + 6,25 × 162 − 5 × 28 − 161 = 600 + 1 012,5 − 140 − 161 = <b>environ 1 312 kcal par jour</b>. C’est ce qu’elle dépenserait en restant allongée toute la journée, avant de marcher, de travailler ou de faire de l’exercice.",
    },
    { type: "h2", text: "Ce qui influence votre métabolisme de base" },
    {
      type: "ul",
      items: [
        "<b>La corpulence :</b> un corps plus grand a plus de tissus à entretenir, donc le métabolisme de base augmente avec le poids et la taille.",
        "<b>La masse musculaire :</b> le muscle consomme plus d’énergie au repos que la graisse, donc deux personnes de même poids peuvent avoir un métabolisme de base différent.",
        "<b>L’âge :</b> le métabolisme de base tend à baisser lentement à l’âge adulte, en grande partie parce que la masse musculaire diminue si vous ne vous entraînez pas.",
        "<b>Le sexe :</b> les hommes ont généralement un métabolisme de base plus élevé que les femmes de même gabarit, en raison de différences de composition corporelle.",
        "<b>Les hormones et la santé :</b> le fonctionnement de la thyroïde, la maladie, la fièvre et certains médicaments peuvent augmenter ou diminuer la dépense au repos.",
        "<b>Les déficits importants et prolongés :</b> manger bien en dessous de vos besoins pendant longtemps peut rendre le corps plus économe, l’une des raisons pour lesquelles les régimes draconiens sont difficiles à tenir.",
      ],
    },
    { type: "h2", text: "Métabolisme de base ou métabolisme au repos ?" },
    {
      type: "p",
      text: "Vous verrez peut-être aussi le terme « métabolisme au repos » (RMR en anglais). Au sens strict, le métabolisme de base se mesure dans des conditions de laboratoire plus strictes (après une nuit de sommeil, à jeun, à une température confortable), tandis que le métabolisme au repos se mesure dans des conditions plus souples et donne une valeur légèrement plus élevée. Dans l’usage courant, les deux termes sont interchangeables, et l’équation de Mifflin–St Jeor a été construite à partir de mesures au repos.",
    },
    { type: "h2", text: "Du métabolisme de base à un objectif calorique quotidien" },
    {
      type: "p",
      text: "Le métabolisme de base n’est que la part au repos. Pour savoir combien vous dépensez dans une journée normale, multipliez-le par un facteur d’activité compris entre 1,2 (surtout assis) et 1,9 (travail physique plus entraînement). Ce total correspond à vos besoins d’entretien, et le <calorie>calculateur de calories</calorie> fait cette étape pour vous.",
    },
    {
      type: "ul",
      items: [
        "<b>Pour perdre du poids :</b> mangez en dessous de vos besoins d’entretien, pas en dessous de votre métabolisme de base. Un déficit d’environ 500 kcal par rapport à l’entretien est un point de départ courant, avec un plancher de 1 200 kcal par jour pour les femmes et de 1 500 kcal par jour pour les hommes.",
        "<b>Pour prendre du muscle :</b> mangez légèrement au-dessus de vos besoins d’entretien (environ 300 kcal) et faites de la musculation. Avec le temps, le muscle supplémentaire augmente un peu votre métabolisme de base.",
        "<b>Pour répartir vos calories :</b> utilisez le <macro>calculateur de macros</macro> pour transformer votre objectif en protéines, glucides et lipides.",
      ],
    },
    { type: "h2", text: "Le jeûne fait-il baisser le métabolisme de base ?" },
    {
      type: "p",
      text: "Une alimentation limitée dans le temps chaque jour, comme le 16:8, ou le jeûne de l’aube au coucher du soleil pendant le Ramadan, a peu d’effet durable sur la dépense au repos tant que l’apport total est suffisant. Le ralentissement du métabolisme devient un problème en cas d’apport très faible et prolongé. Pendant le Ramadan, vos besoins au repos restent les mêmes : prévoyez le suhoor et l’iftar pour les couvrir ; notre <ifguide>guide du 16:8</ifguide> explique le fonctionnement des fenêtres de jeûne.",
    },
    { type: "h2", text: "Limites" },
    {
      type: "ul",
      items: [
        "Toute équation estime une moyenne. Deux personnes avec des données identiques peuvent différer de 10 % ou plus.",
        "Elle ne tient pas compte de la composition corporelle. Les personnes très musclées ont généralement un métabolisme de base plus élevé que prévu.",
        "La seule façon de mesurer précisément le métabolisme de base est la calorimétrie indirecte, en clinique ou en laboratoire.",
        "La maladie, les troubles de la thyroïde, certains médicaments, la grossesse et l’allaitement modifient les besoins énergétiques d’une manière que la formule ne prend pas en compte.",
        "Il s’agit d’informations générales, qui ne constituent pas un avis médical. Consultez un médecin ou un diététicien diplômé pour des conseils personnalisés.",
      ],
    },
    {
      type: "sources",
      sources: [
        {
          label: "Mifflin MD et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990.",
          url: "https://pubmed.ncbi.nlm.nih.gov/2305711/",
        },
        {
          label: "Frankenfield D et al. Comparison of predictive equations for resting metabolic rate in healthy nonobese and obese adults: a systematic review. J Am Diet Assoc, 2005.",
          url: "https://pubmed.ncbi.nlm.nih.gov/15883556/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Quel est un métabolisme de base normal ?",
      answer:
        "La plupart des adultes se situent à peu près entre 1 200 et 2 000 kcal par jour selon leur corpulence, leur âge et leur sexe. Les corps plus grands et plus jeunes dépensent davantage au repos, et le métabolisme de base diminue doucement avec l’âge.",
    },
    {
      question: "Le métabolisme de base correspond-il aux calories que je dois manger ?",
      answer:
        "Non. Le métabolisme de base est ce que vous dépensez au repos complet. Vos besoins quotidiens correspondent au métabolisme de base multiplié par un facteur d’activité ; le calculateur de calories donne le chiffre complet.",
    },
    {
      question: "Dois-je manger moins que mon métabolisme de base pour perdre du poids ?",
      answer:
        "En général, non. Créez plutôt un déficit à partir de vos besoins d’entretien, et ne descendez pas sous 1 200 kcal par jour pour les femmes ou 1 500 kcal par jour pour les hommes sans surveillance médicale.",
    },
    {
      question: "Le jeûne fait-il baisser mon métabolisme de base ?",
      answer:
        "Le jeûne intermittent quotidien, y compris le jeûne du Ramadan, a peu d’effet sur le métabolisme de base lorsque l’apport total est suffisant. C’est une restriction sévère et prolongée qui entraîne un ralentissement notable.",
    },
    {
      question: "Comment augmenter mon métabolisme de base ?",
      answer:
        "Prendre du muscle grâce à la musculation, avec suffisamment de protéines, est le moyen le plus fiable. Le muscle consomme plus d’énergie au repos que le tissu adipeux.",
    },
  ],
});
