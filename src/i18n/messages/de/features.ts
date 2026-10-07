import type { Facts } from "@/data/facts";
import type en from "../en/features";

export default (f: Facts): ReturnType<typeof en> => ({
  // /features page
  metaTitle: "Funktionen: KI-Mahlzeitscan, Rezepte & Fasten",
  metaDescription:
    "Die Funktionen von MyNutriRise: Ernährung tracken, gesunde Gewohnheiten aufbauen und deine Wellness-Ziele erreichen – smart und einfach.",
  pageTitle: "Starke Funktionen für ein gesünderes Leben",
  pageIntro:
    "Alles, was du brauchst, um deine Ernährung zu verstehen, deine Gewohnheiten zu optimieren und dich rundum wohlzufühlen – in einer schön gestalteten App.",

  // Section header
  eyebrow: "Ernährung, Fasten & Coaching in einer App",
  titleLine1: "Eine App für deinen gesamten",
  titleLine2: "Weg zu mehr Wohlbefinden",
  intro:
    "Vom KI-gestützten Mahlzeiten-Scan bis zum persönlichen Coaching vereint MyNutriRise alle Bereiche eines gesunden Lebens in einem schönen Erlebnis.",

  // Deep-dive blocks. Titles use <hl>…</hl> for the highlighted part.
  nutrition: {
    eyebrow: "Ernährung",
    title: "Smarte Ernährungs-<hl>Intelligenz</hl>",
    body: `Jeder Bissen, voll verstanden. Unsere KI analysiert deine Mahlzeiten in Echtzeit und erfasst nicht nur Kalorien und Makros, sondern auch ${f.MICRONUTRIENT_COUNT} essenzielle Mikronährstoffe – für das komplette Bild deiner Ernährung.`,
    bullets: [
      "Mahlzeit-Scan per KI – Foto machen und sofort die Nährwerte sehen",
      "Smartes Kalorien- und Makro-Tracking mit Lebensmitteldatenbank",
      `${f.MICRONUTRIENT_COUNT} wichtige Mikronährstoffe – Eisen, Kalzium, Vitamin A, C, D, B12 & mehr (Premium)`,
      "Lebensmittel direkt vergleichen – mit Gesundheitswerten",
      "Analyse der Essenszeiten – deine Essgewohnheiten nach Tageszeit",
      "Barcode-Scanner & Spracheingabe für Tracking ohne Tippen",
      "Metrische oder imperiale Einheiten, in jeder App-Sprache",
    ],
  },
  ecosystem: {
    eyebrow: "Ökosystem",
    title: "Dein Wellness-<hl>Ökosystem</hl>",
    body: "Fasten, Fitness, Trinken, Schlaf, Rezepte und Mahlzeitenpläne – alles greift ineinander. MyNutriRise verbindet jede gesunde Gewohnheit zu einem intelligenten System, das sich deinem Lebensstil anpasst.",
    bullets: [
      `Intervallfasten mit ${f.FASTING_PLAN_COUNT} Plänen (16:8, 5:2, OMAD, Ramadan) + Masterclass`,
      `${f.RECIPES} Rezepte mit Esskulturen (afghanisch, arabisch, bangladeschisch & mehr)`,
      "KI-Mahlzeitenpläne – täglich/wöchentlich für Keto, Mediterran, Vegan & mehr",
      "Meal-Prep-Planer mit automatisch erstellten Einkaufslisten",
      `${f.EXERCISES_AND_ACTIVITIES} Übungen & Aktivitäten – Gehen, Laufen, Radfahren, Gym, Yoga, Sport`,
      "Trink-Tracking mit Tagesziel, dazu Schlafdaten aus Apple Health & Health Connect",
      "Live-Aktivitäten für Fasten und Trainings auf deinem iPhone-Sperrbildschirm",
    ],
  },
  coaching: {
    eyebrow: "KI-Coaching",
    title: "Intelligentes Coaching <hl>& Einblicke</hl>",
    body: "Dein persönlicher KI-Wellness-Coach versteht deine Ziele, Gewohnheiten und Vorlieben. Er verknüpft jeden Datenpunkt – von der Ernährung bis zum Schlaf – und gibt dir konkrete Tipps, mit denen du dich wirklich verbesserst.",
    bullets: [
      "KI-Ernährungscoach mit persönlichen Mahlzeitenideen & Tipps",
      "Wellness-Score (0–100) mit Aufschlüsselung nach 6 Gewohnheiten",
      "Wochenberichte mit Beständigkeit in %, Tagesdurchschnitten & Teilen-Funktion",
      "Tägliche Ernährungslektionen mit Serien & Aufgaben",
      "Blutzucker-Tracking mit 7-Tage-Durchschnitt & geschätztem A1C",
      "Health-Sync – liest Schritte, Trainings & Schlaf aus Apple Health und Health Connect",
    ],
  },
  recipes: {
    eyebrow: "Rezepte",
    title: `${f.RECIPES} Rezepte <hl>aus ${f.CUISINES} Küchen</hl>`,
    body: "Vom türkischen Kebab bis zum afghanischen Pulao – jedes Rezept kommt mit vollständigen Nährwertangaben, und das Essen deiner Kultur ist fester Bestandteil statt fehlender Datenbankeintrag.",
    bullets: [
      `${f.RECIPES} Rezepte mit echten Zutatenmengen & Zubereitungsschritten`,
      `${f.CUISINES} Küchen der Welt – durchgehend auf Halal geprüft`,
      "Smarte Filter: vegetarisch, Keto, proteinreich & glutenfrei",
      "Rezepte importieren von AllRecipes, BBC Good Food & anderen Rezeptseiten",
      "Nach Kategorien stöbern – Frühstück, Suppen, Desserts & Dutzende mehr",
      "Jedes Rezept mit einem Tipp in deinen Tag eintragen",
    ],
    halalLink: "Gemacht für halale & kulturelle Ernährung – so funktioniert’s →",
  },
  fitness: {
    eyebrow: "Fitness",
    title: "Trainings, Routinen <hl>& Übungen</hl>",
    body: "Ernährung ist nur die halbe Geschichte. Trainiere mit einer kompletten Übungsbibliothek, folge fertigen Routinen oder erstelle eigene – und sieh zu, wie jede verbrannte Kalorie direkt in deine Tagesbilanz einfließt.",
    bullets: [
      `${f.STRENGTH_EXERCISE_COUNT} Kraftübungen mit Schritt-für-Schritt-Anleitungen & Zielmuskeln`,
      "Fertige Routinen – Ganzkörper, Push-Tag, Pull-Tag & mehr",
      "Eigene Routinen mit Sätzen, Wiederholungen & Übungsverlauf erstellen",
      "Cardio-Tracking – Gehen, Laufen, Radfahren, Schwimmen, Yoga & mehr",
      "Verbrannte Kalorien fließen automatisch in deine tägliche Energiebilanz ein",
      "Synchronisiert mit Apple Health & Google Health Connect",
    ],
  },
  community: {
    eyebrow: "Community",
    title: "Gemeinsam <hl>motiviert bleiben</hl>",
    body: "Mit Freunden macht Wohlbefinden mehr Spaß. Sammle Erfolge, miss dich in Bestenlisten, meistere wöchentliche Challenges und teile deine Fortschritte. MyNutriRise macht gesunde Gewohnheiten zu einer lohnenden Reise.",
    bullets: [
      "Erfolgsabzeichen & XP-basiertes Levelsystem",
      "Tägliche & wöchentliche Challenges – Hydrate Habit, Fasten-Fünfer, Serien-Bauer",
      "Freunde & Bestenlisten für Serie, XP, Mahlzeiten & Genauigkeit",
      "Serien-Tracking mit täglicher & wöchentlicher Motivation",
      "Fortschrittsfotos & Körpermaße (Taille, Brust, Arme)",
      "Teilbare Wochenberichte & Premium/Pro-Funktionen",
    ],
  },

  // Floating mock cards. {placeholders} are filled with demo values in code;
  // <count></count> marks where the animated number goes.
  cards: {
    nutritionAlt: "Ergebnis eines KI-Mahlzeit-Scans in MyNutriRise mit Kalorien, Makros und Gesundheitswert",
    calories: "Kalorien",
    caloriesOf: "/ {n} kcal",
    kcalRemaining: "{n} kcal übrig",
    macros: "Makros",
    protein: "Protein",
    carbs: "KH",
    fat: "Fett",
    gramUnit: "g",

    wellnessAlt: "MyNutriRise-Dashboard mit Kalorien-, Wasser-, Bewegungs- und Schlaf-Tracking",
    fasting: "Fasten",
    remaining: "verbleibend",
    protocol: "16:8-Methode",
    sleep: "{h} h {m} min Schlaf",
    goodQuality: "Gute Qualität",

    coachingAlt: "Chat mit dem KI-Coach in MyNutriRise mit Tipps zu Mahlzeiten, Bewegung und Gewicht",
    weeklyReport: "Wochenbericht",
    consistency: "Beständigkeit",
    avgKcal: "Ø kcal",
    shareable: "Teilbar · PDF-Export",
    coachName: "Nutri · KI-Coach",
    online: "Online",
    coachMessage: "Morgens kommst du im Schnitt auf 15 g Protein – probier griechischen Joghurt mit Nüssen. Zu deinem Plan hinzugefügt ✓",

    recipesAlt: "Rezepte-Screen in MyNutriRise mit gesunden Rezepten und Kategorien",
    dishKcal: "<count></count> kcal",
    dishName: "Hähnchen-Tajine",
    dishCuisine: "Marokkanisch",
    dishProtein: "<b>{n} g</b> Protein",
    dishCarbs: "<b>{n} g</b> KH",
    dishFat: "<b>{n} g</b> Fett",
    cuisinesCount: "<count></count> Küchen",
    cuisineChips: ["Türkisch", "Marokkanisch", "Pakistanisch", "Afghanisch", "Golfregion"],
    cultureIncluded: "Das Essen deiner Kultur – inklusive",

    workoutsAlt: "Trainingsroutinen in MyNutriRise – Ganzkörper, Push-Tag und Pull-Tag mit Start-Buttons",
    cardioAlt: "Cardio-Tracker in MyNutriRise mit Gehen, Laufen, Radfahren und Schwimmen",
    cardioTracker: "Cardio-Tracker",
    exercisesCount: `${f.STRENGTH_EXERCISE_COUNT} Übungen`,
    muscleTargets: "Zielmuskeln & Anleitungen",
    weekActivity: "Aktivität dieser Woche",
    kcalBurned: "<count></count> kcal verbrannt",
    activitySummary: "{min} min · {n} Trainings",

    motivationAlt: "Freunde- und Bestenlisten-Screen in MyNutriRise mit XP-Rangliste",
    level: "Level {n}",
    xpSuffix: " XP",
    xpProgress: "{a} / {b} XP",
    dayStreak: "Tage-Serie",
    weekdayInitials: ["M", "D", "M", "D", "F", "S", "S"],
  },

  // Feature grid (features page only). Order matches the icons in code.
  grid: {
    eyebrow: "Und noch viel mehr",
    title: "Alles, was du brauchst",
    body: "Jedes Tool, jeder Einblick, jede Funktion – gemacht, um dich auf deinem gesamten Weg zu mehr Wohlbefinden zu unterstützen.",
    hint: "Tippe auf eine Karte, um den Screen zu sehen",
    flipBack: "Zum Zurückdrehen tippen",
    showPreview: "{name} – Screen-Vorschau anzeigen",
    hidePreview: "{name} – Screen-Vorschau ausblenden",
    screenAlt: "Screen: {name}",
    items: [
      { name: "Essensfotos", desc: "Visuelles Ernährungstagebuch mit jeder Mahlzeit" },
      { name: "Ernährungskalender", desc: "Monatsansicht für deine Beständigkeit" },
      { name: "Farbleitfaden", desc: `${f.FOOD_COLOR_GROUP_COUNT} Lebensmittel-Farbgruppen mit ihren Gesundheitsvorteilen` },
      { name: "Lebensmittel vergleichen", desc: "Nährwerte direkt im Vergleich" },
      { name: "Esskulturen", desc: "Afghanisch, arabisch, bangladeschisch & mehr" },
      { name: "Rezepte importieren", desc: "Von AllRecipes, BBC Good Food & mehr" },
      { name: "Einkaufsliste", desc: "Sortiert nach Obst & Gemüse, Milchprodukten, Fleisch, Getreide" },
      { name: "Mahlzeitvorlagen", desc: "Häufige Mahlzeiten blitzschnell eintragen" },
      { name: "Meal Prep", desc: "Wochenplaner mit automatischer Einkaufsliste" },
      { name: "Daten exportieren", desc: `PDF-Berichte über ${f.PDF_REPORT_MIN_DAYS} bis ${f.PDF_REPORT_MAX_DAYS} Tage` },
      { name: "Tägliche Lektionen", desc: "Ernährungswissen mit Serien" },
      { name: "Blutzucker-Tracker", desc: "7-Tage-Durchschnitt & geschätzter A1C" },
    ],
  },
});
