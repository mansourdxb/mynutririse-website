import type { Facts } from "@/data/facts";
import type en from "../../en/guides/macro";

// Long-form explainer and FAQ for /tools/macro-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <calorie>…</calorie> are listed in LINK_TAGS there; keep them when translating.
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Was dir dieser Rechner verrät" },
    {
      type: "p",
      text: "Makronährstoffe, kurz „Makros“, sind die drei Nährstoffe, die Energie liefern: Protein, Kohlenhydrate und Fett. Dieser Rechner nimmt dein tägliches Kalorienziel und teilt es je nach gewähltem Ernährungsstil in <b>Gramm pro Makro</b> auf. Die Kalorien entscheiden, ob du abnimmst, dein Gewicht hältst oder zunimmst; die Verteilung beeinflusst, wie satt du dich fühlst, wie gut du trainierst und wie viel Muskulatur du behältst.",
    },
    { type: "h2", text: "Die Formel" },
    {
      type: "p",
      text: "Jedes Gramm Protein und Kohlenhydrate liefert etwa 4 kcal, jedes Gramm Fett etwa 9 kcal. Der Rechner multipliziert deine Kalorien mit dem jeweiligen Prozentsatz und teilt durch diese Energiewerte:",
    },
    {
      type: "formula",
      items: [
        "Protein (g)        = Kalorien × Protein-% ÷ 4",
        "Kohlenhydrate (g)  = Kalorien × Kohlenhydrat-% ÷ 4",
        "Fett (g)           = Kalorien × Fett-% ÷ 9",
      ],
    },
    {
      type: "table",
      head: ["Stil", "Protein", "Kohlenhydrate", "Fett", "Geeignet für"],
      rows: [
        ["Ausgewogen", "30 %", "40 %", "30 %", "Die meisten Menschen, allgemeine Gesundheit"],
        ["Proteinreich", "40 %", "30 %", "30 %", "Fettabbau und Muskelaufbau"],
        ["Keto / Low-Carb", "25 %", "5 %", "70 %", "Menschen, die sehr kohlenhydratarm essen möchten"],
        ["Ausdauer", "25 %", "50 %", "25 %", "Läufer, Radfahrer, hoher Trainingsumfang"],
      ],
    },
    { type: "h2", text: "Rechenbeispiel" },
    {
      type: "p",
      text: "Bei <b>2.000 kcal</b> mit der ausgewogenen Verteilung: Protein 2.000 × 30 % ÷ 4 = <b>150 g</b>, Kohlenhydrate 2.000 × 40 % ÷ 4 = <b>200 g</b>, Fett 2.000 × 30 % ÷ 9 = <b>67 g</b>. Wechselst du bei gleichen Kalorien auf proteinreich, ergeben sich 200 g Protein, 150 g Kohlenhydrate und 67 g Fett.",
    },
    { type: "h2", text: "Makros zum Abnehmen" },
    {
      type: "p",
      text: "Im Kaloriendefizit ist Protein das Makro, das du schützen solltest. Forschung an schlanken, kraftsporterfahrenen Menschen deutet darauf hin, dass mehr Protein hilft, während einer Diät Muskeln zu erhalten. Außerdem sättigt Protein am stärksten, was es leichter macht, ein Defizit durchzuhalten. Wähle die proteinreiche Verteilung, halte Fett auf einem angenehmen Niveau (sehr fettarm lässt sich schwer durchhalten) und fülle den Rest mit Kohlenhydraten auf.",
    },
    {
      type: "p",
      text: "Eine nützliche Kontrolle: Wenn du Fett abbaust und trainierst, sollte dein Protein bei etwa 1,6–2,4 g pro kg Körpergewicht liegen. Ergibt deine Verteilung deutlich weniger, erhöhe den Proteinanteil.",
    },
    { type: "h2", text: "Makros für den Muskelaufbau" },
    {
      type: "p",
      text: "Für den Muskelaufbau ergab eine Metaanalyse von Krafttrainingsstudien, dass der Nutzen von Protein bei etwa <b>1,6 g pro kg Körpergewicht pro Tag</b> ein Plateau erreicht, wobei manche Menschen bis etwa 2,2 g/kg profitieren. Darüber hinaus liefern zusätzliche Kohlenhydrate mehr Energie fürs Training als zusätzliches Protein. Die ausgewogene oder proteinreiche Verteilung mit einem kleinen Kalorienüberschuss passt für die meisten Menschen.",
    },
    { type: "h2", text: "Im gesunden Bereich bleiben" },
    {
      type: "p",
      text: "Die US-amerikanischen Dietary Reference Intakes legen für Erwachsene akzeptable Bereiche von 10–35 % der Kalorien aus Protein, 45–65 % aus Kohlenhydraten und 20–35 % aus Fett fest. Die ausgewogene Verteilung liegt nah an diesen Werten. Der Keto-Stil liegt bewusst außerhalb und ist daher nicht für alle geeignet; sprich zuerst mit deiner Ärztin oder deinem Arzt, wenn du Diabetes oder eine Nierenerkrankung hast oder Medikamente nimmst.",
    },
    { type: "h2", text: "Deine Makros mit echtem Essen erreichen" },
    {
      type: "ul",
      items: [
        "Plane jede Mahlzeit um eine Proteinquelle herum: Hähnchen, Fisch, Eier, griechischer Joghurt, Linsen, Kichererbsen oder mageres Lammfleisch.",
        "Richte die Kohlenhydrate nach deiner Aktivität: mehr an Trainingstagen, weniger an Ruhetagen.",
        "Betrachte Fett als Rest; Olivenöl, Nüsse und Tahini summieren sich schnell.",
        "Liegst du bei jedem Ziel innerhalb von etwa 10 g, war es ein guter Tag; Beständigkeit über Wochen zählt mehr als Präzision.",
        "Auch gemischte Gerichte wie Biryani, Mandi oder Tajine lassen sich tracken; unser Ratgeber zum <macroguide>Makro-Tracking mit Gerichten aus verschiedenen Esskulturen</macroguide> zeigt, wie.",
      ],
    },
    { type: "h2", text: "Grenzen" },
    {
      type: "ul",
      items: [
        "Die Verteilung ist nur so gut wie die Kalorien, die sie aufteilt. Wenn du dein Ziel noch nicht kennst, starte mit dem <calorie>Kalorienrechner</calorie>.",
        "Prozentwerte ignorieren die Körpergröße: Eine kleine Person mit einem kalorienreichen Plan bekommt eventuell mehr Protein als nötig, eine große Person mit einem kalorienarmen Plan zu wenig. Prüfe die Gramm pro kg Körpergewicht.",
        "Dies sind allgemeine Informationen, keine medizinische Beratung. Menschen mit Nierenerkrankungen, Diabetes oder anderen Erkrankungen sowie Schwangere und Stillende sollten sich persönlich von einer Ärztin, einem Arzt oder einer Ernährungsfachkraft beraten lassen.",
      ],
    },
    {
      type: "sources",
      sources: [
        {
          label: "Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids. National Academies Press, 2005.",
          url: "https://nap.nationalacademies.org/catalog/10490",
        },
        {
          label: "Morton RW et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. Br J Sports Med, 2018.",
          url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
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
      question: "Welche Makroverteilung ist zum Abnehmen am besten?",
      answer:
        "Eine proteinreichere Verteilung (etwa 35–40 % Protein) hilft, im Defizit Muskeln zu erhalten, und hält dich satt. Was das Abnehmen antreibt, ist aber das Kaloriendefizit selbst, nicht die genaue Verteilung.",
    },
    {
      question: "Wie viel Protein brauche ich für den Muskelaufbau?",
      answer:
        "Etwa 1,6 g pro kg Körpergewicht pro Tag reichen für die meisten Menschen, bis zu etwa 2,2 g/kg können manchen helfen. Verteile es auf 3–4 Mahlzeiten.",
    },
    {
      question: "Sind Makros wichtiger als Kalorien?",
      answer:
        "Die Kalorien entscheiden, ob sich dein Gewicht verändert; die Makros beeinflussen, wie viel dieser Veränderung Fett oder Muskeln sind und wie du dich fühlst. Leg zuerst die Kalorien fest, dann die Verteilung.",
    },
    {
      question: "Ist Keto besser zum Abnehmen?",
      answer:
        "Nicht bei gleichen Kalorien und gleichem Protein. Low-Carb kann gut für Menschen passen, denen es leichter fällt, ist aber nicht automatisch wirksamer – und nicht für alle geeignet.",
    },
    {
      question: "Kann ich Makros auch mit halalem oder kulturellem Essen tracken?",
      answer: `Ja. Gemischte Gerichte wie Biryani oder Tajine haben bekannte Makroprofile, und MyNutriRise deckt ${f.CUISINES} Küchen aus aller Welt ab – mit Protein, Kohlenhydraten und Fett pro Portion.`,
    },
  ],
});
