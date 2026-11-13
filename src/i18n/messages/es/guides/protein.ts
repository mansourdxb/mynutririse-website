import type { Facts } from "@/data/facts";
import type en from "../../en/guides/protein";

// Long-form explainer and FAQ for /tools/protein-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <macro>…</macro> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Qué te dice esta calculadora" },
    {
      type: "p",
      text: "Esta calculadora te da un <b>rango diario de proteína en gramos</b> según tu peso corporal y tu objetivo, y luego lo reparte entre tus comidas. Las necesidades de proteína se expresan mejor por kilogramo de peso corporal, porque una mujer de 55 kg y un hombre de 95 kg necesitan cantidades muy distintas aunque coman las mismas calorías.",
    },
    { type: "h2", text: "Los rangos y de dónde salen" },
    {
      type: "table",
      head: ["Objetivo", "Gramos por kg de peso corporal al día", "Basado en"],
      rows: [
        ["Salud general, poco ejercicio", "0,8–1,0", "Aporte dietético recomendado (0,8 g/kg)"],
        ["Estilo de vida activo", "1,2–1,6", "Recomendaciones de nutrición deportiva para quienes hacen ejercicio con regularidad"],
        ["Ganar músculo", "1,6–2,2", "Metaanálisis de estudios de entrenamiento de fuerza"],
        ["Perder grasa y conservar músculo", "1,6–2,4", "Estudios en personas que entrenan fuerza y siguen un déficit calórico"],
      ],
    },
    {
      type: "p",
      text: "El aporte recomendado de 0,8 g/kg está pensado para cubrir las necesidades básicas de casi todos los adultos sanos; es un mínimo, no la cantidad óptima para las personas activas. La International Society of Sports Nutrition recomienda 1,4–2,0 g/kg para la mayoría de las personas que hacen ejercicio. Un metaanálisis de 2018 concluyó que el beneficio de la proteína para ganar músculo se estabiliza en torno a <b>1,6 g/kg</b>, aunque algunas personas siguen beneficiándose hasta unos 2,2 g/kg. Con déficit calórico, una ingesta más alta ayuda a conservar músculo, y por eso el rango para perder grasa llega más arriba.",
    },
    {
      type: "formula",
      items: [
        "Proteína diaria (g) = peso corporal (kg) × gramos por kg según tu objetivo",
        "Por comida (g)      = proteína diaria ÷ número de comidas",
      ],
    },
    { type: "h2", text: "Ejemplo práctico" },
    {
      type: "p",
      text: "Un hombre de 75 kg que levanta pesas y quiere ganar músculo: de 75 × 1,6 = <b>120 g</b> a 75 × 2,2 = <b>165 g</b> al día. En cuatro comidas son unos 30–41 g por comida: por ejemplo, huevos y labneh en el desayuno, un plato de shawarma de pollo en el almuerzo, yogur griego como tentempié y pescado a la plancha con lentejas en la cena.",
    },
    { type: "h2", text: "Repártela a lo largo del día" },
    {
      type: "p",
      text: "Las recomendaciones de nutrición deportiva sugieren unos 0,25 g por kg de peso corporal, o aproximadamente 20–40 g de proteína por comida, repartidos de forma uniforme cada 3–4 horas. La mayoría de la gente come poca proteína en el desayuno y mucha en la cena; adelantar una parte es una mejora fácil.",
    },
    { type: "h2", text: "Proteína para bajar de peso" },
    {
      type: "p",
      text: "Cuando comes menos, tu cuerpo puede descomponer músculo además de grasa. Mantener alta la proteína y seguir entrenando fuerza hace que más de lo que pierdas sea grasa. La proteína es además el macronutriente que más sacia, lo que ayuda con el hambre. Fija primero tus calorías con la <calorie>calculadora de calorías</calorie> o la <deficit>calculadora de déficit calórico</deficit>, y después asegúrate de que tu proteína llegue al rango que se muestra aquí.",
    },
    { type: "h2", text: "Proteína para ganar músculo" },
    {
      type: "p",
      text: "La proteína favorece el crecimiento muscular, pero no sustituye al entrenamiento. Los mejores resultados llegan con entrenamiento de fuerza progresivo, suficientes calorías totales (un pequeño superávit) y buen descanso. Una vez que llegas a unos 1,6 g/kg, las calorías extra procedentes de los carbohidratos suelen alimentar mejor tu entrenamiento que más proteína. Para ver cómo encaja la proteína con los carbohidratos y la grasa, usa la <macro>calculadora de macros</macro>.",
    },
    { type: "h2", text: "Buenas fuentes de proteína" },
    {
      type: "ul",
      items: [
        "De origen animal: pollo, pavo, ternera y cordero magros, pescado, huevos, yogur griego, labneh, requesón.",
        "De origen vegetal: lentejas, garbanzos, ful medames, alubias, tofu, edamame. Combinar distintas fuentes vegetales a lo largo del día cubre todos los aminoácidos esenciales.",
        "Muchos platos tradicionales son buenas fuentes de proteína, por ejemplo los kebabs a la parrilla, el shish tawook o la sopa de lentejas; nuestra guía para <macroguide>controlar tus macros con platos de tu cultura</macroguide> te enseña a registrarlos.",
      ],
    },
    { type: "h2", text: "Limitaciones" },
    {
      type: "ul",
      items: [
        "Si tienes mucha grasa corporal, usar tu peso total puede sobrestimar tus necesidades; basar el cálculo en un peso objetivo realista da una cifra más sensata.",
        "Las personas con enfermedad renal no deben aumentar la proteína sin consejo médico.",
        "Las necesidades son mayores durante el embarazo y la lactancia, y son distintas en niños y personas mayores.",
        "Esto es información general, no consejo médico. Habla con un médico o un dietista-nutricionista para recibir orientación personalizada.",
      ],
    },
    {
      type: "sources",
      sources: [
        {
          label: "Jäger R et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017.",
          url: "https://pubmed.ncbi.nlm.nih.gov/28642676/",
        },
        {
          label: "Morton RW et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. Br J Sports Med, 2018.",
          url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
        },
        {
          label: "Helms ER et al. A systematic review of dietary protein during caloric restriction in resistance trained lean athletes. Int J Sport Nutr Exerc Metab, 2014.",
          url: "https://pubmed.ncbi.nlm.nih.gov/24092765/",
        },
        {
          label: "Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids. National Academies Press, 2005.",
          url: "https://nap.nationalacademies.org/catalog/10490",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuánta proteína necesito al día?",
      answer:
        "Al menos 0,8 g por kg de peso corporal si eres un adulto sano que hace poco ejercicio, 1,2–1,6 g/kg si eres activo y unos 1,6–2,2 g/kg si intentas ganar músculo.",
    },
    {
      question: "¿Cuánta proteína necesito para ganar músculo?",
      answer:
        "La investigación sugiere que unos 1,6 g por kg de peso corporal al día bastan para la mayoría de la gente, y algunas personas se benefician hasta unos 2,2 g/kg, siempre junto con entrenamiento de fuerza regular.",
    },
    {
      question: "¿Debo comer más proteína cuando estoy bajando de peso?",
      answer:
        "Sí. Más proteína (unos 1,6–2,4 g/kg) junto con entrenamiento de fuerza te ayuda a conservar músculo con déficit calórico y hace más fácil controlar el hambre.",
    },
    {
      question: "¿Puedo comer demasiada proteína?",
      answer:
        "En adultos sanos, las ingestas dentro de los rangos que se muestran aquí se consideran seguras. Las personas con enfermedad renal u otras afecciones médicas deben seguir el consejo de su médico.",
    },
    {
      question: "¿Cuánta proteína puedo absorber en una comida?",
      answer:
        "Tu cuerpo digiere toda la proteína que comes; repartir 20–40 g en 3–5 comidas es simplemente una forma práctica de favorecer el músculo a lo largo del día.",
    },
    {
      question: "¿Puedo obtener suficiente proteína con una dieta vegetal?",
      answer:
        "Sí. Combina legumbres, soja, cereales, frutos secos y semillas a lo largo del día, y apunta a la parte alta de tu rango, porque las proteínas vegetales se digieren algo peor.",
    },
  ],
});
