import type { Facts } from "@/data/facts";
import type en from "../en/tools";

const tools = (f: Facts): ReturnType<typeof en> => ({
  // Strings shared by several tool pages and calculators.
  shared: {
    breadcrumb: "Tools",
    faqHeading: "Häufig gestellte Fragen",
    disclaimerTitle: "Keine medizinische Beratung",
    disclaimer:
      "Diese Rechner liefern allgemeine Schätzungen für gesunde Erwachsene. Sie sind keine medizinische Beratung und ersetzen weder eine Ärztin oder einen Arzt noch eine Ernährungsfachkraft. Wenn du schwanger bist, stillst, unter 18 bist oder eine Erkrankung hast, hol dir persönlichen Rat, bevor du deine Ernährung umstellst.",
    sourcesHeading: "Quellen",
    relatedTools: "Ähnliche Rechner",
    relatedGuides: "Passende Ratgeber",
    ctaButton: "Kostenlose App holen",
    sexAria: "Geschlecht",
    male: "Männlich",
    female: "Weiblich",
    age: "Alter",
    heightCm: "Größe (cm)",
    weightKg: "Gewicht (kg)",
    /** Validation under a number field. {unit} may be empty. */
    rangeError: "Gib {min}–{max} {unit} ein",
    units: {
      years: "Jahre",
      cm: "cm",
      in: "in",
      kg: "kg",
      lb: "lb",
      kcal: "kcal",
    },
    kcalPerDay: "kcal/Tag",
  },

  index: {
    metaTitle: "Kostenlose Ernährungsrechner",
    metaDescription:
      "Kostenlose Rechner für BMI, Kalorienbedarf, Makros, Grundumsatz und Idealgewicht. Sofort Ergebnisse ohne Anmeldung – dann deinen Plan in MyNutriRise umsetzen.",
    title: "Kostenlose Ernährungs-Tools",
    subtitle: "Fünf Rechner, keine Anmeldung. Dieselbe Mathematik, mit der MyNutriRise deinen Plan erstellt.",
    cards: {
      calorie: {
        title: "Kalorienrechner",
        description: "Tagesziele zum Abnehmen, Halten oder Zunehmen – nach Mifflin–St Jeor.",
      },
      macro: {
        title: "Makrorechner",
        description: "Ziele für Protein, Kohlenhydrate & Fett aus deinem Kalorienziel.",
      },
      bmi: {
        title: "BMI-Rechner",
        description: "Body-Mass-Index mit Einordnung in den gesunden Bereich, metrisch oder imperial.",
      },
      bmr: {
        title: "Grundumsatz-Rechner",
        description: "Die Kalorien, die dein Körper in völliger Ruhe verbrennt.",
      },
      idealWeight: {
        title: "Idealgewicht-Rechner",
        description: "Gesunder Gewichtsbereich für deine Größe – nach den Formeln von Devine & Robinson.",
      },
    },
    quiz: {
      title: "Quiz für deinen Plan",
      description: "Alles oben in einem – beantworte 4 Fragen und erhalte deinen kompletten Plan.",
    },
  },

  bmi: {
    metaTitle: "BMI-Rechner für Erwachsene: BMI kostenlos berechnen",
    metaDescription:
      "Kostenloser BMI-Rechner für Erwachsene: Größe und Gewicht metrisch oder imperial eingeben, Body-Mass-Index samt WHO-Kategorie erhalten. Jetzt berechnen.",
    breadcrumb: "BMI-Rechner",
    title: "BMI-Rechner",
    subtitle: "Ermittle deinen Body-Mass-Index in Sekunden – kostenlos und ohne Anmeldung.",
    whatIsHeading: "Was ist der BMI?",
    whatIs:
      "Der Body-Mass-Index setzt dein Gewicht ins Verhältnis zu deiner Größe: <b>BMI = Gewicht (kg) ÷ Größe (m)²</b>. Bei Erwachsenen gilt 18,5 bis 24,9 allgemein als gesunder Bereich, 25–29,9 als Übergewicht und ab 30 als Adipositas.",
    whatIsCaveat:
      "Der BMI misst den Körperfettanteil nicht direkt – Sportler mit viel Muskelmasse landen oft im Bereich „Übergewicht“, obwohl sie völlig gesund sind, und die gesunden Bereiche können je nach ethnischer Herkunft leicht abweichen. Sieh ihn als Hinweis, nicht als Urteil.",
    resultHeading: "Was du mit deinem Ergebnis anfangen kannst",
    result:
      "Liegt dein BMI außerhalb des gesunden Bereichs, ist eine moderate Anpassung der Kalorien die nachhaltige Lösung – keine Crash-Diät. Ermittle dein Tagesziel mit dem <calorie>Kalorienrechner</calorie>, sieh dir im <ideal>Idealgewicht-Rechner</ideal> den Gewichtsbereich hinter der Rechnung an und peile 0,25–0,5 kg Veränderung pro Woche an.",
    faqs: [
      {
        question: "Was ist ein gesunder BMI?",
        answer:
          "Für die meisten Erwachsenen 18,5–24,9. Unter 18,5 gilt als Untergewicht, 25–29,9 als Übergewicht, ab 30 als Adipositas. Muskelmasse, Körperbau und ethnische Herkunft beeinflussen, was für den Einzelnen passt.",
      },
      {
        question: "Ist der BMI für muskulöse Menschen aussagekräftig?",
        answer:
          "Nein – der BMI kann Muskeln nicht von Fett unterscheiden, deshalb gelten muskulöse Sportler oft als übergewichtig. Taillenumfang und Schätzungen des Körperfettanteils liefern ein vollständigeres Bild.",
      },
      {
        question: "Wie schnell kann ich meinen BMI sicher verändern?",
        answer:
          "Mit 0,25–0,5 kg Gewichtsveränderung pro Woche – das entspricht etwa einem täglichen Defizit oder Überschuss von 250–500 kcal. Schneller bedeutet meist Muskelverlust und Jo-Jo-Effekt.",
      },
      {
        question: "Soll ich metrische oder imperiale Einheiten nutzen?",
        answer:
          "Beides geht – der Rechner unterstützt beide. Die Formel ist identisch; bei imperialen Einheiten wird zur Umrechnung einfach mit 703 multipliziert.",
      },
    ],
    ctaTitle: "Bereit, etwas aus deinem Ergebnis zu machen?",
    ctaBody: "MyNutriRise trackt deine Mahlzeiten, Trainings und Fortschritte – Foto machen, und die KI übernimmt das Eintragen.",
    calc: {
      unitsAria: "Einheiten",
      metric: "Metrisch (cm, kg)",
      imperial: "Imperial (in, lb)",
      heightMetric: "Größe (cm)",
      heightImperial: "Größe (Zoll)",
      weightMetric: "Gewicht (kg)",
      weightImperial: "Gewicht (lb)",
      result: "Dein BMI",
      categories: {
        underweight: "Untergewicht",
        healthy: "Normalgewicht",
        overweight: "Übergewicht",
        obese: "Adipositas",
      },
      empty: "Gib deine Größe und dein Gewicht ein, um deinen BMI zu sehen.",
    },
  },

  bmr: {
    metaTitle: "Grundumsatz-Rechner: Kalorienverbrauch in Ruhe",
    metaDescription:
      "Kostenloser Grundumsatz-Rechner nach Mifflin-St Jeor: Sieh, wie viele Kalorien dein Körper in Ruhe verbrennt, und plane Abnehmen oder Muskelaufbau.",
    breadcrumb: "Grundumsatz-Rechner",
    title: "Grundumsatz-Rechner",
    subtitle: "Finde heraus, wie viele Kalorien dein Körper in völliger Ruhe verbrennt.",
    ctaTitle: "Mach etwas aus deiner Zahl",
    ctaBody:
      "MyNutriRise erstellt deinen Tagesplan mit genau dieser Mathematik – und trackt dann jede Mahlzeit per KI-Foto-Scan.",
    calc: {
      result: "Dein Grundumsatz",
      resultNote: "kcal/Tag in völliger Ruhe verbrannt (Mifflin–St Jeor)",
      empty: "Gib deine Daten ein, um deinen Grundumsatz zu sehen.",
    },
  },

  calorie: {
    metaTitle: "Kalorienrechner: Kaloriendefizit zum Abnehmen berechnen",
    metaDescription:
      "Kostenloser Kalorienrechner: Ermittle deinen Erhaltungsbedarf und ein sicheres Kaloriendefizit zum Abnehmen nach Mifflin-St Jeor. Jetzt Wert berechnen.",
    breadcrumb: "Kalorienrechner",
    title: "Kalorienrechner",
    subtitle:
      "Finde heraus, wie viele Kalorien du täglich brauchst, um abzunehmen, dein Gewicht zu halten oder Muskeln aufzubauen – kostenlos und ohne Anmeldung.",
    ctaTitle: "Erreiche jeden Tag dein Ziel",
    ctaBody:
      "MyNutriRise trackt deine Kalorien automatisch – fotografiere deine Mahlzeit, und die KI trägt sie für dich ein.",
    calc: {
      activityLabel: "Aktivitätslevel",
      // Same order as the multipliers 1.2, 1.375, 1.55, 1.725, 1.9.
      activityLevels: [
        "Sitzend (wenig oder kein Sport)",
        "Leicht aktiv (1–3 Tage/Woche)",
        "Mäßig aktiv (3–5 Tage/Woche)",
        "Sehr aktiv (6–7 Tage/Woche)",
        "Extrem aktiv (körperliche Arbeit + Training)",
      ],
      lose: "Abnehmen",
      maintain: "Halten",
      gain: "Muskeln aufbauen",
      empty: "Gib deine Daten ein, um deine täglichen Kalorienziele zu sehen.",
    },
  },

  idealWeight: {
    metaTitle: "Idealgewicht-Rechner nach Größe und Geschlecht",
    metaDescription:
      "Kostenloser Idealgewicht-Rechner nach Größe und Geschlecht mit den Formeln von Devine und Robinson plus gesundem BMI-Bereich. Zielgewicht in Sekunden finden.",
    breadcrumb: "Idealgewicht",
    title: "Idealgewicht-Rechner",
    subtitle: "Schätze einen gesunden Gewichtsbereich für deine Größe – kostenlos und ohne Anmeldung.",
    meansHeading: "Was „Idealgewicht“ wirklich bedeutet",
    means:
      "Die eine perfekte Zahl gibt es nicht. Die Formeln von <b>Devine</b> und <b>Robinson</b> wurden für die klinische Dosierung entwickelt und liefern einen nützlichen Mittelwert, während der BMI-basierte Bereich (18,5–24,9) die Spanne zeigt, die allgemein mit guter Gesundheit verbunden wird:",
    formulas: [
      "Devine (Männer): 50 kg + 2,3 kg pro Zoll über 5 Fuß",
      "Devine (Frauen): 45,5 kg + 2,3 kg pro Zoll über 5 Fuß",
      "Robinson (Männer): 52 kg + 1,9 kg pro Zoll über 5 Fuß",
      "Robinson (Frauen): 49 kg + 1,7 kg pro Zoll über 5 Fuß",
    ],
    meansNote:
      "Muskelmasse, Körperbau und ethnische Herkunft beeinflussen, was für dich passt – sieh den Bereich als Richtung, nicht als Deadline.",
    sustainHeading: "Nachhaltig ans Ziel",
    sustain:
      "Wähle ein Ziel innerhalb deines gesunden Bereichs und rechne dann rückwärts: Der <calorie>Kalorienrechner</calorie> liefert dir die tägliche Aufnahme für 0,25–0,5 kg Veränderung pro Woche, und mit dem <bmi>BMI-Rechner</bmi> kannst du deinen Fortschritt unterwegs überprüfen.",
    faqs: [
      {
        question: "Wie wird das Idealgewicht berechnet?",
        answer:
          "Dieses Tool zeigt drei Sichtweisen: die klinischen Formeln von Devine und Robinson (basierend auf Größe und Geschlecht) und die Gewichtsspanne, in der dein BMI zwischen 18,5 und 24,9 liegt.",
      },
      {
        question: "Warum liefern die Formeln unterschiedliche Werte?",
        answer:
          "Jede wurde an andere Bevölkerungsdaten angepasst. Die Spanne zwischen ihnen ist gewollt – dein gesundes Gewicht ist ein Bereich, kein Punkt.",
      },
      {
        question: "Unterscheidet sich das Idealgewicht bei Männern und Frauen?",
        answer:
          "Ja – bei gleicher Größe setzen die Formeln für Männer einen höheren Ausgangswert an, weil sich Muskelmasse und Körperbau im Durchschnitt unterscheiden.",
      },
      {
        question: "Was, wenn ich weit von meinem Idealbereich entfernt bin?",
        answer:
          "Setz auf ein nachhaltiges Tempo: 0,25–0,5 kg pro Woche durch ein moderates Kaloriendefizit oder einen moderaten Überschuss, gestützt auf Protein und regelmäßige Bewegung.",
      },
    ],
    ctaTitle: "Nachhaltig ans Ziel kommen",
    ctaBody: "MyNutriRise legt ein realistisches Tempo fest, verfolgt deinen Gewichtstrend und trägt Mahlzeiten per Foto ein.",
    calc: {
      healthyRange: "Gesunder Gewichtsbereich (BMI 18,5–24,9)",
      rangeValue: "{min}–{max} kg",
      devine: "Devine-Formel",
      robinson: "Robinson-Formel",
      miller: "Miller-Formel",
      formulaValue: "{value} kg",
      empty: "Gib deine Größe ein, um deinen geschätzten Idealgewichtsbereich zu sehen.",
    },
  },

  macro: {
    metaTitle: "Makrorechner zum Abnehmen & für Muskelaufbau",
    metaDescription:
      "Kostenloser Makrorechner für Fettabbau und Muskelaufbau: Rechne deine Kalorien in Gramm Protein, Kohlenhydrate und Fett um. Verteilung wählen und loslegen.",
    breadcrumb: "Makrorechner",
    title: "Makrorechner",
    subtitle: "Mach aus deinem Kalorienziel tägliche Ziele für Protein, Kohlenhydrate und Fett – kostenlos und ohne Anmeldung.",
    chooseHeading: "So wählst du deine Aufteilung",
    choose:
      "Eine <b>ausgewogene</b> Aufteilung (30 % Protein / 40 % Kohlenhydrate / 30 % Fett) passt für die meisten. Wähle <b>proteinreich</b> (40 %), wenn du Muskeln aufbauen oder sie im Defizit erhalten willst – Protein sättigt außerdem am stärksten. <b>Keto</b> hält die Kohlenhydrate für Low-Carb-Pläne bei etwa 5 %, und <b>Ausdauer</b> erhöht sie auf 50 %, um hohe Trainingsumfänge zu versorgen.",
    math:
      "Die Rechnung ist einfach: Protein und Kohlenhydrate liefern <b>4 kcal pro Gramm</b>, Fett liefert <b>9 kcal pro Gramm</b>. Bei 2.000 kcal und ausgewogener Aufteilung sind das 150 g Protein, 200 g Kohlenhydrate und 67 g Fett.",
    startHeading: "Starte mit der richtigen Kalorienzahl",
    start:
      "Deine Aufteilung ist nur so gut wie die Kalorien, die sie aufteilt. Falls du noch kein Tagesziel hast, nutze zuerst den <calorie>Kalorienrechner</calorie> – und wenn du traditionelle Gerichte isst, zeigt unser Ratgeber zum <guide>Makro-Tracking mit kulturellen Gerichten</guide>, wie du diese Ziele auch mit Biryani, Tajine und Kabuli Pulao auf dem Speiseplan erreichst.",
    practiceHeading: "Makros im Alltag erreichen",
    practice:
      "Baue jede Mahlzeit um eine Proteinquelle herum auf, lass die Kohlenhydrate mit deinem Trainingstag mitwachsen und betrachte Fett als den Rest. Beständigkeit schlägt Präzision: Wenn du jedes Ziel auf ±10 g triffst, war es ein guter Tag.",
    faqs: [
      {
        question: "Welche Makro-Aufteilung ist zum Abnehmen am besten?",
        answer:
          "Mehr Protein hilft am meisten – 35–40 % Protein erhalten im Kaloriendefizit die Muskeln und halten dich satt. Den Gewichtsverlust bewirkt aber das Defizit selbst, nicht die genaue Aufteilung.",
      },
      {
        question: "Wie viel Protein brauche ich für den Muskelaufbau?",
        answer:
          "Etwa 1,6–2,2 g pro kg Körpergewicht täglich. Die proteinreiche Aufteilung (40 %) erreicht diesen Bereich bei moderatem Überschuss für die meisten Menschen.",
      },
      {
        question: "Sind Makros wichtiger als Kalorien?",
        answer:
          "Kalorien bestimmen die Gewichtsveränderung, Makros bestimmen, wie sie sich anfühlt und was du behältst. Lege zuerst die Kalorien fest und nutze dann die Makros, um Muskeln und Energie zu schützen.",
      },
      {
        question: "Kann ich Makros auch mit halalem oder kulturellem Essen tracken?",
        answer: `Ja – gemischte Gerichte wie Biryani oder Tajine haben bekannte Makroprofile. MyNutriRise deckt ${f.CUISINES} Küchen der Welt ab, mit Protein, Kohlenhydraten und Fett pro Portion.`,
      },
    ],
    ctaTitle: "Tracke deine Makros automatisch",
    ctaBody:
      "Mach ein Foto, und MyNutriRise trägt Protein, Kohlenhydrate und Fett für dich ein – mit täglicher Aufschlüsselung im Vergleich zu deinen Zielen.",
    calc: {
      caloriesLabel: "Tägliche Kalorien",
      hint: "Du kennst deinen Wert nicht? Nutze zuerst den <link>Kalorienrechner</link>.",
      dietAria: "Ernährungsstil",
      splits: {
        balanced: "Ausgewogen",
        highprotein: "Proteinreich",
        keto: "Keto / Low-Carb",
        endurance: "Ausdauer",
      },
      splitSummary: "{p} % Protein · {c} % KH · {f} % Fett",
      protein: "Protein",
      carbs: "KH",
      fat: "Fett",
      grams: "{n} g",
      empty: "Gib deine täglichen Kalorien ein, um deine Makroziele zu sehen.",
    },
  },
});

export default tools;
