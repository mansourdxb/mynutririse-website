import type { Facts } from "@/data/facts";
import type en from "../../en/guides/bmr";

// Long-form explainer and FAQ for /tools/bmr-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <calorie>…</calorie> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Was der Grundumsatz bedeutet" },
    {
      type: "p",
      text: "Dein Grundumsatz (englisch BMR, basal metabolic rate) ist die Energie, die dein Körper in völliger Ruhe braucht, um dich am Leben zu halten: für Atmung, Blutkreislauf, Körpertemperatur und Zellreparatur. Bei den meisten Menschen ist er der größte Teil des täglichen Energieverbrauchs, typischerweise etwa 60–70 % davon – deshalb beginnt jedes Kalorienziel bei ihm.",
    },
    { type: "h2", text: "Die Formel: Mifflin–St Jeor" },
    {
      type: "p",
      text: "Dieser Rechner nutzt die <b>Mifflin–St-Jeor-Formel</b>, die 1990 veröffentlicht wurde. Eine systematische Übersichtsarbeit von 2005, die die gängigen Formeln verglich, fand sie für gesunde Erwachsene mit und ohne Adipositas am zuverlässigsten.",
    },
    {
      type: "formula",
      items: [
        "Männer: Grundumsatz = 10 × Gewicht (kg) + 6,25 × Größe (cm) − 5 × Alter + 5",
        "Frauen: Grundumsatz = 10 × Gewicht (kg) + 6,25 × Größe (cm) − 5 × Alter − 161",
      ],
    },
    {
      type: "p",
      text: "Die Formel bildet drei Muster ab: Schwerere und größere Körper brauchen mehr Energie, der Energieverbrauch in Ruhe sinkt mit dem Alter langsam, und Männer verbrennen in Ruhe im Durchschnitt mehr als gleich große Frauen, weil sie meist mehr Muskelmasse haben.",
    },
    { type: "h2", text: "Rechenbeispiel" },
    {
      type: "p",
      text: "Eine 28-jährige Frau, 162 cm groß und 60 kg schwer: 10 × 60 + 6,25 × 162 − 5 × 28 − 161 = 600 + 1.012,5 − 140 − 161 = <b>etwa 1.312 kcal pro Tag</b>. So viel würde sie verbrennen, wenn sie den ganzen Tag still liegen würde – noch ohne Gehen, Arbeiten oder Sport.",
    },
    { type: "h2", text: "Was deinen Grundumsatz beeinflusst" },
    {
      type: "ul",
      items: [
        "<b>Körpergröße:</b> Ein größerer Körper hat mehr Gewebe zu versorgen, daher steigt der Grundumsatz mit Gewicht und Größe.",
        "<b>Muskelmasse:</b> Muskeln verbrauchen in Ruhe mehr Energie als Fett, deshalb können zwei gleich schwere Menschen einen unterschiedlichen Grundumsatz haben.",
        "<b>Alter:</b> Der Grundumsatz sinkt im Erwachsenenalter meist langsam, vor allem weil die Muskelmasse abnimmt, wenn du nicht trainierst.",
        "<b>Geschlecht:</b> Männer haben aufgrund ihrer Körperzusammensetzung meist einen höheren Grundumsatz als gleich große Frauen.",
        "<b>Hormone und Gesundheit:</b> Schilddrüsenfunktion, Krankheit, Fieber und manche Medikamente können den Energieverbrauch in Ruhe erhöhen oder senken.",
        "<b>Große, lang anhaltende Defizite:</b> Wer lange Zeit weit unter seinem Bedarf isst, kann seinen Körper sparsamer machen – ein Grund, warum Crash-Diäten schwer durchzuhalten sind.",
      ],
    },
    { type: "h2", text: "Grundumsatz vs. Ruheumsatz" },
    {
      type: "p",
      text: "Vielleicht begegnet dir auch der Begriff „Ruheumsatz“ (englisch RMR, resting metabolic rate). Streng genommen wird der Grundumsatz unter strengeren Laborbedingungen gemessen (nach einer Nacht Schlaf, nüchtern, bei angenehmer Temperatur), der Ruheumsatz unter lockereren Bedingungen – er fällt daher etwas höher aus. Im Alltag werden die Begriffe gleichbedeutend verwendet, und die Mifflin–St-Jeor-Formel wurde aus Messungen in Ruhe entwickelt.",
    },
    { type: "h2", text: "Vom Grundumsatz zum täglichen Kalorienziel" },
    {
      type: "p",
      text: "Der Grundumsatz ist nur der Ruheanteil. Um herauszufinden, wie viel du an einem normalen Tag verbrennst, multipliziere ihn mit einem Aktivitätsfaktor zwischen 1,2 (überwiegend sitzend) und 1,9 (körperliche Arbeit plus Training). Diese Summe ist dein Erhaltungsbedarf, und der <calorie>Kalorienrechner</calorie> übernimmt diesen Schritt für dich.",
    },
    {
      type: "ul",
      items: [
        "<b>Zum Abnehmen:</b> Iss unter deinem Erhaltungsbedarf, nicht unter deinem Grundumsatz. Ein Defizit von etwa 500 kcal gegenüber dem Erhaltungsbedarf ist ein üblicher Startpunkt, mit einer Untergrenze von 1.200 kcal pro Tag für Frauen und 1.500 kcal pro Tag für Männer.",
        "<b>Für den Muskelaufbau:</b> Iss etwas über deinem Erhaltungsbedarf (etwa 300 kcal) und trainiere mit Gewichten. Mit der Zeit erhöht zusätzliche Muskelmasse deinen Grundumsatz ein wenig.",
        "<b>Zum Aufteilen deiner Kalorien:</b> Nutze den <macro>Makrorechner</macro>, um dein Ziel in Protein, Kohlenhydrate und Fett umzurechnen.",
      ],
    },
    { type: "h2", text: "Senkt Fasten den Grundumsatz?" },
    {
      type: "p",
      text: "Tägliches zeitlich begrenztes Essen wie 16:8 oder das Fasten von der Morgendämmerung bis zum Sonnenuntergang im Ramadan hat kaum dauerhafte Auswirkungen auf den Energieverbrauch in Ruhe, solange die Gesamtzufuhr ausreicht. Eine Verlangsamung des Stoffwechsels wird erst bei lang anhaltender, sehr niedriger Zufuhr zum Thema. Im Ramadan bleibt dein Ruhebedarf gleich, plane Suhur und Iftar also so, dass sie ihn decken; unser <ifguide>16:8-Ratgeber</ifguide> erklärt, wie Fastenfenster funktionieren.",
    },
    { type: "h2", text: "Grenzen" },
    {
      type: "ul",
      items: [
        "Jede Formel schätzt einen Durchschnitt. Zwei Menschen mit identischen Angaben können um 10 % oder mehr voneinander abweichen.",
        "Die Körperzusammensetzung fließt nicht ein. Sehr muskulöse Menschen haben meist einen höheren Grundumsatz als vorhergesagt.",
        "Genau messen lässt sich der Grundumsatz nur per indirekter Kalorimetrie in einer Klinik oder einem Labor.",
        "Krankheit, Schilddrüsenerkrankungen, manche Medikamente, Schwangerschaft und Stillzeit verändern den Energiebedarf auf eine Weise, die die Formel nicht erfasst.",
        "Dies sind allgemeine Informationen, keine medizinische Beratung. Wende dich für eine persönliche Beratung an eine Ärztin, einen Arzt oder eine Ernährungsfachkraft.",
      ],
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
      ],
    },
  ],
  faqs: [
    {
      question: "Was ist ein normaler Grundumsatz?",
      answer:
        "Bei den meisten Erwachsenen liegt er je nach Größe, Alter und Geschlecht ungefähr zwischen 1.200 und 2.000 kcal pro Tag. Größere und jüngere Körper verbrennen in Ruhe mehr, und der Grundumsatz sinkt mit dem Alter leicht.",
    },
    {
      question: "Ist der Grundumsatz die Kalorienmenge, die ich essen sollte?",
      answer:
        "Nein. Der Grundumsatz ist das, was du in völliger Ruhe verbrennst. Dein täglicher Bedarf ist der Grundumsatz multipliziert mit einem Aktivitätsfaktor; der Kalorienrechner liefert dir die vollständige Zahl.",
    },
    {
      question: "Sollte ich zum Abnehmen weniger als meinen Grundumsatz essen?",
      answer:
        "In der Regel nicht. Bilde stattdessen ein Defizit ausgehend von deinem Erhaltungsbedarf, und geh ohne ärztliche Aufsicht nicht unter 1.200 kcal pro Tag als Frau bzw. 1.500 kcal pro Tag als Mann.",
    },
    {
      question: "Senkt Fasten meinen Grundumsatz?",
      answer:
        "Tägliches Intervallfasten, auch das Fasten im Ramadan, hat kaum Einfluss auf den Grundumsatz, wenn die Gesamtzufuhr ausreicht. Eine spürbare Verlangsamung entsteht erst durch lang anhaltende, starke Einschränkung.",
    },
    {
      question: "Wie kann ich meinen Grundumsatz erhöhen?",
      answer:
        "Am zuverlässigsten durch Muskelaufbau mit Krafttraining und genug Protein. Muskeln verbrauchen in Ruhe mehr Energie als Fettgewebe.",
    },
  ],
});
