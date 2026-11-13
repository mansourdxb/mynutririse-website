import type { Facts } from "@/data/facts";
import type en from "../../en/guides/bodyFat";

// Long-form explainer and FAQ for /tools/body-fat-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <bmi>…</bmi> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Was dir dieser Rechner verrät" },
    {
      type: "p",
      text: "Dieser Rechner schätzt deinen <b>Körperfettanteil</b> aus wenigen Maßband-Messungen, mit der Umfangsmethode der U.S. Navy. Anders als der BMI, der nur Gewicht und Größe ins Verhältnis setzt, zeigt dir der Körperfettanteil, wie viel deines Gewichts Fett ist und wie viel alles andere (Muskeln, Knochen, Organe und Wasser). Gibst du zusätzlich dein Gewicht ein, zeigt er auch deine Fettmasse und deine fettfreie Masse in Kilogramm.",
    },
    { type: "h2", text: "Die Formel (U.S.-Navy-Methode)" },
    {
      type: "p",
      text: "Die Methode wurde 1984 von Hodgdon und Beckett am Naval Health Research Center entwickelt, um den Körperfettanteil schnell und ohne Laborgeräte zu schätzen. Sie arbeitet mit dem Logarithmus deiner Messwerte – nimm also lieber den Rechner, statt es von Hand auszurechnen:",
    },
    {
      type: "formula",
      items: [
        "Männer: % Fett = 495 ÷ (1,0324 − 0,19077 × log10(Taille − Hals) + 0,15456 × log10(Größe)) − 450",
        "Frauen: % Fett = 495 ÷ (1,29579 − 0,35004 × log10(Taille + Hüfte − Hals) + 0,221 × log10(Größe)) − 450",
        "Alle Maße in cm",
      ],
    },
    { type: "h2", text: "So misst du richtig" },
    {
      type: "ul",
      items: [
        "Nimm ein flexibles Maßband, miss auf nackter Haut, steh entspannt und zieh das Band nicht fest.",
        "<b>Hals:</b> direkt unterhalb des Kehlkopfs (Adamsapfel), das Band nach vorne leicht abfallend.",
        "<b>Taille, Männer:</b> waagerecht auf Höhe des Bauchnabels, am Ende eines normalen Ausatmens.",
        "<b>Taille, Frauen:</b> an der schmalsten Stelle der Taille, meist oberhalb des Bauchnabels.",
        "<b>Hüfte, Frauen:</b> an der breitesten Stelle des Gesäßes.",
        "Miss jedes Mal zur selben Tageszeit, am besten morgens, und nimm den Durchschnitt aus zwei oder drei Messungen.",
      ],
    },
    { type: "h2", text: "Rechenbeispiel" },
    {
      type: "p",
      text: "Ein Mann, 178 cm groß, mit 38 cm Halsumfang und 86 cm Taillenumfang: Taille − Hals = 48 cm. Die Formel ergibt etwa <b>17 %</b> Körperfett, im Bereich „Fitness“ für Männer. Wiegt er 80 kg, sind das rund 14 kg Fettmasse und 66 kg fettfreie Masse.",
    },
    { type: "h2", text: "Was die Kategorien bedeuten" },
    {
      type: "table",
      head: ["Kategorie", "Frauen", "Männer"],
      rows: [
        ["Essenzielles Fett", "10–13 %", "2–5 %"],
        ["Athleten", "14–20 %", "6–13 %"],
        ["Fitness", "21–24 %", "14–17 %"],
        ["Durchschnitt", "25–31 %", "18–24 %"],
        ["Adipositas", "32 % und mehr", "25 % und mehr"],
      ],
    },
    {
      type: "p",
      text: "Diese Bereiche stammen vom American Council on Exercise. Frauen haben von Natur aus mehr essenzielles Fett als Männer. Sehr wenig Körperfett ist kein Gesundheitsziel: Unterhalb des essenziellen Bereichs kann der Hormonhaushalt gestört werden und bei Frauen der Menstruationszyklus.",
    },
    { type: "h2", text: "Nutzung beim Abnehmen und Muskelaufbau" },
    {
      type: "p",
      text: "Am nützlichsten ist der Körperfettanteil als Trend. Wenn du abnimmst, sollte der Anteil sinken – das zeigt, dass du überwiegend Fett und nicht Muskeln verlierst; halte dein Protein mit dem <protein>Proteinrechner</protein> hoch und trainiere weiter Kraft. Wenn du Muskeln aufbaust, können dein Gewicht und sogar dein <bmi>BMI</bmi> steigen, während das Körperfett gleich bleibt oder sinkt – ein gutes Zeichen, das die Waage allein übersehen würde.",
    },
    {
      type: "p",
      text: "Miss alle 2–4 Wochen statt täglich; kleine Veränderungen liegen innerhalb der Messungenauigkeit des Maßbands.",
    },
    { type: "h2", text: "Grenzen" },
    {
      type: "ul",
      items: [
        "Dies ist eine Schätzung. Verglichen mit Labormethoden wie DXA-Scans können Umfangsformeln bei einzelnen Menschen um mehrere Prozentpunkte abweichen, besonders bei sehr niedrigem oder sehr hohem Körperfett.",
        "Die Genauigkeit hängt von sorgfältigem, einheitlichem Messen ab; 1–2 cm Unterschied an der Taille verändern das Ergebnis spürbar.",
        "Die Formel wurde an erwachsenem Militärpersonal entwickelt und passt zu manchen Körpertypen und ethnischen Gruppen eventuell weniger gut.",
        "Nicht geeignet für Kinder oder in der Schwangerschaft.",
        "Dies sind allgemeine Informationen, keine medizinische Beratung. Besprich deine Ergebnisse mit einer Ärztin oder einem Arzt, wenn du dir Sorgen um dein Gewicht oder deine Gesundheit machst.",
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
      question: "Wie genau ist die U.S.-Navy-Methode zur Körperfettmessung?",
      answer:
        "Sie liefert für viele Erwachsene eine vernünftige Schätzung, doch einzelne Ergebnisse können von Labormethoden wie DXA um mehrere Prozentpunkte abweichen. Nutze sie, um Trends zu verfolgen, nicht als exakte Zahl.",
    },
    {
      question: "Welcher Körperfettanteil ist gesund?",
      answer:
        "Nach den ACE-Kategorien sind etwa 14–24 % für fitte und durchschnittliche Männer üblich und 21–31 % für Frauen. Sehr wenig Körperfett ist nicht gesund.",
    },
    {
      question: "Warum brauchen Frauen eine Hüftmessung?",
      answer:
        "Frauen speichern meist mehr Fett an Hüften und Oberschenkeln, deshalb bezieht die Formel für Frauen den Hüftumfang ein, um den Körperfettanteil genauer zu schätzen.",
    },
    {
      question: "Ist der Körperfettanteil besser als der BMI?",
      answer:
        "Er sagt mehr über die Körperzusammensetzung aus, denn der BMI kann Muskeln nicht von Fett unterscheiden. Beide zusammen, plus dein Taillenumfang, ergeben das vollständigste Bild.",
    },
    {
      question: "Wie oft sollte ich meinen Körperfettanteil messen?",
      answer:
        "Alle 2–4 Wochen reicht. Miss zur selben Tageszeit unter denselben Bedingungen und achte auf den Trend statt auf einzelne Messwerte.",
    },
  ],
});
