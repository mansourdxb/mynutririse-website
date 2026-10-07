import type { Facts } from "@/data/facts";
import type en from "../en/support";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Ayuda",
  metaDescription:
    "Obtén ayuda con MyNutriRise. Contacta con nuestro equipo de soporte, consulta las preguntas frecuentes o envía una sugerencia de función.",
  title: "¿Cómo podemos ayudarte?",
  subtitle:
    "Tanto si tienes una pregunta como si necesitas ayuda para resolver un problema o quieres compartir una idea, estamos aquí para ti.",
  cards: {
    email: {
      title: "Soporte por correo",
      text: "Normalmente respondemos en menos de 24 horas.",
      link: "support@mynutririse.com",
    },
    faq: {
      title: "Preguntas frecuentes",
      text: "Encuentra respuestas a las preguntas más comunes sobre la app.",
      link: "Ver preguntas frecuentes →",
    },
    feature: {
      title: "Sugerir una función",
      text: "Cuéntanos qué te gustaría ver próximamente.",
      link: "contact@mynutririse.com",
    },
  },
  faqEyebrow: "Centro de ayuda",
  faqTitle: "Preguntas frecuentes",
  faqSubtitle:
    "Consulta los temas de ayuda de la app MyNutriRise. ¿No encuentras lo que necesitas? Escribe a nuestro equipo de soporte.",
  questionCount: {
    // One form per CLDR plural category; languages use the ones they need.
    zero: "{n} preguntas",
    one: "{n} pregunta",
    two: "{n} preguntas",
    few: "{n} preguntas",
    many: "{n} preguntas",
    other: "{n} preguntas",
  },
  categories: {
    all: "Todos los temas",
    gettingStarted: "Primeros pasos",
    mealTracking: "Registro de comidas",
    nutrition: "Nutrición y recetas",
    health: "Seguimiento de salud",
    fasting: "Ayuno",
    progress: "Progreso y análisis",
    account: "Cuenta",
  },
  faqs: [
    {
      category: "gettingStarted",
      question: "Te damos la bienvenida a MyNutriRise",
      answer:
        "MyNutriRise es tu compañero integral de nutrición y salud. Registra tus comidas con reconocimiento de alimentos por IA, controla cuánta agua bebes, gestiona tu peso, explora recetas internacionales y mucho más, todo en una sola app.",
    },
    {
      category: "gettingStarted",
      question: "Configura tu perfil",
      answer:
        "Durante la configuración inicial, MyNutriRise te pregunta tu edad, peso, altura, nivel de actividad y objetivos. Con esta información calcula tus objetivos diarios de calorías y macros. Puedes actualizarlos cuando quieras desde tu perfil.",
    },
    {
      category: "gettingStarted",
      question: "Tu primer escaneo de comida",
      answer:
        "Toca el botón de escaneo (en el centro de la barra inferior) para fotografiar cualquier comida. Nuestra IA identifica los ingredientes, estima las porciones y te ofrece un desglose nutricional completo. Puedes editar los resultados si lo necesitas.",
    },
    {
      category: "gettingStarted",
      question: "Cómo moverte por la app",
      answer:
        "Usa las pestañas inferiores para cambiar entre Inicio, Ayuno, Nutri Hub (acciones rápidas), Recetas, Analíticas y Chat IA. Nutri Hub te da acceso rápido a todas las funciones. Toca Editar para personalizar la disposición.",
    },
    {
      category: "mealTracking",
      question: "¿Cómo funciona el escáner de alimentos con IA?",
      answer:
        "Apunta la cámara a cualquier comida y toca escanear. Nuestra IA analiza la imagen para identificar los alimentos, estimar el tamaño de las porciones y calcular los valores nutricionales, como calorías, proteína, carbohidratos, grasa, fibra y más.",
    },
    {
      category: "mealTracking",
      question: "Consejos para escanear mejor",
      answer:
        "Para obtener los resultados más precisos: fotografía las comidas desde arriba, asegúrate de que haya buena iluminación, mantén el plato centrado en el encuadre e incluye el plato completo. La IA funciona mejor con platos individuales que se vean con claridad.",
    },
    {
      category: "mealTracking",
      question: "¿Cómo escaneo alimentos envasados?",
      answer:
        "Toca el icono del código de barras para escanear productos envasados. La app busca el producto en una base de datos mundial de alimentos y completa automáticamente la información nutricional. Si un código de barras no está en nuestra base de datos, puedes introducir manualmente la información nutricional de la etiqueta del envase.",
    },
    {
      category: "mealTracking",
      question: "¿Qué es Agregar rápido?",
      answer:
        "Usa Agregar rápido para registrar calorías y macros en un momento sin escanear. Es perfecto cuando conoces los valores nutricionales aproximados o tienes prisa. También puedes buscar el nombre de cualquier alimento para completar automáticamente los datos nutricionales desde nuestra base de datos.",
    },
    {
      category: "nutrition",
      question: "¿Cómo funcionan los planes de comidas con IA?",
      answer:
        "Los planes de comidas con IA generan un plan semanal personalizado según tu objetivo de calorías, tus metas de macros, tus preferencias alimentarias y tus cocinas favoritas. Cada plan incluye desayuno, almuerzo, cena y refrigerios. Toca actualizar para volver a generar cualquier comida.",
    },
    {
      category: "nutrition",
      question: "¿Puedo explorar cocinas internacionales?",
      answer:
        "¡Sí! Explora platos de cocinas de todo el mundo, como la de Oriente Medio, la mediterránea, la asiática, la latinoamericana, la india y muchas más. Cada cocina incluye platos auténticos con datos nutricionales completos, organizados por tipo de comida.",
    },
    {
      category: "nutrition",
      question: "¿Cómo funcionan las listas de compras?",
      answer:
        "Toca Lista de compras en Nutri Hub para crear listas de compras. Agrega artículos manualmente o genera una lista a partir de tu plan de alimentación o de tus recetas guardadas. Márcalos mientras compras y organízalos por categoría.",
    },
    {
      category: "nutrition",
      question: "¿Puedo importar recetas de sitios web?",
      answer:
        "¡Sí! Pega la URL de una receta de sitios de cocina populares y MyNutriRise extraerá automáticamente los ingredientes y la información nutricional. Revisa y ajusta los datos después de importarla y guárdala en tu colección personal.",
    },
    {
      category: "health",
      question: "¿Cómo funciona el registro de agua?",
      answer:
        "MyNutriRise fija un objetivo diario de agua personalizado según tu peso y tu nivel de actividad (unos 30-35 ml por kg de peso corporal). Toca el icono de la gota para registrar vasos o cantidades personalizadas. Los botones de agregar rápido te permiten registrar los tamaños habituales con un solo toque. Activa las notificaciones para recibir recordatorios periódicos de hidratación.",
    },
    {
      category: "health",
      question: "¿Cómo hago seguimiento de mi peso?",
      answer:
        "Registra tu peso con regularidad (idealmente a la misma hora cada día). MyNutriRise muestra la tendencia de tu peso a lo largo del tiempo con una línea de promedio suavizada. Fija un peso objetivo en tu perfil y la app calculará un ritmo de cambio saludable. Una pérdida de peso segura es de 0,5-1 kg por semana.",
    },
    {
      category: "health",
      question: "¿Puedo conectar dispositivos wearables?",
      answer:
        "MyNutriRise se integra con Health Connect (Android) y Apple Health (iOS) para sincronizar los pasos, la frecuencia cardíaca, el sueño y los datos de ejercicio de tus dispositivos wearables. Estos datos mejoran tus cálculos diarios de calorías.",
    },
    {
      category: "health",
      question: "¿Qué micronutrientes se registran?",
      answer:
        "Además de los macros, MyNutriRise registra micronutrientes clave como la fibra, el sodio, el azúcar, el hierro, el calcio y las vitaminas de las comidas que registras. Compara tu ingesta diaria con los valores recomendados e identifica posibles carencias.",
    },
    {
      category: "fasting",
      question: "¿Qué es el ayuno intermitente?",
      answer:
        "El ayuno intermitente (AI) es un patrón de alimentación que alterna periodos de ayuno y de comida. Entre los métodos más comunes están el método 16:8 (16 horas de ayuno y 8 horas de alimentación), la dieta 5:2 y Eat-Stop-Eat. Durante el ayuno, tu cuerpo empieza a quemar grasa para obtener energía, los niveles de insulina bajan y se activan procesos de reparación celular.",
    },
    {
      category: "fasting",
      question: "¿Cómo empiezo mi primera semana de ayuno?",
      answer:
        "Empieza con un ayuno de 12 horas (por ejemplo, de 20:00 a 8:00). Hacia el día 3-4, amplíalo a 14 horas. Hacia el día 5-7, prueba con 16 horas si te sientes cómodo. Mantente hidratado con agua, infusiones o café solo. Entre las dificultades habituales de la primera semana están los dolores de cabeza (bebe más agua), la irritabilidad y los problemas para dormir; suelen mejorar después de la primera semana.",
    },
    {
      category: "fasting",
      question: "¿Qué puedo tomar durante el ayuno?",
      answer:
        "Limítate a bebidas sin calorías: agua (natural o con gas), café solo (sin azúcar ni crema), infusiones y té verde. Incluso una pequeña cantidad de calorías puede romper tu ayuno e interrumpir los beneficios metabólicos.",
    },
    {
      category: "fasting",
      question: "¿Cuándo debo dejar de ayunar?",
      answer:
        "Deja de ayunar y consulta a un médico si sufres mareos o desmayos persistentes, fatiga extrema, cambios de humor importantes, latidos irregulares o una pérdida de peso rápida. El ayuno no es adecuado para todo el mundo: consulta a tu médico si estás embarazada o en periodo de lactancia, tienes antecedentes de trastornos alimentarios o tienes diabetes.",
    },
    {
      category: "progress",
      question: "¿Qué muestra el panel de progreso?",
      answer:
        "La pestaña Analíticas muestra tus tendencias nutricionales, tu balance de calorías, el desglose de macros y el progreso hacia tus objetivos a lo largo del tiempo. Cambia entre las vistas diaria, semanal y mensual. Controla tu balance de calorías (consumidas frente a quemadas) e identifica tendencias en tus macros.",
    },
    {
      category: "progress",
      question: "¿Cómo funciona el calendario nutricional?",
      answer:
        "El calendario nutricional muestra el mes de un vistazo con días codificados por colores: verde significa que cumpliste el objetivo, amarillo que estuviste cerca y rojo que te desviaste. Toca cualquier día para ver un desglose detallado de lo que comiste y cómo se compara con tus objetivos.",
    },
    {
      category: "progress",
      question: "¿Qué es el puntaje de bienestar?",
      answer:
        "Tu puntaje de bienestar (0-100) tiene en cuenta la calidad de tu alimentación, la hidratación, el nivel de actividad, el sueño y la constancia. Te ofrece una visión global de tus hábitos de salud. Céntrate en las áreas con menor puntuación para conseguir las mayores mejoras.",
    },
    {
      category: "progress",
      question: "¿Puedo exportar mis datos?",
      answer:
        "¡Sí! Exporta tus datos nutricionales en informes detallados. Elige el rango de fechas y qué incluir: comidas, macros, peso, agua, ejercicio. Exporta en formato PDF o CSV para compartirlos con tu médico, nutricionista o entrenador personal.",
    },
    {
      category: "account",
      question: "¿Qué incluye Premium?",
      answer:
        "MyNutriRise ofrece una versión gratuita generosa con registro básico de comidas, registro de agua y recetas limitadas. Premium desbloquea los planes de comidas con IA, las analíticas avanzadas, el acceso ilimitado a recetas y las cocinas internacionales. Gestiona tu suscripción desde el App Store o Play Store.",
    },
    {
      category: "account",
      question: "¿Cómo restauro mis compras?",
      answer:
        "Si reinstalas la app o cambias de dispositivo, tu estado Premium se restaura automáticamente al iniciar sesión. Si no es así, ve a Ajustes > Suscripción > Restaurar compras.",
    },
    {
      category: "account",
      question: "¿MyNutriRise tiene modo oscuro?",
      answer:
        "¡Sí! Activa o desactiva el modo oscuro desde Ajustes. De forma predeterminada, MyNutriRise sigue el tema del sistema, así que si tu teléfono cambia al modo oscuro por la noche, la app lo hace automáticamente.",
    },
    {
      category: "account",
      question: "¿Cómo elimino mi cuenta?",
      answer:
        "Para eliminar tu cuenta y todos los datos asociados, ve al Centro de ayuda de la app y selecciona Eliminar cuenta. Esta acción es permanente y no se puede deshacer: se borrarán todos tus registros de comidas, tu progreso y tus ajustes.",
    },
  ],
});
