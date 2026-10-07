import type { Facts } from "@/data/facts";
import type en from "../en/features";

export default (f: Facts): ReturnType<typeof en> => ({
  // /features page
  metaTitle: "Funciones: escaneo de comidas con IA, recetas culturales y ayuno",
  metaDescription:
    "Descubre las potentes funciones que hacen de MyNutriRise la forma más inteligente de controlar tu nutrición, crear hábitos saludables y alcanzar tus objetivos de bienestar.",
  pageTitle: "Funciones potentes para una vida más saludable",
  pageIntro:
    "Todo lo que necesitas para entender tu nutrición, mejorar tus hábitos y sentirte de maravilla, en una sola app con un diseño cuidado.",

  // Section header
  eyebrow: "Nutrición, ayuno y coaching en un solo lugar",
  titleLine1: "Una sola app para todo tu",
  titleLine2: "camino hacia el bienestar",
  intro:
    "Desde el escaneo de comidas con IA hasta el coaching personalizado, MyNutriRise reúne todos los aspectos de una vida saludable en una experiencia preciosa.",

  // Deep-dive blocks. Titles use <hl>…</hl> for the highlighted part.
  nutrition: {
    eyebrow: "Nutrición",
    title: "Nutrición <hl>inteligente</hl>",
    body: `Cada bocado, comprendido al detalle. Nuestra IA analiza tus comidas en tiempo real y no solo controla las calorías y los macros, sino también ${f.MICRONUTRIENT_COUNT} micronutrientes esenciales para darte una visión completa de tu nutrición.`,
    bullets: [
      "Escanear comida: toma una foto y obtén el desglose nutricional al instante",
      "Seguimiento inteligente de calorías y macros con base de datos de alimentos",
      `${f.MICRONUTRIENT_COUNT} micronutrientes clave: hierro, calcio, vitaminas A, C, D, B12 y más (Premium)`,
      "Compara alimentos cara a cara con puntajes de salud",
      "Analíticas del horario de comidas: tus hábitos alimentarios según la hora del día",
      "Escáner de códigos de barras y registro por voz para registrar sin usar las manos",
      "Unidades métricas o imperiales, en todos los idiomas de la app",
    ],
  },
  ecosystem: {
    eyebrow: "Ecosistema",
    title: "Tu ecosistema <hl>de bienestar</hl>",
    body: "Ayuno, fitness, hidratación, sueño, recetas y planes de alimentación, todo funcionando en conjunto. MyNutriRise conecta cada hábito de bienestar en un único sistema inteligente que se adapta a tu estilo de vida.",
    bullets: [
      `Ayuno intermitente con ${f.FASTING_PLAN_COUNT} planes (16:8, 5:2, OMAD, Ramadán) + Masterclass`,
      `${f.RECIPES} recetas con dietas culturales (afgana, árabe, bangladesí y más)`,
      "Planes de comidas con IA, diarios o semanales: keto, mediterránea, vegana y más",
      "Planificador de preparación de comidas con listas de compras automáticas",
      `${f.EXERCISES_AND_ACTIVITIES} ejercicios y actividades: caminar, correr, ciclismo, gimnasio, yoga, deportes`,
      "Registro de agua con objetivo diario, además del sueño desde Apple Health y Health Connect",
      "Actividades en vivo para ayunos y entrenamientos en la pantalla de bloqueo de tu iPhone",
    ],
  },
  coaching: {
    eyebrow: "Coaching con IA",
    title: "Coaching inteligente <hl>y análisis</hl>",
    body: "Tu coach personal de bienestar con IA entiende tus objetivos, hábitos y preferencias. Relaciona cada dato —de la nutrición al sueño— para darte recomendaciones prácticas que de verdad te ayudan a mejorar.",
    bullets: [
      "Coach nutricional con IA con ideas de comidas y orientación personalizadas",
      "Puntaje de bienestar (0-100) desglosado en 6 hábitos",
      "Informes semanales con % de constancia, promedios diarios y opción de compartir",
      "Lecciones diarias de nutrición con rachas y tareas prácticas",
      "Seguimiento de glucosa con promedio de 7 días y A1C estimada",
      "Sincronización de salud: lee pasos, entrenamientos y sueño desde Apple Health y Health Connect",
    ],
  },
  recipes: {
    eyebrow: "Recetas",
    title: `${f.RECIPES} recetas <hl>de ${f.CUISINES} cocinas</hl>`,
    body: "De los kebabs turcos al pulao afgano: cada receta incluye toda su información nutricional, y la comida de tu cultura ocupa un lugar protagonista, no es una entrada que falta en la base de datos.",
    bullets: [
      `${f.RECIPES} recetas con cantidades reales de ingredientes y pasos de preparación`,
      `${f.CUISINES} cocinas del mundo, con verificación halal en todo el catálogo`,
      "Filtros inteligentes: vegetariana, keto, alta en proteína y sin gluten",
      "Importa recetas de AllRecipes, BBC Good Food y otros sitios de recetas",
      "Explora por categoría: desayunos, sopas, postres y decenas más",
      "Registra cualquier receta en tu día con un solo toque",
    ],
    halalLink: "Pensada para la alimentación halal y cultural: descubre cómo →",
  },
  fitness: {
    eyebrow: "Fitness",
    title: "Entrenamientos, rutinas <hl>y ejercicios</hl>",
    body: "La nutrición es solo la mitad de la historia. Entrena con una biblioteca de ejercicios completa, sigue rutinas listas para usar o crea las tuyas, y observa cómo cada caloría quemada se suma directamente a tu balance diario.",
    bullets: [
      `${f.STRENGTH_EXERCISE_COUNT} ejercicios de fuerza con instrucciones paso a paso y músculos trabajados`,
      "Rutinas predefinidas: Cuerpo completo, Día de empuje, Día de jalón y más",
      "Crea rutinas personalizadas con series, repeticiones e historial de ejercicios",
      "Seguimiento de cardio: caminar, correr, ciclismo, natación, yoga y más",
      "Las calorías quemadas se suman automáticamente a tu balance energético diario",
      "Se sincroniza con Apple Health y Google Health Connect",
    ],
  },
  community: {
    eyebrow: "Comunidad",
    title: "Mantén la motivación <hl>en compañía</hl>",
    body: "El bienestar es mejor con amigos. Consigue logros, compite en las clasificaciones, afronta retos semanales y comparte tu progreso. MyNutriRise convierte los hábitos saludables en un camino gratificante.",
    bullets: [
      "Insignias de logros y sistema de niveles basado en XP",
      "Retos diarios y semanales: Hydrate Habit, Cinco ayunos, Constructor de rachas",
      "Amigos y clasificaciones de racha, XP, comidas y precisión",
      "Seguimiento de rachas con motivación diaria y semanal",
      "Fotos de progreso y medidas corporales (cintura, pecho, brazos)",
      "Informes semanales para compartir y funciones Premium/Pro",
    ],
  },

  // Floating mock cards. {placeholders} are filled with demo values in code;
  // <count></count> marks where the animated number goes.
  cards: {
    nutritionAlt: "Resultado de un escaneo de comida con IA en MyNutriRise con calorías, macros y puntaje de salud",
    calories: "Calorías",
    caloriesOf: "/ {n} kcal",
    kcalRemaining: "{n} kcal restantes",
    macros: "Macros",
    protein: "Proteína",
    carbs: "Carbohidratos",
    fat: "Grasa",
    gramUnit: "g",

    wellnessAlt: "Panel de MyNutriRise con seguimiento de calorías, agua, ejercicio y sueño",
    fasting: "Ayuno",
    remaining: "restante",
    protocol: "Protocolo 16:8",
    sleep: "{h} h {m} min de sueño",
    goodQuality: "Buena calidad",

    coachingAlt: "Chat con el coach IA de MyNutriRise con recomendaciones sobre comidas, ejercicio y peso",
    weeklyReport: "Informe semanal",
    consistency: "Constancia",
    avgKcal: "kcal prom.",
    shareable: "Para compartir · Exportar PDF",
    coachName: "Nutri · Coach IA",
    online: "En línea",
    coachMessage: "Por las mañanas tomas un promedio de 15 g de proteína: prueba yogur griego con frutos secos. Añadido a tu plan ✓",

    recipesAlt: "Pantalla de recetas de MyNutriRise con recetas saludables y categorías",
    dishKcal: "<count></count> kcal",
    dishName: "Tajín de pollo",
    dishCuisine: "Marroquí",
    dishProtein: "<b>{n} g</b> de proteína",
    dishCarbs: "<b>{n} g</b> de carbohidratos",
    dishFat: "<b>{n} g</b> de grasa",
    cuisinesCount: "<count></count> cocinas",
    cuisineChips: ["Turca", "Marroquí", "Pakistaní", "Afgana", "Del Golfo"],
    cultureIncluded: "La comida de tu cultura, incluida",

    workoutsAlt: "Rutinas de entrenamiento de MyNutriRise —Cuerpo completo, Día de empuje y Día de jalón— con botones para empezar",
    cardioAlt: "Registro de cardio de MyNutriRise con caminar, correr, ciclismo y natación",
    cardioTracker: "Registro de cardio",
    exercisesCount: `${f.STRENGTH_EXERCISE_COUNT} ejercicios`,
    muscleTargets: "Músculos trabajados e instrucciones",
    weekActivity: "Actividad de esta semana",
    kcalBurned: "<count></count> kcal quemadas",
    activitySummary: "{min} min · {n} entrenamientos",

    motivationAlt: "Pantalla de amigos y clasificación de MyNutriRise con rankings de XP",
    level: "Nivel {n}",
    xpSuffix: " XP",
    xpProgress: "{a} / {b} XP",
    dayStreak: "Días de racha",
    weekdayInitials: ["L", "M", "X", "J", "V", "S", "D"],
  },

  // Feature grid (features page only). Order matches the icons in code.
  grid: {
    eyebrow: "Y mucho más",
    title: "Todo lo que necesitas",
    body: "Cada herramienta, cada análisis, cada función, diseñados para acompañarte en todo tu camino hacia el bienestar.",
    hint: "Toca cualquier tarjeta para ver la pantalla",
    flipBack: "Toca para volver",
    showPreview: "{name}: mostrar vista previa de la pantalla",
    hidePreview: "{name}: ocultar vista previa de la pantalla",
    screenAlt: "Pantalla de {name}",
    items: [
      { name: "Fotos de comidas", desc: "Diario visual con todas tus comidas" },
      { name: "Calendario nutricional", desc: "Vista mensual de tu constancia" },
      { name: "Guía de colores", desc: `${f.FOOD_COLOR_GROUP_COUNT} grupos de alimentos por color con sus beneficios para la salud` },
      { name: "Comparar alimentos", desc: "Comparación nutricional cara a cara" },
      { name: "Dietas culturales", desc: "Afgana, árabe, bangladesí y más" },
      { name: "Importar recetas", desc: "Desde AllRecipes, BBC Good Food y más" },
      { name: "Lista de compras", desc: "Organizada en frutas y verduras, lácteos, carne y cereales" },
      { name: "Plantillas de comidas", desc: "Registra rápido tus comidas habituales" },
      { name: "Preparar comidas", desc: "Planificador semanal con lista de compras automática" },
      { name: "Exportar datos", desc: `Informes PDF de ${f.PDF_REPORT_MIN_DAYS} a ${f.PDF_REPORT_MAX_DAYS} días` },
      { name: "Lecciones diarias", desc: "Educación nutricional con rachas" },
      { name: "Registro de glucosa", desc: "Promedio de 7 días y A1C estimada" },
    ],
  },
});
