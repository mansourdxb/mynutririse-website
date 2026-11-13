import type { Facts } from "@/data/facts";
import type en from "../../en/guides/tdee";

// Long-form explainer and FAQ for /tools/tdee-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <calorie>…</calorie> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Was TDEE bedeutet" },
    {
      type: "p",
      text: "TDEE steht für <b>total daily energy expenditure</b>, also deinen täglichen Gesamtumsatz: alle Kalorien, die dein Körper an einem Tag verbraucht. Isst du ungefähr so viel, bleibt dein Gewicht etwa gleich – deshalb nennt man den TDEE auch deinen Erhaltungsbedarf. Dieser Rechner zeigt dir deinen TDEE für jedes Aktivitätslevel nebeneinander, damit du siehst, wie stark tägliche Bewegung deinen Bedarf verändert.",
    },
    { type: "h2", text: "Wofür du deine täglichen Kalorien verbrauchst" },
    {
      type: "ul",
      items: [
        "<b>Grundumsatz (BMR):</b> die Energie, die dich in Ruhe am Leben hält. Bei den meisten Menschen ist er der größte Anteil, oft etwa 60–70 % der Gesamtmenge.",
        "<b>Verdauung:</b> Das Zerlegen und Speichern deiner Nahrung verbraucht einen kleinen Anteil, meist auf etwa 10 % geschätzt. Protein zu verdauen kostet mehr Energie als Kohlenhydrate oder Fett.",
        "<b>Alltagsbewegung:</b> Gehen, Stehen, Kochen, Zappeln. Dieser Anteil unterscheidet sich von Mensch zu Mensch enorm und lässt sich am leichtesten verändern.",
        "<b>Sport:</b> geplantes Training. Bei vielen Menschen ist das ein kleinerer Anteil, als sie erwarten.",
      ],
    },
    { type: "h2", text: "Die Formel" },
    {
      type: "p",
      text: "Der Rechner schätzt deinen Grundumsatz mit der <b>Mifflin–St-Jeor-Formel</b>, die eine systematische Übersichtsarbeit von 2005 für gesunde Erwachsene am zuverlässigsten fand, und multipliziert ihn dann mit einem Standard-Aktivitätsfaktor:",
    },
    {
      type: "formula",
      items: [
        "Männer: Grundumsatz = 10 × Gewicht (kg) + 6,25 × Größe (cm) − 5 × Alter + 5",
        "Frauen: Grundumsatz = 10 × Gewicht (kg) + 6,25 × Größe (cm) − 5 × Alter − 161",
        "TDEE = Grundumsatz × Aktivitätsfaktor (1,2 bis 1,9)",
      ],
    },
    {
      type: "table",
      head: ["Aktivitätslevel", "Faktor", "Typische Woche"],
      rows: [
        ["Sitzend", "1,2", "Bürojob, wenig oder kein Sport"],
        ["Leicht aktiv", "1,375", "Leichter Sport an 1–3 Tagen pro Woche"],
        ["Mäßig aktiv", "1,55", "Moderater Sport an 3–5 Tagen pro Woche"],
        ["Sehr aktiv", "1,725", "Intensiver Sport an 6–7 Tagen pro Woche"],
        ["Extrem aktiv", "1,9", "Körperliche Arbeit plus Training"],
      ],
    },
    { type: "h2", text: "Rechenbeispiel" },
    {
      type: "p",
      text: "Eine 35-jährige Frau, 165 cm groß und 68 kg schwer: Grundumsatz = 10 × 68 + 6,25 × 165 − 5 × 35 − 161 = <b>1.375 kcal</b>. Ihr TDEE reicht von etwa 1.650 kcal, wenn sie sitzend lebt (× 1,2), bis etwa 2.131 kcal, wenn sie an 3–5 Tagen pro Woche trainiert (× 1,55). Dieser Unterschied von fast 500 kcal pro Tag entsteht allein durch Aktivität.",
    },
    { type: "h2", text: "Dein Aktivitätslevel ehrlich wählen" },
    {
      type: "p",
      text: "Wähle das Level, das zu deiner typischen Woche passt, nicht zu deiner besten. Wer im Büro arbeitet und dreimal pro Woche trainiert, ist meist „leicht“ oder „mäßig“ aktiv, nicht „sehr aktiv“. Im Zweifel nimm das niedrigere Level: Es ist leichter, später mehr zu essen, als zu rätseln, warum sich die Waage nicht bewegt.",
    },
    { type: "h2", text: "Mit deinem TDEE abnehmen" },
    {
      type: "p",
      text: "Isst du etwa 500 kcal unter deinem TDEE, nimmst du anfangs rund 0,5 kg pro Woche ab – innerhalb der NHS-Empfehlung von 0,5–1 kg pro Woche. Geh ohne ärztliche Aufsicht nie unter 1.200 kcal pro Tag als Frau bzw. 1.500 kcal pro Tag als Mann. Um auf ein bestimmtes Zielgewicht bis zu einem Datum hinzuplanen, nutze den <deficit>Kaloriendefizit-Rechner</deficit>.",
    },
    { type: "h2", text: "Mit deinem TDEE Muskeln aufbauen" },
    {
      type: "p",
      text: "Iss etwa 200–300 kcal über deinem TDEE, trainiere mit progressiver Belastung und nimm genug Protein zu dir (der <protein>Proteinrechner</protein> gibt dir ein Ziel). Steigt dein Gewicht als Anfänger schneller als etwa 1 % deines Körpergewichts pro Monat, reduziere den Überschuss.",
    },
    { type: "h2", text: "Die Schätzung mit der Realität abgleichen" },
    {
      type: "p",
      text: "Deinen tatsächlichen TDEE verraten dir deine eigenen Daten. Tracke 2–3 Wochen lang, was du isst, und verfolge dein Durchschnittsgewicht. Bleibt der Durchschnitt stabil, ist deine Zufuhr dein echter TDEE; steigt oder sinkt er, passe in Schritten von 100–200 kcal an. Denk daran, dass dein TDEE sinkt, wenn du abnimmst – rechne also alle 4–5 kg neu.",
    },
    { type: "h2", text: "Grenzen" },
    {
      type: "ul",
      items: [
        "Aktivitätsfaktoren sind grobe Kategorien; zwei „mäßig aktive“ Menschen können sich um mehrere hundert kcal unterscheiden.",
        "Die Formel kennt deine Körperzusammensetzung nicht, daher verbrennen sehr muskulöse Menschen eventuell mehr als vorhergesagt.",
        "Sie ist nicht für Kinder, Schwangere, Stillende oder Erkrankungen gedacht, die den Stoffwechsel beeinflussen.",
        "Dies sind allgemeine Informationen, keine medizinische Beratung. Sprich für persönlichen Rat mit einer Ärztin, einem Arzt oder einer Ernährungsfachkraft.",
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
          label: "NHS. Obesity: treatment (Empfehlung: 0,5 bis 1 kg pro Woche abnehmen).",
          url: "https://www.nhs.uk/conditions/obesity/treatment/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Was ist der Unterschied zwischen TDEE und Grundumsatz?",
      answer:
        "Der Grundumsatz ist die Energie, die du in völliger Ruhe verbrennst. Der TDEE rechnet Verdauung, Alltagsbewegung und Sport hinzu und ist deshalb immer höher als der Grundumsatz.",
    },
    {
      question: "Wie genau ist ein TDEE-Rechner?",
      answer:
        "Er liefert eine vernünftige Startschätzung, bei gesunden Erwachsenen meist innerhalb von etwa 10 %. Wenn du ein paar Wochen lang Zufuhr und Gewicht trackst, kennst du deinen echten TDEE.",
    },
    {
      question: "Sollte ich zum Abnehmen meinen TDEE essen?",
      answer:
        "Nein. Isst du deinen TDEE, hältst du dein Gewicht. Zum Abnehmen iss etwa 500 kcal weniger, aber nicht unter 1.200 kcal pro Tag als Frau bzw. 1.500 kcal pro Tag als Mann.",
    },
    {
      question: "Muss ich beim Sport verbrannte Kalorien zu meinem TDEE addieren?",
      answer:
        "Nein. Der Aktivitätsfaktor enthält deinen üblichen Sport bereits. Würdest du Trainingskalorien noch einmal addieren, zähltest du sie doppelt.",
    },
    {
      question: "Wie oft sollte ich meinen TDEE neu berechnen?",
      answer:
        "Nach jeweils 4–5 kg Gewichtsveränderung oder wenn sich deine Aktivität stark ändert, zum Beispiel durch einen neuen Job oder Trainingsplan.",
    },
  ],
});
