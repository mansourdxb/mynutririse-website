import type { Facts } from "@/data/facts";
import type en from "../../en/guides/bodyFat";

// Long-form explainer and FAQ for /tools/body-fat-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <bmi>…</bmi> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Qué te dice esta calculadora" },
    {
      type: "p",
      text: "Esta calculadora estima tu <b>porcentaje de grasa corporal</b> a partir de unas pocas medidas con cinta métrica, usando el método de circunferencias de la Marina de EE. UU. A diferencia del IMC, que solo compara el peso con la altura, el porcentaje de grasa corporal te dice qué parte de tu peso es grasa y qué parte es todo lo demás (músculo, huesos, órganos y agua). Si añades tu peso, también muestra tu masa grasa y tu masa magra en kilogramos.",
    },
    { type: "h2", text: "La fórmula (método de la Marina de EE. UU.)" },
    {
      type: "p",
      text: "Hodgdon y Beckett desarrollaron el método en el Naval Health Research Center en 1984 para estimar la grasa corporal rápidamente y sin equipo de laboratorio. Usa el logaritmo de tus medidas, así que te conviene usar la calculadora en lugar de hacerlo a mano:",
    },
    {
      type: "formula",
      items: [
        "Hombres: % de grasa = 495 ÷ (1,0324 − 0,19077 × log10(cintura − cuello) + 0,15456 × log10(altura)) − 450",
        "Mujeres: % de grasa = 495 ÷ (1,29579 − 0,35004 × log10(cintura + cadera − cuello) + 0,221 × log10(altura)) − 450",
        "Todas las medidas en cm",
      ],
    },
    { type: "h2", text: "Cómo medirte" },
    {
      type: "ul",
      items: [
        "Usa una cinta flexible, mide sobre la piel desnuda, mantente de pie y relajado y no aprietes la cinta.",
        "<b>Cuello:</b> justo debajo de la laringe (la nuez), con la cinta ligeramente inclinada hacia abajo por delante.",
        "<b>Cintura, hombres:</b> en horizontal a la altura del ombligo, al final de una espiración normal.",
        "<b>Cintura, mujeres:</b> en el punto más estrecho de la cintura, normalmente por encima del ombligo.",
        "<b>Caderas, mujeres:</b> en el punto más ancho de los glúteos.",
        "Mídete siempre a la misma hora del día, idealmente por la mañana, y calcula el promedio de dos o tres mediciones.",
      ],
    },
    { type: "h2", text: "Ejemplo práctico" },
    {
      type: "p",
      text: "Un hombre que mide 178 cm, con un cuello de 38 cm y una cintura de 86 cm: cintura − cuello = 48 cm. La fórmula da alrededor de un <b>17 %</b> de grasa corporal, dentro del rango “en forma” para los hombres. Si pesa 80 kg, eso supone unos 14 kg de masa grasa y 66 kg de masa magra.",
    },
    { type: "h2", text: "Qué significan las categorías" },
    {
      type: "table",
      head: ["Categoría", "Mujeres", "Hombres"],
      rows: [
        ["Grasa esencial", "10–13 %", "2–5 %"],
        ["Deportistas", "14–20 %", "6–13 %"],
        ["En forma", "21–24 %", "14–17 %"],
        ["Promedio", "25–31 %", "18–24 %"],
        ["Obesidad", "32 % o más", "25 % o más"],
      ],
    },
    {
      type: "p",
      text: "Estos rangos proceden del American Council on Exercise. Las mujeres tienen de forma natural más grasa esencial que los hombres. Tener muy poca grasa corporal no es un objetivo de salud: bajar del rango esencial puede alterar las hormonas y, en las mujeres, el ciclo menstrual.",
    },
    { type: "h2", text: "Cómo usarlo para bajar de peso y ganar músculo" },
    {
      type: "p",
      text: "El porcentaje de grasa corporal es más útil como tendencia. Cuando bajas de peso, te interesa que el porcentaje baje, lo que demuestra que estás perdiendo sobre todo grasa y no músculo; mantén alta la proteína con la <protein>calculadora de proteínas</protein> y sigue entrenando fuerza. Cuando ganas músculo, tu peso e incluso tu <bmi>IMC</bmi> pueden subir mientras tu grasa corporal se mantiene igual o baja, una buena señal que la báscula por sí sola no detectaría.",
    },
    {
      type: "p",
      text: "Mídete cada 2–4 semanas en lugar de a diario; los cambios pequeños quedan dentro del margen de error de la cinta.",
    },
    { type: "h2", text: "Limitaciones" },
    {
      type: "ul",
      items: [
        "Es una estimación. En comparación con métodos de laboratorio como la densitometría DXA, las fórmulas de circunferencias pueden desviarse varios puntos porcentuales en una persona concreta, sobre todo con muy poca o mucha grasa corporal.",
        "La precisión depende de medir con cuidado y de forma constante; una diferencia de 1–2 cm en la cintura cambia el resultado de forma notable.",
        "La fórmula se desarrolló con personal militar adulto y puede ajustarse peor a algunos tipos de cuerpo y grupos étnicos.",
        "No es adecuada para niños ni durante el embarazo.",
        "Esto es información general, no consejo médico. Comenta tus resultados con un médico si te preocupa tu peso o tu salud.",
      ],
    },
    {
      type: "sources",
      sources: [
        {
          label: "Hodgdon JA, Beckett MB. Prediction of percent body fat for U.S. Navy men and women from body circumferences and height. Naval Health Research Center reports 84-11 and 84-29, 1984.",
          url: "",
        },
        {
          label: "American Council on Exercise. Calculadora del porcentaje de grasa corporal y valores de referencia.",
          url: "https://www.acefitness.org/resources/everyone/tools-calculators/percent-body-fat-calculator/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué precisión tiene el método de la Marina de EE. UU. para medir la grasa corporal?",
      answer:
        "Da una estimación razonable para muchos adultos, pero los resultados individuales pueden diferir varios puntos porcentuales de los métodos de laboratorio como la DXA. Úsalo para seguir tendencias más que como una cifra exacta.",
    },
    {
      question: "¿Cuál es un porcentaje de grasa corporal saludable?",
      answer:
        "Según las categorías del ACE, en torno al 14–24 % es habitual en hombres en forma y promedio, y el 21–31 % en mujeres. Tener muy poca grasa corporal no es saludable.",
    },
    {
      question: "¿Por qué las mujeres necesitan medirse la cadera?",
      answer:
        "Las mujeres tienden a acumular más grasa en las caderas y los muslos, así que la fórmula para mujeres incluye la medida de la cadera para estimar la grasa corporal con más precisión.",
    },
    {
      question: "¿Es mejor el porcentaje de grasa corporal que el IMC?",
      answer:
        "Te dice más sobre tu composición corporal, porque el IMC no distingue el músculo de la grasa. Usar ambos, junto con tu medida de cintura, ofrece la imagen más completa.",
    },
    {
      question: "¿Cada cuánto debo medir mi grasa corporal?",
      answer:
        "Cada 2–4 semanas es suficiente. Mídete a la misma hora del día y en las mismas condiciones, y fíjate en la tendencia más que en mediciones sueltas.",
    },
  ],
});
