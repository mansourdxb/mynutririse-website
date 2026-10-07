import type { Facts } from "@/data/facts";
import type en from "../en/compare";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Alternativa a MyFitnessPal: MyNutriRise vs. MyFitnessPal (2026)",
  metaDescription:
    "Cómo se compara MyNutriRise con MyFitnessPal en el seguimiento de comida halal y cultural, el registro por foto con IA, el ayuno y los entrenamientos.",
  breadcrumb: "Comparar",
  title: "MyNutriRise vs. MyFitnessPal",
  intro: "Ambas controlan bien las calorías. La diferencia está en lo que comes y en el esfuerzo que te cuesta registrarlo.",
  table: {
    feature: "Función",
    ours: "MyNutriRise",
    theirs: "MyFitnessPal",
  },
  rows: [
    {
      feature: "Bibliotecas de cocina halal y cultural",
      ours: `${f.CUISINES} cocinas del mundo —turca, marroquí, pakistaní, afgana, del Golfo y más—, con verificación halal en todo el catálogo`,
      theirs: "Gran base de datos general de alimentos; sin bibliotecas específicas halal ni culturales",
    },
    {
      feature: "Escaneo de comidas por foto con IA",
      ours: `Sí, incluido gratis (${f.FREE_PHOTO_SCANS_PER_DAY} escaneos al día); ${f.PREMIUM_PHOTO_SCANS_PER_DAY} al día con Premium`,
      theirs: "Meal Scan disponible en los planes Premium",
    },
    {
      feature: "Ayuno intermitente",
      ours: `${f.FASTING_PLAN_COUNT} planes, incluidos 16:8, 5:2, OMAD y un horario de Ramadán`,
      theirs: "Seguimiento del ayuno incluido con Premium",
    },
    {
      feature: "Planes de alimentación guiados",
      ours: `${f.DIET_PLAN_COUNT} planes de cuatro semanas, incluidos «Saludable de Medio Oriente», «Apto para keto» y «Mediterráneo»`,
      theirs: "Planes de alimentación disponibles con Premium",
    },
    {
      feature: "Seguimiento de entrenamientos",
      ours: `Biblioteca de fuerza con ${f.STRENGTH_EXERCISE_COUNT} ejercicios, rutinas, cardio y sincronización con wearables`,
      theirs: "Registro de ejercicios con una gran base de datos de ejercicios",
    },
    {
      feature: "Idiomas de la app",
      ours: "Inglés, árabe, alemán, español, francés y ruso",
      theirs: "Muchos idiomas, incluidos inglés, español, francés y alemán",
    },
    {
      feature: "Coach IA",
      ours: `Coach de nutrición y fitness con IA integrado (${f.FREE_COACH_MESSAGES_PER_DAY} mensajes gratis al día)`,
      theirs: "Sin coach IA conversacional",
    },
    {
      feature: "Precio",
      ours: "Descarga gratuita; Premium opcional",
      theirs: "Versión gratuita; suscripción Premium con 7 días de prueba",
    },
  ],
  disclaimer:
    "Comparación basada en información pública disponible en junio de 2026. Las funciones y los precios pueden cambiar; consulta ambas apps para conocer los detalles actuales.",
  pickTheirs: {
    title: "Quién debería elegir MyFitnessPal",
    body: "Comes sobre todo alimentos occidentales y envasados, dependes mucho del escaneo de códigos de barras y quieres la mayor base de datos de alimentos colaborativa del mercado. MyFitnessPal lleva más de una década perfeccionándose y su flujo de registro es excelente para ese uso, sobre todo si ya tienes años de historial en ella.",
  },
  pickOurs: {
    title: "Quién debería elegir MyNutriRise",
    body: "En tu plato hay biryani, tajín, mandi o kabuli pulao: platos que las bases de datos genéricas no tienen. Quieres planes de alimentación aptos para halal, un horario de ayuno para el Ramadán, una app en árabe y registro por foto con IA sin pagar primero. Ese es justo el hueco que MyNutriRise vino a llenar; consulta la página sobre la <link>app de nutrición halal</link> para conocer toda la historia.",
  },
  pricing: {
    title: "Comparación de precios",
    body: "Ambas apps se descargan gratis y ofrecen suscripciones opcionales. MyFitnessPal reserva el escaneo de códigos de barras, Meal Scan y el ayuno para Premium (7 días de prueba). MyNutriRise incluye el escaneo por foto con IA y sus bibliotecas de comida cultural desde la versión gratuita, y Premium desbloquea límites de IA más altos, analíticas completas y todos los planes de ayuno.",
  },
  faqTitle: "Preguntas frecuentes",
  faqs: [
    {
      question: "¿MyNutriRise es una buena alternativa a MyFitnessPal?",
      answer:
        "Si comes comida cultural o halal, ayunas durante el Ramadán o quieres registro por foto con IA en la versión gratuita, MyNutriRise está hecha a tu medida. Si tu dieta se basa sobre todo en alimentos envasados occidentales, la mayor base de datos de códigos de barras de MyFitnessPal puede servirte mejor.",
    },
    {
      question: "¿MyFitnessPal es apta para halal?",
      answer: `MyFitnessPal tiene una gran base de datos general de alimentos, pero no bibliotecas específicas de cocina halal ni cultural. MyNutriRise abarca ${f.CUISINES} cocinas del mundo, verifica el filtro halal en todos los platos de su catálogo e incluye el plan de alimentación «Saludable de Medio Oriente», apto para halal.`,
    },
    {
      question: "¿Qué app tiene mejor escaneo por foto con IA?",
      answer: `MyNutriRise incluye el escaneo de comidas por foto con IA desde la versión gratuita (${f.FREE_PHOTO_SCANS_PER_DAY} escaneos al día; ${f.PREMIUM_PHOTO_SCANS_PER_DAY} al día con Premium). Meal Scan de MyFitnessPal está disponible en sus planes Premium.`,
    },
    {
      question: "¿Puedo hacer seguimiento del ayuno de Ramadán en alguna de las dos apps?",
      answer: `MyNutriRise incluye un horario de Ramadán específico entre sus ${f.FASTING_PLAN_COUNT} planes de ayuno. MyFitnessPal ofrece seguimiento del ayuno intermitente con Premium, pero no tiene un horario específico para el Ramadán.`,
    },
  ],
  summary: {
    title: "El resumen honesto",
    body: "MyFitnessPal es un contador consolidado con una de las mayores bases de datos de alimentos que existen: si tus comidas son sobre todo occidentales y a base de alimentos envasados, te servirá bien. MyNutriRise está pensada para las personas cuyos platos esas bases de datos no cubren bien: si comes kabuli pulao, nihari o tajín, quieres planes aptos para halal, ayunas durante el Ramadán o prefieres una app en árabe, para eso existimos, con registro por foto con IA incluido desde la versión gratuita.",
    quiz: "Haz el <link>test de plan de 1 minuto</link> para ver cómo sería tu plan.",
  },
  ctaTitle: "Registra la comida que de verdad comes",
});
