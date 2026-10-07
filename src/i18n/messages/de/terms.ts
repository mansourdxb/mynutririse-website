import type { Facts } from "@/data/facts";
import type en from "../en/terms";

// Inline tags: <email>…</email> support mailto link, <site>…</site> website link,
// <fatsecret>…</fatsecret> external link.
export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Nutzungsbedingungen",
  metaDescription:
    "Lies die Bedingungen, die für deine Nutzung der MyNutriRise-App und ihrer Dienste gelten.",
  title: "Nutzungsbedingungen",
  lastUpdated: "Zuletzt aktualisiert: 15. Mai 2026",
  // Translations: note that the English version is the legally binding one. Empty in English.
  bindingNote:
    "Diese Übersetzung dient nur der Orientierung. Rechtsverbindlich ist die englische Fassung; bei Abweichungen hat sie Vorrang.",
  sections: [
    {
      heading: "1. Annahme der Bedingungen",
      blocks: [
        {
          type: "p",
          text: "Indem du MyNutriRise („die App“) herunterlädst, installierst oder nutzt, erklärst du dich mit diesen Nutzungsbedingungen einverstanden. Wenn du nicht einverstanden bist, nutze die App nicht.",
        },
      ],
    },
    {
      heading: "2. Beschreibung des Dienstes",
      blocks: [
        {
          type: "p",
          text: "MyNutriRise ist eine Anwendung zum Tracking von Gesundheit und Ernährung, die Folgendes bietet:",
        },
        {
          type: "ul",
          items: [
            "Scannen von Essensfotos und Nährwertanalyse",
            "Erfassung von Mahlzeiten sowie Kalorien- und Makro-Tracking",
            "Timer und Tracking für Intervallfasten",
            "KI-gestütztes Ernährungscoaching",
            `Datenbank kultureller Ernährungsweisen mit ${f.DISHES} Gerichten`,
            "Erstellung von Einkaufslisten",
            "Tracking der Trinkmenge",
            "Tracking des körperlichen Fortschritts mit Fotos",
            "Gamification mit Abzeichen, XP und Serien",
            "Integration von Gesundheitsgeräten",
          ],
        },
      ],
    },
    {
      heading: "3. Keine medizinische Beratung",
      blocks: [
        {
          type: "p",
          variant: "important",
          text: "WICHTIG: MyNutriRise ist KEINE medizinische Anwendung und bietet KEINE medizinische Beratung. Die bereitgestellten Informationen dienen ausschließlich allgemeinen Bildungs- und Informationszwecken.",
        },
        {
          type: "ul",
          items: [
            "Sprich immer mit einer qualifizierten medizinischen Fachkraft, bevor du deine Ernährung oder dein Training wesentlich änderst.",
            "Nutze diese App nicht, um Krankheiten zu diagnostizieren, zu behandeln, zu heilen oder ihnen vorzubeugen.",
            "Wenn du eine Erkrankung oder Essstörung hast oder schwanger bist, sprich mit deiner Ärztin oder deinem Arzt, bevor du diese App nutzt.",
            "Antworten des KI-Coachings werden von künstlicher Intelligenz erzeugt und ersetzen keine professionelle medizinische Beratung.",
          ],
        },
      ],
    },
    {
      heading: "4. Nutzerkonten",
      blocks: [
        {
          type: "ul",
          items: [
            "Beim Erstellen eines Kontos musst du korrekte Angaben machen.",
            "Du bist dafür verantwortlich, deine Zugangsdaten sicher zu verwahren.",
            "Du musst mindestens 13 Jahre alt sein, um diese App zu nutzen.",
            "Ein Konto pro Person. Teile dein Konto nicht mit anderen.",
          ],
        },
      ],
    },
    {
      heading: "5. Abonnements und Zahlungen",
      blocks: [
        {
          type: "ul",
          items: [
            "MyNutriRise bietet eine kostenlose und eine Premium-Abostufe an.",
            "Premium-Abos werden über den Google Play Store oder den Apple App Store abgerechnet.",
            "Abos verlängern sich automatisch, sofern sie nicht mindestens 24 Stunden vor Ende des laufenden Zeitraums gekündigt werden.",
            "Erstattungen richten sich nach den Richtlinien des jeweiligen App Stores.",
            "Wir behalten uns vor, die Preise nach vorheriger Ankündigung zu ändern.",
          ],
        },
      ],
    },
    {
      heading: "6. Zulässige Nutzung",
      blocks: [
        { type: "p", text: "Du verpflichtest dich, NICHT:" },
        {
          type: "ul",
          items: [
            "die App für rechtswidrige Zwecke zu nutzen.",
            "zu versuchen, die App zurückzuentwickeln (Reverse Engineering), zu hacken oder zu kompromittieren.",
            "die KI-Coaching-Funktion für Themen ohne Gesundheitsbezug zu nutzen.",
            "unangemessene, anstößige oder rechtswidrige Inhalte hochzuladen.",
            "falsche Angaben zu deiner Identität zu machen oder dich als eine andere Person auszugeben.",
            "die Funktionsfähigkeit der App zu beeinträchtigen oder zu stören.",
          ],
        },
      ],
    },
    {
      heading: "7. Geistiges Eigentum",
      blocks: [
        {
          type: "ul",
          items: [
            "MyNutriRise, einschließlich Design, Funktionen, Code und Inhalten, ist Eigentum von NutriLife und durch Gesetze zum Schutz des geistigen Eigentums geschützt.",
            "Die Datenbank kultureller Ernährungsweisen ist urheberrechtlich geschützter, proprietärer Inhalt.",
            "Du darfst die App nicht kopieren, verändern, verbreiten oder abgeleitete Werke daraus erstellen.",
          ],
        },
      ],
    },
    {
      heading: "8. Inhalte Dritter",
      blocks: [
        {
          type: "p",
          text: "Die in dieser App angezeigten Nährwertinformationen werden von der FatSecret Platform API bereitgestellt und unterliegen den Nutzungsbedingungen von FatSecret, abrufbar unter <fatsecret>https://platform.fatsecret.com</fatsecret>.",
        },
      ],
    },
    {
      heading: "9. Nutzerinhalte",
      blocks: [
        {
          type: "ul",
          items: [
            "Du bleibst Eigentümer der Fotos und Daten, die du hochlädst.",
            "Durch das Hochladen von Inhalten räumst du uns eine eingeschränkte Lizenz ein, diese zur Bereitstellung des Dienstes zu speichern und zu verarbeiten.",
            "Wir erheben keinen Eigentumsanspruch an deinen persönlichen Gesundheitsdaten.",
          ],
        },
      ],
    },
    {
      heading: "10. Haftungsbeschränkung",
      blocks: [
        { type: "p", variant: "caps", text: "Im gesetzlich größtmöglichen Umfang gilt:" },
        {
          type: "ul",
          items: [
            "MyNutriRise wird „WIE BESEHEN“ ohne jegliche Gewährleistung bereitgestellt.",
            "Wir haften nicht für gesundheitliche Folgen, die sich aus der Nutzung der App ergeben.",
            "Wir haften nicht für Datenverluste, ergreifen jedoch angemessene Maßnahmen zum Schutz deiner Daten.",
            "Unsere Gesamthaftung übersteigt nicht den Betrag, den du in den letzten 12 Monaten für die App bezahlt hast.",
          ],
        },
      ],
    },
    {
      heading: "11. Kündigung",
      blocks: [
        {
          type: "ul",
          items: [
            "Wir können dein Konto sperren oder kündigen, wenn du gegen diese Bedingungen verstößt.",
            "Du kannst dein Konto jederzeit löschen.",
            "Nach der Kündigung werden deine Daten gemäß unserer Datenschutzerklärung gelöscht.",
          ],
        },
      ],
    },
    {
      heading: "12. Änderungen der Bedingungen",
      blocks: [
        {
          type: "p",
          text: "Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Wenn du die App nach Änderungen weiter nutzt, gilt dies als Zustimmung zu den neuen Bedingungen.",
        },
      ],
    },
    {
      heading: "13. Kontakt",
      blocks: [
        { type: "p", text: "Bei Fragen zu diesen Bedingungen:" },
        { type: "p", text: "E-Mail: <email>support@mynutririse.com</email>" },
        { type: "p", variant: "tight", text: "Website: <site>https://mynutririse.com</site>" },
      ],
    },
  ],
});
