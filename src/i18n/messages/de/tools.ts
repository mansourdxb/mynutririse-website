import type { Facts } from "@/data/facts";
import type en from "../en/tools";

const tools = (f: Facts): ReturnType<typeof en> => ({
  // Strings shared by several tool pages and calculators.
  shared: {
    breadcrumb: "Tools",
    faqHeading: "Häufig gestellte Fragen",
    disclaimer:
      "Dieses Tool liefert allgemeine Schätzungen und ist keine medizinische Beratung. Sprich vor größeren Ernährungsumstellungen mit einer Fachperson.",
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
    mifflin: {
      men: "Männer: GU = 10 × Gewicht (kg) + 6,25 × Größe (cm) − 5 × Alter + 5",
      women: "Frauen: GU = 10 × Gewicht (kg) + 6,25 × Größe (cm) − 5 × Alter − 161",
    },
  },

  index: {
    metaTitle: "Kostenlose Ernährungsrechner",
    metaDescription:
      "Kostenlose Rechner für BMI, Kalorienbedarf, Makros, Grundumsatz und Idealgewicht – ohne Anmeldung.",
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
    metaTitle: "BMI-Rechner – Body-Mass-Index berechnen",
    metaDescription:
      "Kostenloser BMI-Rechner (metrisch & imperial). Vergleiche deinen Body-Mass-Index mit gesunden Bereichen und erfahre, was die Zahl bedeutet.",
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
    metaTitle: "Grundumsatz-Rechner (BMR)",
    metaDescription:
      "Kostenloser Grundumsatz-Rechner nach der Mifflin–St-Jeor-Formel. Finde heraus, wie viele Kalorien dein Körper in Ruhe verbrennt, und mach daraus dein Tagesziel.",
    breadcrumb: "Grundumsatz-Rechner",
    title: "Grundumsatz-Rechner",
    subtitle: "Finde heraus, wie viele Kalorien dein Körper in völliger Ruhe verbrennt.",
    whatIsHeading: "Was ist der Grundumsatz?",
    whatIs:
      "Dein Grundumsatz (BMR) ist die Energie, die dein Körper allein zum Leben braucht – für Atmung, Kreislauf und Zellreparatur –, noch bevor du dich überhaupt bewegst. Er macht meist 60–70 % der Kalorien aus, die du am Tag verbrennst, und ist deshalb die Grundlage jedes Kalorienziels.",
    equationIntro: "Dieser Rechner nutzt die <b>Mifflin–St-Jeor-Formel</b>:",
    example:
      "<b>Rechenbeispiel:</b> eine 28-jährige Frau, 162 cm und 60 kg: 10×60 + 6,25×162 − 5×28 − 161 = <b>1.312 kcal/Tag</b> in völliger Ruhe.",
    targetHeading: "Vom Grundumsatz zum Tagesziel",
    target:
      "Der Grundumsatz ist nur die Ruhehälfte des Bildes. Multipliziere ihn mit einem Aktivitätsfaktor (1,2–1,9), um deinen gesamten täglichen Energieverbrauch zu erhalten – genau das macht unser <calorie>Kalorienrechner</calorie>, und der <macro>Makrorechner</macro> teilt das Ergebnis dann in Protein, Kohlenhydrate und Fett auf.",
    fastingHeading: "Grundumsatz beim Fasten",
    fasting:
      "Kurzzeitiges Fasten – 16:8 oder das tägliche Fasten im Ramadan – senkt deinen Grundumsatz nicht nennenswert. Eine Verlangsamung des Stoffwechsels wird erst bei langer, sehr geringer Nahrungsaufnahme zum Thema. Im Ramadan bleibt dein Ruhebedarf gleich; plane Suhur und Iftar so, dass sie ihn decken.",
    faqs: [
      {
        question: "Was ist ein normaler Grundumsatz?",
        answer:
          "Bei den meisten Erwachsenen liegt er je nach Größe, Alter und Geschlecht ungefähr zwischen 1.200 und 2.000 kcal/Tag. Größere und jüngere Körper verbrennen in Ruhe mehr; mit dem Alter sinkt der Grundumsatz leicht.",
      },
      {
        question: "Entspricht der Grundumsatz den Kalorien, die ich essen sollte?",
        answer:
          "Nein. Der Grundumsatz ist das, was du in völliger Ruhe verbrennst. Dein Tagesziel ist der Grundumsatz multipliziert mit einem Aktivitätsfaktor – nutze den Kalorienrechner für die vollständige Zahl.",
      },
      {
        question: "Senkt Fasten meinen Grundumsatz?",
        answer:
          "Tägliches Intervallfasten, auch das Fasten im Ramadan, wirkt sich kaum auf den Grundumsatz aus. Nur lange, starke Einschränkung führt zu einer nennenswerten Anpassung des Stoffwechsels.",
      },
      {
        question: "Wie kann ich meinen Grundumsatz erhöhen?",
        answer:
          "Muskelaufbau ist der zuverlässigste Weg – Muskelgewebe verbrennt in Ruhe mehr Energie als Fett. Krafttraining plus ausreichend Protein steigert deinen Ruheverbrauch mit der Zeit.",
      },
    ],
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
    metaTitle: "Kalorienrechner: täglicher Kalorienbedarf",
    metaDescription:
      "Berechne deinen täglichen Kalorienbedarf mit der Mifflin–St-Jeor-Formel. Kostenlose Ziele zum Abnehmen, Halten oder Muskelaufbau – plus Ramadan-Ratgeber.",
    breadcrumb: "Kalorienrechner",
    title: "Kalorienrechner",
    subtitle:
      "Finde heraus, wie viele Kalorien du täglich brauchst, um abzunehmen, dein Gewicht zu halten oder Muskeln aufzubauen – kostenlos und ohne Anmeldung.",
    howHeading: "So wird dein Kalorienbedarf berechnet",
    howIntro:
      "Dieser Rechner nutzt die <b>Mifflin–St-Jeor-Formel</b>, auf die sich Ernährungsfachleute am häufigsten verlassen, um den Grundumsatz (BMR) zu schätzen – die Energie, die dein Körper in Ruhe verbrennt:",
    tdeeIntro:
      "Dein Grundumsatz wird dann mit einem Aktivitätsfaktor multipliziert, um deinen gesamten täglichen Energieverbrauch (TDEE) zu schätzen:",
    table: {
      level: "Aktivitätslevel",
      multiplier: "Faktor",
      week: "Typische Woche",
      // Same order as the multipliers 1.2, 1.375, 1.55, 1.725, 1.9.
      rows: [
        { level: "Sitzend", week: "Bürojob, wenig oder kein Sport" },
        { level: "Leicht aktiv", week: "Leichter Sport an 1–3 Tagen/Woche" },
        { level: "Mäßig aktiv", week: "Moderater Sport an 3–5 Tagen/Woche" },
        { level: "Sehr aktiv", week: "Intensiver Sport an 6–7 Tagen/Woche" },
        { level: "Extrem aktiv", week: "Körperliche Arbeit plus Training" },
      ],
    },
    example:
      "<b>Rechenbeispiel:</b> Ein 30-jähriger Mann, 175 cm und 75 kg, hat einen Grundumsatz von 10×75 + 6,25×175 − 5×30 + 5 = 1.699 kcal. Treibt er an 3–5 Tagen pro Woche Sport (×1,55), liegt sein Erhaltungsbedarf bei ≈ 2.633 kcal/Tag – etwa 2.133, um ~0,5 kg/Woche abzunehmen, oder ~2.933, um mit einem leichten Überschuss Muskeln aufzubauen.",
    numberHeading: "Was du mit deiner Zahl anfangen kannst",
    number:
      "Ein Ziel funktioniert nur, wenn du dagegen trackst. Verteile deine Kalorien sinnvoll über den Tag – unser kostenloser <macro>Makrorechner</macro> macht aus der Zahl Ziele für Protein, Kohlenhydrate und Fett – und wiege dich wöchentlich; weicht dein Trend ab, passe um 100–200 kcal an. Wenn du die Ruheenergie-Hälfte der Rechnung verstehen willst, sieh dir den <bmr>Grundumsatz-Rechner</bmr> an.",
    ramadanHeading: "Kalorien im Ramadan und beim Fasten",
    ramadan:
      "Fasten verändert, <em>wann</em> du isst – nicht, wie viel dein Körper braucht. Im Ramadan solltest du dein Tagesziel über Suhur und Iftar hinweg erreichen: Setz beim Suhur auf Protein und langsame Kohlenhydrate, brich das Fasten mit Flüssigkeit und Datteln und halte die Hauptmahlzeit zum Iftar ausgewogen, statt alles auf einen übervollen Teller zu packen. Dieselbe Logik gilt für 16:8 und andere Methoden – unser <guide>16:8-Einsteigerguide</guide> erklärt die Details.",
    faqs: [
      {
        question: "Wie viele Kalorien sollte ich zum Abnehmen essen?",
        answer:
          "Ein Defizit von etwa 500 kcal unter deinem Erhaltungsbedarf führt zu rund 0,5 kg (1 lb) Gewichtsverlust pro Woche. Ermittle mit dem Rechner oben deinen Erhaltungsbedarf und zieh 500 ab – geh aber ohne ärztliche Begleitung nicht unter 1.200 kcal/Tag.",
      },
      {
        question: "Welche Formel nutzt dieser Kalorienrechner?",
        answer:
          "Er nutzt die Mifflin–St-Jeor-Formel, die weithin als genaueste Formel zur Schätzung des Ruheenergiebedarfs gilt, multipliziert mit einem Aktivitätsfaktor zwischen 1,2 (sitzend) und 1,9 (extrem aktiv).",
      },
      {
        question: "Wie genau sind Kalorienrechner?",
        answer:
          "Die Formeln liegen bei den meisten Menschen auf etwa ±10 % genau. Sieh die Zahl als Ausgangspunkt: Tracke 2–3 Wochen lang deine Aufnahme und dein Gewicht und passe dann um 100–200 kcal an, wenn dein tatsächlicher Trend vom Ziel abweicht.",
      },
      {
        question: "Ändert sich mein Kalorienbedarf im Ramadan?",
        answer:
          "Dein gesamter täglicher Energiebedarf bleibt ungefähr gleich – was sich ändert, ist das Essensfenster. Versuche, dein normales Tagesziel über Suhur und Iftar hinweg zu erreichen, und baue jede Mahlzeit auf Protein und Flüssigkeit auf, statt alles in eine große Mahlzeit zu packen.",
      },
    ],
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
    metaTitle: "Idealgewicht-Rechner für deine Größe",
    metaDescription:
      "Kostenloser Idealgewicht-Rechner nach den Formeln von Devine und Robinson plus gesundem BMI-Bereich – finde ein realistisches Ziel für deine Größe.",
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
      formulaValue: "{value} kg",
      empty: "Gib deine Größe ein, um deinen geschätzten Idealgewichtsbereich zu sehen.",
    },
  },

  macro: {
    metaTitle: "Makrorechner: Protein, Kohlenhydrate & Fett",
    metaDescription:
      "Kostenloser Makrorechner: Mach aus deinem Kalorienbedarf Ziele für Protein, Kohlenhydrate und Fett – ausgewogen, proteinreich, Keto oder Ausdauer.",
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
