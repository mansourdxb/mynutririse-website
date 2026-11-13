import type { Facts } from "@/data/facts";
import type en from "../en/tools";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
