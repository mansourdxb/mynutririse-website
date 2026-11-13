import type { Facts } from "@/data/facts";
import type en from "../../en/guides/tdee";

// Long-form explainer and FAQ for /tools/tdee-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <calorie>…</calorie> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Qué significa TDEE" },
    {
      type: "p",
      text: "TDEE son las siglas en inglés de <b>gasto energético total diario</b> (en español, GET): todas las calorías que tu cuerpo usa en un día. Si comes más o menos esa cantidad, tu peso se mantiene más o menos estable, y por eso al TDEE también se le llama calorías de mantenimiento. Esta calculadora muestra tu TDEE en cada nivel de actividad, uno al lado del otro, para que veas cuánto cambia tus necesidades el movimiento diario.",
    },
    { type: "h2", text: "En qué se van tus calorías diarias" },
    {
      type: "ul",
      items: [
        "<b>Tasa metabólica basal (TMB):</b> la energía que te mantiene con vida en reposo. En la mayoría de las personas es la parte más grande, a menudo en torno al 60–70 % del total.",
        "<b>Digerir los alimentos:</b> descomponer y almacenar lo que comes consume una parte pequeña, que suele estimarse en un 10 % aproximadamente. Digerir la proteína cuesta más que los carbohidratos o la grasa.",
        "<b>Movimiento cotidiano:</b> caminar, estar de pie, cocinar, moverte sin darte cuenta. Varía muchísimo de una persona a otra y es la parte que más fácilmente puedes cambiar.",
        "<b>Ejercicio:</b> el entrenamiento planificado. Para mucha gente es una parte menor de lo que espera.",
      ],
    },
    { type: "h2", text: "La fórmula" },
    {
      type: "p",
      text: "La calculadora estima la TMB con la <b>ecuación de Mifflin–St Jeor</b>, que una revisión sistemática de 2005 consideró la más fiable para adultos sanos, y luego la multiplica por un factor de actividad estándar:",
    },
    {
      type: "formula",
      items: [
        "Hombres: TMB = 10 × peso (kg) + 6,25 × altura (cm) − 5 × edad + 5",
        "Mujeres: TMB = 10 × peso (kg) + 6,25 × altura (cm) − 5 × edad − 161",
        "TDEE = TMB × factor de actividad (de 1,2 a 1,9)",
      ],
    },
    {
      type: "table",
      head: ["Nivel de actividad", "Factor", "Semana típica"],
      rows: [
        ["Sedentario", "1,2", "Trabajo de oficina, poco o ningún ejercicio"],
        ["Poco activo", "1,375", "Ejercicio ligero 1–3 días a la semana"],
        ["Moderadamente activo", "1,55", "Ejercicio moderado 3–5 días a la semana"],
        ["Muy activo", "1,725", "Ejercicio intenso 6–7 días a la semana"],
        ["Extremadamente activo", "1,9", "Trabajo físico más entrenamiento"],
      ],
    },
    { type: "h2", text: "Ejemplo práctico" },
    {
      type: "p",
      text: "Una mujer de 35 años que mide 165 cm y pesa 68 kg: TMB = 10 × 68 + 6,25 × 165 − 5 × 35 − 161 = <b>1.375 kcal</b>. Su TDEE va desde unas 1.650 kcal si es sedentaria (× 1,2) hasta unas 2.131 kcal si entrena 3–5 días a la semana (× 1,55). Esa diferencia de casi 500 kcal al día se debe únicamente a la actividad.",
    },
    { type: "h2", text: "Elige tu nivel de actividad con sinceridad" },
    {
      type: "p",
      text: "Elige el nivel que corresponde a tu semana típica, no a tu mejor semana. Alguien que trabaja en una oficina y entrena tres veces por semana suele ser “poco” o “moderadamente” activo, no “muy activo”. Si dudas, elige el nivel más bajo: es más fácil añadir comida más adelante que preguntarte por qué la báscula no se mueve.",
    },
    { type: "h2", text: "Cómo usar tu TDEE para bajar de peso" },
    {
      type: "p",
      text: "Comer unas 500 kcal por debajo de tu TDEE supone al principio perder unos 0,5 kg por semana, dentro de la recomendación del NHS de 0,5–1 kg por semana. Nunca bajes de 1.200 kcal al día si eres mujer ni de 1.500 kcal al día si eres hombre sin supervisión médica. Para planificar un peso objetivo y una fecha concretos, usa la <deficit>calculadora de déficit calórico</deficit>.",
    },
    { type: "h2", text: "Cómo usar tu TDEE para ganar músculo" },
    {
      type: "p",
      text: "Come unas 200–300 kcal por encima de tu TDEE, entrena con resistencia progresiva y consume suficiente proteína (la <protein>calculadora de proteínas</protein> te da un objetivo). Si estás empezando y tu peso sube más rápido que alrededor de un 1 % de tu peso corporal al mes, reduce el superávit.",
    },
    { type: "h2", text: "Contrasta la estimación con la realidad" },
    {
      type: "p",
      text: "Tu TDEE real lo revelan tus propios datos. Registra lo que comes durante 2–3 semanas y sigue tu peso medio. Si el promedio se mantiene estable, tu ingesta es tu TDEE real; si sube o baja, ajusta en pasos de 100–200 kcal. Recuerda que el TDEE baja a medida que pierdes peso, así que recalcula cada 4–5 kg.",
    },
    { type: "h2", text: "Limitaciones" },
    {
      type: "ul",
      items: [
        "Los factores de actividad son categorías amplias; dos personas “moderadamente activas” pueden diferir en varios cientos de kcal.",
        "La ecuación no conoce tu composición corporal, así que las personas muy musculosas pueden quemar más de lo previsto.",
        "No está pensada para niños, el embarazo, la lactancia ni afecciones médicas que afecten al metabolismo.",
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
        {
          label: "Hall KD et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011.",
          url: "https://pubmed.ncbi.nlm.nih.gov/21872751/",
        },
        {
          label: "NHS. Obesidad: tratamiento (procura perder de 0,5 a 1 kg por semana).",
          url: "https://www.nhs.uk/conditions/obesity/treatment/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué diferencia hay entre el TDEE y la TMB?",
      answer:
        "La TMB es la energía que quemas en reposo absoluto. El TDEE le suma la digestión, el movimiento diario y el ejercicio, así que siempre es más alto que la TMB.",
    },
    {
      question: "¿Qué precisión tiene una calculadora de TDEE?",
      answer:
        "Es una estimación inicial razonable, que en adultos sanos suele tener un margen de error de un 10 % aproximadamente. Registrar tu ingesta y tu peso durante unas semanas te dice cuál es tu TDEE real.",
    },
    {
      question: "¿Debo comer mi TDEE para bajar de peso?",
      answer:
        "No. Comer tu TDEE mantiene tu peso. Para bajar de peso, come unas 500 kcal por debajo, pero no menos de 1.200 kcal al día si eres mujer ni de 1.500 kcal al día si eres hombre.",
    },
    {
      question: "¿Tengo que sumar a mi TDEE las calorías que quemo con el ejercicio?",
      answer:
        "No. El factor de actividad ya incluye tu ejercicio habitual. Volver a sumar las calorías del entrenamiento sería contarlas dos veces.",
    },
    {
      question: "¿Cada cuánto debo recalcular mi TDEE?",
      answer:
        "Cada vez que tu peso cambie 4–5 kg, o cuando tu actividad cambie mucho, por ejemplo con un trabajo o un plan de entrenamiento nuevos.",
    },
  ],
});
