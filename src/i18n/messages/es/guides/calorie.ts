import type { Facts } from "@/data/facts";
import type en from "../../en/guides/calorie";

// Long-form explainer and FAQ for /tools/calorie-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <macro>…</macro> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Qué te dice esta calculadora" },
    {
      type: "p",
      text: "La calculadora estima tus <b>calorías de mantenimiento</b>: la energía que quemas en un día normal, de modo que si comes esa cantidad tu peso se mantiene más o menos estable. A partir de ahí te muestra tres objetivos: un déficit moderado para bajar de peso, el mantenimiento y un pequeño superávit para ganar músculo. Todas las cifras son estimaciones basadas en promedios, así que tómalas como un punto de partida que irás ajustando, no como una prescripción.",
    },
    { type: "h2", text: "La fórmula: Mifflin–St Jeor más un factor de actividad" },
    {
      type: "p",
      text: "Primero, la calculadora estima el gasto energético en reposo (tasa metabólica basal, o TMB) con la <b>ecuación de Mifflin–St Jeor</b>. Una revisión de ecuaciones predictivas de 2005 concluyó que es la más fiable para adultos sanos: se queda a menos de un 10 % del valor medido en más personas que las demás ecuaciones con las que se comparó.",
    },
    {
      type: "formula",
      items: [
        "Hombres: TMB = 10 × peso (kg) + 6,25 × altura (cm) − 5 × edad + 5",
        "Mujeres: TMB = 10 × peso (kg) + 6,25 × altura (cm) − 5 × edad − 161",
        "Mantenimiento (GET) = TMB × factor de actividad",
      ],
    },
    {
      type: "p",
      text: "La TMB solo cubre la energía que quemas en reposo. Para tener en cuenta el trabajo, las caminatas y el entrenamiento, se multiplica por un factor de actividad que da tu gasto energético total diario (GET):",
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
    {
      type: "p",
      text: "La mayoría de la gente sobrestima su actividad. Si dudas entre dos niveles, elige el más bajo y ajústalo más adelante.",
    },
    { type: "h2", text: "Ejemplo práctico" },
    {
      type: "p",
      text: "Un hombre de 30 años que mide 175 cm, pesa 75 kg y entrena 3–5 días a la semana: TMB = 10 × 75 + 6,25 × 175 − 5 × 30 + 5 = <b>1.699 kcal</b>. Multiplicado por 1,55, su mantenimiento ronda las <b>2.633 kcal al día</b>. La calculadora le sugeriría unas 2.133 kcal para bajar de peso y unas 2.933 kcal para ganar músculo.",
    },
    { type: "h2", text: "Cómo usar tu cifra para bajar de peso" },
    {
      type: "p",
      text: "El objetivo para bajar de peso resta 500 kcal al mantenimiento. A corto plazo eso equivale a unos 0,5 kg por semana, dentro de la recomendación del NHS británico de 0,5–1 kg por semana. Con los meses, la pérdida suele ralentizarse: a medida que pesas menos quemas un poco menos, y por eso la investigación sobre balance energético muestra que la regla simple de “7.700 kcal por kg” exagera los resultados a largo plazo. Cuenta con recalcular cada 4–5 kg.",
    },
    {
      type: "p",
      text: "La calculadora nunca sugiere menos de <b>1.200 kcal al día para las mujeres ni 1.500 kcal al día para los hombres</b>, aunque la resta diera una cifra más baja. Por debajo de estos niveles es difícil obtener suficientes proteínas, vitaminas y minerales, y solo debería hacerse bajo supervisión médica.",
    },
    {
      type: "ul",
      items: [
        "Mantén alta la proteína (consulta la <macro>calculadora de macros</macro>) para que más de lo que pierdas sea grasa y no músculo.",
        "Pésate varias veces a la semana y compara promedios semanales, no días sueltos.",
        "Si tu promedio no se ha movido tras 2–3 semanas de registro preciso, reduce la ingesta en 100–200 kcal.",
      ],
    },
    { type: "h2", text: "Cómo usar tu cifra para ganar músculo" },
    {
      type: "p",
      text: "El objetivo para ganar músculo suma 300 kcal al mantenimiento. Un pequeño superávit, combinado con entrenamiento de fuerza progresivo y suficiente proteína, favorece el crecimiento muscular y limita el aumento de grasa. Si estás empezando, intenta ganar alrededor de un 0,25–0,5 % de tu peso corporal al mes; si la báscula sube mucho más rápido, lo más probable es que casi todo el extra sea grasa, así que recorta 100–200 kcal.",
    },
    { type: "h2", text: "Calorías durante el Ramadán y el ayuno intermitente" },
    {
      type: "p",
      text: "El ayuno cambia <em>cuándo</em> comes, no cuánta energía necesita tu cuerpo. Durante el Ramadán, reparte tu objetivo diario entre el suhoor y el iftar: basa el suhoor en proteína y carbohidratos de digestión lenta, rompe el ayuno con agua y dátiles, y haz que el iftar sea equilibrado en lugar de un único plato enorme. La misma lógica se aplica al 16:8; nuestra <ifguide>guía del 16:8 para principiantes</ifguide> lo explica en detalle.",
    },
    { type: "h2", text: "Limitaciones" },
    {
      type: "ul",
      items: [
        "Las ecuaciones describen promedios. Tu mantenimiento real puede variar un 10 % o más por la genética, la masa muscular, el sueño y el movimiento diario.",
        "La fórmula no conoce tu composición corporal. Las personas muy musculosas suelen quemar más de lo previsto, y en personas con mucha grasa corporal puede sobrestimarse.",
        "No está pensada para niños, mujeres embarazadas o en periodo de lactancia, ni para personas con afecciones médicas que afecten al metabolismo.",
        "Esto es información general, no consejo médico. Si tienes alguna afección de salud, tomas medicación o tienes antecedentes de trastornos de la conducta alimentaria, habla con un médico o un dietista-nutricionista antes de cambiar tu forma de comer.",
      ],
    },
    {
      type: "p",
      text: "Siguiente paso: convierte tu objetivo en proteína, carbohidratos y grasa con la <macro>calculadora de macros</macro>, o consulta solo la parte en reposo del cálculo con la <bmr>calculadora de TMB</bmr>.",
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
      question: "¿Cuántas calorías debo comer para bajar de peso?",
      answer:
        "Empieza unas 500 kcal por debajo de tus calorías de mantenimiento, lo que al principio supone perder unos 0,5 kg por semana. No bajes de 1.200 kcal al día si eres mujer ni de 1.500 kcal al día si eres hombre sin supervisión médica.",
    },
    {
      question: "¿Qué fórmula usa esta calculadora de calorías?",
      answer:
        "La ecuación de Mifflin–St Jeor para la energía en reposo, multiplicada por un factor de actividad entre 1,2 (sedentario) y 1,9 (extremadamente activo) para estimar el gasto energético total diario.",
    },
    {
      question: "¿Qué precisión tiene una calculadora de calorías?",
      answer:
        "En la mayoría de los adultos sanos, la ecuación se queda a menos de un 10 % aproximadamente del gasto en reposo medido, pero cada persona es distinta. Registra tu ingesta y tu peso durante 2–3 semanas y ajusta en 100–200 kcal si tu tendencia no va hacia tu objetivo.",
    },
    {
      question: "¿Por qué se ha ralentizado mi pérdida de peso?",
      answer:
        "Al bajar de peso, tu cuerpo quema algo menos de energía, así que la misma ingesta crea un déficit menor. Recalcula con tu nuevo peso cada 4–5 kg y comprueba que las raciones no hayan ido aumentando.",
    },
    {
      question: "¿Cuántas calorías debo comer para ganar músculo?",
      answer:
        "Un pequeño superávit de unas 300 kcal por encima del mantenimiento, combinado con entrenamiento de fuerza y suficiente proteína, favorece la ganancia muscular y limita el aumento de grasa.",
    },
    {
      question: "¿Cambian mis necesidades de calorías durante el Ramadán?",
      answer:
        "Tus necesidades diarias de energía siguen siendo más o menos las mismas; solo cambia la ventana de alimentación. Intenta alcanzar tu objetivo habitual entre el suhoor y el iftar, con proteína y líquidos en ambas comidas.",
    },
  ],
});
