import type { Facts } from "@/data/facts";
import type en from "../en/halal";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Contador de calorías halal y app de nutrición musulmana | MyNutriRise",
  metaDescription: `Controla tus calorías con una app de nutrición apta para halal: ${f.CUISINES} cocinas del mundo, un horario de ayuno para el Ramadán, registro de comidas por foto con IA y soporte completo en árabe.`,
  breadcrumb: "App de nutrición halal",
  title: "El contador de calorías apto para halal pensado para tu cocina",
  intro:
    "La mayoría de las apps de calorías se diseñaron pensando en menús occidentales: busca biryani, mandi o kabuli pulao y solo encontrarás un encogimiento de hombros. MyNutriRise es diferente: el seguimiento de comida halal es una función principal, no un añadido de última hora.",
  library: {
    title: `Verificación halal en ${f.DISHES} platos y ${f.CUISINES} cocinas`,
    body: "Cada plato incluye calorías, proteína, carbohidratos y grasa por porción: del Adana kebab (380 kcal) al tajín de pollo (380 kcal) o el kabuli pulao (480 kcal). Explora las bibliotecas de las cocinas que tu familia prepara de verdad:",
    cuisines: [
      "Turca",
      "Marroquí",
      "Persa",
      "Egipcia",
      "Pakistaní",
      "Indonesia",
      "Malasia",
      "Afgana",
      "Somalí y de África Oriental",
      "Nigeriana y de África Occidental",
      "Del Golfo y emiratí",
      "Yemení",
      "Libanesa",
      "Uzbeka y de Asia Central",
      "Bangladesí",
      "India",
      "Árabe y de Oriente Medio",
    ],
    more: "+ muchas más",
    recipesLink: "Mira una muestra de los platos en nuestra <link>página de recetas</link>.",
  },
  ramadan: {
    title: "Ayuno listo para el Ramadán",
    body: `MyNutriRise incluye ${f.FASTING_PLAN_COUNT} planes de ayuno, y uno de ellos es un <b>horario de Ramadán</b> específico que sigue tu ayuno del amanecer a la puesta de sol. Sigue registrando tus comidas para mantener estables las calorías y la proteína durante todo el mes. Fuera del Ramadán, el mismo registro cubre 16:8, 5:2, OMAD y más; consulta nuestra <link>guía de ayuno 16:8 para principiantes</link>.`,
  },
  photo: {
    title: "Toma una foto: la IA se encarga del registro",
    body: "En las comidas familiares compartidas es difícil estimar «una porción». Fotografía tu plato y la IA identifica el plato, estima tu porción y registra las calorías y los macros en segundos. Fija tu objetivo diario con nuestra <link>calculadora de calorías</link> gratuita y la app lleva la cuenta por ti.",
  },
  language: {
    title: "En tu idioma",
    body: "La app está disponible en <b>inglés, árabe, alemán, español, francés y ruso</b>, incluidos el coach IA y planes de alimentación como <b>Saludable de Medio Oriente</b>, un plan de 4 semanas apto para halal con carnes a la parrilla, legumbres, ensaladas frescas y cereales nutritivos.",
  },
  faqTitle: "Preguntas frecuentes",
  faqs: [
    {
      question: "¿MyNutriRise es apta para halal?",
      answer: `Sí. El filtro halal se verifica en todos y cada uno de los ${f.DISHES} platos del catálogo, que abarcan ${f.CUISINES} cocinas del mundo, con recetas y planes de alimentación aptos para halal, incluido un plan específico, «Saludable de Medio Oriente».`,
    },
    {
      question: "¿Tiene un modo Ramadán?",
      answer: `Sí. Entre sus ${f.FASTING_PLAN_COUNT} planes de ayuno, MyNutriRise incluye un horario de Ramadán específico que sigue tu ayuno del amanecer a la puesta de sol, mientras sigues registrando tus comidas para mantener el equilibrio durante todo el mes.`,
    },
    {
      question: "¿Puedo registrar platos tradicionales como el biryani o el kabuli pulao?",
      answer:
        "Sí. Platos como el biryani de pollo, el kabuli pulao, el nihari, el mandi, el koshari y el tajín están en la biblioteca de alimentos con calorías, proteína, carbohidratos y grasa por porción; o toma una foto y la IA estima tu porción exacta.",
    },
    {
      question: "¿En qué idiomas está disponible la app?",
      answer:
        "MyNutriRise está disponible en inglés, árabe, alemán, español, francés y ruso, tanto en iPhone como en Android.",
    },
  ],
  cta: {
    title: "La comida de tu cultura, registrada como se merece",
    body: "Descarga gratuita en iPhone y Android, o haz primero el <link>test de plan de 1 minuto</link>.",
  },
});
