import type { Facts } from "@/data/facts";
import type en from "../en/home";

export default (f: Facts): ReturnType<typeof en> => ({
  jsonLd: {
    appDescription:
      "Zähle Kalorien, scanne Mahlzeiten mit KI, folge halalen und kulturellen Mahlzeitenplänen, behalte dein Fasten im Blick und erhalte intelligentes Ernährungscoaching.",
  },
  hero: {
    title: "Ernährungs- und Fitnesstracking <hl>für den echten Alltag</hl>",
    lead: "Foto machen – und die KI trägt deine Mahlzeit ein. Folge halalen und kulturellen Mahlzeitenplänen, tracke Fasten und Trainings und erhalte intelligentes Coaching – alles, was du für ein gesünderes, glücklicheres Leben brauchst.",
    quizLink: "Du weißt nicht, wo du anfangen sollst? Hol dir in 1 Minute deinen persönlichen Plan →",
    screenshotAlt: "MyNutriRise-Dashboard",
    pills: ["KI-Mahlzeit-Scan", "Halal & Esskulturen", `${f.RECIPES} Rezepte`],
  },
  pressBar: {
    heading: "Bekannt aus",
  },
  howItWorks: {
    eyebrow: "So funktioniert’s",
    title: "Gesünder in <hl>drei einfachen Schritten</hl>",
    steps: [
      {
        title: "Herunterladen & Ziel festlegen",
        description:
          "Hol dir MyNutriRise kostenlos, nenne dein Ziel – abnehmen, Muskeln aufbauen oder besser essen – und wähle einen Plan, der zu deinem Leben und deiner Esskultur passt.",
      },
      {
        title: "Mahlzeiten fotografieren",
        description:
          "Mach ein Foto, und die KI erkennt Lebensmittel, Portionen, Kalorien und Makros – oder trag dein Essen in Sekunden per Sprache, Barcode oder Suche ein.",
      },
      {
        title: "Echte Ergebnisse sehen",
        description:
          "Verfolge deine Trends, lass dich von der KI coachen und baue Serien auf, die halten – Wochenberichte zeigen dir genau, wie weit du gekommen bist.",
      },
    ],
  },
  goals: {
    eyebrow: "Dein Ziel, dein Weg",
    title: "Egal, worauf du hinarbeitest – <hl>wir unterstützen dich</hl>",
    items: [
      { title: "Abnehmen", description: "Kalorienziele und Pläne, abgestimmt auf ein gesundes Tempo." },
      { title: "Muskeln aufbauen", description: "Proteinreiche Pläne plus Trainingsroutinen und Übungsprotokolle." },
      {
        title: "Halal & kulturell essen",
        description: `${f.CUISINES} Küchen – türkisch, pakistanisch, afghanisch & mehr, durchgehend auf Halal geprüft.`,
      },
      { title: "Intervallfasten ausprobieren", description: "16:8, 5:2 und mehr, mit Timern und Fasten-Einblicken." },
      { title: "Makros tracken", description: "Protein, Kohlenhydrate und Fett mit genauer Tagesaufschlüsselung." },
      { title: "Ausgewogen essen", description: `${f.RECIPES} gesunde Rezepte und KI-generierte Mahlzeitenpläne.` },
      { title: "Fitter werden", description: "Trainings, Cardio und Wearable-Sync mit Apple Health & Health Connect." },
      { title: "Gesunde Gewohnheiten aufbauen", description: "Serien, tägliche Lektionen und ein Wellness-Score, der dich motiviert." },
    ],
  },
  showcase: {
    eyebrow: "Die App in Aktion",
    title: "Schöne Screens, <hl>unendliche Möglichkeiten</hl>",
    lead: "Jeder Screen mit Liebe zum Detail gestaltet. Entdecke das komplette MyNutriRise-Erlebnis.",
    row1: [
      "Analysen & Trends",
      "Fasten-Timer",
      "KI-Mahlzeitenpläne",
      "Lebensmittelsuche",
      "Übungsbibliothek",
      "Wellness-Score",
      "Mikronährstoffe",
      "Mahlzeitenprotokoll",
      "Rezeptkategorien",
      "Mahlzeitenvorlagen",
    ],
    row2: [
      "Ernährungspläne",
      "Wearables",
      "Erfolge",
      "Challenges",
      "Wochenbericht",
      "Gewichtsverlauf",
      "Essenszeiten",
      "Schnellaktionen",
      "Esskulturen",
      "Lebensmittel vergleichen",
    ],
  },
  premium: {
    badge: "Premium",
    title: "Hol das Beste aus dir heraus",
    lead: "Premium bietet dir tiefere Einblicke und smartere Tools für dein Wohlbefinden.",
    heroFeatures: [
      {
        title: "Erweiterte Mikronährstoffe",
        description: `Tracke ${f.MICRONUTRIENT_COUNT} wichtige Vitamine und Mineralstoffe. Erkenne deine Nährstofflücken mit detaillierten Aufschlüsselungen und smarten Vorschlägen.`,
      },
      {
        title: "KI-gestützte Einblicke",
        description:
          "Tiefgehende Analyse deiner Essgewohnheiten und Trends sowie persönliche Verbesserungspläne, zugeschnitten auf deinen Körper.",
      },
      {
        title: "Smarte Mahlzeitenpläne",
        description:
          "KI-generierte Tages- und Wochenpläne, abgestimmt auf deine Ziele. Keto, Mediterran, proteinreich und mehr.",
      },
      {
        title: "Erweitertes Coaching",
        description: `Mehr KI-Coaching – bis zu ${f.PREMIUM_COACH_MESSAGES_PER_DAY} Coach-Nachrichten pro Tag statt ${f.FREE_COACH_MESSAGES_PER_DAY}.`,
      },
    ],
    moreTitle: "Dazu noch mehr Premium-Tools",
    moreFeatures: [
      {
        title: "KI-Mahlzeiten-Scanner",
        description: `Fotografiere eine beliebige Mahlzeit – die KI erkennt Lebensmittel und Portionen und trägt Kalorien und Makros sofort ein. ${f.PREMIUM_PHOTO_SCANS_PER_DAY} Scans pro Tag.`,
      },
      { title: "Smarte Einkaufslisten", description: "Automatisch erstellte Einkaufslisten auf Basis deiner Mahlzeitenpläne und Rezepte." },
      {
        title: "Fastenpläne & Einblicke",
        description: "Voller Zugriff auf alle Intervallfasten-Methoden mit detaillierten Fortschrittsanalysen.",
      },
      {
        title: "Datenexport & PDF-Berichte",
        description: "Exportiere deine Ernährungsdaten als detaillierte PDF-Berichte – für dich oder deine Ernährungsberatung.",
      },
      {
        title: "Lebensmittelvergleich",
        description:
          "Vergleiche zwei eingetragene Lebensmittel nach Kalorien, Makros und Gesundheitswert, um klügere Entscheidungen zu treffen.",
      },
      {
        title: "Wearable-Integration",
        description: "Synchronisiere mit Apple Health & Google Health Connect für Aktivität, Schritte und Kalorienverbrauch.",
      },
      { title: "Meal-Prep-Planer", description: "Plane und organisiere dein wöchentliches Meal Prep mit Portionen und Einkaufslisten." },
      {
        title: "Ernährungs-Score",
        description: "Erhalte täglich einen Wellness-Score auf Basis deiner Essgewohnheiten und deiner Nährstoffbalance.",
      },
      {
        title: "Analyse-Dashboard",
        description: "Detaillierte Diagramme und Trends zu deiner Ernährung, deinem Gewicht und deinem Gesundheitsfortschritt.",
      },
    ],
    trialButton: "Kostenlos testen",
  },
  science: {
    eyebrow: "Warum du uns vertrauen kannst",
    title: "Basiert auf <hl>echter Wissenschaft</hl>",
    lead: "Keine Wunderversprechen – nur bewährte Ernährungsmathematik, verlässliche Daten und eine KI, die ihre Rechnung offenlegt.",
    pillars: [
      {
        title: "Bewährte Kalorienberechnung",
        description:
          "Tagesziele basieren auf der Mifflin–St-Jeor-Formel – der Formel, auf die sich Ernährungsfachleute bei der Schätzung des Energiebedarfs verlassen – angepasst an dein Ziel und deine Aktivität.",
      },
      {
        title: "Geprüfte Lebensmitteldaten",
        description:
          "Nährwerte stammen aus geprüften Lebensmitteldatenbanken – nicht aus Crowdsourcing-Schätzungen – und umfassen Alltagslebensmittel, verpackte Produkte und kulturelle Gerichte.",
      },
      {
        title: "KI, die du korrigieren kannst",
        description:
          "Jeder Foto-Scan zeigt seine Schätzung vor dem Eintragen – Lebensmittel, Portionen und Makros –, damit du die Kontrolle behältst. Mit einem Tipp lässt sich alles anpassen.",
      },
      {
        title: "Ehrlich aus Prinzip",
        description:
          "Keine Crash-Diät-Ziele: Kalorienuntergrenzen schützen dich davor, zu wenig zu essen, und ein nachhaltiges Wochentempo schlägt extreme Versprechen.",
      },
    ],
  },
  community: {
    eyebrow: "Community",
    title: "Creator, die mit uns tracken",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Fragen und Antworten",
    more: "Noch Fragen? <link>Besuche das Hilfe-Center</link>",
    items: [
      {
        question: "Ist MyNutriRise kostenlos?",
        answer:
          "Ja – MyNutriRise kannst du kostenlos herunterladen und nutzen, inklusive KI-Mahlzeiten-Scan per Foto mit Tageslimit. Premium ist optional: Es erhöht das Scan-Limit und schaltet Mikronährstoff-Tracking und PDF-Berichte frei. Du kannst jederzeit kündigen.",
      },
      {
        question: "Unterstützt die App halale und kulturelle Ernährung?",
        answer: `Ja. MyNutriRise deckt ${f.CUISINES} Küchen der Welt ab – türkisch, marokkanisch, persisch, pakistanisch, afghanisch, bangladeschisch, aus der Golfregion und den Emiraten und viele mehr – plus halal-freundliche Rezepte, den Mahlzeitenplan „Gesunde Nahost-Küche“ und sogar einen Ramadan-Zeitplan. Außerdem spricht die App Englisch, Arabisch, Deutsch, Spanisch, Französisch und Russisch.`,
      },
      {
        question: "Wie funktioniert der KI-Mahlzeiten-Scan?",
        answer:
          "Fotografiere deinen Teller, und die KI erkennt die Lebensmittel, schätzt die Portionen und trägt Kalorien und Makros automatisch ein. Du kannst auch per Sprache, Barcode-Scan oder Suche eintragen.",
      },
      {
        question: "Kann ich auch Fasten und Trainings tracken?",
        answer:
          "Ja – Intervallfasten-Methoden wie 16:8 und 5:2 mit Timern und Einblicken, dazu Trainingsroutinen, eine Übungsbibliothek und Synchronisierung mit Apple Health und Google Health Connect.",
      },
      {
        question: "Auf welchen Geräten gibt es die App?",
        answer:
          "MyNutriRise ist für iPhone und Android-Smartphones gemacht. Lade die App über die App-Store-Links auf dieser Seite herunter – deine Daten werden mit deinem Konto synchronisiert.",
      },
    ],
  },
  cta: {
    title: "Starte noch heute in ein gesünderes Leben",
    lead: "Dein gesünderes Leben ist nur einen Download entfernt.",
  },
});
