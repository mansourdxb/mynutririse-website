import type { Facts } from "@/data/facts";
import type en from "../en/about";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "À propos",
  metaDescription:
    "Pourquoi nous avons créé MyNutriRise : un suivi nutritionnel qui respecte votre culture, avec une IA qui supprime les contraintes.",
  title: "Un suivi nutritionnel qui parle votre langue",
  paragraphs: [
    "La plupart des applis de nutrition ont été pensées autour des menus occidentaux. Cherchez un kabuli pulao, un mandi ou un nihari et vous obtenez un haussement d’épaules — ou une entrée générique « riz à la viande » qui se trompe de plusieurs centaines de calories. Pour des millions de personnes, cela revient à choisir entre les plats qu’elles aiment et les objectifs qui leur tiennent à cœur.",
    `MyNutriRise est né pour supprimer ce dilemme. Nos bibliothèques d’aliments couvrent ${f.CUISINES} cuisines du monde — turque, marocaine, persane, pakistanaise, afghane, bangladaise, du Golfe et émiratie, et bien d’autres — avec des recettes et des programmes alimentaires compatibles halal conçus comme des fonctionnalités à part entière, pas comme des ajouts de dernière minute. L’app parle anglais, arabe, allemand, espagnol, français et russe, et propose même un programme de jeûne du Ramadan parmi ses ${f.FASTING_PLAN_COUNT} programmes de jeûne, aux côtés du 16:8 et du 5:2.`,
    "Deuxième chose que nous avons supprimée : les contraintes. Le suivi échoue dès qu’il ressemble à de la comptabilité ; nous avons donc placé l’IA au cœur de l’app : prenez une photo et votre repas est identifié, les portions estimées et le tout enregistré en quelques secondes. Un coach dans votre poche vous guide grâce aux sciences comportementales, sans culpabilisation.",
    "Tout repose sur des calculs nutritionnels reconnus : l’équation de Mifflin–St Jeor pour les besoins énergétiques, des données alimentaires vérifiées et une progression durable plutôt que des promesses de régimes express. De petites victoires, chaque jour.",
  ],
  facts: [
    { value: f.RECIPES, label: "Recettes avec de vraies quantités d’ingrédients et les étapes de préparation" },
    { value: f.CUISINES, label: "Cuisines du monde" },
    { value: f.FASTING_PLAN_COUNT, label: "Programmes de jeûne, dont un programme pour le Ramadan" },
    { value: f.STRENGTH_EXERCISE_COUNT, label: "Exercices de musculation dans la bibliothèque d’entraînements" },
    { value: f.DIET_PLAN_COUNT, label: "Programmes alimentaires guidés de 4 semaines" },
    { value: f.LANGUAGE_COUNT, label: "Langues : anglais, arabe, allemand, espagnol, français, russe" },
  ],
  contact:
    "Des questions, des retours ou une demande presse ? <support>Contactez-nous</support> ou consultez notre <press>kit presse</press>.",
});
