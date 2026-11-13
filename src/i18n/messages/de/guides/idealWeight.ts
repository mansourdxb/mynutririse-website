import type { Facts } from "@/data/facts";
import type en from "../../en/guides/idealWeight";

// Long-form explainer and FAQ for /tools/ideal-weight-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <bmi>…</bmi> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Was „Idealgewicht“ bedeutet" },
    {
      type: "p",
      text: "Es gibt nicht das eine perfekte Gewicht für eine bestimmte Größe. Dieser Rechner bietet dir zwei Blickwinkel. Der erste ist der <b>gesunde Gewichtsbereich</b>: die Gewichte, bei denen dein Body-Mass-Index zwischen 18,5 und 24,9 liegt – der Bereich, den die Weltgesundheitsorganisation bei Erwachsenen mit dem niedrigsten durchschnittlichen Gesundheitsrisiko verbindet. Der zweite sind drei klassische <b>Formeln für das Idealgewicht</b> (Devine, Robinson und Miller), die dir einen einzelnen Richtwert für deine Größe und dein Geschlecht liefern.",
    },
    { type: "h2", text: "Die Formeln" },
    {
      type: "p",
      text: "Alle drei Formeln gehen von einem Grundgewicht bei 5 Fuß (152,4 cm) aus und addieren für jeden Zoll darüber einen festen Betrag. Sie wurden in den 1970er- und 1980er-Jahren entwickelt, vor allem um Ärzten bei der Dosierung von Medikamenten zu helfen – nicht als Ziele zum Abnehmen.",
    },
    {
      type: "formula",
      items: [
        "Devine (Männer):     50 kg   + 2,3 kg pro Zoll über 5 Fuß",
        "Devine (Frauen):     45,5 kg + 2,3 kg pro Zoll über 5 Fuß",
        "Robinson (Männer):   52 kg   + 1,9 kg pro Zoll über 5 Fuß",
        "Robinson (Frauen):   49 kg   + 1,7 kg pro Zoll über 5 Fuß",
        "Miller (Männer):     56,2 kg + 1,41 kg pro Zoll über 5 Fuß",
        "Miller (Frauen):     53,1 kg + 1,36 kg pro Zoll über 5 Fuß",
        "Gesunder Bereich:    18,5 × Größe (m)²  bis  24,9 × Größe (m)²",
      ],
    },
    { type: "h2", text: "Rechenbeispiel" },
    {
      type: "p",
      text: "Ein Mann mit 178 cm Körpergröße liegt 10 Zoll über 5 Fuß (178 − 152,4 = 25,6 cm ≈ 10 in). Devine ergibt 50 + 2,3 × 10 = <b>73 kg</b>, Robinson 52 + 1,9 × 10 = <b>71 kg</b> und Miller 56,2 + 1,41 × 10 ≈ <b>70 kg</b>. Sein gesunder BMI-Bereich reicht von 18,5 × 1,78² bis 24,9 × 1,78², also etwa <b>59–79 kg</b>. Die Formeln liegen nahe der Mitte dieses Bereichs, was typisch ist.",
    },
    { type: "h2", text: "Den Bereich zum Abnehmen nutzen" },
    {
      type: "p",
      text: "Liegst du über dem Bereich, musst du nicht sofort die Werte der Formeln anpeilen. Ein erstes Ziel von 5–10 % weniger als dein aktuelles Gewicht ist realistisch und bringt vielen Menschen bereits messbare gesundheitliche Vorteile. Lege mit dem <calorie>Kalorienrechner</calorie> ein Tagesziel fest, nimm etwa 0,5–1 kg pro Woche ab und überprüfe dann erneut.",
    },
    { type: "h2", text: "Den Bereich für den Muskelaufbau nutzen" },
    {
      type: "p",
      text: "Wenn du mit Gewichten trainierst, wiegst du womöglich mehr, als jede Formel vorschlägt, und bist trotzdem schlank und gesund – denn Muskeln sind dicht. Beurteile deinen Fortschritt dann anhand von Kraft, Taillenumfang und wie du aussiehst und dich fühlst, und halte dein Protein mit dem <macro>Makrorechner</macro> hoch.",
    },
    { type: "h2", text: "Warum die Formeln voneinander abweichen" },
    {
      type: "p",
      text: "Jede Formel wurde an andere Daten angepasst, und keine berücksichtigt Körperbau, Muskulatur, Alter oder ethnische Herkunft. Die Spanne zwischen ihnen erinnert daran, dass ein gesundes Gewicht ein Bereich ist. Eine Übersichtsarbeit, die ihren Ursprung nachverfolgte, ergab, dass sie aus der Medikamentendosierung stammen und nicht aus Studien zu gesundheitlichen Ergebnissen – deshalb wird der BMI-basierte Bereich zuerst angezeigt.",
    },
    { type: "h2", text: "Grenzen" },
    {
      type: "ul",
      items: [
        "Unter 5 Fuß (152,4 cm) liefern die Formeln einfach ihren Grundwert. Für kleinere Erwachsene sind sie daher weniger nützlich – verlass dich stattdessen auf den gesunden Bereich.",
        "Sie berücksichtigen weder Muskelmasse noch Knochenbau oder Alter.",
        "Der BMI-basierte Bereich hat dieselben Grenzen wie der BMI selbst; Details findest du beim <bmi>BMI-Rechner</bmi>.",
        "Nicht geeignet für Kinder, Jugendliche oder in der Schwangerschaft.",
        "Dies sind allgemeine Informationen, keine medizinische Beratung. Wenn du untergewichtig bist, eine Erkrankung hast oder schon einmal eine Essstörung hattest, lege jedes Gewichtsziel gemeinsam mit einer Ärztin, einem Arzt oder einer Ernährungsfachkraft fest.",
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
          label: "World Health Organization. Obesity and overweight: Faktenblatt.",
          url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Wie wird das Idealgewicht berechnet?",
      answer:
        "Dieses Tool zeigt den Gewichtsbereich, bei dem dein BMI zwischen 18,5 und 24,9 liegt, plus drei klinische Formeln (Devine, Robinson und Miller), die auf Größe und Geschlecht basieren.",
    },
    {
      question: "Warum liefern die Formeln unterschiedliche Werte?",
      answer:
        "Jede wurde an andere Daten angepasst. Die Spanne zwischen ihnen zeigt, dass ein gesundes Gewicht ein Bereich ist und kein einzelner Punkt.",
    },
    {
      question: "Hängt das Idealgewicht vom Alter ab?",
      answer:
        "Keine der Formeln berücksichtigt das Alter. Gesunde Gewichtsbereiche für ältere Erwachsene können leicht abweichen – besprich deine Ziele also mit deiner Ärztin oder deinem Arzt, wenn du über 65 bist.",
    },
    {
      question: "Ist das Idealgewicht bei Männern und Frauen unterschiedlich?",
      answer:
        "Ja. Bei gleicher Größe ergeben die Formeln für Männer einen höheren Wert, was durchschnittliche Unterschiede bei Muskulatur und Körperbau widerspiegelt. Der BMI-Bereich ist für beide gleich.",
    },
    {
      question: "Was, wenn ich weit von meinem Idealbereich entfernt bin?",
      answer:
        "Starte mit einem kleineren Ziel, etwa 5–10 % deines aktuellen Gewichts abzunehmen, mit etwa 0,5–1 kg pro Woche. Kleine, stetige Veränderungen lassen sich leichter beibehalten.",
    },
  ],
});
