import type { Facts } from "@/data/facts";
import type en from "../../en/guides/calorie";

// Long-form explainer and FAQ for /tools/calorie-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <macro>…</macro> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Ce que ce calculateur vous indique" },
    {
      type: "p",
      text: "Le calculateur estime vos <b>besoins d’entretien</b> : l’énergie que vous dépensez au cours d’une journée type, de sorte que manger cette quantité maintient votre poids à peu près stable. À partir de là, il affiche trois objectifs : un déficit modéré pour perdre du poids, l’entretien, et un léger surplus pour prendre du muscle. Chaque chiffre est une estimation fondée sur des moyennes : considérez-le comme un point de départ à affiner, pas comme une prescription.",
    },
    { type: "h2", text: "La formule : Mifflin–St Jeor et un facteur d’activité" },
    {
      type: "p",
      text: "Le calculateur estime d’abord votre dépense énergétique au repos (le métabolisme de base, ou MB) avec l’<b>équation de Mifflin–St Jeor</b>. Une revue des équations prédictives publiée en 2005 l’a jugée la plus fiable pour les adultes en bonne santé : elle tombe à moins de 10 % des valeurs mesurées pour davantage de personnes que les autres équations comparées.",
    },
    {
      type: "formula",
      items: [
        "Hommes :  MB = 10 × poids (kg) + 6,25 × taille (cm) − 5 × âge + 5",
        "Femmes :  MB = 10 × poids (kg) + 6,25 × taille (cm) − 5 × âge − 161",
        "Entretien (DEJ) = MB × facteur d’activité",
      ],
    },
    {
      type: "p",
      text: "Le métabolisme de base ne couvre que l’énergie dépensée au repos. Pour tenir compte du travail, de la marche et de l’entraînement, on le multiplie par un facteur d’activité, ce qui donne votre dépense énergétique journalière (DEJ) :",
    },
    {
      type: "table",
      head: ["Niveau d’activité", "Facteur", "Semaine type"],
      rows: [
        ["Sédentaire", "1,2", "Travail de bureau, peu ou pas d’exercice"],
        ["Activité légère", "1,375", "Exercice léger 1 à 3 jours par semaine"],
        ["Activité modérée", "1,55", "Exercice modéré 3 à 5 jours par semaine"],
        ["Activité intense", "1,725", "Exercice soutenu 6 à 7 jours par semaine"],
        ["Activité très intense", "1,9", "Travail physique plus entraînement"],
      ],
    },
    {
      type: "p",
      text: "La plupart des gens surestiment leur niveau d’activité. Si vous hésitez entre deux niveaux, choisissez le plus bas et ajustez ensuite.",
    },
    { type: "h2", text: "Exemple chiffré" },
    {
      type: "p",
      text: "Un homme de 30 ans, 175 cm et 75 kg, qui s’entraîne 3 à 5 jours par semaine : MB = 10 × 75 + 6,25 × 175 − 5 × 30 + 5 = <b>1 699 kcal</b>. Multiplié par 1,55, son entretien est d’environ <b>2 633 kcal par jour</b>. Le calculateur lui proposerait environ 2 133 kcal pour perdre du poids et environ 2 933 kcal pour prendre du muscle.",
    },
    { type: "h2", text: "Utiliser votre chiffre pour perdre du poids" },
    {
      type: "p",
      text: "L’objectif de perte de poids retire 500 kcal à vos besoins d’entretien. À court terme, cela représente environ 0,5 kg par semaine, ce qui s’inscrit dans la recommandation du NHS de 0,5 à 1 kg par semaine. Au fil des mois, la perte ralentit généralement : à mesure que vous vous allégez, vous dépensez un peu moins, et les recherches sur le bilan énergétique montrent que la règle simple des « 7 700 kcal par kg » surestime les résultats à long terme. Prévoyez de refaire le calcul tous les 4 à 5 kg.",
    },
    {
      type: "p",
      text: "Le calculateur ne propose jamais moins de <b>1 200 kcal par jour pour les femmes ni 1 500 kcal par jour pour les hommes</b>, même si la soustraction descendait plus bas. En dessous de ces seuils, il devient difficile d’obtenir assez de protéines, de vitamines et de minéraux, et cela ne doit se faire que sous surveillance médicale.",
    },
    {
      type: "ul",
      items: [
        "Gardez un apport élevé en protéines (voir le <macro>calculateur de macros</macro>) pour que ce que vous perdez soit davantage de la graisse que du muscle.",
        "Pesez-vous plusieurs fois par semaine et comparez les moyennes hebdomadaires, pas les jours isolés.",
        "Si votre moyenne n’a pas bougé après 2 à 3 semaines de suivi rigoureux, réduisez votre apport de 100 à 200 kcal.",
      ],
    },
    { type: "h2", text: "Utiliser votre chiffre pour prendre du muscle" },
    {
      type: "p",
      text: "L’objectif de prise de muscle ajoute 300 kcal à vos besoins d’entretien. Un léger surplus, associé à un entraînement de musculation progressif et à suffisamment de protéines, favorise la croissance musculaire tout en limitant la prise de graisse. Si vous débutez, visez une prise d’environ 0,5 à 1 % de votre poids corporel par mois ; si la balance monte beaucoup plus vite, l’excédent est probablement surtout de la graisse, alors retirez 100 à 200 kcal.",
    },
    { type: "h2", text: "Les calories pendant le Ramadan et le jeûne intermittent" },
    {
      type: "p",
      text: "Le jeûne change <em>le moment</em> où vous mangez, pas la quantité d’énergie dont votre corps a besoin. Pendant le Ramadan, répartissez votre objectif quotidien entre le suhoor et l’iftar : misez sur les protéines et les glucides à digestion lente au suhoor, rompez le jeûne avec de l’eau et des dattes, et gardez un iftar équilibré plutôt qu’une seule assiette démesurée. La même logique s’applique au 16:8 ; notre <ifguide>guide du 16:8 pour débutants</ifguide> détaille tout cela.",
    },
    { type: "h2", text: "Limites" },
    {
      type: "ul",
      items: [
        "Les équations décrivent des moyennes. Vos besoins d’entretien réels peuvent s’en écarter de 10 % ou plus selon la génétique, la masse musculaire, le sommeil et vos déplacements quotidiens.",
        "La formule ne connaît pas votre composition corporelle. Les personnes très musclées dépensent souvent plus que prévu, et celles qui ont beaucoup de masse grasse peuvent être surestimées.",
        "Elle n’est pas conçue pour les enfants, les femmes enceintes ou allaitantes, ni les personnes atteintes de maladies qui influencent le métabolisme.",
        "Il s’agit d’informations générales, qui ne constituent pas un avis médical. Si vous avez un problème de santé, prenez des médicaments ou avez des antécédents de troubles du comportement alimentaire, parlez-en à un médecin ou à un diététicien diplômé avant de changer votre alimentation.",
      ],
    },
    {
      type: "p",
      text: "Étape suivante : transformez votre objectif en protéines, glucides et lipides avec le <macro>calculateur de macros</macro>, ou ne regardez que la partie au repos du calcul avec le <bmr>calculateur de métabolisme de base</bmr>.",
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
      question: "Combien de calories dois-je manger pour perdre du poids ?",
      answer:
        "Commencez environ 500 kcal sous vos besoins d’entretien, ce qui correspond au début à une perte d’environ 0,5 kg par semaine. Ne descendez pas sous 1 200 kcal par jour pour les femmes ou 1 500 kcal par jour pour les hommes sans surveillance médicale.",
    },
    {
      question: "Quelle formule ce calculateur de calories utilise-t-il ?",
      answer:
        "L’équation de Mifflin–St Jeor pour la dépense au repos, multipliée par un facteur d’activité compris entre 1,2 (sédentaire) et 1,9 (activité très intense) pour estimer la dépense énergétique journalière.",
    },
    {
      question: "Un calculateur de calories est-il précis ?",
      answer:
        "Pour la plupart des adultes en bonne santé, l’équation tombe à environ 10 % près de la dépense au repos mesurée, mais chacun est différent. Suivez votre alimentation et votre poids pendant 2 à 3 semaines, puis ajustez de 100 à 200 kcal si votre tendance s’écarte de l’objectif.",
    },
    {
      question: "Pourquoi ma perte de poids ralentit-elle ?",
      answer:
        "À mesure que vous perdez du poids, votre corps dépense un peu moins d’énergie, si bien que le même apport crée un déficit calorique plus faible. Refaites le calcul avec votre nouveau poids tous les 4 à 5 kg et vérifiez que vos portions n’ont pas augmenté peu à peu.",
    },
    {
      question: "Combien de calories dois-je manger pour prendre du muscle ?",
      answer:
        "Un léger surplus d’environ 300 kcal au-dessus de vos besoins d’entretien, associé à la musculation et à suffisamment de protéines, favorise la prise de muscle tout en limitant la prise de graisse.",
    },
    {
      question: "Mes besoins caloriques changent-ils pendant le Ramadan ?",
      answer:
        "Vos besoins énergétiques quotidiens restent à peu près les mêmes ; seule la fenêtre de repas change. Essayez d’atteindre votre objectif habituel entre le suhoor et l’iftar, avec des protéines et des boissons aux deux repas.",
    },
  ],
});
