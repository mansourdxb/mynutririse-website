import type { Facts } from "@/data/facts";
import type en from "../en/support";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Hilfe & Support",
  metaDescription:
    "Hilfe zu MyNutriRise: Kontaktiere unser Support-Team, stöbere in den FAQ oder schick uns einen Funktionswunsch.",
  title: "Wie können wir helfen?",
  subtitle:
    "Ob du eine Frage hast, Hilfe bei einem Problem brauchst oder eine Idee teilen möchtest – wir sind für dich da.",
  cards: {
    email: {
      title: "Support per E-Mail",
      text: "Wir antworten in der Regel innerhalb von 24 Stunden.",
      link: "support@mynutririse.com",
    },
    faq: {
      title: "FAQ",
      text: "Antworten auf häufige Fragen zur App.",
      link: "FAQ ansehen →",
    },
    feature: {
      title: "Funktionswunsch",
      text: "Sag uns, was du dir als Nächstes wünschst.",
      link: "contact@mynutririse.com",
    },
  },
  faqEyebrow: "Hilfe-Center",
  faqTitle: "Häufig gestellte Fragen",
  faqSubtitle:
    "Stöbere in den Hilfethemen aus der MyNutriRise-App. Nicht gefunden, was du suchst? Melde dich bei unserem Support-Team.",
  questionCount: {
    // One form per CLDR plural category; languages use the ones they need.
    zero: "{n} Fragen",
    one: "{n} Frage",
    two: "{n} Fragen",
    few: "{n} Fragen",
    many: "{n} Fragen",
    other: "{n} Fragen",
  },
  categories: {
    all: "Alle Themen",
    gettingStarted: "Erste Schritte",
    mealTracking: "Mahlzeiten-Tracking",
    nutrition: "Ernährung & Rezepte",
    health: "Gesundheits-Tracking",
    fasting: "Fasten",
    progress: "Fortschritt & Einblicke",
    account: "Konto",
  },
  faqs: [
    {
      category: "gettingStarted",
      question: "Willkommen bei MyNutriRise",
      answer:
        "MyNutriRise ist dein Rundum-Begleiter für Ernährung und Gesundheit. Tracke Mahlzeiten mit KI-gestützter Lebensmittelerkennung, behalte deine Trinkmenge im Blick, manage dein Gewicht, entdecke internationale Rezepte und vieles mehr – alles in einer App.",
    },
    {
      category: "gettingStarted",
      question: "Dein Profil einrichten",
      answer:
        "Beim Onboarding fragt MyNutriRise nach deinem Alter, Gewicht, deiner Größe, deinem Aktivitätslevel und deinen Zielen. Daraus werden deine täglichen Kalorien- und Makroziele berechnet. Du kannst diese Angaben jederzeit in deinem Profil ändern.",
    },
    {
      category: "gettingStarted",
      question: "Dein erster Mahlzeit-Scan",
      answer:
        "Tippe auf den Scan-Button (Mitte der unteren Leiste), um eine beliebige Mahlzeit zu fotografieren. Unsere KI erkennt die Zutaten, schätzt die Portionen und liefert dir eine vollständige Nährwertaufschlüsselung. Bei Bedarf kannst du die Ergebnisse bearbeiten.",
    },
    {
      category: "gettingStarted",
      question: "Durch die App navigieren",
      answer:
        "Über die Tabs unten wechselst du zwischen Start, Fasten, Nutri Hub (Schnellaktionen), Rezepte, Analysen und KI-Chat. Der Nutri Hub bietet dir schnellen Zugriff auf alle Funktionen. Tippe auf „Bearbeiten“, um das Layout anzupassen.",
    },
    {
      category: "mealTracking",
      question: "Wie funktioniert der KI-Essensscanner?",
      answer:
        "Richte deine Kamera auf eine beliebige Mahlzeit und tippe auf „Scannen“. Unsere KI analysiert das Bild, erkennt die Lebensmittel, schätzt die Portionsgrößen und berechnet die Nährwerte – darunter Kalorien, Protein, Kohlenhydrate, Fett, Ballaststoffe und mehr.",
    },
    {
      category: "mealTracking",
      question: "Tipps für bessere Scan-Ergebnisse",
      answer:
        "Für möglichst genaue Ergebnisse: Fotografiere Mahlzeiten von oben, sorge für gutes Licht, platziere den Teller mittig im Bild und nimm den ganzen Teller auf. Die KI funktioniert am besten mit klar erkennbaren einzelnen Gerichten.",
    },
    {
      category: "mealTracking",
      question: "Wie scanne ich verpackte Lebensmittel?",
      answer:
        "Tippe auf das Barcode-Symbol, um verpackte Lebensmittel zu scannen. Die App sucht das Produkt in einer weltweiten Lebensmitteldatenbank und füllt die Nährwerte automatisch aus. Ist ein Barcode nicht in unserer Datenbank, kannst du die Nährwerte von der Verpackung manuell eingeben.",
    },
    {
      category: "mealTracking",
      question: "Was ist „Schnell hinzufügen“?",
      answer:
        "Mit „Schnell hinzufügen“ trägst du Kalorien und Makros blitzschnell ohne Scan ein. Ideal, wenn du die ungefähren Nährwerte kennst oder es eilig hast. Du kannst auch nach einem Lebensmittel suchen, um die Nährwerte automatisch aus unserer Datenbank zu übernehmen.",
    },
    {
      category: "nutrition",
      question: "Wie funktionieren KI-Mahlzeitenpläne?",
      answer:
        "KI-Mahlzeitenpläne erstellt einen persönlichen Wochenplan auf Basis deines Kalorienziels, deiner Makroziele, deiner Ernährungsvorlieben und deiner bevorzugten Küchen. Jeder Plan enthält Frühstück, Mittagessen, Abendessen und Snacks. Tippe auf „Aktualisieren“, um eine beliebige Mahlzeit neu zu generieren.",
    },
    {
      category: "nutrition",
      question: "Kann ich internationale Küchen entdecken?",
      answer:
        "Ja! Entdecke Gerichte aus Küchen der ganzen Welt – nahöstlich, mediterran, asiatisch, lateinamerikanisch, indisch und mehr. Jede Küche bietet authentische Gerichte mit vollständigen Nährwerten, sortiert nach Mahlzeitentyp.",
    },
    {
      category: "nutrition",
      question: "Wie funktionieren Einkaufslisten?",
      answer:
        "Tippe im Nutri Hub auf „Einkaufsliste“, um Einkaufslisten zu erstellen. Füge Artikel manuell hinzu oder erstelle eine Liste aus deinem Mahlzeitenplan oder gespeicherten Rezepten. Hake Artikel beim Einkaufen ab und sortiere sie nach Kategorie.",
    },
    {
      category: "nutrition",
      question: "Kann ich Rezepte von Websites importieren?",
      answer:
        "Ja! Füge die URL eines Rezepts von einer beliebten Kochwebsite ein, und MyNutriRise übernimmt Zutaten und Nährwerte automatisch. Prüfe und passe sie nach dem Import an und speichere sie dann in deiner persönlichen Sammlung.",
    },
    {
      category: "health",
      question: "Wie funktioniert der Wasser-Tracker?",
      answer:
        "MyNutriRise legt auf Basis deines Gewichts und Aktivitätslevels ein persönliches tägliches Trinkziel fest (etwa 30–35 ml pro kg Körpergewicht). Tippe auf das Wassertropfen-Symbol, um Gläser oder eigene Mengen einzutragen. Mit den Schnellbuttons trägst du gängige Mengen mit einem Tipp ein. Aktiviere Benachrichtigungen für regelmäßige Trink-Erinnerungen.",
    },
    {
      category: "health",
      question: "Wie tracke ich mein Gewicht?",
      answer:
        "Trag dein Gewicht regelmäßig ein (idealerweise jeden Tag zur gleichen Zeit). MyNutriRise zeigt dir deinen Gewichtstrend über die Zeit mit einer geglätteten Durchschnittslinie. Leg in deinem Profil ein Zielgewicht fest, und die App berechnet ein gesundes Veränderungstempo. Sicheres Abnehmen liegt bei 0,5–1 kg pro Woche.",
    },
    {
      category: "health",
      question: "Kann ich Wearables verbinden?",
      answer:
        "MyNutriRise ist mit Health Connect (Android) und Apple Health (iOS) verbunden und synchronisiert Schritte, Herzfrequenz, Schlaf und Trainingsdaten deiner Wearables. Diese Daten verbessern deine tägliche Kalorienberechnung.",
    },
    {
      category: "health",
      question: "Welche Mikronährstoffe werden erfasst?",
      answer:
        "Neben den Makros erfasst MyNutriRise wichtige Mikronährstoffe wie Ballaststoffe, Natrium, Zucker, Eisen, Kalzium und Vitamine aus deinen eingetragenen Mahlzeiten. Sieh, wie deine tägliche Aufnahme im Vergleich zu den empfohlenen Werten abschneidet, und erkenne mögliche Mängel.",
    },
    {
      category: "fasting",
      question: "Was ist Intervallfasten?",
      answer:
        "Intervallfasten ist ein Essmuster, bei dem sich Fasten- und Essensphasen abwechseln. Gängige Methoden sind die 16:8-Methode (16 Stunden fasten, 8 Stunden essen), die 5:2-Diät und Eat-Stop-Eat. Während des Fastens beginnt dein Körper, Fett zur Energiegewinnung zu verbrennen, der Insulinspiegel sinkt und zelluläre Reparaturprozesse werden angestoßen.",
    },
    {
      category: "fasting",
      question: "Wie starte ich meine erste Fastenwoche?",
      answer:
        "Beginne mit 12 Stunden Fasten (z. B. von 20 bis 8 Uhr). Verlängere an Tag 3–4 auf 14 Stunden. Probiere an Tag 5–7 16 Stunden, wenn es sich gut anfühlt. Trink ausreichend Wasser, Kräutertee oder schwarzen Kaffee. Typische Herausforderungen in der ersten Woche sind Kopfschmerzen (mehr trinken), Gereiztheit und Schlafprobleme – sie bessern sich meist nach der ersten Woche.",
    },
    {
      category: "fasting",
      question: "Was darf ich während des Fastens zu mir nehmen?",
      answer:
        "Bleib bei kalorienfreien Getränken: Wasser (still oder sprudelnd), schwarzer Kaffee (ohne Zucker, ohne Sahne), Kräutertee und grüner Tee. Schon wenige Kalorien können dein Fasten brechen und die Vorteile für den Stoffwechsel stoppen.",
    },
    {
      category: "fasting",
      question: "Wann sollte ich mit dem Fasten aufhören?",
      answer:
        "Hör mit dem Fasten auf und sprich mit einer Ärztin oder einem Arzt, wenn du anhaltenden Schwindel oder Ohnmacht, extreme Müdigkeit, deutliche Stimmungsschwankungen, unregelmäßigen Herzschlag oder schnellen Gewichtsverlust bemerkst. Fasten ist nicht für alle geeignet – sprich mit deiner Ärztin oder deinem Arzt, wenn du schwanger bist, stillst, eine Essstörung in der Vorgeschichte hast oder Diabetes hast.",
    },
    {
      category: "progress",
      question: "Was zeigt das Fortschritts-Dashboard?",
      answer:
        "Der Tab „Analysen“ zeigt deine Ernährungstrends, deine Kalorienbilanz, die Makroaufschlüsselung und deinen Zielfortschritt über die Zeit. Wechsle zwischen Tages-, Wochen- und Monatsansicht. Behalte deine Kalorienbilanz (aufgenommen vs. verbrannt) im Blick und erkenne Makro-Trends.",
    },
    {
      category: "progress",
      question: "Wie funktioniert der Ernährungskalender?",
      answer:
        "Der Ernährungskalender zeigt dir den Monat auf einen Blick mit farbcodierten Tagen: Grün heißt im Ziel, Gelb knapp daneben, Rot deutlich daneben. Tippe auf einen Tag, um genau zu sehen, was du gegessen hast und wie das im Vergleich zu deinen Zielen aussieht.",
    },
    {
      category: "progress",
      question: "Was ist der Wellness-Score?",
      answer:
        "Dein Wellness-Score (0–100) berücksichtigt Ernährungsqualität, Trinkmenge, Aktivitätslevel, Schlaf und Beständigkeit. Er gibt dir einen ganzheitlichen Blick auf deine Gesundheitsgewohnheiten. Konzentriere dich auf die Bereiche mit dem niedrigsten Wert – dort erzielst du die größten Verbesserungen.",
    },
    {
      category: "progress",
      question: "Kann ich meine Daten exportieren?",
      answer:
        "Ja! Exportiere deine Ernährungsdaten als detaillierte Berichte. Wähle den Zeitraum und die Inhalte: Mahlzeiten, Makros, Gewicht, Wasser, Bewegung. Exportiere als PDF oder CSV, um sie mit deiner Ärztin oder deinem Arzt, deiner Ernährungsberatung oder deinem Personal Trainer zu teilen.",
    },
    {
      category: "account",
      question: "Was ist in Premium enthalten?",
      answer:
        "MyNutriRise bietet eine großzügige kostenlose Version mit einfachem Mahlzeiten-Tracking, Trink-Tracking und einer begrenzten Rezeptauswahl. Premium schaltet KI-Mahlzeitenpläne, erweiterte Analysen, unbegrenzten Zugriff auf Rezepte und internationale Küchen frei. Dein Abo verwaltest du über den App Store oder den Play Store.",
    },
    {
      category: "account",
      question: "Wie stelle ich meine Käufe wieder her?",
      answer:
        "Wenn du die App neu installierst oder das Gerät wechselst, wird dein Premium-Status bei der Anmeldung automatisch wiederhergestellt. Falls nicht, gehe zu Einstellungen > Abo > Käufe wiederherstellen.",
    },
    {
      category: "account",
      question: "Unterstützt MyNutriRise den Dunkelmodus?",
      answer:
        "Ja! Du kannst den Dunkelmodus in den Einstellungen ein- und ausschalten. Standardmäßig folgt MyNutriRise dem Design deines Systems – wechselt dein Smartphone nachts in den Dunkelmodus, zieht die App automatisch mit.",
    },
    {
      category: "account",
      question: "Wie lösche ich mein Konto?",
      answer:
        "Um dein Konto und alle zugehörigen Daten zu löschen, öffne in der App das Hilfe-Center und wähle „Konto löschen“. Dieser Schritt ist endgültig und kann nicht rückgängig gemacht werden – alle deine Mahlzeiteneinträge, Fortschritte und Einstellungen werden entfernt.",
    },
  ],
});
