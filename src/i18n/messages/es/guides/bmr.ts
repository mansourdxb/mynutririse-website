import type { Facts } from "@/data/facts";
import type en from "../../en/guides/bmr";

// Long-form explainer and FAQ for /tools/bmr-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <calorie>…</calorie> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Qué significa la TMB" },
    {
      type: "p",
      text: "Tu tasa metabólica basal (TMB) es la energía que tu cuerpo usa en reposo absoluto para mantenerte con vida: respirar, hacer circular la sangre, mantener la temperatura corporal y reparar las células. En la mayoría de las personas es la mayor parte del gasto energético diario, normalmente en torno al 60–70 % del total, y por eso cualquier objetivo de calorías parte de ella.",
    },
    { type: "h2", text: "La fórmula: Mifflin–St Jeor" },
    {
      type: "p",
      text: "Esta calculadora usa la <b>ecuación de Mifflin–St Jeor</b>, publicada en 1990. Una revisión sistemática de 2005 que comparó las ecuaciones más habituales concluyó que es la más fiable para adultos sanos, con y sin obesidad.",
    },
    {
      type: "formula",
      items: [
        "Hombres: TMB = 10 × peso (kg) + 6,25 × altura (cm) − 5 × edad + 5",
        "Mujeres: TMB = 10 × peso (kg) + 6,25 × altura (cm) − 5 × edad − 161",
      ],
    },
    {
      type: "p",
      text: "La ecuación refleja tres patrones: los cuerpos más pesados y más altos necesitan más energía, el gasto en reposo disminuye lentamente con la edad, y los hombres queman de media más en reposo que las mujeres del mismo tamaño porque suelen tener más músculo.",
    },
    { type: "h2", text: "Ejemplo práctico" },
    {
      type: "p",
      text: "Una mujer de 28 años que mide 162 cm y pesa 60 kg: 10 × 60 + 6,25 × 162 − 5 × 28 − 161 = 600 + 1.012,5 − 140 − 161 = <b>unas 1.312 kcal al día</b>. Eso es lo que quemaría tumbada sin moverse en todo el día, antes de caminar, trabajar o hacer ejercicio.",
    },
    { type: "h2", text: "Qué influye en tu TMB" },
    {
      type: "ul",
      items: [
        "<b>Tamaño corporal:</b> un cuerpo más grande tiene más tejido que mantener, así que la TMB aumenta con el peso y la altura.",
        "<b>Masa muscular:</b> el músculo gasta más energía en reposo que la grasa, así que dos personas con el mismo peso pueden tener TMB distintas.",
        "<b>Edad:</b> la TMB tiende a bajar lentamente a lo largo de la edad adulta, sobre todo porque la masa muscular disminuye si no entrenas.",
        "<b>Sexo:</b> los hombres suelen tener una TMB más alta que las mujeres del mismo tamaño por diferencias en la composición corporal.",
        "<b>Hormonas y salud:</b> la función tiroidea, las enfermedades, la fiebre y algunos medicamentos pueden aumentar o reducir el gasto en reposo.",
        "<b>Déficits grandes y prolongados:</b> comer muy por debajo de tus necesidades durante mucho tiempo puede hacer que el cuerpo ahorre energía, uno de los motivos por los que las dietas drásticas son difíciles de mantener.",
      ],
    },
    { type: "h2", text: "TMB frente a TMR" },
    {
      type: "p",
      text: "Puede que también veas la “tasa metabólica en reposo” (TMR). En sentido estricto, la TMB se mide en condiciones de laboratorio más estrictas (tras una noche de sueño, en ayunas y a una temperatura agradable), mientras que la TMR se mide en condiciones más flexibles y sale algo más alta. En el uso cotidiano los términos son intercambiables, y la ecuación de Mifflin–St Jeor se elaboró a partir de mediciones en reposo.",
    },
    { type: "h2", text: "De la TMB a un objetivo diario de calorías" },
    {
      type: "p",
      text: "La TMB es solo la parte en reposo. Para saber cuánto quemas en un día normal, multiplícala por un factor de actividad entre 1,2 (casi todo el día sentado) y 1,9 (trabajo físico más entrenamiento). Ese total son tus calorías de mantenimiento, y la <calorie>calculadora de calorías</calorie> hace este paso por ti.",
    },
    {
      type: "ul",
      items: [
        "<b>Para bajar de peso:</b> come por debajo de tu mantenimiento, no por debajo de tu TMB. Un déficit de unas 500 kcal respecto al mantenimiento es un punto de partida habitual, con un mínimo de 1.200 kcal al día para las mujeres y 1.500 kcal al día para los hombres.",
        "<b>Para ganar músculo:</b> come un poco por encima de tu mantenimiento (unas 300 kcal) y entrena con pesas. Con el tiempo, el músculo extra aumenta un poco tu TMB.",
        "<b>Para repartir tus calorías:</b> usa la <macro>calculadora de macros</macro> para convertir tu objetivo en proteína, carbohidratos y grasa.",
      ],
    },
    { type: "h2", text: "¿El ayuno reduce la TMB?" },
    {
      type: "p",
      text: "La alimentación con restricción horaria diaria, como el 16:8, o el ayuno del amanecer a la puesta de sol en Ramadán, apenas tiene un efecto duradero sobre el gasto en reposo siempre que la ingesta total sea suficiente. La ralentización metabólica empieza a ser un problema con una ingesta muy baja y prolongada. Durante el Ramadán tus necesidades en reposo siguen siendo las mismas, así que planifica el suhoor y el iftar para cubrirlas; nuestra <ifguide>guía del 16:8</ifguide> explica cómo funcionan las ventanas de ayuno.",
    },
    { type: "h2", text: "Limitaciones" },
    {
      type: "ul",
      items: [
        "Cualquier ecuación estima un promedio. Dos personas con los mismos datos pueden diferir un 10 % o más.",
        "No tiene en cuenta la composición corporal. Las personas muy musculosas suelen tener una TMB más alta de la prevista.",
        "La única forma de medir la TMB con precisión es la calorimetría indirecta en una clínica o un laboratorio.",
        "Las enfermedades, los problemas de tiroides, algunos medicamentos, el embarazo y la lactancia cambian las necesidades energéticas de formas que la fórmula no recoge.",
        "Esto es información general, no consejo médico. Habla con un médico o un dietista-nutricionista para recibir orientación personalizada.",
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
      question: "¿Cuál es una TMB normal?",
      answer:
        "La mayoría de los adultos se sitúa aproximadamente entre 1.200 y 2.000 kcal al día, según su tamaño, edad y sexo. Los cuerpos más grandes y más jóvenes queman más en reposo, y la TMB disminuye poco a poco con la edad.",
    },
    {
      question: "¿La TMB son las calorías que debo comer?",
      answer:
        "No. La TMB es lo que quemas en reposo absoluto. Tus necesidades diarias son la TMB multiplicada por un factor de actividad; la calculadora de calorías te da la cifra completa.",
    },
    {
      question: "¿Debo comer por debajo de mi TMB para bajar de peso?",
      answer:
        "Por lo general, no. Crea un déficit a partir de tus calorías de mantenimiento y no bajes de 1.200 kcal al día si eres mujer ni de 1.500 kcal al día si eres hombre sin supervisión médica.",
    },
    {
      question: "¿El ayuno reduce mi TMB?",
      answer:
        "El ayuno intermitente diario, incluido el ayuno de Ramadán, apenas afecta a la TMB cuando la ingesta total es suficiente. Lo que provoca una ralentización significativa es una restricción severa y prolongada.",
    },
    {
      question: "¿Cómo puedo aumentar mi TMB?",
      answer:
        "Ganar músculo con entrenamiento de fuerza y suficiente proteína es la forma más fiable. El músculo gasta más energía en reposo que el tejido graso.",
    },
  ],
});
