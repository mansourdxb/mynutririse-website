import type { Facts } from "@/data/facts";
import type en from "../en/home";

export default (f: Facts): ReturnType<typeof en> => ({
  jsonLd: {
    appDescription:
      "Controla tus calorías, escanea tus comidas con IA, sigue planes de alimentación halal y culturales, haz seguimiento de tu ayuno y recibe coaching nutricional inteligente.",
  },
  hero: {
    title: "Seguimiento de nutrición y fitness <hl>para la vida real</hl>",
    lead: "Toma una foto y la IA registra tu comida. Sigue planes de alimentación halal y culturales, haz seguimiento de tu ayuno y tus entrenamientos, y recibe coaching inteligente: todo lo que necesitas para una vida más sana y feliz.",
    quizLink: "¿No sabes por dónde empezar? Obtén tu plan personalizado en 1 minuto →",
    screenshotAlt: "Panel de MyNutriRise",
    pills: ["Escaneo de comidas con IA", "Dietas halal y culturales", `${f.RECIPES} recetas`],
  },
  pressBar: {
    heading: "Han hablado de nosotros",
  },
  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "Más saludable en <hl>tres pasos sencillos</hl>",
    steps: [
      {
        title: "Descarga la app y fija tu objetivo",
        description:
          "Consigue MyNutriRise gratis, dile cuál es tu objetivo —bajar de peso, ganar músculo o comer mejor— y elige un plan que se adapte a tu vida y a tu cultura.",
      },
      {
        title: "Fotografía tus comidas",
        description:
          "Toma una foto y la IA identifica los alimentos, las porciones, las calorías y los macros; o registra por voz, con el código de barras o con la búsqueda en segundos.",
      },
      {
        title: "Ve resultados reales",
        description:
          "Sigue tus tendencias, recibe coaching de la IA y crea rachas que perduran: los informes semanales te muestran exactamente cuánto has avanzado.",
      },
    ],
  },
  goals: {
    eyebrow: "Tu objetivo, a tu manera",
    title: "Sea cual sea tu meta, <hl>te acompañamos</hl>",
    items: [
      { title: "Bajar de peso", description: "Objetivos de calorías y planes ajustados a un ritmo saludable." },
      { title: "Ganar músculo", description: "Planes altos en proteína, rutinas de entrenamiento y registro de ejercicios." },
      {
        title: "Comer halal y según tu cultura",
        description: `${f.CUISINES} cocinas —turca, pakistaní, afgana y más—, con verificación halal en todo el catálogo.`,
      },
      { title: "Probar el ayuno intermitente", description: "16:8, 5:2 y más, con temporizadores y análisis de tu ayuno." },
      { title: "Controlar tus macros", description: "Proteína, carbohidratos y grasa con desgloses diarios precisos." },
      { title: "Comer equilibrado", description: `${f.RECIPES} recetas saludables y planes de alimentación generados con IA.` },
      { title: "Ponerte en forma", description: "Entrenamientos, cardio y sincronización de wearables con Apple Health y Health Connect." },
      { title: "Crear hábitos saludables", description: "Rachas, lecciones diarias y un puntaje de bienestar que te mantiene motivado." },
    ],
  },
  showcase: {
    eyebrow: "Mírala en acción",
    title: "Pantallas preciosas, <hl>posibilidades infinitas</hl>",
    lead: "Cada pantalla, diseñada con cuidado. Descubre la experiencia completa de MyNutriRise.",
    row1: [
      "Analíticas y tendencias",
      "Temporizador de ayuno",
      "Planes de comidas con IA",
      "Búsqueda de alimentos",
      "Biblioteca de ejercicios",
      "Puntaje de bienestar",
      "Micronutrientes",
      "Registro de comidas",
      "Categorías de recetas",
      "Plantillas de comidas",
    ],
    row2: [
      "Planes de alimentación",
      "Wearables",
      "Logros",
      "Retos",
      "Informe semanal",
      "Progreso de peso",
      "Horario de comidas",
      "Acciones rápidas",
      "Dietas culturales",
      "Comparar alimentos",
    ],
  },
  premium: {
    badge: "Premium",
    title: "Desbloquea todo tu potencial",
    lead: "Premium te ofrece análisis más profundos y herramientas más inteligentes para un bienestar óptimo.",
    heroFeatures: [
      {
        title: "Micronutrientes avanzados",
        description: `Controla ${f.MICRONUTRIENT_COUNT} vitaminas y minerales clave. Entiende tus carencias nutricionales con desgloses detallados y sugerencias inteligentes.`,
      },
      {
        title: "Análisis con IA",
        description:
          "Análisis a fondo de tus hábitos alimentarios y tendencias, con planes de mejora personalizados y adaptados a tu cuerpo.",
      },
      {
        title: "Planes de comidas inteligentes",
        description:
          "Planes diarios y semanales generados con IA y ajustados a tus objetivos. Keto, mediterránea, alta en proteína y más.",
      },
      {
        title: "Coaching ampliado",
        description: `Más coaching con IA: hasta ${f.PREMIUM_COACH_MESSAGES_PER_DAY} mensajes al coach al día en lugar de ${f.FREE_COACH_MESSAGES_PER_DAY}.`,
      },
    ],
    moreTitle: "Y aún más herramientas Premium",
    moreFeatures: [
      {
        title: "Escáner de comidas con IA",
        description: `Fotografía cualquier comida: la IA identifica los alimentos y las porciones, y registra las calorías y los macros al instante. ${f.PREMIUM_PHOTO_SCANS_PER_DAY} escaneos al día.`,
      },
      { title: "Listas de compras inteligentes", description: "Listas de compras generadas automáticamente a partir de tus planes de alimentación y recetas." },
      {
        title: "Planes y análisis de ayuno",
        description: "Acceso completo a los protocolos de ayuno intermitente con analíticas detalladas de tu progreso.",
      },
      {
        title: "Exportación de datos e informes PDF",
        description: "Exporta tus datos nutricionales en informes PDF detallados para ti o para tu nutricionista.",
      },
      {
        title: "Comparador de alimentos",
        description:
          "Compara dos alimentos que hayas registrado según sus calorías, macros y puntaje de salud para tomar mejores decisiones.",
      },
      {
        title: "Integración con wearables",
        description: "Sincroniza con Apple Health y Google Health Connect tu actividad, tus pasos y las calorías quemadas.",
      },
      { title: "Planificador de preparación de comidas", description: "Planifica y organiza la preparación semanal de tus comidas con porciones y listas de compras." },
      {
        title: "Puntaje nutricional",
        description: "Obtén un puntaje de bienestar diario basado en tus hábitos alimentarios y el equilibrio de nutrientes.",
      },
      {
        title: "Panel de analíticas",
        description: "Gráficos y tendencias detallados de tu nutrición, tu peso y tu progreso de salud.",
      },
    ],
    trialButton: "Empieza la prueba gratis",
  },
  science: {
    eyebrow: "Por qué confiar",
    title: "Basada en <hl>ciencia real</hl>",
    lead: "Sin promesas mágicas: solo cálculos nutricionales consolidados, datos fiables y una IA que muestra su trabajo.",
    pillars: [
      {
        title: "Cálculo de calorías probado",
        description:
          "Los objetivos diarios usan la ecuación de Mifflin–St Jeor —la fórmula en la que confían los nutricionistas para estimar las necesidades energéticas—, ajustada a tu objetivo y a tu actividad.",
      },
      {
        title: "Datos de alimentos verificados",
        description:
          "La información nutricional proviene de bases de datos de alimentos verificadas —no de estimaciones colaborativas— e incluye alimentos cotidianos, productos envasados y platos culturales.",
      },
      {
        title: "Una IA que puedes corregir",
        description:
          "Cada escaneo por foto muestra su estimación antes de registrarla —alimentos, porciones y macros—, así que tú mantienes el control. Ajusta lo que quieras con un toque.",
      },
      {
        title: "Honesta por diseño",
        description:
          "Sin objetivos de dietas extremas: los mínimos de calorías te protegen de comer de menos, y un ritmo semanal sostenible es mejor que las promesas exageradas.",
      },
    ],
  },
  community: {
    eyebrow: "Comunidad",
    title: "Creadores que hacen seguimiento con nosotros",
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Respuestas a tus preguntas",
    more: "¿Tienes más preguntas? <link>Visita el Centro de ayuda</link>",
    items: [
      {
        question: "¿MyNutriRise es gratis?",
        answer:
          "Sí. MyNutriRise se descarga y se usa gratis, incluido el escaneo de comidas por foto con IA con un límite diario. Premium es opcional: aumenta el límite de escaneos y desbloquea el seguimiento de micronutrientes y los informes PDF. Puedes cancelar cuando quieras.",
      },
      {
        question: "¿Es compatible con dietas halal y culturales?",
        answer: `Sí. MyNutriRise abarca ${f.CUISINES} cocinas del mundo —turca, marroquí, persa, pakistaní, afgana, bangladesí, del Golfo y emiratí, y muchas más—, además de recetas aptas para halal, el plan de alimentación «Saludable de Medio Oriente» e incluso un horario de ayuno para el Ramadán. La app también está disponible en inglés, árabe, alemán, español, francés y ruso.`,
      },
      {
        question: "¿Cómo funciona el escaneo de comidas con IA?",
        answer:
          "Toma una foto de tu plato y la IA identifica los alimentos, estima las porciones y registra automáticamente las calorías y los macros. También puedes registrar por voz, escaneando el código de barras o con la búsqueda.",
      },
      {
        question: "¿También puedo hacer seguimiento del ayuno y los entrenamientos?",
        answer:
          "Sí: protocolos de ayuno intermitente como 16:8 y 5:2 con temporizadores y análisis, además de rutinas de entrenamiento, una biblioteca de ejercicios y sincronización con Apple Health y Google Health Connect.",
      },
      {
        question: "¿En qué dispositivos está disponible?",
        answer:
          "MyNutriRise está diseñada para teléfonos iPhone y Android. Descárgala desde los enlaces a las tiendas de aplicaciones de esta página y tus datos se sincronizarán con tu cuenta.",
      },
    ],
  },
  cta: {
    title: "Empieza hoy tu camino hacia el bienestar",
    lead: "Tu vida más saludable está a una descarga de distancia.",
  },
});
