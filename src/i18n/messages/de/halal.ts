import type { Facts } from "@/data/facts";
import type en from "../en/halal";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Halal-Kalorienzähler & Ernährungs-App für Muslime | MyNutriRise",
  metaDescription: `Zähle Kalorien mit einer halal-freundlichen Ernährungs-App: ${f.CUISINES} Küchen der Welt, ein Ramadan-Zeitplan, KI-Mahlzeitentracking per Foto und volle Unterstützung auf Arabisch.`,
  breadcrumb: "Halal-Ernährungs-App",
  title: "Der halal-freundliche Kalorienzähler für deine Küche",
  intro:
    "Die meisten Kalorien-Apps wurden rund um westliche Speisekarten gebaut – wer nach Biryani, Mandi oder Kabuli Pulao sucht, erntet nur ein Achselzucken. MyNutriRise ist anders: Halal-Tracking ist eine zentrale Funktion, keine Nebensache.",
  library: {
    title: `Auf Halal geprüft: ${f.DISHES} Gerichte aus ${f.CUISINES} Küchen`,
    body: "Jedes Gericht kommt mit Kalorien, Protein, Kohlenhydraten und Fett pro Portion – vom Adana Kebap (380 kcal) über Hähnchen-Tajine (380 kcal) bis zum Kabuli Pulao (480 kcal). Stöbere in den Küchen, aus denen deine Familie wirklich kocht:",
    cuisines: [
      "Türkisch",
      "Marokkanisch",
      "Persisch",
      "Ägyptisch",
      "Pakistanisch",
      "Indonesisch",
      "Malaysisch",
      "Afghanisch",
      "Somalisch & ostafrikanisch",
      "Nigerianisch & westafrikanisch",
      "Golfregion & Emirate",
      "Jemenitisch",
      "Libanesisch",
      "Usbekisch & zentralasiatisch",
      "Bangladeschisch",
      "Indisch",
      "Arabisch & nahöstlich",
    ],
    more: "+ viele mehr",
    recipesLink: "Eine Auswahl der Gerichte findest du auf unserer <link>Rezeptseite</link>.",
  },
  ramadan: {
    title: "Bereit für das Fasten im Ramadan",
    body: `MyNutriRise bietet ${f.FASTING_PLAN_COUNT} Fastenpläne – darunter einen eigenen <b>Ramadan-Zeitplan</b>, der dein Fasten vom Morgengrauen bis zum Sonnenuntergang verfolgt. Trag weiter deine Mahlzeiten ein, um Kalorien und Protein den ganzen Monat über stabil zu halten. Außerhalb des Ramadan deckt derselbe Tracker 16:8, 5:2, OMAD und mehr ab – sieh dir unseren <link>Einsteigerguide zum 16:8-Fasten</link> an.`,
  },
  photo: {
    title: "Foto machen – die KI trägt ein",
    body: "Wenn in Familienrunde aus gemeinsamen Schüsseln gegessen wird, ist „eine Portion“ schwer zu schätzen. Fotografiere deinen Teller, und die KI erkennt das Gericht, schätzt deine Portion und trägt Kalorien und Makros in Sekunden ein. Leg dein Tagesziel mit unserem kostenlosen <link>Kalorienrechner</link> fest – die App behält den Überblick für dich.",
  },
  language: {
    title: "In deiner Sprache",
    body: "Die App spricht <b>Englisch, Arabisch, Deutsch, Spanisch, Französisch und Russisch</b> – auch der KI-Coach und Mahlzeitenpläne wie <b>Gesunde Nahost-Küche</b>, ein halal-freundlicher 4-Wochen-Plan mit gegrilltem Fleisch, Hülsenfrüchten, frischen Salaten und vollwertigem Getreide.",
  },
  faqTitle: "Häufig gestellte Fragen",
  faqs: [
    {
      question: "Ist MyNutriRise halal-freundlich?",
      answer: `Ja. Der Halal-Filter ist für jedes der ${f.DISHES} Gerichte im Katalog geprüft – aus ${f.CUISINES} Küchen der Welt, mit halal-freundlichen Rezepten und Mahlzeitenplänen, darunter der eigene Plan „Gesunde Nahost-Küche“.`,
    },
    {
      question: "Gibt es einen Ramadan-Modus?",
      answer: `Ja. Unter seinen ${f.FASTING_PLAN_COUNT} Fastenplänen bietet MyNutriRise einen eigenen Ramadan-Zeitplan, der dein Fasten vom Morgengrauen bis zum Sonnenuntergang verfolgt – während du weiter deine Mahlzeiten einträgst, um den ganzen Monat ausgewogen zu bleiben.`,
    },
    {
      question: "Kann ich traditionelle Gerichte wie Biryani oder Kabuli Pulao tracken?",
      answer:
        "Ja. Gerichte wie Hähnchen-Biryani, Kabuli Pulao, Nihari, Mandi, Koshari und Tajine sind in der Lebensmitteldatenbank mit Kalorien, Protein, Kohlenhydraten und Fett pro Portion hinterlegt – oder du machst ein Foto, und die KI schätzt deine genaue Portion.",
    },
    {
      question: "Welche Sprachen unterstützt die App?",
      answer:
        "MyNutriRise gibt es auf Englisch, Arabisch, Deutsch, Spanisch, Französisch und Russisch – für iPhone und Android.",
    },
  ],
  cta: {
    title: "Das Essen deiner Kultur – richtig getrackt",
    body: "Kostenlos für iPhone und Android – oder mach zuerst das <link>1-Minuten-Plan-Quiz</link>.",
  },
});
