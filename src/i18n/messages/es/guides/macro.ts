import type { Facts } from "@/data/facts";
import type en from "../../en/guides/macro";

// Long-form explainer and FAQ for /tools/macro-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <calorie>…</calorie> are listed in LINK_TAGS there; keep them when translating.
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Qué te dice esta calculadora" },
    {
      type: "p",
      text: "Los macronutrientes, o “macros”, son los tres nutrientes que aportan energía: proteína, carbohidratos y grasa. Esta calculadora toma tu objetivo diario de calorías y lo reparte en <b>gramos de cada macro</b> según el estilo de alimentación que elijas. Las calorías deciden si bajas, mantienes o subes de peso; el reparto influye en cuánta saciedad sientes, en cómo rindes al entrenar y en cuánto músculo conservas.",
    },
    { type: "h2", text: "La fórmula" },
    {
      type: "p",
      text: "Cada gramo de proteína y de carbohidratos aporta unas 4 kcal, y cada gramo de grasa unas 9 kcal. La calculadora multiplica tus calorías por cada porcentaje y divide entre esos valores energéticos:",
    },
    {
      type: "formula",
      items: [
        "Proteína (g)      = calorías × % de proteína ÷ 4",
        "Carbohidratos (g) = calorías × % de carbohidratos ÷ 4",
        "Grasa (g)         = calorías × % de grasa ÷ 9",
      ],
    },
    {
      type: "table",
      head: ["Estilo", "Proteína", "Carbohidratos", "Grasa", "Ideal para"],
      rows: [
        ["Equilibrado", "30 %", "40 %", "30 %", "La mayoría de la gente, salud general"],
        ["Alto en proteína", "40 %", "30 %", "30 %", "Perder grasa y ganar músculo"],
        ["Keto / bajo en carbos", "25 %", "5 %", "70 %", "Quienes prefieren muy pocos carbohidratos"],
        ["Resistencia", "25 %", "50 %", "25 %", "Corredores, ciclistas, mucho volumen de entrenamiento"],
      ],
    },
    { type: "h2", text: "Ejemplo práctico" },
    {
      type: "p",
      text: "Con <b>2.000 kcal</b> y el reparto equilibrado: proteína 2.000 × 30 % ÷ 4 = <b>150 g</b>, carbohidratos 2.000 × 40 % ÷ 4 = <b>200 g</b>, grasa 2.000 × 30 % ÷ 9 = <b>67 g</b>. Si cambias al reparto alto en proteína con las mismas calorías, obtienes 200 g de proteína, 150 g de carbohidratos y 67 g de grasa.",
    },
    { type: "h2", text: "Macros para perder grasa" },
    {
      type: "p",
      text: "Con déficit calórico, la proteína es el macro que hay que proteger. La investigación en personas delgadas que entrenan fuerza sugiere que más proteína ayuda a conservar músculo durante la dieta, y además es el macro que más sacia, lo que hace más fácil mantener el déficit. Elige el reparto alto en proteína, mantén la grasa en un nivel cómodo (una dieta muy baja en grasa es difícil de sostener) y deja que los carbohidratos completen el resto.",
    },
    {
      type: "p",
      text: "Una comprobación útil: la proteína debería rondar los 1,6–2,4 g por kg de peso corporal cuando estás perdiendo grasa y entrenando. Si tu reparto te da mucho menos, sube el porcentaje de proteína.",
    },
    { type: "h2", text: "Macros para ganar músculo" },
    {
      type: "p",
      text: "Para ganar músculo, un metaanálisis de estudios de entrenamiento de fuerza concluyó que los beneficios de la proteína se estabilizan en torno a <b>1,6 g por kg de peso corporal al día</b>, y algunas personas se benefician hasta unos 2,2 g/kg. Por encima de esa cifra, los carbohidratos extra alimentan mejor el entrenamiento que la proteína extra. El reparto equilibrado o el alto en proteína con un pequeño superávit calórico sirve para la mayoría de la gente.",
    },
    { type: "h2", text: "Mantenerte dentro de rangos saludables" },
    {
      type: "p",
      text: "Las Ingestas Dietéticas de Referencia de EE. UU. fijan para adultos unos rangos aceptables del 10–35 % de las calorías procedentes de la proteína, el 45–65 % de los carbohidratos y el 20–35 % de la grasa. El reparto equilibrado se acerca a estos valores. El estilo keto queda fuera de ellos a propósito, así que no es para todo el mundo; consulta antes con un médico si tienes diabetes o enfermedad renal, o si tomas medicación.",
    },
    { type: "h2", text: "Cómo cumplir tus macros con comida real" },
    {
      type: "ul",
      items: [
        "Construye cada comida en torno a una fuente de proteína: pollo, pescado, huevos, yogur griego, lentejas, garbanzos o cordero magro.",
        "Deja que los carbohidratos sigan tu actividad: más en los días de entrenamiento y menos en los de descanso.",
        "Trata la grasa como lo que queda; el aceite de oliva, los frutos secos y el tahini suman rápido.",
        "Quedarte a unos 10 g de cada objetivo ya es un buen día; la constancia a lo largo de las semanas importa más que la precisión.",
        "Los platos combinados como el biryani, el mandi o el tajín también se pueden registrar; nuestra guía para <macroguide>controlar tus macros con platos de tu cultura</macroguide> te enseña cómo.",
      ],
    },
    { type: "h2", text: "Limitaciones" },
    {
      type: "ul",
      items: [
        "El reparto solo es tan bueno como las calorías que divide. Si aún no conoces tu objetivo, empieza por la <calorie>calculadora de calorías</calorie>.",
        "Los porcentajes no tienen en cuenta el tamaño corporal: una persona pequeña con un plan alto en calorías puede recibir más proteína de la necesaria, y una persona grande con un plan bajo en calorías, demasiado poca. Comprueba los gramos por kg de peso corporal.",
        "Esto es información general, no consejo médico. Las personas con enfermedad renal, diabetes u otras afecciones, y cualquier persona embarazada o en periodo de lactancia, deben pedir consejo personalizado a un médico o a un dietista-nutricionista.",
      ],
    },
    {
      type: "sources",
      sources: [
        {
          label: "Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids. National Academies Press, 2005.",
          url: "https://nap.nationalacademies.org/catalog/10490",
        },
        {
          label: "Morton RW et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. Br J Sports Med, 2018.",
          url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
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
      question: "¿Qué reparto de macros es mejor para bajar de peso?",
      answer:
        "Un reparto más alto en proteína (en torno al 35–40 % de proteína) ayuda a conservar músculo y te mantiene saciado con déficit. Lo que impulsa la pérdida de peso es el propio déficit calórico, no el reparto exacto.",
    },
    {
      question: "¿Cuánta proteína necesito para ganar músculo?",
      answer:
        "Unos 1,6 g por kg de peso corporal al día bastan para la mayoría de la gente, y hasta unos 2,2 g/kg pueden ayudar a algunas personas. Repártela en 3–4 comidas.",
    },
    {
      question: "¿Importan más los macros que las calorías?",
      answer:
        "Las calorías deciden si tu peso cambia; los macros influyen en qué parte de ese cambio es grasa o músculo y en cómo te sientes. Fija primero las calorías y después el reparto.",
    },
    {
      question: "¿Es mejor la dieta keto para perder grasa?",
      answer:
        "No, si las calorías y la proteína son iguales. Las dietas bajas en carbohidratos pueden venir bien a quienes las siguen con más facilidad, pero no son automáticamente más eficaces ni adecuadas para todo el mundo.",
    },
    {
      question: "¿Puedo controlar mis macros con comida halal o de mi cultura?",
      answer: `Sí. Los platos combinados como el biryani o el tajín tienen perfiles de macros conocidos, y MyNutriRise cubre ${f.CUISINES} cocinas del mundo con la proteína, los carbohidratos y la grasa por ración.`,
    },
  ],
});
