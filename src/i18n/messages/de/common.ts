import type { Facts } from "@/data/facts";
import type en from "../en/common";

// Shared UI strings: site metadata, navigation, footer, buttons, 404, download.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  site: {
    title: "MyNutriRise: KI-Kalorienzähler & Halal-Ernährungs-App",
    titleTemplate: "%s — MyNutriRise",
    description:
      "Kalorien zählen, Mahlzeiten per KI scannen, persönlichen Plänen folgen und gesündere Gewohnheiten aufbauen – mit MyNutriRise, deinem smarten Begleiter.",
    ogDescription:
      "Zähle Kalorien, scanne Mahlzeiten mit KI, folge persönlichen Mahlzeitenplänen und entwickle jeden Tag gesündere Gewohnheiten.",
    twitterDescription:
      "Dein smarter Begleiter für Ernährungstracking, Mahlzeiten-Scans und ein gesünderes Leben.",
    ogImageAlt: "MyNutriRise – Ernährungs- und Fitnesstracking für den echten Alltag",
  },
  nav: {
    features: "Funktionen",
    tools: "Tools",
    customPlan: "Persönlicher Plan",
    premium: "Premium",
    recipes: "Rezepte",
    blog: "Blog",
    support: "Hilfe",
    download: "App herunterladen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    language: "Sprache",
  },
  footer: {
    tagline:
      "Dein smarter Begleiter für mehr Wohlbefinden – KI-Mahlzeiten-Scan, halale und kulturelle Rezepte, Fasten und Coaching in einer App.",
    product: "Produkt",
    resources: "Ressourcen",
    company: "Unternehmen",
    features: "Funktionen",
    recipes: "Rezepte",
    halal: "Halal-Ernährung",
    premium: "Premium",
    compare: "Vergleich",
    download: "Download",
    helpCenter: "Hilfe-Center",
    blog: "Blog",
    quiz: "Quiz für deinen Plan",
    tools: "Kostenlose Tools",
    about: "Über uns",
    press: "Pressekit",
    privacy: "Datenschutzerklärung",
    terms: "Nutzungsbedingungen",
    contact: "Kontakt",
    rights: "MyNutriRise. Alle Rechte vorbehalten.",
    madeWith: "Mit {heart} für ein gesünderes Leben gemacht",
    heartLabel: "grünes Herz",
    languages: "Sprachen",
  },
  store: {
    appleSmall: "Laden im",
    appleBig: "App Store",
    googleSmall: "JETZT BEI",
    googleBig: "Google Play",
    reassurance: "Kostenloser Download · Premium optional · Jederzeit kündbar",
  },
  breadcrumbs: {
    home: "Startseite",
    label: "Brotkrümelnavigation",
  },
  notFound: {
    eyebrow: "404",
    title: "Diese Seite hat sich verlaufen",
    body: "Die gesuchte Seite gibt es nicht oder sie ist umgezogen.",
    back: "Zurück zur Startseite",
  },
  download: {
    metaTitle: "MyNutriRise herunterladen",
    metaDescription:
      "Lade MyNutriRise für iPhone oder Android herunter – KI-Mahlzeiten-Scan, halale und kulturelle Mahlzeitenpläne, Fasten und Coaching.",
    title: "Hol dir MyNutriRise",
    body: "Auf dem Smartphone wirst du direkt zu deinem App Store weitergeleitet. Am Computer wählst du einfach deine Plattform:",
  },
  // Language names as written in this language (used in prose and lists).
  languageNames: ["Englisch", "Arabisch", "Deutsch", "Spanisch", "Französisch", "Russisch"],
  /** "English, Arabic, German, Spanish, French, and Russian" */
  languageList: "Englisch, Arabisch, Deutsch, Spanisch, Französisch und Russisch",
  /** Shown at the top of translated legal pages; empty in English. */
  legalBindingNote:
    "Diese Übersetzung dient nur der Orientierung. Rechtsverbindlich ist die englische Fassung; bei Abweichungen hat sie Vorrang.",
});
