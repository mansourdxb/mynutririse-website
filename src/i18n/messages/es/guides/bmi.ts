import type { Facts } from "@/data/facts";
import type en from "../../en/guides/bmi";

// Long-form explainer and FAQ for /tools/bmi-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <calorie>…</calorie> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  blocks: [
    { type: "h2", text: "Qué mide el IMC" },
    {
      type: "p",
      text: "El índice de masa corporal (IMC) compara tu peso con tu altura. Es una cifra de cribado rápida que se usa en todo el mundo para clasificar a los adultos en categorías de peso asociadas, de media, a un riesgo para la salud. <b>No</b> mide directamente la grasa corporal, y por eso funciona mejor para poblaciones que como veredicto sobre una sola persona.",
    },
    { type: "h2", text: "La fórmula" },
    {
      type: "formula",
      items: [
        "Métrico:  IMC = peso (kg) ÷ altura (m)²",
        "Imperial: IMC = 703 × peso (lb) ÷ altura (in)²",
      ],
    },
    { type: "h2", text: "Categorías de la OMS para adultos" },
    {
      type: "table",
      head: ["IMC", "Categoría"],
      rows: [
        ["Menos de 18,5", "Bajo peso"],
        ["18,5–24,9", "Peso saludable"],
        ["25,0–29,9", "Sobrepeso"],
        ["30,0 o más", "Obesidad"],
      ],
    },
    {
      type: "p",
      text: "Estos puntos de corte proceden de la Organización Mundial de la Salud y se aplican a adultos de 18 años o más. En niños y adolescentes, el IMC se compara con tablas de crecimiento específicas por edad y sexo, así que esta calculadora no es adecuada para ellos.",
    },
    { type: "h2", text: "Ejemplo práctico" },
    {
      type: "p",
      text: "Una persona que mide 1,70 m y pesa 72 kg: 72 ÷ (1,70 × 1,70) = 72 ÷ 2,89 = <b>24,9</b>, el límite superior del rango saludable. En unidades imperiales, 5 ft 7 in (67 in) y 159 lb dan 703 × 159 ÷ (67 × 67) = <b>24,9</b> también.",
    },
    { type: "h2", text: "Qué hacer con tu resultado" },
    {
      type: "h3",
      text: "Si quieres bajar de peso",
    },
    {
      type: "p",
      text: "Un IMC de 25 o más es un motivo para mirar las cosas con más detalle, no para alarmarse. Perder aunque sea un 5–10 % del peso corporal puede mejorar la tensión arterial y el azúcar en sangre en personas con sobrepeso u obesidad. Encuentra un objetivo diario sostenible con la <calorie>calculadora de calorías</calorie> y procura perder unos 0,5–1 kg por semana.",
    },
    {
      type: "h3",
      text: "Si quieres ganar músculo",
    },
    {
      type: "p",
      text: "Ganar músculo aumenta tu peso y, por tanto, tu IMC, aunque la grasa corporal se mantenga igual o baje. Si entrenas fuerza, controla también tu medida de cintura y cómo te queda la ropa, además del IMC, y usa la <macro>calculadora de macros</macro> para fijar tu proteína.",
    },
    {
      type: "h3",
      text: "Si tu IMC es inferior a 18,5",
    },
    {
      type: "p",
      text: "Un IMC bajo puede indicar que te falta energía o nutrientes. En lugar de intentar perder más, habla con un médico, sobre todo si has perdido peso sin proponértelo.",
    },
    { type: "h2", text: "Añade la medida de cintura" },
    {
      type: "p",
      text: "Como el IMC no puede ver dónde se acumula la grasa, el NHS británico recomienda combinarlo con la relación cintura-altura cuando tu IMC es inferior a 35. Mide el contorno de tu cintura a medio camino entre la parte inferior de las costillas y la parte superior de las caderas, y divídelo entre tu altura en las mismas unidades. Intenta que tu cintura sea <b>inferior a la mitad de tu altura</b>, es decir, una relación por debajo de 0,5. Una persona de 170 cm, por ejemplo, buscaría una cintura de menos de 85 cm.",
    },
    {
      type: "p",
      text: "Dos personas pueden compartir un IMC de 27 y tener un riesgo muy diferente: una musculosa y con la cintura estrecha, y otra menos activa y con la grasa acumulada en la zona abdominal. Revisar ambas cifras cada uno o dos meses te dice mucho más que el IMC solo, y las dos cambian a medida que pierdes grasa o ganas músculo.",
    },
    { type: "h2", text: "De dónde viene el IMC" },
    {
      type: "p",
      text: "La fórmula la describió en el siglo XIX el matemático belga Adolphe Quetelet como forma de describir el tamaño corporal medio de las poblaciones. Se convirtió en la medida de cribado estándar para adultos porque solo necesita una báscula y una cinta métrica, es gratuita y es fácil de comparar entre países. Esas virtudes son también sus puntos débiles: nunca se concibió para describir la salud de una sola persona.",
    },
    { type: "h2", text: "Limitaciones" },
    {
      type: "ul",
      items: [
        "El IMC no distingue el músculo de la grasa. Los deportistas y las personas que levantan pesas suelen caer en la franja de “sobrepeso” aunque estén delgados.",
        "No dice nada sobre dónde se acumula la grasa. La grasa en la cintura conlleva más riesgo para la salud; la medida de cintura aporta un contexto útil.",
        "El riesgo para un mismo IMC varía entre poblaciones. Una consulta de expertos de la OMS concluyó que muchas poblaciones asiáticas tienen más riesgo con IMC más bajos y propuso puntos de acción adicionales en 23 y 27,5 para uso en salud pública.",
        "No está pensado para niños, embarazadas ni personas mayores con una pérdida importante de masa muscular.",
        "El IMC es una herramienta de cribado, no un diagnóstico ni un consejo médico. Comenta tu resultado con un médico si te preocupa tu peso o tu salud.",
      ],
    },
    {
      type: "p",
      text: "Para ver el rango de peso que corresponde a un IMC saludable para tu altura, prueba la <ideal>calculadora de peso ideal</ideal>.",
    },
    {
      type: "sources",
      sources: [
        {
          label: "Organización Mundial de la Salud. Obesidad y sobrepeso: nota descriptiva.",
          url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
        },
        {
          label: "WHO Expert Consultation. Appropriate body-mass index for Asian populations and its implications for policy and intervention strategies. Lancet, 2004.",
          url: "https://pubmed.ncbi.nlm.nih.gov/14726171/",
        },
        {
          label: "NHS. Obesidad (IMC, relación cintura-altura y cuándo acudir al médico de cabecera).",
          url: "https://www.nhs.uk/conditions/obesity/",
        },
        {
          label: "NHS. Obesidad: tratamiento.",
          url: "https://www.nhs.uk/conditions/obesity/treatment/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuál es un IMC saludable para adultos?",
      answer:
        "La OMS define 18,5–24,9 como el rango saludable para adultos. Por debajo de 18,5 es bajo peso, 25–29,9 sobrepeso y 30 o más obesidad.",
    },
    {
      question: "¿Es preciso el IMC en personas musculosas?",
      answer:
        "No. El IMC no distingue el músculo de la grasa, así que las personas musculosas a menudo aparecen con sobrepeso. La medida de cintura o una estimación de la grasa corporal ofrecen una imagen más completa.",
    },
    {
      question: "¿El IMC es igual para hombres y mujeres?",
      answer:
        "La fórmula y las categorías para adultos son las mismas para ambos sexos, aunque las mujeres suelen tener más grasa corporal que los hombres con el mismo IMC.",
    },
    {
      question: "¿Pueden usar los niños esta calculadora de IMC?",
      answer:
        "No. En menores de 18 años, el IMC debe compararse con tablas de crecimiento específicas por edad y sexo, que esta calculadora no utiliza.",
    },
    {
      question: "¿A qué ritmo puedo cambiar mi IMC de forma segura?",
      answer:
        "Con un cambio de peso gradual de unos 0,5–1 kg por semana, lo que para la mayoría de la gente supone un déficit diario de unas 500 kcal. Perder peso más rápido suele costar músculo y hace más difícil no recuperarlo.",
    },
    {
      question: "¿Debo usar unidades métricas o imperiales?",
      answer:
        "Cualquiera de las dos. La calculadora admite ambas y da el mismo resultado; la fórmula imperial simplemente multiplica por 703 para convertir las unidades.",
    },
  ],
});
