import type { Facts } from "@/data/facts";
import type en from "../../en/guides/idealWeight";

// Long-form explainer and FAQ for /tools/ideal-weight-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <bmi>…</bmi> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Qué significa “peso ideal”" },
    {
      type: "p",
      text: "No existe un único peso perfecto para cada altura. Esta calculadora te ofrece dos perspectivas. La primera es el <b>rango de peso saludable</b>: los pesos que mantienen tu índice de masa corporal entre 18,5 y 24,9, la franja que la Organización Mundial de la Salud asocia con el menor riesgo medio para la salud en adultos. La segunda son tres <b>fórmulas clásicas de peso corporal ideal</b> (Devine, Robinson y Miller), que dan un único valor de referencia según tu altura y sexo.",
    },
    { type: "h2", text: "Las fórmulas" },
    {
      type: "p",
      text: "Las tres fórmulas parten de un peso base a 5 pies (152,4 cm) y suman una cantidad fija por cada pulgada por encima. Se desarrollaron en las décadas de 1970 y 1980, sobre todo para ayudar a los profesionales sanitarios a dosificar medicamentos, no como objetivos para bajar de peso.",
    },
    {
      type: "formula",
      items: [
        "Devine (hombres):   50 kg   + 2,3 kg por pulgada por encima de 5 ft",
        "Devine (mujeres):   45,5 kg + 2,3 kg por pulgada por encima de 5 ft",
        "Robinson (hombres): 52 kg   + 1,9 kg por pulgada por encima de 5 ft",
        "Robinson (mujeres): 49 kg   + 1,7 kg por pulgada por encima de 5 ft",
        "Miller (hombres):   56,2 kg + 1,41 kg por pulgada por encima de 5 ft",
        "Miller (mujeres):   53,1 kg + 1,36 kg por pulgada por encima de 5 ft",
        "Rango saludable:    18,5 × altura (m)²  a  24,9 × altura (m)²",
      ],
    },
    { type: "h2", text: "Ejemplo práctico" },
    {
      type: "p",
      text: "Un hombre que mide 178 cm está 10 pulgadas por encima de 5 ft (178 − 152,4 = 25,6 cm ≈ 10 in). Devine da 50 + 2,3 × 10 = <b>73 kg</b>, Robinson 52 + 1,9 × 10 = <b>71 kg</b> y Miller 56,2 + 1,41 × 10 ≈ <b>70 kg</b>. Su rango de IMC saludable va de 18,5 × 1,78² a 24,9 × 1,78², unos <b>59–79 kg</b>. Las fórmulas se agrupan cerca del centro de ese rango, algo habitual.",
    },
    { type: "h2", text: "Cómo usar el rango para bajar de peso" },
    {
      type: "p",
      text: "Si estás por encima del rango, no hace falta que apuntes a las cifras de las fórmulas de inmediato. Un primer objetivo de perder un 5–10 % de tu peso actual es realista y ya aporta beneficios medibles para la salud a muchas personas. Fija un objetivo diario con la <calorie>calculadora de calorías</calorie>, pierde unos 0,5–1 kg por semana y luego vuelve a evaluar.",
    },
    { type: "h2", text: "Cómo usar el rango para ganar músculo" },
    {
      type: "p",
      text: "Si entrenas con pesas, puede que acabes pesando más de lo que sugiere cualquiera de las fórmulas sin dejar de estar delgado y sano, porque el músculo es denso. En ese caso, mide tu progreso por la fuerza, la medida de cintura y cómo te ves y te sientes, y usa la <macro>calculadora de macros</macro> para mantener alta la proteína.",
    },
    { type: "h2", text: "Por qué no coinciden las fórmulas" },
    {
      type: "p",
      text: "Cada fórmula se ajustó a datos distintos, y ninguna tiene en cuenta la complexión, el músculo, la edad ni el origen étnico. La diferencia entre ellas recuerda que un peso saludable es un rango. Una revisión que rastreó su origen concluyó que proceden de la dosificación de fármacos y no de estudios sobre resultados de salud, y por eso se muestra primero el rango basado en el IMC.",
    },
    { type: "h2", text: "Limitaciones" },
    {
      type: "ul",
      items: [
        "Por debajo de 5 ft (152,4 cm) las fórmulas simplemente devuelven su valor base, así que son menos útiles para adultos más bajos; guíate por el rango saludable.",
        "No tienen en cuenta la masa muscular, la estructura ósea ni la edad.",
        "El rango basado en el IMC tiene las mismas limitaciones que el propio IMC; consulta la <bmi>calculadora de IMC</bmi> para más detalles.",
        "No es adecuada para niños, adolescentes ni durante el embarazo.",
        "Esto es información general, no consejo médico. Si tienes bajo peso, alguna afección médica o antecedentes de trastornos de la conducta alimentaria, fija cualquier objetivo de peso con un médico o un dietista-nutricionista.",
      ],
    },
    {
      type: "sources",
      sources: [
        {
          label: "Pai MP, Paloucek FP. The origin of the “ideal” body weight equations. Ann Pharmacother, 2000.",
          url: "https://pubmed.ncbi.nlm.nih.gov/10981254/",
        },
        {
          label: "Robinson JD et al. Determination of ideal body weight for drug dosage calculations. Am J Hosp Pharm, 1983.",
          url: "https://pubmed.ncbi.nlm.nih.gov/6869387/",
        },
        {
          label: "Organización Mundial de la Salud. Obesidad y sobrepeso: nota descriptiva.",
          url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cómo se calcula el peso ideal?",
      answer:
        "Esta herramienta muestra el rango de peso que mantiene tu IMC entre 18,5 y 24,9, además de tres fórmulas clínicas (Devine, Robinson y Miller) basadas en la altura y el sexo.",
    },
    {
      question: "¿Por qué las fórmulas dan cifras distintas?",
      answer:
        "Cada una se ajustó a datos diferentes. La diferencia entre ellas demuestra que un peso saludable es un rango, no un único punto.",
    },
    {
      question: "¿El peso ideal depende de la edad?",
      answer:
        "Ninguna de las fórmulas usa la edad. Los rangos de peso saludable para personas mayores pueden ser algo distintos, así que comenta tus objetivos con tu médico si tienes más de 65 años.",
    },
    {
      question: "¿El peso ideal es distinto para hombres y mujeres?",
      answer:
        "Sí. Con la misma altura, las fórmulas dan a los hombres un valor más alto, lo que refleja diferencias medias en músculo y complexión. El rango de IMC es el mismo para ambos.",
    },
    {
      question: "¿Y si estoy lejos de mi rango ideal?",
      answer:
        "Empieza con un objetivo más pequeño, como perder un 5–10 % de tu peso actual, a un ritmo de unos 0,5–1 kg por semana. Los cambios pequeños y constantes son más fáciles de mantener.",
    },
  ],
});
