import type { Facts } from "@/data/facts";
import type en from "../en/about";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Sobre nosotros",
  metaDescription:
    "Por qué creamos MyNutriRise: un seguimiento nutricional que respeta tu cultura, con una IA que elimina las complicaciones.",
  title: "Un seguimiento nutricional que habla tu idioma",
  paragraphs: [
    "La mayoría de las apps de nutrición se diseñaron pensando en menús occidentales. Busca kabuli pulao, mandi o nihari y solo encontrarás un encogimiento de hombros, o una entrada genérica de «arroz con carne» que se equivoca en cientos de calorías. Para millones de personas, eso significa elegir entre la comida que aman y los objetivos que les importan.",
    `MyNutriRise nació para que no tengas que elegir. Nuestras bibliotecas de alimentos abarcan ${f.CUISINES} cocinas del mundo —turca, marroquí, persa, pakistaní, afgana, bangladesí, del Golfo y emiratí, y muchas más—, con recetas y planes de alimentación aptos para halal como funciones principales, no como un añadido de última hora. La app está disponible en inglés, árabe, alemán, español, francés y ruso, e incluso ofrece un horario de ayuno para el Ramadán entre sus ${f.FASTING_PLAN_COUNT} planes de ayuno, junto con 16:8 y 5:2.`,
    "Lo segundo que eliminamos fueron las complicaciones. El seguimiento fracasa cuando se siente como llevar la contabilidad, así que pusimos la IA en el centro: toma una foto y tu comida se identifica, se calcula la porción y se registra en segundos. Un coach en tu bolsillo te orienta con base en la ciencia del comportamiento, sin hacerte sentir culpable.",
    "Todo se apoya en cálculos nutricionales consolidados: la ecuación de Mifflin–St Jeor para las necesidades energéticas, datos de alimentos verificados y un ritmo sostenible en lugar de promesas de dietas milagro. Pequeños logros, cada día.",
  ],
  facts: [
    { value: f.RECIPES, label: "Recetas con cantidades reales de ingredientes y pasos de preparación" },
    { value: f.CUISINES, label: "Cocinas del mundo" },
    { value: f.FASTING_PLAN_COUNT, label: "Planes de ayuno, incluido un horario para el Ramadán" },
    { value: f.STRENGTH_EXERCISE_COUNT, label: "Ejercicios de fuerza en la biblioteca de entrenamientos" },
    { value: f.DIET_PLAN_COUNT, label: "Planes de alimentación guiados de 4 semanas" },
    { value: f.LANGUAGE_COUNT, label: "Idiomas: inglés, árabe, alemán, español, francés y ruso" },
  ],
  contact:
    "¿Tienes preguntas, comentarios o consultas de prensa? <support>Ponte en contacto</support> o consulta nuestro <press>kit de prensa</press>.",
});
