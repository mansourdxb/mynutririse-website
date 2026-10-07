import type { Facts } from "@/data/facts";
import type en from "../en/blog";

/*
 * Article bodies are ordered blocks:
 *   { type: "h2", text } | { type: "p", text } | { type: "ul", items } | { type: "table", head, rows }
 * Text may contain <em>, <b> (bold) and link tags (named per article, see the page).
 */
export default (f: Facts): ReturnType<typeof en> => ({
  index: {
    metaTitle: "Ratgeber zu Ernährung & Fasten",
    metaDescription:
      "Praktische Ratgeber zu Ernährung, Fasten, Makro-Tracking und gesunden Gewohnheiten vom MyNutriRise-Team.",
    title: "Der MyNutriRise-Blog",
    subtitle: "Praktische Ratgeber zu Ernährung, Fasten und Gewohnheiten, die bleiben.",
    breadcrumb: "Blog",
  },
  cta: {
    intermittentFasting: {
      heading: "Tracke dein Fasten automatisch",
      body: "MyNutriRise bietet 16:8, 5:2 und weitere Fastenmethoden mit Timern, Einblicken und Mahlzeiten-Tracking in einer App.",
    },
    aiPhoto: {
      heading: "Probier den KI-Mahlzeiten-Scan aus",
      body: "MyNutriRise erkennt dein Essen, schätzt die Portionen und trägt Kalorien und Makros anhand eines einzigen Fotos ein.",
    },
    halalMacros: {
      heading: "Dein Essen, richtig getrackt",
      body: "MyNutriRise bietet halal-freundliche Rezepte und Bibliotheken kultureller Küchen – afghanisch, arabisch, bangladeschisch und mehr.",
    },
  },
  intermittentFasting: {
    title: "Intervallfasten 16:8 – ein Leitfaden für Einsteiger",
    metaTitle: "Intervallfasten 16:8 für Einsteiger",
    description:
      "Was die 16:8-Methode ist, wie sie funktioniert, für wen sie sich eignet und wie du ohne die typischen Fehler startest.",
    breadcrumb: "Intervallfasten 16:8",
    dateLabel: "9. Juni 2026",
    readTime: "5 Min. Lesezeit",
    blocks: [
      {
        type: "p",
        text: "Die 16:8-Methode ist die beliebteste Form des Intervallfastens – und das aus gutem Grund: Sie ist einfach. Du isst jeden Tag innerhalb eines 8-Stunden-Fensters und fastest die übrigen 16 Stunden, von denen du die meisten ohnehin verschläfst.",
      },
      { type: "h2", text: "So funktioniert’s" },
      {
        type: "p",
        text: "Ein typischer 16:8-Rhythmus bedeutet: Abendessen bis 20 Uhr beenden und die erste Mahlzeit am nächsten Tag um 12 Uhr essen. Während des Fastenfensters trinkst du Wasser, schwarzen Kaffee oder ungesüßten Tee. 16:8 verändert nicht, <em>was</em> du isst, sondern <em>wann</em> – und das reduziert bei vielen Menschen ganz natürlich späte Snacks und die gesamte Kalorienaufnahme.",
      },
      { type: "h2", text: "Dein Essensfenster wählen" },
      {
        type: "p",
        text: "Das beste Fenster ist das, das zu deinem Leben passt. Frühaufsteher bevorzugen oft 10–18 Uhr; wer gern in Gesellschaft isst, wählt eher 12–20 Uhr, damit das Abendessen mit der Familie bleibt. Wenn dir 16 Stunden anfangs schwerfallen, starte mit 12:12 oder 14:10 und verlängere schrittweise – Beständigkeit schlägt Intensität.",
      },
      { type: "h2", text: "Typische Anfängerfehler" },
      {
        type: "ul",
        items: [
          "<b>Im Essensfenster zu viel essen.</b> Fasten hebt Kalorien nicht auf; tracke deine Mahlzeiten, damit das Fenster nicht zum Freifahrtschein wird.",
          "<b>Zu wenig Protein.</b> Mit weniger Mahlzeiten isst man schnell zu wenig Protein – baue jede Mahlzeit um eine Proteinquelle herum auf.",
          "<b>Das Trinken vergessen.</b> Einen großen Teil deiner üblichen Flüssigkeit nimmst du über Essen auf. Trink mehr Wasser, als dir nötig erscheint.",
          "<b>Alles-oder-nichts-Denken.</b> Das Fasten gelegentlich früher zu brechen, ändert sehr wenig. Entscheidend ist das Muster über die Woche.",
        ],
      },
      { type: "h2", text: "16:8 und Ramadan – die Unterschiede" },
      {
        type: "p",
        text: `Im Ramadan wird ungefähr vom Morgengrauen bis zum Sonnenuntergang gefastet – ohne Essen <em>und ohne Getränke</em> –, während bei 16:8 Wasser und ungesüßte Getränke jederzeit erlaubt sind. Der wichtigste Unterschied ist also das Trinken: Im Ramadan solltest du zu Suhur und Iftar gezielt viel Flüssigkeit aufnehmen. Die Ernährungslogik ist in beiden Fällen dieselbe – dein täglicher Kalorienbedarf ändert sich nicht, also plane deine zwei Mahlzeiten so, dass sie ihn decken. Mit unserem kostenlosen <calorieCalculator>Kalorienrechner</calorieCalculator> findest du diese Zahl heraus – und MyNutriRise bietet unter seinen ${f.FASTING_PLAN_COUNT} Fastenplänen einen eigenen Ramadan-Zeitplan.`,
      },
      { type: "h2", text: "Wer vorsichtig sein sollte" },
      {
        type: "p",
        text: "Intervallfasten ist nicht für jeden geeignet. Wenn du schwanger bist, stillst, unter 18 bist, eine Essstörung in der Vorgeschichte hast oder eine Erkrankung wie Diabetes hast, sprich mit deiner Ärztin oder deinem Arzt, bevor du deine Essenszeiten änderst.",
      },
    ],
  },
  aiPhoto: {
    title: "So funktioniert Kalorientracking per KI-Foto wirklich",
    metaTitle: "So funktioniert KI-Kalorientracking per Foto",
    description:
      "Foto machen, Kalorien und Makros erhalten. Das passiert hinter den Kulissen – und so bekommst du die genauesten Ergebnisse.",
    breadcrumb: "Kalorientracking per KI-Foto",
    dateLabel: "9. Juni 2026",
    readTime: "4 Min. Lesezeit",
    blocks: [
      {
        type: "p",
        text: "Der häufigste Grund, warum Menschen mit dem Kalorienzählen aufhören, ist der Aufwand: Datenbanken durchsuchen, Portionen abwiegen, Zutat für Zutat eintragen. Tracking per KI-Foto setzt genau dort an – du fotografierst deinen Teller, und die App erledigt den Rest.",
      },
      { type: "h2", text: "Was passiert, wenn du ein Foto machst" },
      {
        type: "p",
        text: "Moderne Modelle zur Lebensmittelerkennung arbeiten in drei Schritten. Zuerst erkennt die KI die einzelnen Lebensmittel auf dem Teller – Reis, gegrilltes Hähnchen, Salat, Soße. Dann schätzt sie die Portionsgrößen anhand visueller Hinweise wie Tellerdurchmesser, Höhe und Dichte des Essens. Schließlich ordnet sie jedes Element einer Nährwertdatenbank zu, berechnet Kalorien, Protein, Kohlenhydrate und Fett – und zeigt dir das Ergebnis zum Bestätigen oder Anpassen.",
      },
      { type: "h2", text: "Wie genau ist das?" },
      {
        type: "p",
        text: "Bei alltäglichen Mahlzeiten liegt die Foto-Schätzung meist nah genug dran, damit deine Tagessummen aussagekräftig bleiben – und vor allem ist sie <em>beständig</em> genau, was wichtiger ist als Perfektion. Eine Tracking-Methode, die du wirklich jeden Tag nutzt, schlägt eine präzise, die du nach einer Woche aufgibst. Gemischte Gerichte, verstecktes Öl und gestapelte Speisen sind die schwierigsten Fälle – deshalb lässt dich eine gute App die Schätzung der KI mit einem Tipp korrigieren.",
      },
      { type: "h2", text: "Fünf Tipps für bessere Scans" },
      {
        type: "ul",
        items: [
          "Fotografiere leicht schräg (30–45°) statt direkt von oben – so kann die KI die Höhe des Essens besser einschätzen.",
          "Bring den ganzen Teller ins Bild, mit sichtbarem Rand als Größenvergleich.",
          "Gutes Licht ist wichtiger als eine gute Kamera.",
          "Nenne bei gemischten Gerichten wie Biryani oder Eintöpfen den Namen des Gerichts, wenn die App danach fragt – das macht die Schätzung genauer.",
          "Überprüfe stichprobenartig die geschätzte Portion bei kalorienreichen Lebensmitteln wie Reis, Öl und Nüssen.",
        ],
      },
      { type: "h2", text: "Wann andere Eingabemethoden besser sind" },
      {
        type: "p",
        text: "Fotos sind ideal für angerichtete Mahlzeiten. Bei verpackten Lebensmitteln ist ein Barcode-Scan schneller und exakt. Für einen schnellen Kaffee oder eine Handvoll Datteln gewinnt die Spracheingabe („zwei Datteln und ein Latte“). Am besten kombinierst du alle drei.",
      },
    ],
  },
  halalMacros: {
    title: "Makros tracken mit halalen & kulturellen Gerichten",
    metaTitle: "Makros tracken: halal & kulturelle Gerichte",
    description:
      "Kabuli Pulao, Mandi, Biryani – traditionelle Gerichte verdienen richtiges Tracking. So trägst du kulturelle Küche genau ein.",
    breadcrumb: "Makros tracken",
    dateLabel: "9. Juni 2026",
    readTime: "5 Min. Lesezeit",
    blocks: [
      {
        type: "p",
        text: "Die meisten Ernährungs-Apps wurden rund um westliche Speisekarten gebaut. Wer nach „Kabuli Pulao“, „Mandi“ oder „Machher Jhol“ sucht, findet oft nichts – oder einen allgemeinen Eintrag „Reis mit Fleisch“, der danebenliegt. Das ist ein echtes Problem: Wenn dein Essen nicht in der Datenbank steht, schätzt du entweder schlecht oder hörst ganz mit dem Tracking auf.",
      },
      { type: "h2", text: "Warum kulturelle Gerichte schwer zu tracken sind" },
      {
        type: "p",
        text: "Traditionelle Gerichte sind meist gemischt: Reis, Fleisch, Öle, Nüsse und Soßen werden zusammen gekocht. Die Makros hängen stark von der Zubereitung ab – ein hausgemachtes Biryani und eines aus dem Restaurant können sich pro Portion um Hunderte Kalorien unterscheiden, vor allem wegen des Kochfetts. Allgemeine Datenbankeinträge können diese Spanne nicht abbilden, und jede Zutat eines Familienrezepts abzuwiegen, ist unrealistisch.",
      },
      { type: "h2", text: "Ein praktischer Ansatz" },
      {
        type: "ul",
        items: [
          "<b>Nutze eine App mit Bibliotheken kultureller Küchen.</b> Eigens angelegte Einträge für afghanische, arabische und nahöstliche, bangladeschische und andere Küchen bringen dich viel näher heran als allgemeine Entsprechungen.",
          "<b>Scanne angerichtete Mahlzeiten per Foto.</b> Der KI-Scan schätzt die tatsächliche Portion vor dir – besonders praktisch, wenn in Familienrunde aus gemeinsamen Schüsseln gegessen wird und „eine Portion“ unklar ist.",
          "<b>Achte auf das Kochfett, nicht auf die Gewürze.</b> Gewürze fallen ernährungsphysiologisch kaum ins Gewicht; in Ghee und Öl stecken die versteckten Kalorien. Glänzt ein Gericht, setz die Fettschätzung etwas höher an.",
          "<b>Trag deine Standardgerichte einmal ein.</b> Speichere die regelmäßigen Gerichte deines Haushalts als Mahlzeitvorlagen – dann dauert das erneute Eintragen nur einen Tipp.",
        ],
      },
      { type: "h2", text: "Makros beliebter Gerichte (pro Portion)" },
      {
        type: "p",
        text: "Echte Werte aus der MyNutriRise-Lebensmitteldatenbank – nutze sie als Orientierung, wenn du Portionen aus dem Restaurant oder von zu Hause schätzt:",
      },
      {
        type: "table",
        head: ["Gericht", "kcal", "Protein", "KH", "Fett"],
        rows: [
          ["Hähnchen-Biryani (pakistanisch)", "480", "28 g", "52 g", "18 g"],
          ["Kabuli Pulao (afghanisch)", "480", "28 g", "55 g", "16 g"],
          ["Nihari (pakistanisch)", "450", "35 g", "15 g", "28 g"],
          ["Hähnchen-Tajine (marokkanisch)", "380", "30 g", "25 g", "18 g"],
          ["Adana Kebap (türkisch)", "380", "32 g", "8 g", "24 g"],
          ["Koshari (ägyptisch)", "380", "14 g", "62 g", "8 g"],
          ["Shakshuka", "354", "18 g", "14 g", "24 g"],
        ],
      },
      {
        type: "p",
        text: "Weitere Gerichte mit vollständigen Nährwerten findest du auf unserer <recipes>Rezeptseite</recipes>; um dein Kalorienziel in Grammziele umzurechnen, nutze den <macroCalculator>Makrorechner</macroCalculator>.",
      },
      { type: "h2", text: "Halal tracken heißt mehr als nur Zutaten" },
      {
        type: "p",
        text: "Wer halal isst und ein Fitnessziel verfolgt, sollte sich nicht zu Hähnchen-mit-Brokkoli-Plänen zwingen müssen. Der nachhaltige Weg: das Essen behalten, das du liebst, und Portionen und Häufigkeit anpassen – genau das macht richtiges Tracking möglich. Im Ramadan hilft dir die Kombination aus Mahlzeiten-Tracking und Fasten-Tracker außerdem, Suhur und Iftar ausgewogen zu halten, statt zwischen Extremen zu schwanken. Das ganze Bild zum halal-freundlichen Tracking findest du auf unserer Seite zur <halalApp>Halal-Ernährungs-App</halalApp>.",
      },
    ],
  },
});
