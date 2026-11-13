import type { Facts } from "@/data/facts";
import type en from "../../en/guides/idealWeight";

// Long-form explainer and FAQ for /tools/ideal-weight-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <bmi>…</bmi> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Ce que signifie le « poids idéal »" },
    {
      type: "p",
      text: "Il n’existe pas de poids parfait unique pour une taille donnée. Ce calculateur propose deux approches. La première est la <b>fourchette de poids santé</b> : les poids qui maintiennent votre indice de masse corporelle entre 18,5 et 24,9, la zone que l’Organisation mondiale de la santé associe au risque moyen le plus faible pour la santé chez l’adulte. La seconde repose sur trois <b>formules classiques de poids idéal</b> (Devine, Robinson et Miller), qui donnent un point de référence unique selon votre taille et votre sexe.",
    },
    { type: "h2", text: "Les formules" },
    {
      type: "p",
      text: "Les trois formules partent d’un poids de base à 5 pieds (152,4 cm) et ajoutent une quantité fixe pour chaque pouce au-delà. Elles ont été mises au point dans les années 1970 et 1980, principalement pour aider les cliniciens à doser les médicaments, et non comme objectifs de perte de poids.",
    },
    {
      type: "formula",
      items: [
        "Devine (hommes) :     50 kg   + 2,3 kg par pouce au-delà de 5 pi",
        "Devine (femmes) :     45,5 kg + 2,3 kg par pouce au-delà de 5 pi",
        "Robinson (hommes) :   52 kg   + 1,9 kg par pouce au-delà de 5 pi",
        "Robinson (femmes) :   49 kg   + 1,7 kg par pouce au-delà de 5 pi",
        "Miller (hommes) :     56,2 kg + 1,41 kg par pouce au-delà de 5 pi",
        "Miller (femmes) :     53,1 kg + 1,36 kg par pouce au-delà de 5 pi",
        "Fourchette santé :    18,5 × taille (m)²  à  24,9 × taille (m)²",
      ],
    },
    { type: "h2", text: "Exemple chiffré" },
    {
      type: "p",
      text: "Un homme de 178 cm dépasse 5 pieds de 10 pouces (178 − 152,4 = 25,6 cm ≈ 10 po). Devine donne 50 + 2,3 × 10 = <b>73 kg</b>, Robinson 52 + 1,9 × 10 = <b>71 kg</b> et Miller 56,2 + 1,41 × 10 ≈ <b>70 kg</b>. Sa fourchette d’IMC santé va de 18,5 × 1,78² à 24,9 × 1,78², soit environ <b>59–79 kg</b>. Les formules se regroupent vers le milieu de cette fourchette, ce qui est typique.",
    },
    { type: "h2", text: "Utiliser la fourchette pour perdre du poids" },
    {
      type: "p",
      text: "Si vous êtes au-dessus de la fourchette, inutile de viser tout de suite les chiffres des formules. Un premier objectif de perte de 5 à 10 % de votre poids actuel est réaliste et apporte déjà des bénéfices mesurables pour la santé de nombreuses personnes. Fixez un objectif quotidien avec le <calorie>calculateur de calories</calorie>, perdez environ 0,5 à 1 kg par semaine, puis faites le point.",
    },
    { type: "h2", text: "Utiliser la fourchette pour prendre du muscle" },
    {
      type: "p",
      text: "Si vous faites de la musculation, vous pouvez finir plus lourd que ce que suggèrent toutes les formules tout en étant sec et en bonne santé, car le muscle est dense. Dans ce cas, jugez vos progrès à votre force, à votre tour de taille et à votre apparence et votre ressenti, et utilisez le <macro>calculateur de macros</macro> pour garder un apport élevé en protéines.",
    },
    { type: "h2", text: "Pourquoi les formules ne concordent pas" },
    {
      type: "p",
      text: "Chaque formule a été ajustée sur des données différentes, et aucune ne tient compte de l’ossature, du muscle, de l’âge ou de l’origine ethnique. L’écart entre elles rappelle qu’un poids santé est une fourchette. Une revue retraçant leurs origines a montré qu’elles proviennent du dosage des médicaments plutôt que d’études sur l’état de santé, c’est pourquoi la fourchette fondée sur l’IMC est affichée en premier.",
    },
    { type: "h2", text: "Limites" },
    {
      type: "ul",
      items: [
        "En dessous de 5 pieds (152,4 cm), les formules renvoient simplement leur valeur de base ; elles sont donc moins utiles pour les adultes de petite taille, fiez-vous plutôt à la fourchette santé.",
        "Elles ne tiennent pas compte de la masse musculaire, de l’ossature ni de l’âge.",
        "La fourchette fondée sur l’IMC a les mêmes limites que l’IMC lui-même ; consultez le <bmi>calculateur d’IMC</bmi> pour en savoir plus.",
        "Ne convient pas aux enfants, aux adolescents ni pendant la grossesse.",
        "Il s’agit d’informations générales, qui ne constituent pas un avis médical. Si vous êtes en insuffisance pondérale, avez un problème de santé ou des antécédents de troubles du comportement alimentaire, fixez tout objectif de poids avec un médecin ou un diététicien diplômé.",
      ],
    },
    {
      type: "sources",
      sources: [
        {
          label: "Pai MP, Paloucek FP. The origin of the “ideal” body weight equations. Ann Pharmacother, 2000.",
          url: "https://pubmed.ncbi.nlm.nih.gov/10981254/",
        },
        {
          label: "Robinson JD et al. Determination of ideal body weight for drug dosage calculations. Am J Hosp Pharm, 1983.",
          url: "https://pubmed.ncbi.nlm.nih.gov/6869387/",
        },
        {
          label: "OMS. Obésité et surpoids : aide-mémoire.",
          url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Comment calcule-t-on le poids idéal ?",
      answer:
        "Cet outil affiche la fourchette de poids qui maintient votre IMC entre 18,5 et 24,9, ainsi que trois formules cliniques (Devine, Robinson et Miller) fondées sur la taille et le sexe.",
    },
    {
      question: "Pourquoi les formules donnent-elles des chiffres différents ?",
      answer:
        "Chacune a été ajustée sur des données différentes. L’écart entre elles montre qu’un poids santé est une fourchette, pas un point unique.",
    },
    {
      question: "Le poids idéal dépend-il de l’âge ?",
      answer:
        "Aucune des formules n’utilise l’âge. Les fourchettes de poids santé des personnes âgées peuvent être légèrement différentes ; parlez de vos objectifs avec votre médecin si vous avez plus de 65 ans.",
    },
    {
      question: "Le poids idéal est-il différent pour les hommes et les femmes ?",
      answer:
        "Oui. À taille égale, les formules donnent une valeur plus élevée aux hommes, ce qui reflète les différences moyennes de masse musculaire et d’ossature. La fourchette d’IMC est la même pour les deux.",
    },
    {
      question: "Et si je suis loin de ma fourchette idéale ?",
      answer:
        "Commencez par un objectif plus modeste, comme perdre 5 à 10 % de votre poids actuel, à raison d’environ 0,5 à 1 kg par semaine. Les petits changements réguliers sont plus faciles à maintenir.",
    },
  ],
});
