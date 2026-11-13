import type { Facts } from "@/data/facts";
import type en from "../../en/guides/bmi";

// Long-form explainer and FAQ for /tools/bmi-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <calorie>…</calorie> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Was der BMI misst" },
    {
      type: "p",
      text: "Der Body-Mass-Index (BMI) setzt dein Gewicht ins Verhältnis zu deiner Größe. Er ist ein schneller Screening-Wert, mit dem weltweit Erwachsene in Gewichtskategorien eingeteilt werden, die im Durchschnitt mit einem bestimmten Gesundheitsrisiko verbunden sind. Den Körperfettanteil misst er <b>nicht</b> direkt – deshalb taugt er besser für Bevölkerungsgruppen als für ein Urteil über eine einzelne Person.",
    },
    { type: "h2", text: "Die Formel" },
    {
      type: "formula",
      items: [
        "Metrisch: BMI = Gewicht (kg) ÷ Größe (m)²",
        "Imperial: BMI = 703 × Gewicht (lb) ÷ Größe (in)²",
      ],
    },
    { type: "h2", text: "WHO-Kategorien für Erwachsene" },
    {
      type: "table",
      head: ["BMI", "Kategorie"],
      rows: [
        ["Unter 18,5", "Untergewicht"],
        ["18,5–24,9", "Normalgewicht"],
        ["25,0–29,9", "Übergewicht"],
        ["30,0 und mehr", "Adipositas"],
      ],
    },
    {
      type: "p",
      text: "Diese Grenzwerte stammen von der Weltgesundheitsorganisation (WHO) und gelten für Erwachsene ab 18 Jahren. Bei Kindern und Jugendlichen wird der BMI stattdessen mit alters- und geschlechtsspezifischen Wachstumskurven verglichen, daher ist dieser Rechner für sie nicht geeignet.",
    },
    { type: "h2", text: "Rechenbeispiel" },
    {
      type: "p",
      text: "Jemand ist 1,70 m groß und wiegt 72 kg: 72 ÷ (1,70 × 1,70) = 72 ÷ 2,89 = <b>24,9</b> – die Obergrenze des Normalbereichs. In imperialen Einheiten ergeben 5 ft 7 in (67 in) und 159 lb mit 703 × 159 ÷ (67 × 67) ebenfalls <b>24,9</b>.",
    },
    { type: "h2", text: "Was du mit deinem Ergebnis anfangen kannst" },
    {
      type: "h3",
      text: "Wenn du abnehmen möchtest",
    },
    {
      type: "p",
      text: "Ein BMI von 25 oder mehr ist ein Grund, genauer hinzuschauen, aber kein Grund zur Panik. Schon 5–10 % weniger Körpergewicht können bei Menschen mit Übergewicht oder Adipositas Blutdruck und Blutzucker verbessern. Finde mit dem <calorie>Kalorienrechner</calorie> ein nachhaltiges Tagesziel und peile etwa 0,5–1 kg pro Woche an.",
    },
    {
      type: "h3",
      text: "Wenn du Muskeln aufbauen möchtest",
    },
    {
      type: "p",
      text: "Muskelaufbau erhöht dein Gewicht und damit deinen BMI, selbst wenn dein Körperfett gleich bleibt oder sinkt. Wenn du Krafttraining machst, verfolge neben dem BMI auch deinen Taillenumfang und wie deine Kleidung sitzt, und lege mit dem <macro>Makrorechner</macro> dein Protein fest.",
    },
    {
      type: "h3",
      text: "Wenn dein BMI unter 18,5 liegt",
    },
    {
      type: "p",
      text: "Ein niedriger BMI kann bedeuten, dass du zu wenig Energie oder Nährstoffe bekommst. Statt weiter abzunehmen, sprich mit einer Ärztin oder einem Arzt – besonders, wenn du ungewollt abgenommen hast.",
    },
    { type: "h2", text: "Miss zusätzlich deine Taille" },
    {
      type: "p",
      text: "Da der BMI nicht erkennt, wo das Fett sitzt, empfiehlt der NHS, ihn bei einem BMI unter 35 mit dem Verhältnis von Taille zu Körpergröße zu kombinieren. Miss deinen Taillenumfang auf halber Höhe zwischen unterster Rippe und Oberkante des Beckens und teile ihn durch deine Größe in derselben Einheit. Versuche, deinen Taillenumfang <b>unter der Hälfte deiner Körpergröße</b> zu halten, also bei einem Verhältnis unter 0,5. Eine 170 cm große Person sollte zum Beispiel einen Taillenumfang unter 85 cm anstreben.",
    },
    {
      type: "p",
      text: "Zwei Menschen können beide einen BMI von 27 haben und trotzdem ein ganz unterschiedliches Risiko: der eine muskulös mit schlanker Taille, der andere weniger aktiv mit Fett um die Körpermitte. Beide Werte alle ein bis zwei Monate zu prüfen, verrät dir viel mehr als der BMI allein – und beide verändern sich, wenn du Fett abbaust oder Muskeln aufbaust.",
    },
    { type: "h2", text: "Woher der BMI stammt" },
    {
      type: "p",
      text: "Die Formel wurde im 19. Jahrhundert vom belgischen Mathematiker Adolphe Quetelet beschrieben, um die durchschnittliche Körpergröße in Bevölkerungen zu erfassen. Sie wurde zum Standard-Screening für Erwachsene, weil sie nur eine Waage und ein Maßband braucht, kostenlos ist und sich leicht zwischen Ländern vergleichen lässt. Genau diese Stärken sind auch ihre Schwächen: Sie war nie dafür gedacht, die Gesundheit einer einzelnen Person zu beschreiben.",
    },
    { type: "h2", text: "Grenzen" },
    {
      type: "ul",
      items: [
        "Der BMI kann Muskeln nicht von Fett unterscheiden. Sportler und Menschen, die Krafttraining machen, landen oft im Bereich „Übergewicht“, obwohl sie schlank sind.",
        "Er sagt nichts darüber aus, wo das Fett gespeichert ist. Fett an der Taille birgt ein höheres Gesundheitsrisiko; der Taillenumfang liefert hier nützlichen Kontext.",
        "Das Risiko bei einem bestimmten BMI unterscheidet sich zwischen Bevölkerungsgruppen. Eine WHO-Expertenkonsultation stellte fest, dass viele asiatische Bevölkerungsgruppen schon bei niedrigeren BMI-Werten ein höheres Risiko haben, und schlug für die öffentliche Gesundheit zusätzliche Schwellenwerte bei 23 und 27,5 vor.",
        "Er ist nicht für Kinder, Schwangere oder ältere Erwachsene mit deutlichem Muskelabbau gedacht.",
        "Der BMI ist ein Screening-Werkzeug, keine Diagnose und keine medizinische Beratung. Besprich dein Ergebnis mit einer Ärztin oder einem Arzt, wenn du dir Sorgen um dein Gewicht oder deine Gesundheit machst.",
      ],
    },
    {
      type: "p",
      text: "Um den Gewichtsbereich zu sehen, der für deine Größe einem gesunden BMI entspricht, probier den <ideal>Idealgewicht-Rechner</ideal> aus.",
    },
    {
      type: "sources",
      sources: [
        {
          label: "World Health Organization. Obesity and overweight: Faktenblatt.",
          url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
        },
        {
          label: "WHO Expert Consultation. Appropriate body-mass index for Asian populations and its implications for policy and intervention strategies. Lancet, 2004.",
          url: "https://pubmed.ncbi.nlm.nih.gov/14726171/",
        },
        {
          label: "NHS. Obesity (BMI, Verhältnis von Taille zu Körpergröße und wann du zum Hausarzt gehen solltest).",
          url: "https://www.nhs.uk/conditions/obesity/",
        },
        {
          label: "NHS. Obesity: treatment.",
          url: "https://www.nhs.uk/conditions/obesity/treatment/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Was ist ein gesunder BMI für Erwachsene?",
      answer:
        "Die WHO definiert 18,5–24,9 als gesunden Bereich für Erwachsene. Unter 18,5 gilt als Untergewicht, 25–29,9 als Übergewicht und 30 oder mehr als Adipositas.",
    },
    {
      question: "Ist der BMI für muskulöse Menschen aussagekräftig?",
      answer:
        "Nein. Der BMI kann Muskeln nicht von Fett unterscheiden, deshalb gelten muskulöse Menschen oft als übergewichtig. Der Taillenumfang oder eine Schätzung des Körperfetts ergibt ein vollständigeres Bild.",
    },
    {
      question: "Ist der BMI für Männer und Frauen gleich?",
      answer:
        "Formel und Kategorien für Erwachsene sind für beide Geschlechter gleich, allerdings haben Frauen bei gleichem BMI meist mehr Körperfett als Männer.",
    },
    {
      question: "Können Kinder diesen BMI-Rechner nutzen?",
      answer:
        "Nein. Bei unter 18-Jährigen muss der BMI mit alters- und geschlechtsspezifischen Wachstumskurven verglichen werden, die dieser Rechner nicht verwendet.",
    },
    {
      question: "Wie schnell kann ich meinen BMI sicher verändern?",
      answer:
        "Durch eine allmähliche Gewichtsveränderung von etwa 0,5–1 kg pro Woche, was für die meisten Menschen ein tägliches Defizit von rund 500 kcal bedeutet. Schnelleres Abnehmen kostet oft Muskeln und lässt sich schwerer halten.",
    },
    {
      question: "Sollte ich metrische oder imperiale Einheiten verwenden?",
      answer:
        "Beides geht. Der Rechner unterstützt beide und liefert dasselbe Ergebnis; die imperiale Formel multipliziert einfach mit 703, um die Einheiten umzurechnen.",
    },
  ],
});
