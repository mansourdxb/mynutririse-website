import type { Facts } from "@/data/facts";
import type en from "../../en/guides/deficit";

// Long-form explainer and FAQ for /tools/calorie-deficit-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <tdee>…</tdee> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Was dir dieser Rechner verrät" },
    {
      type: "p",
      text: "Gib deine Daten, ein Zielgewicht und ein Zieldatum ein, und der Rechner ermittelt, <b>wie viele Kalorien du täglich essen solltest</b>, um dorthin zu kommen, wie groß dein tägliches Defizit ist und wie schnell du voraussichtlich abnimmst. Würdest du für das Datum weniger als ein sicheres Minimum essen müssen, hält er dich auf diesem Minimum und zeigt dir stattdessen das Datum, das du realistisch erreichen kannst.",
    },
    { type: "h2", text: "Die Formel" },
    {
      type: "p",
      text: "Zuerst schätzt der Rechner deinen Erhaltungsbedarf (TDEE) mit der Mifflin–St-Jeor-Formel und deinem Aktivitätslevel, genau wie der <tdee>TDEE-Rechner</tdee>. Dann verteilt er die Energie, die du abbauen musst, auf die Tage bis zu deinem Zieldatum:",
    },
    {
      type: "formula",
      items: [
        "Abzunehmendes Gewicht (kg) = aktuelles Gewicht − Zielgewicht",
        "Tägliches Defizit = abzunehmendes Gewicht × 7.700 kcal ÷ Tage bis zum Zieldatum",
        "Tägliche Kalorien = Erhaltungsbedarf − tägliches Defizit",
        "Nie unter 1.200 kcal (Frauen) bzw. 1.500 kcal (Männer)",
      ],
    },
    {
      type: "p",
      text: "Der Wert von 7.700 kcal pro kg ist die Energie, die in etwa einem Kilogramm Körpergewebe steckt, das man beim Abnehmen verliert. Kurzfristig ist er eine nützliche Faustregel, doch Forschung zur Energiebilanz zeigt, dass sich die Abnahme mit der Zeit verlangsamt, weil ein leichterer Körper weniger verbrennt. In der Praxis brauchst du meist etwas länger, als die einfache Rechnung vermuten lässt.",
    },
    { type: "h2", text: "Rechenbeispiel" },
    {
      type: "p",
      text: "Ein 40-jähriger Mann, 180 cm groß, 92 kg schwer, leicht aktiv, möchte in 12 Wochen (84 Tagen) auf 86 kg kommen. Sein Grundumsatz beträgt 10 × 92 + 6,25 × 180 − 5 × 40 + 5 = 1.850 kcal, sein Erhaltungsbedarf also etwa 1.850 × 1,375 ≈ 2.544 kcal. Für 6 kg Abnahme braucht er 6 × 7.700 = 46.200 kcal, also 46.200 ÷ 84 ≈ <b>550 kcal pro Tag</b>. Er sollte etwa <b>1.994 kcal pro Tag</b> essen – über dem Minimum von 1.500 kcal für Männer – und kann mit etwa 0,5 kg Abnahme pro Woche rechnen.",
    },
    { type: "h2", text: "Wie schnell ist sicher?" },
    {
      type: "p",
      text: "Die NHS empfiehlt, 0,5–1 kg pro Woche abzunehmen. Schnellere Abnahme bedeutet meist mehr Muskelverlust, mehr Hunger und ein höheres Risiko, wieder zuzunehmen. Der Rechner warnt dich, wenn dein Plan bedeuten würde, mehr als 1 % deines Körpergewichts pro Woche zu verlieren – ein Tempo, das die meisten Menschen kaum durchhalten.",
    },
    {
      type: "p",
      text: "Außerdem setzt er eine Untergrenze: <b>1.200 kcal pro Tag für Frauen und 1.500 kcal pro Tag für Männer</b>. Unterhalb dieser Werte wird es sehr schwer, genug Protein, Vitamine und Mineralstoffe aufzunehmen, und sehr kalorienarme Diäten sollten nur unter ärztlicher Aufsicht erfolgen. Würde dein Datum weniger Kalorien erfordern, hält dich der Rechner auf der Untergrenze und zeigt ein späteres, realistisches Datum.",
    },
    { type: "h2", text: "Muskeln erhalten, während du Fett abbaust" },
    {
      type: "ul",
      items: [
        "Iss genug Protein, etwa 1,6–2,4 g pro kg Körpergewicht; der <protein>Proteinrechner</protein> nennt dir deinen Wert.",
        "Mach weiter 2–4-mal pro Woche Krafttraining, damit dein Körper einen Grund hat, Muskeln zu behalten.",
        "Teile deine täglichen Kalorien mit dem <macro>Makrorechner</macro> in Protein, Kohlenhydrate und Fett auf.",
        "Schlaf ausreichend und bleib im Alltag aktiv; Gehen vergrößert dein Defizit, ohne den Hunger stark zu steigern.",
      ],
    },
    { type: "h2", text: "Wenn du stattdessen zunehmen möchtest" },
    {
      type: "p",
      text: "Liegt dein Zielgewicht über deinem aktuellen Gewicht, ist dieser Rechner nicht das richtige Werkzeug. Nutze den <calorie>Kalorienrechner</calorie>, der auch ein Ziel für den Muskelaufbau zeigt.",
    },
    { type: "h2", text: "Grenzen" },
    {
      type: "ul",
      items: [
        "Der Erhaltungsbedarf ist eine Schätzung und kann um 10 % oder mehr abweichen; prüfe deinen Fortschritt alle 2–3 Wochen und passe um 100–200 kcal an.",
        "Das Gewicht auf der Waage schwankt täglich durch Wasser, Salz und Nahrung im Darm – beurteile deinen Fortschritt daher anhand von Wochendurchschnitten.",
        "Nicht geeignet für Kinder, Jugendliche, Schwangere, Stillende oder Menschen, die schon einmal eine Essstörung hatten.",
        "Dies sind allgemeine Informationen, keine medizinische Beratung. Wenn du eine Erkrankung hast oder Medikamente nimmst, sprich mit einer Ärztin, einem Arzt oder einer Ernährungsfachkraft, bevor du eine Diät beginnst.",
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
          label: "NHS. Obesity: treatment (Empfehlung: 0,5 bis 1 kg pro Woche abnehmen).",
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
      question: "Wie groß sollte mein Kaloriendefizit sein?",
      answer:
        "Ein Defizit von etwa 500 kcal pro Tag ist ein üblicher Startpunkt und ergibt anfangs rund 0,5 kg Abnahme pro Woche. Größere Defizite sind schwerer durchzuhalten und erhöhen den Muskelverlust.",
    },
    {
      question: "Wie viele Kalorien sollte ich mindestens essen?",
      answer:
        "Geh ohne ärztliche Aufsicht nicht unter 1.200 kcal pro Tag als Frau bzw. 1.500 kcal pro Tag als Mann. Der Rechner schlägt nie weniger vor.",
    },
    {
      question: "Warum ändert der Rechner mein Zieldatum?",
      answer:
        "Würdest du für dein Ziel bis zu deinem Datum unter dem sicheren Minimum essen müssen, hält er dich auf dem Minimum und zeigt dir stattdessen das Datum, das du realistisch erreichen kannst.",
    },
    {
      question: "Ist 1 kg pro Woche ein realistisches Ziel?",
      answer:
        "Für Menschen, die mehr abnehmen möchten, kann es das sein, zumindest am Anfang. Die NHS empfiehlt 0,5–1 kg pro Woche; für leichtere Menschen ist ein Ziel näher an 0,5 kg meist nachhaltiger.",
    },
    {
      question: "Warum nehme ich langsamer ab, als der Rechner sagt?",
      answer:
        "Dein Körper verbrennt etwas weniger, je leichter du wirst, Schätzungen des Erhaltungsbedarfs können danebenliegen, und Wassereinlagerungen verdecken den Fettverlust. Prüfe deine Zufuhr erneut und vergleiche Wochendurchschnitte über 2–3 Wochen, bevor du anpasst.",
    },
  ],
});
