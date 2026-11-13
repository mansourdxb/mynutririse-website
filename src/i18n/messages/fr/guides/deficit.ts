import type { Facts } from "@/data/facts";
import type en from "../../en/guides/deficit";

// Long-form explainer and FAQ for /tools/calorie-deficit-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <tdee>…</tdee> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Ce que ce calculateur vous indique" },
    {
      type: "p",
      text: "Saisissez vos informations, un poids cible et une date cible : le calculateur détermine <b>combien de calories manger chaque jour</b> pour y arriver, l’ampleur de votre déficit quotidien et la vitesse à laquelle vous pouvez espérer perdre du poids. Si la date vous obligeait à manger moins qu’un minimum sûr, il vous maintient à ce minimum et affiche à la place la date que vous pouvez atteindre de façon réaliste.",
    },
    { type: "h2", text: "La formule" },
    {
      type: "p",
      text: "Le calculateur estime d’abord vos besoins d’entretien (DEJ) avec l’équation de Mifflin–St Jeor et votre niveau d’activité, de la même façon que le <tdee>calculateur de DEJ</tdee>. Il répartit ensuite l’énergie à perdre sur les jours qui vous séparent de votre date cible :",
    },
    {
      type: "formula",
      items: [
        "Poids à perdre (kg) = poids actuel − poids cible",
        "Déficit quotidien = poids à perdre × 7 700 kcal ÷ jours jusqu’à la date cible",
        "Calories par jour = entretien − déficit quotidien",
        "Jamais moins de 1 200 kcal (femmes) ou 1 500 kcal (hommes)",
      ],
    },
    {
      type: "p",
      text: "Le chiffre de 7 700 kcal par kg correspond à l’énergie stockée dans environ un kilogramme de tissu corporel perdu pendant un régime. C’est une règle empirique utile à court terme, mais les recherches sur le bilan énergétique montrent que la perte de poids ralentit avec le temps, car un corps plus léger dépense moins. En pratique, il vous faudra généralement un peu plus de temps que ne le suggère le calcul simple.",
    },
    { type: "h2", text: "Exemple chiffré" },
    {
      type: "p",
      text: "Un homme de 40 ans, 180 cm, 92 kg, à activité légère, veut atteindre 86 kg en 12 semaines (84 jours). Son MB est de 10 × 92 + 6,25 × 180 − 5 × 40 + 5 = 1 850 kcal, donc ses besoins d’entretien sont d’environ 1 850 × 1,375 ≈ 2 544 kcal. Perdre 6 kg demande 6 × 7 700 = 46 200 kcal, soit 46 200 ÷ 84 ≈ <b>550 kcal par jour</b>. Il devrait manger environ <b>1 994 kcal par jour</b>, ce qui reste au-dessus du minimum de 1 500 kcal pour les hommes, pour une perte prévue d’environ 0,5 kg par semaine.",
    },
    { type: "h2", text: "Quel rythme est sûr ?" },
    {
      type: "p",
      text: "Le NHS recommande de viser une perte de 0,5 à 1 kg par semaine. Une perte plus rapide signifie généralement plus de perte musculaire, plus de faim et un risque plus élevé de reprendre du poids. Le calculateur vous avertit lorsque votre programme impliquerait de perdre plus de 1 % de votre poids corporel par semaine, un rythme difficile à tenir pour la plupart des gens.",
    },
    {
      type: "p",
      text: "Il impose aussi un plancher : <b>1 200 kcal par jour pour les femmes et 1 500 kcal par jour pour les hommes</b>. En dessous de ces seuils, il devient très difficile d’obtenir assez de protéines, de vitamines et de minéraux, et les régimes très hypocaloriques ne doivent être suivis que sous surveillance médicale. Si votre date demandait moins de calories, le calculateur vous maintient au plancher et affiche une date plus tardive et réaliste.",
    },
    { type: "h2", text: "Garder le muscle en perdant de la graisse" },
    {
      type: "ul",
      items: [
        "Mangez suffisamment de protéines, environ 1,6 à 2,4 g par kg de poids corporel ; le <protein>calculateur de protéines</protein> vous donne votre chiffre.",
        "Continuez la musculation 2 à 4 fois par semaine pour donner à votre corps une raison de conserver ses muscles.",
        "Utilisez le <macro>calculateur de macros</macro> pour répartir vos calories quotidiennes en protéines, glucides et lipides.",
        "Dormez suffisamment et restez actif au quotidien ; la marche augmente votre déficit sans beaucoup augmenter la faim.",
      ],
    },
    { type: "h2", text: "Si vous voulez plutôt prendre du poids" },
    {
      type: "p",
      text: "Si votre poids cible est supérieur à votre poids actuel, ce calculateur n’est pas le bon outil. Utilisez le <calorie>calculateur de calories</calorie>, qui affiche aussi un objectif de prise de muscle.",
    },
    { type: "h2", text: "Limites" },
    {
      type: "ul",
      items: [
        "Les besoins d’entretien sont une estimation et peuvent s’écarter de 10 % ou plus ; vérifiez vos progrès toutes les 2 à 3 semaines et ajustez de 100 à 200 kcal.",
        "Le poids sur la balance varie d’un jour à l’autre avec l’eau, le sel et les aliments en cours de digestion : jugez vos progrès sur des moyennes hebdomadaires.",
        "Ne convient pas aux enfants, aux adolescents, aux femmes enceintes ou allaitantes, ni aux personnes ayant des antécédents de troubles du comportement alimentaire.",
        "Il s’agit d’informations générales, qui ne constituent pas un avis médical. Si vous avez un problème de santé ou prenez des médicaments, parlez-en à un médecin ou à un diététicien diplômé avant de commencer un régime.",
      ],
    },
    {
      type: "sources",
      sources: [
        {
          label: "Hall KD et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011.",
          url: "https://pubmed.ncbi.nlm.nih.gov/21872751/",
        },
        {
          label: "NHS. Obésité : traitement (viser une perte de 0,5 à 1 kg par semaine).",
          url: "https://www.nhs.uk/conditions/obesity/treatment/",
        },
        {
          label: "Mifflin MD et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990.",
          url: "https://pubmed.ncbi.nlm.nih.gov/2305711/",
        },
        {
          label: "Helms ER et al. A systematic review of dietary protein during caloric restriction in resistance trained lean athletes. Int J Sport Nutr Exerc Metab, 2014.",
          url: "https://pubmed.ncbi.nlm.nih.gov/24092765/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Quelle doit être l’ampleur de mon déficit calorique ?",
      answer:
        "Un déficit d’environ 500 kcal par jour est un point de départ courant et donne au début une perte d’environ 0,5 kg par semaine. Des déficits plus importants sont plus difficiles à tenir et augmentent la perte musculaire.",
    },
    {
      question: "Quel est le nombre minimum de calories que je devrais manger ?",
      answer:
        "Ne descendez pas sous 1 200 kcal par jour pour les femmes ou 1 500 kcal par jour pour les hommes sans surveillance médicale. Le calculateur ne propose jamais moins.",
    },
    {
      question: "Pourquoi le calculateur modifie-t-il ma date cible ?",
      answer:
        "Si atteindre votre objectif à votre date demandait de manger sous le minimum sûr, il vous maintient à ce minimum et affiche à la place la date que vous pouvez atteindre de façon réaliste.",
    },
    {
      question: "Perdre 1 kg par semaine est-il un objectif réaliste ?",
      answer:
        "Pour les personnes qui ont davantage de poids à perdre, cela peut l’être, au moins au début. Le NHS recommande 0,5 à 1 kg par semaine ; pour les personnes plus légères, viser plutôt 0,5 kg est généralement plus durable.",
    },
    {
      question: "Pourquoi est-ce que je perds moins vite que ce qu’indique le calculateur ?",
      answer:
        "Votre corps dépense un peu moins à mesure que vous vous allégez, les estimations des besoins d’entretien peuvent être imprécises, et la rétention d’eau masque la perte de graisse. Revérifiez votre apport et comparez les moyennes hebdomadaires sur 2 à 3 semaines avant d’ajuster.",
    },
  ],
});
