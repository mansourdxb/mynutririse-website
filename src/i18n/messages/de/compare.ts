import type { Facts } from "@/data/facts";
import type en from "../en/compare";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "MyNutriRise vs. MyFitnessPal: Alternative 2026",
  metaDescription:
    "So schneidet MyNutriRise im Vergleich zu MyFitnessPal ab: Halal- & kulturelles Food-Tracking, KI-Foto-Tracking, Fasten und Trainings.",
  breadcrumb: "Vergleich",
  title: "MyNutriRise vs. MyFitnessPal",
  intro: "Beide zählen Kalorien zuverlässig. Der Unterschied liegt darin, was du isst – und wie viel Aufwand das Eintragen kostet.",
  table: {
    feature: "Funktion",
    ours: "MyNutriRise",
    theirs: "MyFitnessPal",
  },
  rows: [
    {
      feature: "Bibliotheken für halale & kulturelle Küche",
      ours: `${f.CUISINES} Küchen der Welt – türkisch, marokkanisch, pakistanisch, afghanisch, Golfregion & mehr, durchgehend auf Halal geprüft`,
      theirs: "Große allgemeine Lebensmitteldatenbank; keine eigenen Halal- oder Kulturküchen-Bibliotheken",
    },
    {
      feature: "KI-Mahlzeiten-Scan per Foto",
      ours: `Ja – kostenlos inklusive (${f.FREE_PHOTO_SCANS_PER_DAY} Scans pro Tag), mit Premium ${f.PREMIUM_PHOTO_SCANS_PER_DAY} pro Tag`,
      theirs: "Meal Scan in den Premium-Tarifen verfügbar",
    },
    {
      feature: "Intervallfasten",
      ours: `${f.FASTING_PLAN_COUNT} Pläne inkl. 16:8, 5:2, OMAD und Ramadan-Zeitplan`,
      theirs: "Fasten-Tracking in Premium enthalten",
    },
    {
      feature: "Geführte Mahlzeitenpläne",
      ours: `${f.DIET_PLAN_COUNT} Vier-Wochen-Pläne inkl. „Gesunde Nahost-Küche“, „Keto-freundlich“, „Mediterran“`,
      theirs: "Mahlzeitenpläne mit Premium verfügbar",
    },
    {
      feature: "Trainings-Tracking",
      ours: `Kraftübungsbibliothek mit ${f.STRENGTH_EXERCISE_COUNT} Übungen, Routinen, Cardio & Wearable-Sync`,
      theirs: "Trainingsprotokoll mit großer Übungsdatenbank",
    },
    {
      feature: "App-Sprachen",
      ours: "Englisch, Arabisch, Deutsch, Spanisch, Französisch, Russisch",
      theirs: "Viele Sprachen, u. a. Englisch, Spanisch, Französisch, Deutsch",
    },
    {
      feature: "KI-Coach",
      ours: `Integrierter KI-Coach für Ernährung & Fitness (${f.FREE_COACH_MESSAGES_PER_DAY} kostenlose Nachrichten pro Tag)`,
      theirs: "Kein KI-Coach zum Chatten",
    },
    {
      feature: "Preis",
      ours: "Kostenloser Download; Premium optional",
      theirs: "Kostenlose Version; Premium-Abo mit 7-tägigem Test",
    },
  ],
  disclaimer:
    "Vergleich auf Basis öffentlich verfügbarer Informationen, Stand Juni 2026. Funktionen und Preise können sich ändern – prüfe beide Apps auf aktuelle Details.",
  pickTheirs: {
    title: "Für wen MyFitnessPal die richtige Wahl ist",
    body: "Du isst überwiegend westliche und verpackte Lebensmittel, nutzt sehr oft den Barcode-Scanner und willst die größte Crowdsourcing-Lebensmitteldatenbank auf dem Markt. MyFitnessPal wird seit über einem Jahrzehnt verfeinert, und für diesen Zweck ist das Eintragen dort hervorragend gelöst – besonders, wenn du dort schon Jahre an Verlauf gesammelt hast.",
  },
  pickOurs: {
    title: "Für wen MyNutriRise die richtige Wahl ist",
    body: "Auf deinem Teller landen Biryani, Tajine, Mandi oder Kabuli Pulao – Gerichte, die allgemeine Datenbanken übersehen. Du willst halal-freundliche Mahlzeitenpläne, einen Ramadan-Zeitplan, eine App, die Arabisch spricht, und KI-Foto-Tracking, ohne vorher zu bezahlen. Genau diese Lücke schließt MyNutriRise – die ganze Geschichte findest du auf der Seite zur <link>Halal-Ernährungs-App</link>.",
  },
  pricing: {
    title: "Preise im Vergleich",
    body: "Beide Apps sind kostenlos herunterzuladen und bieten optionale Abos. MyFitnessPal stellt Barcode-Scan, Meal Scan und Fasten hinter Premium (7 Tage Test). MyNutriRise enthält den KI-Foto-Scan und die Bibliotheken kultureller Küchen schon in der kostenlosen Version; Premium schaltet höhere KI-Limits, alle Analysen und sämtliche Fastenpläne frei.",
  },
  faqTitle: "Häufig gestellte Fragen",
  faqs: [
    {
      question: "Ist MyNutriRise eine gute Alternative zu MyFitnessPal?",
      answer:
        "Wenn du kulturelle oder halale Gerichte isst, im Ramadan fastest oder KI-Foto-Tracking in der kostenlosen Version willst, ist MyNutriRise genau für dich gemacht. Isst du überwiegend westliche, verpackte Lebensmittel, ist die größere Barcode-Datenbank von MyFitnessPal womöglich besser für dich.",
    },
    {
      question: "Ist MyFitnessPal halal-freundlich?",
      answer: `MyFitnessPal hat eine große allgemeine Lebensmitteldatenbank, aber keine eigenen Bibliotheken für halale oder kulturelle Küche. MyNutriRise deckt ${f.CUISINES} Küchen der Welt ab, prüft den Halal-Filter für jedes Gericht im Katalog und bietet den halal-freundlichen Mahlzeitenplan „Gesunde Nahost-Küche“.`,
    },
    {
      question: "Welche App hat den besseren KI-Foto-Scan?",
      answer: `MyNutriRise bietet den KI-Mahlzeiten-Scan per Foto schon in der kostenlosen Version (${f.FREE_PHOTO_SCANS_PER_DAY} Scans pro Tag, mit Premium ${f.PREMIUM_PHOTO_SCANS_PER_DAY} pro Tag). Meal Scan von MyFitnessPal ist in den Premium-Tarifen verfügbar.`,
    },
    {
      question: "Kann ich das Fasten im Ramadan in beiden Apps tracken?",
      answer: `MyNutriRise bietet unter ${f.FASTING_PLAN_COUNT} Fastenplänen einen eigenen Ramadan-Zeitplan. MyFitnessPal bietet Intervallfasten-Tracking mit Premium, aber keinen speziellen Ramadan-Zeitplan.`,
    },
  ],
  summary: {
    title: "Das ehrliche Fazit",
    body: "MyFitnessPal ist ein ausgereifter Tracker mit einer der größten Lebensmitteldatenbanken überhaupt – wenn du überwiegend westlich und mit verpackten Lebensmitteln isst, bist du dort gut aufgehoben. MyNutriRise ist für Menschen gemacht, deren Teller diese Datenbanken nur unzureichend abbilden: Wenn du Kabuli Pulao, Nihari oder Tajine isst, halal-freundliche Pläne willst, im Ramadan fastest oder eine App auf Arabisch bevorzugst – genau dafür sind wir da, mit KI-Foto-Tracking schon in der kostenlosen Version.",
    quiz: "Mach das <link>1-Minuten-Plan-Quiz</link> und sieh, wie dein Plan aussehen würde.",
  },
  ctaTitle: "Tracke das Essen, das du wirklich isst",
});
