import type { Facts } from "@/data/facts";
import type en from "../../en/guides/bodyFat";

// Long-form explainer and FAQ for /tools/body-fat-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <bmi>…</bmi> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Ce que ce calculateur vous indique" },
    {
      type: "p",
      text: "Ce calculateur estime votre <b>taux de masse grasse</b> à partir de quelques mesures au mètre ruban, selon la méthode des circonférences de l’US Navy. Contrairement à l’IMC, qui compare seulement le poids à la taille, le taux de masse grasse vous indique quelle part de votre poids est de la graisse et quelle part est tout le reste (muscles, os, organes et eau). Si vous ajoutez votre poids, il affiche aussi votre masse grasse et votre masse maigre en kilogrammes.",
    },
    { type: "h2", text: "La formule (méthode de l’US Navy)" },
    {
      type: "p",
      text: "La méthode a été mise au point par Hodgdon et Beckett au Naval Health Research Center en 1984 pour estimer rapidement la masse grasse sans équipement de laboratoire. Elle utilise le logarithme de vos mesures, il vaut donc mieux utiliser le calculateur que faire le calcul à la main :",
    },
    {
      type: "formula",
      items: [
        "Hommes :  % de graisse = 495 ÷ (1,0324 − 0,19077 × log10(tour de taille − tour de cou) + 0,15456 × log10(taille)) − 450",
        "Femmes :  % de graisse = 495 ÷ (1,29579 − 0,35004 × log10(tour de taille + tour de hanches − tour de cou) + 0,221 × log10(taille)) − 450",
        "Toutes les mesures en cm",
      ],
    },
    { type: "h2", text: "Comment prendre vos mesures" },
    {
      type: "ul",
      items: [
        "Utilisez un mètre ruban souple, mesurez sur la peau nue, tenez-vous détendu et ne serrez pas le ruban.",
        "<b>Cou :</b> juste sous le larynx (pomme d’Adam), le ruban légèrement incliné vers le bas à l’avant.",
        "<b>Tour de taille, hommes :</b> à l’horizontale au niveau du nombril, à la fin d’une expiration normale.",
        "<b>Tour de taille, femmes :</b> à l’endroit le plus étroit de la taille, généralement au-dessus du nombril.",
        "<b>Hanches, femmes :</b> à l’endroit le plus large des fesses.",
        "Mesurez toujours au même moment de la journée, idéalement le matin, et faites la moyenne de deux ou trois mesures.",
      ],
    },
    { type: "h2", text: "Exemple chiffré" },
    {
      type: "p",
      text: "Un homme de 178 cm avec un tour de cou de 38 cm et un tour de taille de 86 cm : tour de taille − tour de cou = 48 cm. La formule donne environ <b>17 %</b> de masse grasse, dans la catégorie « forme » pour les hommes. S’il pèse 80 kg, cela représente environ 14 kg de masse grasse et 66 kg de masse maigre.",
    },
    { type: "h2", text: "Ce que signifient les catégories" },
    {
      type: "table",
      head: ["Catégorie", "Femmes", "Hommes"],
      rows: [
        ["Graisse essentielle", "10–13 %", "2–5 %"],
        ["Athlètes", "14–20 %", "6–13 %"],
        ["Forme", "21–24 %", "14–17 %"],
        ["Moyenne", "25–31 %", "18–24 %"],
        ["Obésité", "32 % et plus", "25 % et plus"],
      ],
    },
    {
      type: "p",
      text: "Ces fourchettes proviennent de l’American Council on Exercise. Les femmes ont naturellement plus de graisse essentielle que les hommes. Une masse grasse très basse n’est pas un objectif de santé : descendre sous la fourchette essentielle peut perturber les hormones et, chez les femmes, le cycle menstruel.",
    },
    { type: "h2", text: "L’utiliser pour perdre du poids et prendre du muscle" },
    {
      type: "p",
      text: "Le taux de masse grasse est surtout utile pour suivre une tendance. Quand vous perdez du poids, vous voulez que le pourcentage baisse, ce qui montre que vous perdez surtout de la graisse plutôt que du muscle ; gardez un apport élevé en protéines avec le <protein>calculateur de protéines</protein> et continuez la musculation. Quand vous prenez du muscle, votre poids et même votre <bmi>IMC</bmi> peuvent augmenter alors que votre masse grasse reste stable ou diminue, un bon signe que la balance seule ne montrerait pas.",
    },
    {
      type: "p",
      text: "Mesurez-vous toutes les 2 à 4 semaines plutôt que chaque jour ; les petites variations restent dans la marge d’erreur du mètre ruban.",
    },
    { type: "h2", text: "Limites" },
    {
      type: "ul",
      items: [
        "Il s’agit d’une estimation. Par rapport aux méthodes de laboratoire comme la DXA, les formules fondées sur les circonférences peuvent s’écarter de plusieurs points de pourcentage pour une personne donnée, surtout quand la masse grasse est très basse ou très élevée.",
        "La précision dépend de mesures soigneuses et régulières ; une différence de 1 à 2 cm au tour de taille modifie sensiblement le résultat.",
        "La formule a été mise au point sur du personnel militaire adulte et peut moins bien convenir à certaines morphologies et à certains groupes ethniques.",
        "Ne convient pas aux enfants ni pendant la grossesse.",
        "Il s’agit d’informations générales, qui ne constituent pas un avis médical. Parlez de vos résultats à un médecin si votre poids ou votre santé vous inquiète.",
      ],
    },
    {
      type: "sources",
      sources: [
        {
          label: "Hodgdon JA, Beckett MB. Prediction of percent body fat for U.S. Navy men and women from body circumferences and height. Naval Health Research Center reports 84-11 and 84-29, 1984.",
          url: "",
        },
        {
          label: "American Council on Exercise. Percent body fat calculator and body fat norms.",
          url: "https://www.acefitness.org/resources/everyone/tools-calculators/percent-body-fat-calculator/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "La méthode de l’US Navy pour la masse grasse est-elle précise ?",
      answer:
        "Elle donne une estimation raisonnable pour beaucoup d’adultes, mais les résultats individuels peuvent s’écarter de plusieurs points de pourcentage des méthodes de laboratoire comme la DXA. Utilisez-la pour suivre une tendance plutôt que comme un chiffre exact.",
    },
    {
      question: "Quel est un taux de masse grasse sain ?",
      answer:
        "D’après les catégories de l’ACE, environ 14 à 24 % est courant chez les hommes en forme ou dans la moyenne, et 21 à 31 % chez les femmes. Une masse grasse très basse n’est pas saine.",
    },
    {
      question: "Pourquoi les femmes doivent-elles mesurer leur tour de hanches ?",
      answer:
        "Les femmes ont tendance à stocker davantage de graisse autour des hanches et des cuisses : la formule pour les femmes inclut donc le tour de hanches pour estimer la masse grasse plus précisément.",
    },
    {
      question: "Le taux de masse grasse est-il meilleur que l’IMC ?",
      answer:
        "Il en dit plus sur la composition corporelle, car l’IMC ne distingue pas le muscle de la graisse. Utiliser les deux, avec votre tour de taille, donne l’image la plus complète.",
    },
    {
      question: "À quelle fréquence dois-je mesurer ma masse grasse ?",
      answer:
        "Toutes les 2 à 4 semaines, c’est suffisant. Mesurez-vous au même moment de la journée et dans les mêmes conditions, et regardez la tendance plutôt que des mesures isolées.",
    },
  ],
});
