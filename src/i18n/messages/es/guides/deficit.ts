import type { Facts } from "@/data/facts";
import type en from "../../en/guides/deficit";

// Long-form explainer and FAQ for /tools/calorie-deficit-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <tdee>…</tdee> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Qué te dice esta calculadora" },
    {
      type: "p",
      text: "Introduce tus datos, un peso objetivo y una fecha objetivo, y la calculadora te dice <b>cuántas calorías comer cada día</b> para conseguirlo, de qué tamaño es tu déficit diario y a qué ritmo puedes esperar perder peso. Si la fecha te obligara a comer menos de un mínimo seguro, te mantiene en ese mínimo y te muestra en su lugar la fecha que puedes alcanzar de forma realista.",
    },
    { type: "h2", text: "La fórmula" },
    {
      type: "p",
      text: "Primero, la calculadora estima tus calorías de mantenimiento (TDEE) con la ecuación de Mifflin–St Jeor y tu nivel de actividad, igual que la <tdee>calculadora de TDEE</tdee>. Después reparte la energía que necesitas perder entre los días que faltan hasta tu fecha objetivo:",
    },
    {
      type: "formula",
      items: [
        "Peso a perder (kg) = peso actual − peso objetivo",
        "Déficit diario = peso a perder × 7.700 kcal ÷ días hasta la fecha objetivo",
        "Calorías diarias = mantenimiento − déficit diario",
        "Nunca por debajo de 1.200 kcal (mujeres) o 1.500 kcal (hombres)",
      ],
    },
    {
      type: "p",
      text: "La cifra de 7.700 kcal por kg es la energía almacenada en aproximadamente un kilogramo de tejido corporal perdido durante una dieta. Es una regla práctica útil a corto plazo, pero la investigación sobre balance energético muestra que la pérdida de peso se ralentiza con el tiempo, porque un cuerpo más ligero quema menos. En la práctica, normalmente necesitarás algo más de tiempo del que sugieren las cuentas simples.",
    },
    { type: "h2", text: "Ejemplo práctico" },
    {
      type: "p",
      text: "Un hombre de 40 años que mide 180 cm, pesa 92 kg y es poco activo quiere llegar a 86 kg en 12 semanas (84 días). Su TMB es 10 × 92 + 6,25 × 180 − 5 × 40 + 5 = 1.850 kcal, así que su mantenimiento ronda 1.850 × 1,375 ≈ 2.544 kcal. Perder 6 kg requiere 6 × 7.700 = 46.200 kcal, es decir, 46.200 ÷ 84 ≈ <b>550 kcal al día</b>. Debería comer unas <b>1.994 kcal al día</b>, por encima del mínimo de 1.500 kcal para los hombres, con una pérdida esperada de unos 0,5 kg por semana.",
    },
    { type: "h2", text: "¿Qué ritmo es seguro?" },
    {
      type: "p",
      text: "El NHS recomienda procurar perder 0,5–1 kg por semana. Perder peso más rápido suele implicar más pérdida de músculo, más hambre y más probabilidades de recuperar el peso. La calculadora te avisa cuando tu plan supondría perder más del 1 % de tu peso corporal por semana, un ritmo difícil de mantener para la mayoría de la gente.",
    },
    {
      type: "p",
      text: "Además aplica un límite mínimo: <b>1.200 kcal al día para las mujeres y 1.500 kcal al día para los hombres</b>. Por debajo de estos niveles es muy difícil obtener suficientes proteínas, vitaminas y minerales, y las dietas muy bajas en calorías solo deberían seguirse bajo supervisión médica. Si tu fecha exigiera menos calorías, la calculadora te mantiene en ese mínimo y te muestra una fecha posterior y realista.",
    },
    { type: "h2", text: "Cómo conservar músculo mientras pierdes grasa" },
    {
      type: "ul",
      items: [
        "Come suficiente proteína, unos 1,6–2,4 g por kg de peso corporal; la <protein>calculadora de proteínas</protein> te da tu cifra.",
        "Sigue entrenando fuerza 2–4 veces por semana para que tu cuerpo tenga un motivo para conservar el músculo.",
        "Usa la <macro>calculadora de macros</macro> para repartir tus calorías diarias en proteína, carbohidratos y grasa.",
        "Duerme bien y mantente activo en tu día a día; caminar suma a tu déficit sin aumentar mucho el hambre.",
      ],
    },
    { type: "h2", text: "Si lo que quieres es ganar peso" },
    {
      type: "p",
      text: "Si tu peso objetivo está por encima de tu peso actual, esta calculadora no es la herramienta adecuada. Usa la <calorie>calculadora de calorías</calorie>, que también muestra un objetivo para ganar músculo.",
    },
    { type: "h2", text: "Limitaciones" },
    {
      type: "ul",
      items: [
        "Las calorías de mantenimiento son una estimación y pueden desviarse un 10 % o más; revisa tu progreso cada 2–3 semanas y ajusta en 100–200 kcal.",
        "El peso en la báscula varía de un día a otro por el agua, la sal y la comida en tu aparato digestivo, así que juzga tu progreso por promedios semanales.",
        "No es adecuada para niños, adolescentes, el embarazo, la lactancia ni para personas con antecedentes de trastornos de la conducta alimentaria.",
        "Esto es información general, no consejo médico. Si tienes alguna afección de salud o tomas medicación, habla con un médico o un dietista-nutricionista antes de empezar una dieta.",
      ],
    },
    {
      type: "sources",
      sources: [
        {
          label: "Hall KD et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011.",
          url: "https://pubmed.ncbi.nlm.nih.gov/21872751/",
        },
        {
          label: "NHS. Obesidad: tratamiento (procura perder de 0,5 a 1 kg por semana).",
          url: "https://www.nhs.uk/conditions/obesity/treatment/",
        },
        {
          label: "Mifflin MD et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990.",
          url: "https://pubmed.ncbi.nlm.nih.gov/2305711/",
        },
        {
          label: "Helms ER et al. A systematic review of dietary protein during caloric restriction in resistance trained lean athletes. Int J Sport Nutr Exerc Metab, 2014.",
          url: "https://pubmed.ncbi.nlm.nih.gov/24092765/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿De qué tamaño debe ser mi déficit calórico?",
      answer:
        "Un déficit de unas 500 kcal al día es un punto de partida habitual y al principio supone perder unos 0,5 kg por semana. Los déficits más grandes son más difíciles de mantener y aumentan la pérdida de músculo.",
    },
    {
      question: "¿Cuál es el mínimo de calorías que debo comer?",
      answer:
        "No bajes de 1.200 kcal al día si eres mujer ni de 1.500 kcal al día si eres hombre sin supervisión médica. La calculadora nunca sugiere menos.",
    },
    {
      question: "¿Por qué la calculadora cambia mi fecha objetivo?",
      answer:
        "Si llegar a tu objetivo en tu fecha te obligara a comer por debajo del mínimo seguro, te mantiene en ese mínimo y te muestra en su lugar la fecha que puedes alcanzar de forma realista.",
    },
    {
      question: "¿Es realista perder 1 kg por semana?",
      answer:
        "Para las personas que tienen más peso que perder puede serlo, al menos al principio. El NHS recomienda 0,5–1 kg por semana; para las personas más ligeras, acercarse a 0,5 kg suele ser más sostenible.",
    },
    {
      question: "¿Por qué pierdo peso más despacio de lo que dice la calculadora?",
      answer:
        "Tu cuerpo quema un poco menos a medida que pesas menos, las estimaciones de mantenimiento pueden fallar y la retención de líquidos oculta la pérdida de grasa. Revisa tu ingesta y compara promedios semanales durante 2–3 semanas antes de ajustar.",
    },
  ],
});
