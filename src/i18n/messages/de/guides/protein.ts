import type { Facts } from "@/data/facts";
import type en from "../../en/guides/protein";

// Long-form explainer and FAQ for /tools/protein-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <macro>…</macro> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Was dir dieser Rechner verrät" },
    {
      type: "p",
      text: "Dieser Rechner gibt dir einen <b>täglichen Proteinbereich in Gramm</b> auf Basis deines Körpergewichts und deines Ziels und verteilt ihn dann auf deine Mahlzeiten. Den Proteinbedarf gibt man am besten pro Kilogramm Körpergewicht an, denn eine 55 kg schwere Frau und ein 95 kg schwerer Mann brauchen sehr unterschiedliche Mengen, selbst wenn sie gleich viele Kalorien essen.",
    },
    { type: "h2", text: "Die Bereiche und woher sie stammen" },
    {
      type: "table",
      head: ["Ziel", "Gramm pro kg Körpergewicht pro Tag", "Grundlage"],
      rows: [
        ["Allgemeine Gesundheit, wenig Sport", "0,8–1,0", "Empfohlene Tageszufuhr (RDA, 0,8 g/kg)"],
        ["Aktiver Lebensstil", "1,2–1,6", "Sporternährungsempfehlungen für regelmäßig Trainierende"],
        ["Muskeln aufbauen", "1,6–2,2", "Metaanalyse von Krafttrainingsstudien"],
        ["Fett abbauen, Muskeln erhalten", "1,6–2,4", "Studien an kraftsporterfahrenen Menschen im Kaloriendefizit"],
      ],
    },
    {
      type: "p",
      text: "Die empfohlene Zufuhr von 0,8 g/kg soll den Grundbedarf fast aller gesunden Erwachsenen decken; sie ist ein Minimum, kein Optimum für aktive Menschen. Die International Society of Sports Nutrition empfiehlt den meisten Menschen, die Sport treiben, 1,4–2,0 g/kg. Eine Metaanalyse von 2018 ergab, dass der Nutzen von Protein für den Muskelaufbau bei etwa <b>1,6 g/kg</b> ein Plateau erreicht, wobei manche Menschen bis etwa 2,2 g/kg noch profitieren. Im Kaloriendefizit helfen höhere Mengen, Muskeln zu erhalten – deshalb liegt der Bereich für den Fettabbau höher.",
    },
    {
      type: "formula",
      items: [
        "Tägliches Protein (g) = Körpergewicht (kg) × Gramm pro kg für dein Ziel",
        "Pro Mahlzeit (g)      = tägliches Protein ÷ Anzahl der Mahlzeiten",
      ],
    },
    { type: "h2", text: "Rechenbeispiel" },
    {
      type: "p",
      text: "Ein 75 kg schwerer Mann, der Krafttraining macht und Muskeln aufbauen möchte: 75 × 1,6 = <b>120 g</b> bis 75 × 2,2 = <b>165 g</b> pro Tag. Auf vier Mahlzeiten verteilt sind das etwa 30–41 g pro Mahlzeit: zum Beispiel Eier und Labneh zum Frühstück, ein Hähnchen-Shawarma-Teller zum Mittagessen, griechischer Joghurt als Snack und gegrillter Fisch mit Linsen zum Abendessen.",
    },
    { type: "h2", text: "Über den Tag verteilen" },
    {
      type: "p",
      text: "Sporternährungsempfehlungen raten zu etwa 0,25 g pro kg Körpergewicht oder rund 20–40 g Protein pro Mahlzeit, gleichmäßig alle 3–4 Stunden verteilt. Die meisten Menschen essen zum Frühstück wenig Protein und zum Abendessen viel; einen Teil davon früher am Tag zu essen, ist eine einfache Verbesserung.",
    },
    { type: "h2", text: "Protein zum Abnehmen" },
    {
      type: "p",
      text: "Wenn du weniger isst, kann dein Körper neben Fett auch Muskeln abbauen. Hältst du die Proteinzufuhr hoch und trainierst weiter Kraft, ist mehr von dem, was du verlierst, Fett. Außerdem sättigt Protein von allen Makronährstoffen am stärksten, was gegen Hunger hilft. Leg zuerst deine Kalorien mit dem <calorie>Kalorienrechner</calorie> oder dem <deficit>Kaloriendefizit-Rechner</deficit> fest und sorge dann dafür, dass dein Protein den hier gezeigten Bereich erreicht.",
    },
    { type: "h2", text: "Protein für den Muskelaufbau" },
    {
      type: "p",
      text: "Protein unterstützt das Muskelwachstum, ersetzt aber kein Training. Die größten Ergebnisse bringen progressives Krafttraining, genug Kalorien insgesamt (ein kleiner Überschuss) und Schlaf. Sobald du etwa 1,6 g/kg erreichst, liefern zusätzliche Kalorien aus Kohlenhydraten meist mehr Energie fürs Training als noch mehr Protein. Wie Protein mit Kohlenhydraten und Fett zusammenspielt, zeigt dir der <macro>Makrorechner</macro>.",
    },
    { type: "h2", text: "Gute Proteinquellen" },
    {
      type: "ul",
      items: [
        "Tierisch: Hähnchen, Pute, mageres Rind- und Lammfleisch, Fisch, Eier, griechischer Joghurt, Labneh, Hüttenkäse.",
        "Pflanzlich: Linsen, Kichererbsen, Ful Medames, Bohnen, Tofu, Edamame. Wenn du über den Tag verschiedene pflanzliche Quellen kombinierst, deckst du alle essenziellen Aminosäuren ab.",
        "Viele traditionelle Gerichte sind gute Proteinquellen, zum Beispiel gegrillte Kebabs, Shish Tawook oder Linsensuppe; unser Ratgeber zum <macroguide>Makro-Tracking mit Gerichten aus verschiedenen Esskulturen</macroguide> zeigt, wie du sie einträgst.",
      ],
    },
    { type: "h2", text: "Grenzen" },
    {
      type: "ul",
      items: [
        "Wenn du viel Körperfett hast, kann die Berechnung mit deinem vollen Körpergewicht den Bedarf überschätzen; eine Berechnung auf Basis eines realistischen Zielgewichts ergibt eine sinnvollere Zahl.",
        "Menschen mit Nierenerkrankungen dürfen ihre Proteinzufuhr nicht ohne ärztlichen Rat erhöhen.",
        "In Schwangerschaft und Stillzeit ist der Bedarf höher, und bei Kindern und älteren Menschen ist er anders.",
        "Dies sind allgemeine Informationen, keine medizinische Beratung. Sprich für persönlichen Rat mit einer Ärztin, einem Arzt oder einer Ernährungsfachkraft.",
      ],
    },
    {
      type: "sources",
      sources: [
        {
          label: "Jäger R et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017.",
          url: "https://pubmed.ncbi.nlm.nih.gov/28642676/",
        },
        {
          label: "Morton RW et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. Br J Sports Med, 2018.",
          url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
        },
        {
          label: "Helms ER et al. A systematic review of dietary protein during caloric restriction in resistance trained lean athletes. Int J Sport Nutr Exerc Metab, 2014.",
          url: "https://pubmed.ncbi.nlm.nih.gov/24092765/",
        },
        {
          label: "Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids. National Academies Press, 2005.",
          url: "https://nap.nationalacademies.org/catalog/10490",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Wie viel Protein brauche ich am Tag?",
      answer:
        "Mindestens 0,8 g pro kg Körpergewicht für gesunde Erwachsene, die wenig Sport treiben, 1,2–1,6 g/kg, wenn du aktiv bist, und etwa 1,6–2,2 g/kg, wenn du Muskeln aufbauen möchtest.",
    },
    {
      question: "Wie viel Protein brauche ich für den Muskelaufbau?",
      answer:
        "Die Forschung deutet darauf hin, dass etwa 1,6 g pro kg Körpergewicht pro Tag für die meisten Menschen reichen, manche profitieren bis etwa 2,2 g/kg – kombiniert mit regelmäßigem Krafttraining.",
    },
    {
      question: "Sollte ich beim Abnehmen mehr Protein essen?",
      answer:
        "Ja. Mehr Protein (etwa 1,6–2,4 g/kg) zusammen mit Krafttraining hilft dir, im Kaloriendefizit Muskeln zu erhalten, und macht es leichter, den Hunger im Griff zu behalten.",
    },
    {
      question: "Kann ich zu viel Protein essen?",
      answer:
        "Für gesunde Erwachsene gelten Mengen in den hier gezeigten Bereichen als sicher. Menschen mit Nierenerkrankungen oder anderen Erkrankungen sollten dem Rat ihrer Ärztin oder ihres Arztes folgen.",
    },
    {
      question: "Wie viel Protein kann ich pro Mahlzeit aufnehmen?",
      answer:
        "Dein Körper verdaut das gesamte Protein, das du isst; 20–40 g auf 3–5 Mahlzeiten zu verteilen, ist einfach ein praktischer Weg, deine Muskeln über den ganzen Tag zu versorgen.",
    },
    {
      question: "Bekomme ich mit pflanzlicher Ernährung genug Protein?",
      answer:
        "Ja. Kombiniere über den Tag Hülsenfrüchte, Soja, Getreide, Nüsse und Samen und ziele eher auf das obere Ende deines Bereichs, weil pflanzliches Protein etwas schlechter verdaulich ist.",
    },
  ],
});
