import type { Facts } from "@/data/facts";
import type en from "../en/press";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Pressekit",
  metaDescription:
    "Pressematerial zu MyNutriRise – Unternehmensprofil, Faktenblatt, Markenassets und Pressekontakt.",
  title: "Pressekit",
  intro: "Alles, was du brauchst, um über MyNutriRise zu schreiben.",
  boilerplateTitle: "Unternehmensprofil",
  boilerplate: `MyNutriRise ist eine KI-gestützte Ernährungs- und Fitness-App für Menschen, die von den großen Trackern übersehen werden. Nutzerinnen und Nutzer fotografieren eine beliebige Mahlzeit, und die KI trägt Kalorien und Makros sofort ein – mit ${f.RECIPES} Rezepten aus ${f.CUISINES} Küchen der Welt, halal-freundlichen Mahlzeitenplänen, ${f.FASTING_PLAN_COUNT} Intervallfasten-Plänen inklusive Ramadan-Zeitplan, Trainings-Tracking und einem KI-Coach. Erhältlich für iOS und Android auf Englisch, Arabisch, Deutsch, Spanisch, Französisch und Russisch.`,
  factSheetTitle: "Faktenblatt",
  factSheet: [
    { key: "Produkt", value: "MyNutriRise – KI-gestützter Ernährungs- und Fitness-Tracker" },
    { key: "Plattformen", value: "iOS und Android" },
    { key: "Sprachen", value: "Englisch, Arabisch, Deutsch, Spanisch, Französisch, Russisch" },
    {
      key: "Rezepte",
      value: `${f.RECIPES} mit echten Zutatenmengen und Zubereitungsschritten, verteilt auf ${f.DISHES} Gerichte`,
    },
    { key: "Küchen", value: `${f.CUISINES} Küchen der Welt, Halal-Filter für jedes Gericht geprüft` },
    {
      key: "Fastenpläne",
      value: `${f.FASTING_PLAN_COUNT} Pläne, darunter 16:8, 5:2, OMAD und ein Ramadan-Zeitplan`,
    },
    { key: "Ernährungspläne", value: `${f.DIET_PLAN_COUNT} geführte 4-Wochen-Pläne inkl. „Gesunde Nahost-Küche“` },
    {
      key: "Trainingsbibliothek",
      value: `${f.STRENGTH_EXERCISE_COUNT} Kraftübungen, ${f.CARDIO_ACTIVITY_COUNT} Cardio- und Sportaktivitäten sowie fertige Routinen`,
    },
    { key: "Preis", value: "Kostenloser Download; optionales Premium-Abo" },
    { key: "Website", value: "www.mynutririse.com" },
  ],
  assetsTitle: "Markenassets",
  logo: "App-Logo (SVG)",
  screenshots: "App-Screenshots: auf Anfrage erhältlich – oder nutze die Screens, die auf dieser Website zu sehen sind.",
  colors: "Markenfarben: Smaragd <code>#10b981</code>, Weiß <code>#FFFFFF</code>, Schiefer <code>#1e293b</code>",
  contactTitle: "Pressekontakt",
  contact: "Für Interviews, Testzugänge oder alles andere: <link>contact@mynutririse.com</link>",
});
