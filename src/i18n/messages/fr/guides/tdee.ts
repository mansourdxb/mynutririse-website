import type { Facts } from "@/data/facts";
import type en from "../../en/guides/tdee";

// Long-form explainer and FAQ for /tools/tdee-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <calorie>…</calorie> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Ce que signifie la DEJ" },
    {
      type: "p",
      text: "La DEJ, ou <b>dépense énergétique journalière</b>, correspond à toutes les calories que votre corps utilise en une journée. Mangez à peu près cette quantité et votre poids reste globalement stable : c’est pourquoi la DEJ est aussi appelée vos besoins d’entretien. Ce calculateur affiche votre DEJ côte à côte pour chaque niveau d’activité, afin que vous voyiez à quel point le mouvement quotidien modifie vos besoins.",
    },
    { type: "h2", text: "Où passent vos calories quotidiennes" },
    {
      type: "ul",
      items: [
        "<b>Métabolisme de base (MB) :</b> l’énergie qui vous maintient en vie au repos. Pour la plupart des gens, c’est la plus grande part, souvent autour de 60 à 70 % du total.",
        "<b>La digestion :</b> décomposer et stocker ce que vous mangez en utilise une petite part, généralement estimée à environ 10 %. Les protéines demandent plus d’énergie à digérer que les glucides ou les lipides.",
        "<b>Le mouvement quotidien :</b> marcher, rester debout, cuisiner, bouger sans y penser. Il varie énormément d’une personne à l’autre et c’est la part que vous pouvez modifier le plus facilement.",
        "<b>L’exercice :</b> l’entraînement planifié. Pour beaucoup de gens, sa part est plus faible qu’ils ne le pensent.",
      ],
    },
    { type: "h2", text: "La formule" },
    {
      type: "p",
      text: "Le calculateur estime le métabolisme de base avec l’<b>équation de Mifflin–St Jeor</b>, qu’une revue systématique de 2005 a jugée la plus fiable pour les adultes en bonne santé, puis le multiplie par un facteur d’activité standard :",
    },
    {
      type: "formula",
      items: [
        "Hommes :  MB = 10 × poids (kg) + 6,25 × taille (cm) − 5 × âge + 5",
        "Femmes :  MB = 10 × poids (kg) + 6,25 × taille (cm) − 5 × âge − 161",
        "DEJ = MB × facteur d’activité (1,2 à 1,9)",
      ],
    },
    {
      type: "table",
      head: ["Niveau d’activité", "Facteur", "Semaine type"],
      rows: [
        ["Sédentaire", "1,2", "Travail de bureau, peu ou pas d’exercice"],
        ["Activité légère", "1,375", "Exercice léger 1 à 3 jours par semaine"],
        ["Activité modérée", "1,55", "Exercice modéré 3 à 5 jours par semaine"],
        ["Activité intense", "1,725", "Exercice soutenu 6 à 7 jours par semaine"],
        ["Activité très intense", "1,9", "Travail physique plus entraînement"],
      ],
    },
    { type: "h2", text: "Exemple chiffré" },
    {
      type: "p",
      text: "Une femme de 35 ans, 165 cm et 68 kg : MB = 10 × 68 + 6,25 × 165 − 5 × 35 − 161 = <b>1 375 kcal</b>. Sa DEJ va d’environ 1 650 kcal si elle est sédentaire (× 1,2) à environ 2 131 kcal si elle s’entraîne 3 à 5 jours par semaine (× 1,55). Cet écart de près de 500 kcal par jour vient uniquement de l’activité.",
    },
    { type: "h2", text: "Choisir honnêtement votre niveau d’activité" },
    {
      type: "p",
      text: "Choisissez le niveau qui correspond à votre semaine type, pas à votre meilleure semaine. Un employé de bureau qui s’entraîne trois fois par semaine a généralement une activité « légère » ou « modérée », pas « intense ». En cas de doute, choisissez le niveau inférieur : il est plus facile d’ajouter de la nourriture ensuite que de se demander pourquoi la balance ne bouge pas.",
    },
    { type: "h2", text: "Utiliser votre DEJ pour perdre du poids" },
    {
      type: "p",
      text: "Manger environ 500 kcal sous votre DEJ entraîne au début une perte d’environ 0,5 kg par semaine, ce qui s’inscrit dans la recommandation du NHS de 0,5 à 1 kg par semaine. Ne descendez jamais sous 1 200 kcal par jour pour les femmes ou 1 500 kcal par jour pour les hommes sans surveillance médicale. Pour viser un poids cible à une date précise, utilisez le <deficit>calculateur de déficit calorique</deficit>.",
    },
    { type: "h2", text: "Utiliser votre DEJ pour prendre du muscle" },
    {
      type: "p",
      text: "Mangez environ 200 à 300 kcal au-dessus de votre DEJ, pratiquez une musculation progressive et consommez suffisamment de protéines (le <protein>calculateur de protéines</protein> vous donne un objectif). Si vous débutez et que votre poids augmente plus vite qu’environ 0,5 % de votre poids corporel par mois, réduisez le surplus.",
    },
    { type: "h2", text: "Comparer l’estimation à la réalité" },
    {
      type: "p",
      text: "Votre véritable DEJ se révèle dans vos propres données. Notez ce que vous mangez pendant 2 à 3 semaines et suivez votre poids moyen. Si la moyenne est stable, votre apport correspond à votre DEJ réelle ; si elle monte ou descend, ajustez par paliers de 100 à 200 kcal. N’oubliez pas que la DEJ diminue à mesure que vous perdez du poids : refaites le calcul tous les 4 à 5 kg.",
    },
    { type: "h2", text: "Limites" },
    {
      type: "ul",
      items: [
        "Les facteurs d’activité sont des catégories larges ; deux personnes à « activité modérée » peuvent différer de plusieurs centaines de kcal.",
        "L’équation ne connaît pas votre composition corporelle : les personnes très musclées peuvent dépenser plus que prévu.",
        "Elle n’est pas conçue pour les enfants, les femmes enceintes ou allaitantes, ni les personnes atteintes de maladies qui influencent le métabolisme.",
        "Il s’agit d’informations générales, qui ne constituent pas un avis médical. Parlez-en à un médecin ou à un diététicien diplômé pour un conseil personnalisé.",
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
        {
          label: "Hall KD et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011.",
          url: "https://pubmed.ncbi.nlm.nih.gov/21872751/",
        },
        {
          label: "NHS. Obésité : traitement (viser une perte de 0,5 à 1 kg par semaine).",
          url: "https://www.nhs.uk/conditions/obesity/treatment/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Quelle est la différence entre la DEJ et le métabolisme de base ?",
      answer:
        "Le métabolisme de base est l’énergie que vous dépensez au repos complet. La DEJ y ajoute la digestion, le mouvement quotidien et l’exercice : elle est donc toujours supérieure au métabolisme de base.",
    },
    {
      question: "Un calculateur de DEJ est-il précis ?",
      answer:
        "C’est une estimation de départ raisonnable, généralement à environ 10 % près pour les adultes en bonne santé. Suivre votre apport et votre poids pendant quelques semaines vous indique votre DEJ réelle.",
    },
    {
      question: "Dois-je manger l’équivalent de ma DEJ pour perdre du poids ?",
      answer:
        "Non. Manger l’équivalent de votre DEJ maintient votre poids. Pour perdre du poids, mangez environ 500 kcal de moins, mais pas moins de 1 200 kcal par jour pour les femmes ou 1 500 kcal par jour pour les hommes.",
    },
    {
      question: "Dois-je ajouter à ma DEJ les calories brûlées pendant l’exercice ?",
      answer:
        "Non. Le facteur d’activité inclut déjà votre exercice habituel. Ajouter à nouveau les calories de vos séances reviendrait à les compter deux fois.",
    },
    {
      question: "À quelle fréquence dois-je recalculer ma DEJ ?",
      answer:
        "Après chaque variation de poids de 4 à 5 kg, ou quand votre activité change beaucoup, par exemple avec un nouveau travail ou un nouveau programme d’entraînement.",
    },
  ],
});
