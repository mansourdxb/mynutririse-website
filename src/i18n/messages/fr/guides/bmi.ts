import type { Facts } from "@/data/facts";
import type en from "../../en/guides/bmi";

// Long-form explainer and FAQ for /tools/bmi-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <calorie>…</calorie> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Ce que mesure l’IMC" },
    {
      type: "p",
      text: "L’indice de masse corporelle (IMC) compare votre poids à votre taille. C’est un chiffre de dépistage rapide, utilisé dans le monde entier pour classer les adultes dans des catégories de poids associées, en moyenne, à un risque pour la santé. Il ne mesure <b>pas</b> directement la masse grasse, c’est pourquoi il est plus adapté aux populations qu’au verdict sur une seule personne.",
    },
    { type: "h2", text: "La formule" },
    {
      type: "formula",
      items: [
        "Métrique :  IMC = poids (kg) ÷ taille (m)²",
        "Impérial :  IMC = 703 × poids (lb) ÷ taille (po)²",
      ],
    },
    { type: "h2", text: "Les catégories de l’OMS pour les adultes" },
    {
      type: "table",
      head: ["IMC", "Catégorie"],
      rows: [
        ["Moins de 18,5", "Maigreur"],
        ["18,5–24,9", "Poids normal"],
        ["25,0–29,9", "Surpoids"],
        ["30,0 et plus", "Obésité"],
      ],
    },
    {
      type: "p",
      text: "Ces seuils sont fixés par l’Organisation mondiale de la santé et s’appliquent aux adultes de 18 ans et plus. Chez les enfants et les adolescents, l’IMC est comparé à des courbes de croissance propres à l’âge et au sexe ; ce calculateur ne leur convient donc pas.",
    },
    { type: "h2", text: "Exemple chiffré" },
    {
      type: "p",
      text: "Une personne de 1,70 m pour 72 kg : 72 ÷ (1,70 × 1,70) = 72 ÷ 2,89 = <b>24,9</b>, le haut de la fourchette de poids normal. En unités impériales, 5 pi 7 po (67 po) et 159 lb donnent 703 × 159 ÷ (67 × 67) = <b>24,9</b> également.",
    },
    { type: "h2", text: "Que faire de votre résultat ?" },
    {
      type: "h3",
      text: "Si vous voulez perdre du poids",
    },
    {
      type: "p",
      text: "Un IMC de 25 ou plus est une raison de regarder les choses de plus près, pas de s’affoler. Perdre ne serait-ce que 5 à 10 % de son poids peut améliorer la tension artérielle et la glycémie des personnes en surpoids ou en situation d’obésité. Trouvez un objectif quotidien tenable avec le <calorie>calculateur de calories</calorie> et visez environ 0,5 à 1 kg par semaine.",
    },
    {
      type: "h3",
      text: "Si vous voulez prendre du muscle",
    },
    {
      type: "p",
      text: "Prendre du muscle augmente votre poids, et donc votre IMC, même lorsque votre masse grasse reste stable ou diminue. Si vous faites de la musculation, suivez votre tour de taille et la façon dont vos vêtements vous vont en plus de l’IMC, et utilisez le <macro>calculateur de macros</macro> pour fixer vos protéines.",
    },
    {
      type: "h3",
      text: "Si votre IMC est inférieur à 18,5",
    },
    {
      type: "p",
      text: "Un IMC bas peut traduire un manque d’énergie ou de nutriments. Plutôt que de chercher à perdre davantage, parlez-en à un médecin, surtout si la perte de poids n’était pas volontaire.",
    },
    { type: "h2", text: "Ajoutez votre tour de taille" },
    {
      type: "p",
      text: "Comme l’IMC ne voit pas où se loge la graisse, le NHS conseille de l’associer au rapport tour de taille/taille lorsque votre IMC est inférieur à 35. Mesurez votre tour de taille à mi-chemin entre le bas des côtes et le haut des hanches, puis divisez-le par votre taille dans la même unité. Essayez de garder votre tour de taille <b>sous la moitié de votre taille</b>, soit un rapport inférieur à 0,5. Une personne de 170 cm, par exemple, viserait un tour de taille inférieur à 85 cm.",
    },
    {
      type: "p",
      text: "Deux personnes peuvent avoir le même IMC de 27 et un risque très différent : l’une musclée avec une taille fine, l’autre moins active avec de la graisse stockée autour du ventre. Vérifier ces deux chiffres tous les mois ou tous les deux mois vous en apprend bien plus que l’IMC seul, et tous deux évoluent quand vous perdez de la graisse ou prenez du muscle.",
    },
    { type: "h2", text: "D’où vient l’IMC" },
    {
      type: "p",
      text: "La formule a été décrite au XIXe siècle par le mathématicien belge Adolphe Quetelet pour décrire la corpulence moyenne des populations. Elle est devenue la mesure de dépistage de référence chez l’adulte parce qu’elle ne demande qu’une balance et un mètre ruban, qu’elle est gratuite et facile à comparer d’un pays à l’autre. Ces atouts sont aussi ses faiblesses : elle n’a jamais été conçue pour décrire la santé d’une personne en particulier.",
    },
    { type: "h2", text: "Limites" },
    {
      type: "ul",
      items: [
        "L’IMC ne distingue pas le muscle de la graisse. Les athlètes et les personnes qui font de la musculation se retrouvent souvent dans la catégorie « surpoids » tout en étant secs.",
        "Il ne dit rien de l’endroit où la graisse est stockée. La graisse autour de la taille présente un risque plus élevé pour la santé ; le tour de taille apporte un contexte utile.",
        "Le risque associé à un même IMC varie selon les populations. Une consultation d’experts de l’OMS a constaté que de nombreuses populations asiatiques présentent un risque plus élevé à des IMC plus bas, et a proposé des seuils d’action supplémentaires à 23 et 27,5 pour la santé publique.",
        "Il n’est pas conçu pour les enfants, la grossesse ou les personnes âgées ayant perdu beaucoup de masse musculaire.",
        "L’IMC est un outil de dépistage, pas un diagnostic, et il ne constitue pas un avis médical. Parlez de votre résultat à un médecin si votre poids ou votre santé vous inquiète.",
      ],
    },
    {
      type: "p",
      text: "Pour voir la fourchette de poids correspondant à un IMC normal pour votre taille, essayez le <ideal>calculateur de poids idéal</ideal>.",
    },
    {
      type: "sources",
      sources: [
        {
          label: "OMS. Obésité et surpoids : aide-mémoire.",
          url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
        },
        {
          label: "WHO Expert Consultation. Appropriate body-mass index for Asian populations and its implications for policy and intervention strategies. Lancet, 2004.",
          url: "https://pubmed.ncbi.nlm.nih.gov/14726171/",
        },
        {
          label: "NHS. Obésité (IMC, rapport tour de taille/taille et quand consulter un généraliste).",
          url: "https://www.nhs.uk/conditions/obesity/",
        },
        {
          label: "NHS. Obésité : traitement.",
          url: "https://www.nhs.uk/conditions/obesity/treatment/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Quel est un IMC normal pour un adulte ?",
      answer:
        "L’OMS définit la fourchette 18,5–24,9 comme le poids normal chez l’adulte. En dessous de 18,5, on parle de maigreur, de 25 à 29,9 de surpoids et à partir de 30 d’obésité.",
    },
    {
      question: "L’IMC est-il fiable pour les personnes musclées ?",
      answer:
        "Non. L’IMC ne distingue pas le muscle de la graisse, si bien que les personnes musclées apparaissent souvent en surpoids. Le tour de taille ou une estimation de la masse grasse donne une image plus complète.",
    },
    {
      question: "L’IMC est-il le même pour les hommes et les femmes ?",
      answer:
        "La formule et les catégories adultes sont les mêmes pour les deux sexes, même si les femmes ont généralement plus de masse grasse que les hommes à IMC égal.",
    },
    {
      question: "Les enfants peuvent-ils utiliser ce calculateur d’IMC ?",
      answer:
        "Non. Avant 18 ans, l’IMC doit être comparé à des courbes de croissance propres à l’âge et au sexe, que ce calculateur n’utilise pas.",
    },
    {
      question: "À quel rythme puis-je modifier mon IMC sans risque ?",
      answer:
        "Par une évolution progressive du poids d’environ 0,5 à 1 kg par semaine, ce qui correspond pour la plupart des gens à un déficit quotidien d’environ 500 kcal. Une perte plus rapide se fait souvent au détriment du muscle et est plus difficile à maintenir.",
    },
    {
      question: "Dois-je utiliser les unités métriques ou impériales ?",
      answer:
        "Peu importe. Le calculateur accepte les deux et donne le même résultat ; la formule impériale multiplie simplement par 703 pour convertir les unités.",
    },
  ],
});
