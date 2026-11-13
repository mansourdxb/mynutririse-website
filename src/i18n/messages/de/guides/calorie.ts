import type { Facts } from "@/data/facts";
import type en from "../../en/guides/calorie";

// Long-form explainer and FAQ for /tools/calorie-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <macro>…</macro> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Was dir dieser Rechner verrät" },
    {
      type: "p",
      text: "Der Rechner schätzt deinen <b>Erhaltungsbedarf</b>: die Energie, die du an einem typischen Tag verbrennst. Isst du genau so viel, bleibt dein Gewicht ungefähr stabil. Davon ausgehend zeigt er drei Ziele: ein moderates Kaloriendefizit zum Abnehmen, den Erhaltungsbedarf und einen kleinen Überschuss für den Muskelaufbau. Jede Zahl ist eine Schätzung auf Basis von Durchschnittswerten – sieh sie also als Startpunkt, den du noch feinjustierst, nicht als Vorschrift.",
    },
    { type: "h2", text: "Die Formel: Mifflin–St Jeor plus Aktivitätsfaktor" },
    {
      type: "p",
      text: "Zuerst schätzt der Rechner deinen Energieverbrauch in Ruhe (den Grundumsatz, englisch BMR) mit der <b>Mifflin–St-Jeor-Formel</b>. Eine Übersichtsarbeit zu Vorhersageformeln aus dem Jahr 2005 fand sie für gesunde Erwachsene am zuverlässigsten: Bei mehr Menschen als die verglichenen Alternativen lag sie innerhalb von 10 % der gemessenen Werte.",
    },
    {
      type: "formula",
      items: [
        "Männer: Grundumsatz = 10 × Gewicht (kg) + 6,25 × Größe (cm) − 5 × Alter + 5",
        "Frauen: Grundumsatz = 10 × Gewicht (kg) + 6,25 × Größe (cm) − 5 × Alter − 161",
        "Erhaltungsbedarf (Gesamtumsatz) = Grundumsatz × Aktivitätsfaktor",
      ],
    },
    {
      type: "p",
      text: "Der Grundumsatz umfasst nur die Energie, die du in Ruhe verbrennst. Um Arbeit, Gehen und Training zu berücksichtigen, wird er mit einem Aktivitätsfaktor multipliziert. So ergibt sich dein täglicher Gesamtumsatz (englisch TDEE):",
    },
    {
      type: "table",
      head: ["Aktivitätslevel", "Faktor", "Typische Woche"],
      rows: [
        ["Sitzend", "1,2", "Bürojob, wenig oder kein Sport"],
        ["Leicht aktiv", "1,375", "Leichter Sport an 1–3 Tagen pro Woche"],
        ["Mäßig aktiv", "1,55", "Moderater Sport an 3–5 Tagen pro Woche"],
        ["Sehr aktiv", "1,725", "Intensiver Sport an 6–7 Tagen pro Woche"],
        ["Extrem aktiv", "1,9", "Körperliche Arbeit plus Training"],
      ],
    },
    {
      type: "p",
      text: "Die meisten Menschen überschätzen ihre Aktivität. Wenn du zwischen zwei Stufen schwankst, nimm die niedrigere und passe später an.",
    },
    { type: "h2", text: "Rechenbeispiel" },
    {
      type: "p",
      text: "Ein 30-jähriger Mann, 175 cm groß, 75 kg schwer, trainiert an 3–5 Tagen pro Woche: Grundumsatz = 10 × 75 + 6,25 × 175 − 5 × 30 + 5 = <b>1.699 kcal</b>. Multipliziert mit 1,55 liegt sein Erhaltungsbedarf bei etwa <b>2.633 kcal pro Tag</b>. Der Rechner würde zum Abnehmen etwa 2.133 kcal und für den Muskelaufbau etwa 2.933 kcal vorschlagen.",
    },
    { type: "h2", text: "Mit deinem Wert abnehmen" },
    {
      type: "p",
      text: "Das Ziel zum Abnehmen zieht 500 kcal vom Erhaltungsbedarf ab. Kurzfristig entspricht das etwa 0,5 kg pro Woche und liegt damit innerhalb der NHS-Empfehlung von 0,5–1 kg pro Woche. Über Monate hinweg verlangsamt sich die Abnahme meist: Je leichter du wirst, desto etwas weniger verbrennst du. Forschung zur Energiebilanz zeigt deshalb, dass die einfache Faustregel „7.700 kcal pro kg“ die langfristigen Ergebnisse überschätzt. Rechne am besten alle 4–5 kg neu.",
    },
    {
      type: "p",
      text: "Der Rechner schlägt nie weniger als <b>1.200 kcal pro Tag für Frauen bzw. 1.500 kcal pro Tag für Männer</b> vor, selbst wenn die Rechnung niedriger ausfallen würde. Unterhalb dieser Werte ist es schwer, genug Protein, Vitamine und Mineralstoffe aufzunehmen – das sollte nur unter ärztlicher Aufsicht geschehen.",
    },
    {
      type: "ul",
      items: [
        "Halte die Proteinzufuhr hoch (siehe <macro>Makrorechner</macro>), damit du mehr Fett und weniger Muskeln verlierst.",
        "Wiege dich mehrmals pro Woche und vergleiche Wochendurchschnitte statt einzelner Tage.",
        "Hat sich dein Durchschnitt nach 2–3 Wochen genauen Trackings nicht bewegt, senke die Zufuhr um 100–200 kcal.",
      ],
    },
    { type: "h2", text: "Mit deinem Wert Muskeln aufbauen" },
    {
      type: "p",
      text: "Das Ziel für den Muskelaufbau addiert 300 kcal zum Erhaltungsbedarf. Ein kleiner Überschuss in Kombination mit progressivem Krafttraining und genug Protein unterstützt das Muskelwachstum und hält den Fettzuwachs in Grenzen. Als Anfänger solltest du etwa 0,25–0,5 % deines Körpergewichts pro Monat zunehmen; steigt die Waage deutlich schneller, ist das Plus wahrscheinlich größtenteils Fett – dann reduziere um 100–200 kcal.",
    },
    { type: "h2", text: "Kalorien im Ramadan und beim Intervallfasten" },
    {
      type: "p",
      text: "Fasten verändert, <em>wann</em> du isst, nicht wie viel Energie dein Körper braucht. Verteile dein Tagesziel im Ramadan auf Suhur und Iftar: Gestalte das Suhur mit Protein und langsam verdaulichen Kohlenhydraten, brich das Fasten mit Wasser und Datteln und halte das Iftar ausgewogen statt mit einem einzigen übervollen Teller. Dasselbe Prinzip gilt für 16:8; unser <ifguide>16:8-Ratgeber für Einsteiger</ifguide> erklärt die Details.",
    },
    { type: "h2", text: "Grenzen" },
    {
      type: "ul",
      items: [
        "Formeln beschreiben Durchschnittswerte. Dein tatsächlicher Erhaltungsbedarf kann aufgrund von Genetik, Muskelmasse, Schlaf und Alltagsbewegung um 10 % oder mehr abweichen.",
        "Die Formel kennt deine Körperzusammensetzung nicht. Sehr muskulöse Menschen verbrennen meist mehr als vorhergesagt, bei Menschen mit viel Körperfett wird der Bedarf eventuell überschätzt.",
        "Sie ist nicht für Kinder, Schwangere, Stillende oder Menschen mit Erkrankungen gedacht, die den Stoffwechsel beeinflussen.",
        "Dies sind allgemeine Informationen, keine medizinische Beratung. Wenn du eine Erkrankung hast, Medikamente nimmst oder schon einmal eine Essstörung hattest, sprich mit einer Ärztin, einem Arzt oder einer Ernährungsfachkraft, bevor du deine Ernährung umstellst.",
      ],
    },
    {
      type: "p",
      text: "Nächster Schritt: Teile dein Ziel mit dem <macro>Makrorechner</macro> in Protein, Kohlenhydrate und Fett auf, oder sieh dir mit dem <bmr>Grundumsatz-Rechner</bmr> nur den Ruheanteil der Rechnung an.",
    },
    {
      type: "sources",
      sources: [
        {
          label: "Mifflin MD et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990.",
          url: "https://pubmed.ncbi.nlm.nih.gov/2305711/",
        },
        {
          label: "Frankenfield D et al. Comparison of predictive equations for resting metabolic rate in healthy nonobese and obese adults: a systematic review. J Am Diet Assoc, 2005.",
          url: "https://pubmed.ncbi.nlm.nih.gov/15883556/",
        },
        {
          label: "Hall KD et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011.",
          url: "https://pubmed.ncbi.nlm.nih.gov/21872751/",
        },
        {
          label: "NHS. Obesity: treatment (Empfehlung: 0,5 bis 1 kg pro Woche abnehmen).",
          url: "https://www.nhs.uk/conditions/obesity/treatment/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Wie viele Kalorien sollte ich essen, um abzunehmen?",
      answer:
        "Starte etwa 500 kcal unter deinem Erhaltungsbedarf – das entspricht anfangs rund 0,5 kg Gewichtsverlust pro Woche. Geh ohne ärztliche Aufsicht nicht unter 1.200 kcal pro Tag als Frau bzw. 1.500 kcal pro Tag als Mann.",
    },
    {
      question: "Welche Formel nutzt dieser Kalorienrechner?",
      answer:
        "Die Mifflin–St-Jeor-Formel für den Energieverbrauch in Ruhe, multipliziert mit einem Aktivitätsfaktor zwischen 1,2 (sitzend) und 1,9 (extrem aktiv), um den täglichen Gesamtumsatz zu schätzen.",
    },
    {
      question: "Wie genau ist ein Kalorienrechner?",
      answer:
        "Bei den meisten gesunden Erwachsenen liegt die Formel innerhalb von etwa 10 % des gemessenen Ruheumsatzes, doch jeder Mensch ist anders. Tracke 2–3 Wochen lang deine Zufuhr und dein Gewicht und passe dann um 100–200 kcal an, wenn dein Trend vom Ziel abweicht.",
    },
    {
      question: "Warum nehme ich langsamer ab als am Anfang?",
      answer:
        "Wenn du abnimmst, verbrennt dein Körper etwas weniger Energie, sodass dieselbe Zufuhr ein kleineres Defizit ergibt. Rechne alle 4–5 kg mit deinem neuen Gewicht neu und prüfe, ob sich deine Portionen unbemerkt vergrößert haben.",
    },
    {
      question: "Wie viele Kalorien sollte ich für den Muskelaufbau essen?",
      answer:
        "Ein kleiner Überschuss von etwa 300 kcal über dem Erhaltungsbedarf, kombiniert mit Krafttraining und genug Protein, unterstützt den Muskelaufbau und hält den Fettzuwachs in Grenzen.",
    },
    {
      question: "Ändert sich mein Kalorienbedarf im Ramadan?",
      answer:
        "Dein täglicher Energiebedarf bleibt etwa gleich, nur das Essensfenster ändert sich. Versuche, dein übliches Ziel über Suhur und Iftar zu erreichen, mit Protein und Flüssigkeit bei beiden Mahlzeiten.",
    },
  ],
});
