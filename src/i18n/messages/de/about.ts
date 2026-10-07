import type { Facts } from "@/data/facts";
import type en from "../en/about";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Über uns",
  metaDescription:
    "Warum wir MyNutriRise entwickelt haben: Ernährungstracking, das deine Esskultur respektiert – mit KI, die den Aufwand wegnimmt.",
  title: "Ernährungstracking, das deine Sprache spricht",
  paragraphs: [
    "Die meisten Ernährungs-Apps wurden rund um westliche Speisekarten gebaut. Wer nach Kabuli Pulao, Mandi oder Nihari sucht, erntet nur ein Achselzucken – oder einen allgemeinen Eintrag „Reis mit Fleisch“, der um Hunderte Kalorien danebenliegt. Für Millionen Menschen heißt das: Sie müssen sich zwischen dem Essen, das sie lieben, und den Zielen, die ihnen wichtig sind, entscheiden.",
    `MyNutriRise wurde entwickelt, damit diese Entscheidung wegfällt. Unsere Lebensmitteldatenbanken decken ${f.CUISINES} Küchen der Welt ab – türkisch, marokkanisch, persisch, pakistanisch, afghanisch, bangladeschisch, aus der Golfregion und den Emiraten und viele mehr. Halal-freundliche Rezepte und Mahlzeitenpläne sind dabei zentrale Funktionen, keine Nebensache. Die App spricht Englisch, Arabisch, Deutsch, Spanisch, Französisch und Russisch und bietet unter ihren ${f.FASTING_PLAN_COUNT} Fastenplänen neben 16:8 und 5:2 sogar einen Ramadan-Zeitplan.`,
    "Als Zweites haben wir den Aufwand abgeschafft. Tracking scheitert, wenn es sich wie Buchhaltung anfühlt – deshalb steht bei uns KI im Mittelpunkt: Foto machen, und deine Mahlzeit wird in Sekunden erkannt, portioniert und eingetragen. Ein Coach für die Hosentasche gibt dir Tipps, die auf Verhaltenswissenschaft beruhen – nicht auf schlechtem Gewissen.",
    "Alles basiert auf bewährter Ernährungsmathematik – der Mifflin–St-Jeor-Formel für den Energiebedarf, geprüften Lebensmitteldaten und einem nachhaltigen Tempo statt Crash-Diät-Versprechen. Kleine Erfolge, jeden Tag.",
  ],
  facts: [
    { value: f.RECIPES, label: "Rezepte mit echten Zutatenmengen und Zubereitungsschritten" },
    { value: f.CUISINES, label: "Küchen der Welt" },
    { value: f.FASTING_PLAN_COUNT, label: "Fastenpläne, inkl. Ramadan-Zeitplan" },
    { value: f.STRENGTH_EXERCISE_COUNT, label: "Kraftübungen in der Trainingsbibliothek" },
    { value: f.DIET_PLAN_COUNT, label: "Geführte 4-Wochen-Ernährungspläne" },
    { value: f.LANGUAGE_COUNT, label: "Sprachen: Englisch, Arabisch, Deutsch, Spanisch, Französisch, Russisch" },
  ],
  contact:
    "Fragen, Feedback oder Presseanfragen? <support>Schreib uns</support> oder sieh dir unser <press>Pressekit</press> an.",
});
