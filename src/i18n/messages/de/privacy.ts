import type { Facts } from "@/data/facts";
import type en from "../en/privacy";

// Inline tags: <b>…</b> bold, <email>…</email> support mailto link,
// <site>…</site> website link, <fatsecretPrivacy>…</fatsecretPrivacy> external link.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Datenschutzerklärung",
  metaDescription:
    "Erfahre, wie MyNutriRise deine personenbezogenen Daten erhebt, verwendet und schützt.",
  title: "Datenschutzerklärung",
  lastUpdated: "Zuletzt aktualisiert: 29. Mai 2026",
  // Translations: note that the English version is the legally binding one. Empty in English.
  bindingNote:
    "Diese Übersetzung dient nur der Orientierung. Rechtsverbindlich ist die englische Fassung; bei Abweichungen hat sie Vorrang.",
  sections: [
    {
      heading: "1. Welche Daten wir erheben",
      blocks: [
        {
          type: "p",
          text: "MyNutriRise erhebt die folgenden Daten, um dir ein personalisiertes Gesundheits- und Ernährungserlebnis zu bieten:",
        },
        {
          type: "ul",
          items: [
            "<b>Kontodaten:</b> E-Mail-Adresse, Name und Profilfoto, wenn du ein Konto erstellst.",
            "<b>Gesundheits- und Körperdaten:</b> Gewicht, Größe, Körpermaße, Ernährungsvorlieben, Allergien, Gesundheitsziele und Aktivitätslevel, die du freiwillig angibst.",
            "<b>Ernährungsdaten:</b> eingetragene Mahlzeiten, Daten zum Kalorien- und Makro-Tracking, Fastenphasen und Trinkmenge.",
            "<b>Fotos:</b> Essensfotos zur Nährwertanalyse und Fortschrittsfotos zur Dokumentation deiner körperlichen Veränderung.",
            "<b>Nutzungsdaten:</b> Interaktionen mit der App, Nutzungsmuster von Funktionen und Geräteinformationen zur Verbesserung unseres Dienstes.",
          ],
        },
      ],
    },
    {
      heading: "2. Wie wir deine Daten verwenden",
      blocks: [
        { type: "p", text: "Wir verwenden deine Daten, um:" },
        {
          type: "ul",
          items: [
            "dir personalisierte Ernährungsempfehlungen und Mahlzeitenvorschläge zu geben.",
            "deine Gesundheitsziele, Fastenphasen, Trinkmenge und Fortschritte zu erfassen.",
            "die KI-Coaching-Funktionen mit relevantem Kontext zu deinem Gesundheitsweg zu versorgen.",
            "Einkaufslisten und Mahlzeitenpläne auf Basis deiner Vorlieben zu erstellen.",
            "Erfolge, Serien und Gamification-Funktionen anzuzeigen.",
            "unsere App zu verbessern und neue Funktionen zu entwickeln.",
            "dir Erinnerungen und Benachrichtigungen zu senden (mit deiner Zustimmung).",
          ],
        },
      ],
    },
    {
      heading: "3. Datenspeicherung und Sicherheit",
      blocks: [
        { type: "p", text: "Deine Daten werden sicher mit Diensten von Google Firebase gespeichert:" },
        {
          type: "ul",
          items: [
            "Firebase Authentication für eine sichere Anmeldung.",
            "Cloud Firestore für strukturierte Daten (Mahlzeiten, Ziele, Fortschritte).",
            "Firebase Storage für Fotos (Essensscans, Fortschrittsfotos).",
            "Alle Daten werden bei der Übertragung mit TLS/SSL verschlüsselt.",
            "Die Firebase-Infrastruktur erfüllt die Standards SOC 1, SOC 2 und SOC 3.",
          ],
        },
        {
          type: "p",
          text: "Wir setzen branchenübliche Sicherheitsmaßnahmen ein, um deine personenbezogenen Daten vor unbefugtem Zugriff, Veränderung, Offenlegung oder Vernichtung zu schützen.",
        },
        { type: "h3", text: "Speicherdauer" },
        {
          type: "p",
          text: "Wir speichern deine personenbezogenen Daten, Ernährungs- und Gesundheitsdaten, solange dein Konto aktiv ist, damit die App deinen Verlauf, deine Fortschritte und Trends anzeigen kann. Gesundheitsdaten, die aus Google Health Connect oder Apple Health gelesen werden, werden bei jeder Synchronisierung der App aktualisiert und nur so lange gespeichert, wie die Verbindung besteht. Wenn du dein Konto löschst, werden alle zugehörigen Daten innerhalb von 30 Tagen dauerhaft aus unseren Systemen entfernt (siehe „Deine Rechte“ unten).",
        },
      ],
    },
    {
      heading: "4. Gesundheitsdaten",
      blocks: [
        {
          type: "p",
          text: "MyNutriRise kann sich mit Google Health Connect (Android) oder Apple Health (iOS) verbinden, jedoch erst, nachdem du ausdrücklich deine Erlaubnis erteilt hast. Wir greifen nur auf die Datentypen zu, die für die Aktivitäts- und Schlaffunktionen der App erforderlich sind:",
        },
        {
          type: "ul",
          items: [
            "<b>Schritte</b> – um die tägliche Aktivität anzuzeigen und Schätzungen der Kalorienbilanz zu verfeinern. (Lesen und Schreiben.)",
            "<b>Aktive Energie / verbrannte Kalorien</b> – um deinen täglichen Energieverbrauch zu berechnen.",
            "<b>Bewegung und Trainings</b> – um Aktivität in deiner Tagesübersicht abzubilden.",
            "<b>Strecke</b> – um Bewegung zusammen mit den Schritten anzuzeigen.",
            "<b>Flüssigkeitszufuhr / Wasser</b> – um die Trinkmenge mit deinem Tracker zu synchronisieren.",
            "<b>Schlaf</b> – um Schlafdauer und Einblicke zur Erholung anzuzeigen. (Lesen und Schreiben.)",
          ],
        },
        {
          type: "p",
          text: "Nur unter iOS kann die App außerdem <b>Ruheenergie</b> und <b>gestiegene Etagen</b> lesen, um Schätzungen des Energieverbrauchs zu verbessern. Unter Android fragen wir diese Daten nicht an.",
        },
        {
          type: "ul",
          items: [
            "Gesundheitsdaten werden <b>ausschließlich</b> für diese In-App-Funktionen verwendet – niemals für Werbung oder Profilbildung.",
            "Sie werden in deinem privaten Firestore-Dokument gespeichert, nicht mit anderen Nutzern geteilt und <b>niemals verkauft</b> – an keine dritte Partei.",
            "Du kannst die Gesundheitsintegration jederzeit in den Einstellungen trennen und den Zugriff in Health Connect oder Apple Health widerrufen.",
            "Gesundheitsdaten werden zusammen mit deinem Konto gelöscht (siehe „Deine Rechte“ und „Speicherdauer“).",
          ],
        },
      ],
    },
    {
      heading: "5. Weitergabe von Daten",
      blocks: [
        { type: "p", text: "Wir werden NICHT:" },
        {
          type: "ul",
          items: [
            "deine personenbezogenen Daten an Dritte verkaufen.",
            "deine Gesundheitsdaten an Werbetreibende weitergeben.",
            "deine Daten für andere Zwecke als die Bereitstellung unseres Dienstes verwenden.",
          ],
        },
        {
          type: "p",
          text: "Wir KÖNNEN anonymisierte, aggregierte Daten für Analysen und zur Verbesserung des Dienstes weitergeben.",
        },
      ],
    },
    {
      heading: "6. Dienste Dritter",
      blocks: [
        {
          type: "p",
          text: "Wir nutzen die FatSecret Platform API für Nährwertdaten, Barcode-Scan und Lebensmittelsuche. Von dir eingegebene Suchanfragen können an FatSecret übermittelt werden. Die Datenschutzerklärung von FatSecret findest du unter <fatsecretPrivacy>https://platform.fatsecret.com/privacy</fatsecretPrivacy>.",
        },
      ],
    },
    {
      heading: "7. Deine Rechte",
      blocks: [
        { type: "p", text: "Du hast das Recht:" },
        {
          type: "ul",
          items: [
            "auf deine in der App gespeicherten personenbezogenen Daten zuzugreifen.",
            "deine Angaben über den Bildschirm „Profil bearbeiten“ zu aktualisieren oder zu berichtigen.",
            "<b>dein Konto und alle zugehörigen Daten zu löschen</b> – direkt in der App: Gehe zu <b>Einstellungen → Konto löschen</b>. Dadurch werden dein Konto, dein Profil, dein Ernährungsverlauf, deine Fotos und alle gespeicherten Gesundheitsdaten dauerhaft entfernt. Du kannst die Löschung auch per E-Mail an <email>support@mynutririse.com</email> beantragen. Löschungen werden innerhalb von 30 Tagen abgeschlossen.",
            "Benachrichtigungen jederzeit abzubestellen.",
            "die Integration von Gesundheitsdaten zu trennen.",
            "eine Kopie deiner Daten anzufordern.",
          ],
        },
      ],
    },
    {
      heading: "8. Datenschutz bei Kindern",
      blocks: [
        {
          type: "p",
          text: "MyNutriRise ist nicht für Kinder unter 13 Jahren bestimmt. Wir erheben wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren. Wenn du glaubst, dass wir solche Daten erhoben haben, kontaktiere uns bitte umgehend.",
        },
      ],
    },
    {
      heading: "9. Änderungen dieser Erklärung",
      blocks: [
        {
          type: "p",
          text: "Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Über Änderungen informieren wir dich, indem wir die neue Datenschutzerklärung in der App veröffentlichen und das Datum „Zuletzt aktualisiert“ anpassen.",
        },
      ],
    },
    {
      heading: "10. Kontakt",
      blocks: [
        {
          type: "p",
          text: "Wenn du Fragen zu dieser Datenschutzerklärung oder zu deinen Daten hast, kontaktiere uns unter:",
        },
        { type: "p", text: "E-Mail: <email>support@mynutririse.com</email>" },
        { type: "p", variant: "tight", text: "Website: <site>https://mynutririse.com</site>" },
      ],
    },
  ],
});
