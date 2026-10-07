import type { Facts } from "@/data/facts";
import type en from "../en/quiz";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Hol dir deinen persönlichen Plan",
  metaDescription:
    "Beantworte vier kurze Fragen und erhalte einen persönlichen Ernährungsplan mit deinem täglichen Kalorienziel – kostenlos und in weniger als einer Minute.",
  title: "Dein persönlicher Plan <accent>in 1 Minute</accent>",
  intro: "Vier kurze Fragen – ohne Anmeldung.",
  // Passed to the client QuizFlow component.
  flow: {
    yourPlan: "Dein Plan",
    stepOf: "Schritt {step} von {total}",
    percent: "{n} %",
    goalTitle: "Was ist dein Hauptziel?",
    goals: {
      lose: { label: "Abnehmen", sub: "Im Kaloriendefizit essen" },
      maintain: { label: "Gewicht halten", sub: "Aufnahme und Aktivität ausgleichen" },
      gain: { label: "Muskeln aufbauen", sub: "Proteinbetonter Überschuss" },
    },
    aboutTitle: "Erzähl uns etwas über dich",
    aboutBody: "Mit deinem Alter stimmen wir die Kalorienziele auf deinen Stoffwechsel ab. Deine Angaben bleiben privat.",
    genderLabel: "Geschlecht",
    // Shown with CSS capitalize, so "male" displays as "Male".
    sexes: { male: "männlich", female: "weiblich" },
    age: "Alter",
    height: "Größe (cm)",
    weight: "Gewicht (kg)",
    unitYears: "Jahre",
    unitCm: "cm",
    unitKg: "kg",
    rangeError: "Gib {min}–{max} {unit} ein",
    workoutTitle: "Wie oft trainierst du?",
    // Same order as the activity multipliers in QuizFlow.
    workoutLevels: [
      { label: "Gar nicht", sub: "Wenig oder kein Sport" },
      { label: "1–2-mal pro Woche", sub: "Leichte Aktivität" },
      { label: "3–4-mal pro Woche", sub: "Moderate Aktivität" },
      { label: "5-mal+ pro Woche", sub: "Sehr aktiv" },
    ],
    styleTitle: "Wähle deinen Essstil",
    styles: {
      everything: { label: "Keine Einschränkungen", sub: "Ich esse alles" },
      halal: { label: "Halal & kulturell", sub: `${f.CUISINES} Küchen – türkisch, pakistanisch, afghanisch & mehr` },
      mediterranean: { label: "Mediterran", sub: "Olivenöl, Fisch, Gemüse" },
      plant: { label: "Vegetarisch / Vegan", sub: "Pflanzliche Ernährung" },
      keto: { label: "Keto / Low-Carb", sub: "Unter 30 g Netto-Kohlenhydrate pro Tag" },
      protein: { label: "Proteinreich", sub: "40 % Proteinanteil" },
    },
    // Real plan names from the app's DietPlanDatabase.
    plans: {
      everything: {
        name: "Naturbelassen",
        blurb: "Vollwertige, wenig verarbeitete Lebensmittel – Obst, Gemüse, mageres Protein und Vollkorn.",
      },
      halal: {
        name: "Gesunde Nahost-Küche",
        blurb:
          "Halal-freundliche Mahlzeiten mit traditionellen Aromen – gegrilltes Fleisch, Hülsenfrüchte, frische Salate und vollwertiges Getreide.",
      },
      mediterranean: {
        name: "Mediterran",
        blurb: "Herzgesundes Olivenöl, frischer Fisch, Gemüse, Vollkorn und Hülsenfrüchte.",
      },
      plant: {
        name: "Vegetarisch ausgewogen",
        blurb: "Ausgewogene pflanzenbasierte Ernährung – Hülsenfrüchte, Vollkorn, Milchprodukte, Eier und gesunde Fette.",
      },
      keto: {
        name: "Keto-freundlich",
        blurb: "Sehr wenig Kohlenhydrate, viel Fett – unter 30 g Netto-Kohlenhydrate pro Tag mit hochwertigen Fetten.",
      },
      protein: {
        name: "Proteinreich",
        blurb: "40 % Proteinanteil für Muskelaufbau und Sättigung – mageres Fleisch, Eier, Hülsenfrüchte und Milchprodukte.",
      },
    },
    resultEyebrow: "Dein persönlicher Plan",
    dailyTarget: "Tägliches Kalorienziel",
    kcalPerDay: "kcal/Tag",
    grams: "{n} g",
    protein: "Protein",
    carbs: "KH",
    fat: "Fett",
    water: "{liters} l Wasser pro Tag empfohlen",
    resultBody:
      "Das ist dieselbe Rechnung, die auch die App nutzt. Lade MyNutriRise herunter, und dein Plan ist startklar – ein geführter Mahlzeitenplan (Woche 1 kostenlos, alle 4 Wochen mit Premium), KI-Foto-Tracking und Coaching inklusive.",
    emailSubject: "Mein MyNutriRise-Plan",
    emailBody:
      "Mein MyNutriRise-Plan:\n\nPlan: {plan}\nKalorien pro Tag: {calories} kcal\nProtein: {protein} g · KH: {carbs} g · Fett: {fat} g\nWasser: {water} l\n\nHol dir die App: {url}",
    emailCta: "Plan per E-Mail schicken →",
    back: "← Zurück",
    seePlan: "Meinen Plan ansehen",
    continue: "Weiter",
  },
});
