import type { Facts } from "@/data/facts";
import type en from "../en/blog";

/*
 * Article bodies are ordered blocks:
 *   { type: "h2", text } | { type: "p", text } | { type: "ul", items } | { type: "table", head, rows }
 * Text may contain <em>, <b> (bold) and link tags (named per article, see the page).
 */
export default (f: Facts): ReturnType<typeof en> => ({
  index: {
    metaTitle: "Guías de nutrición y ayuno",
    metaDescription:
      "Guías prácticas sobre nutrición, ayuno, seguimiento de macros y hábitos saludables del equipo de MyNutriRise.",
    title: "El blog de MyNutriRise",
    subtitle: "Guías prácticas sobre nutrición, ayuno y cómo crear hábitos que perduran.",
    breadcrumb: "Blog",
  },
  cta: {
    intermittentFasting: {
      heading: "Haz seguimiento de tu ayuno automáticamente",
      body: "MyNutriRise incluye 16:8, 5:2 y más protocolos de ayuno, con temporizadores, análisis y registro de comidas en una sola app.",
    },
    aiPhoto: {
      heading: "Prueba el escaneo de comidas con IA",
      body: "MyNutriRise identifica tu comida, estima las porciones y registra las calorías y los macros a partir de una sola foto.",
    },
    halalMacros: {
      heading: "Tu comida, registrada como se merece",
      body: "MyNutriRise incluye recetas aptas para halal y bibliotecas de cocinas culturales: afgana, árabe, bangladesí y más.",
    },
  },
  intermittentFasting: {
    title: "Ayuno intermitente 16:8: guía para principiantes",
    description:
      "Qué es el método de ayuno 16:8, cómo funciona, para quién es adecuado y cómo empezar sin cometer los errores más habituales.",
    breadcrumb: "Ayuno intermitente 16:8",
    dateLabel: "9 de junio de 2026",
    readTime: "5 min de lectura",
    blocks: [
      {
        type: "p",
        text: "El método 16:8 es la forma más popular de ayuno intermitente, y con razón: es sencillo. Comes dentro de una ventana de 8 horas cada día y ayunas las 16 horas restantes, la mayor parte de las cuales pasas durmiendo de todos modos.",
      },
      { type: "h2", text: "Cómo funciona" },
      {
        type: "p",
        text: "Un horario 16:8 típico consiste en terminar de cenar antes de las 20:00 y hacer tu primera comida a las 12:00 del día siguiente. Durante la ventana de ayuno puedes tomar agua, café solo o té sin azúcar. En lugar de cambiar <em>qué</em> comes, el 16:8 cambia <em>cuándo</em> lo haces, lo que en muchas personas reduce de forma natural el picoteo nocturno y la ingesta total de calorías.",
      },
      { type: "h2", text: "Cómo elegir tu ventana de alimentación" },
      {
        type: "p",
        text: "La mejor ventana es la que encaja con tu vida. Quienes madrugan suelen preferir de 10:00 a 18:00; quienes comen en compañía tienden a elegir de 12:00 a 20:00 para no renunciar a la cena en familia. Si al principio 16 horas te parecen demasiadas, empieza con 12:12 o 14:10 y amplía poco a poco: la constancia es más importante que la intensidad.",
      },
      { type: "h2", text: "Errores comunes de principiante" },
      {
        type: "ul",
        items: [
          "<b>Comer de más en la ventana.</b> El ayuno no anula las calorías; registra tus comidas para que la ventana no se convierta en barra libre.",
          "<b>Quedarte corto de proteína.</b> Con menos comidas es fácil no llegar a la proteína necesaria; intenta que cada comida gire en torno a una fuente de proteína.",
          "<b>Olvidarte de hidratarte.</b> Gran parte de los líquidos que tomas normalmente proviene de los alimentos. Bebe más agua de la que crees necesitar.",
          "<b>Pensar en todo o nada.</b> Romper el ayuno antes de tiempo de vez en cuando cambia muy poco. Lo que importa es el patrón semanal.",
        ],
      },
      { type: "h2", text: "16:8 y Ramadán: en qué se diferencian" },
      {
        type: "p",
        text: `El ayuno de Ramadán va aproximadamente del amanecer a la puesta de sol, sin comida <em>ni líquidos</em>, mientras que el 16:8 permite agua y bebidas sin azúcar en todo momento. Por eso la hidratación es la diferencia clave: en Ramadán, concentra la ingesta de líquidos en el suhoor y el iftar. La lógica nutricional es la misma en ambos casos: tus necesidades diarias de calorías no cambian, así que planifica tus dos comidas para cubrirlas. Usa nuestra <calorieCalculator>calculadora de calorías</calorieCalculator> gratuita para conocer esa cifra, y ten en cuenta que MyNutriRise incluye un horario específico para el Ramadán entre sus ${f.FASTING_PLAN_COUNT} planes de ayuno.`,
      },
      { type: "h2", text: "Quién debe tener cuidado" },
      {
        type: "p",
        text: "El ayuno intermitente no es para todo el mundo. Si estás embarazada o en periodo de lactancia, eres menor de 18 años, tienes antecedentes de trastornos alimentarios o padeces una enfermedad como la diabetes, habla con tu médico antes de cambiar tus horarios de comida.",
      },
    ],
  },
  aiPhoto: {
    title: "Cómo funciona realmente el conteo de calorías por foto con IA",
    description:
      "Toma una foto y obtén las calorías y los macros. Esto es lo que pasa entre bastidores y cómo conseguir los resultados más precisos.",
    breadcrumb: "Conteo de calorías por foto con IA",
    dateLabel: "9 de junio de 2026",
    readTime: "4 min de lectura",
    blocks: [
      {
        type: "p",
        text: "El principal motivo por el que la gente abandona el conteo de calorías son las complicaciones: buscar en bases de datos, pesar porciones, registrar ingrediente por ingrediente. El registro por foto con IA ataca directamente ese problema: fotografías tu plato y la app hace el resto.",
      },
      { type: "h2", text: "Qué ocurre cuando tomas una foto" },
      {
        type: "p",
        text: "Los modelos modernos de reconocimiento de alimentos funcionan en tres pasos. Primero, la IA detecta cada uno de los alimentos del plato: arroz, pollo a la plancha, ensalada, salsa. Segundo, estima el tamaño de las porciones a partir de pistas visuales como el diámetro del plato, la altura y la densidad de la comida. Tercero, relaciona cada elemento con una base de datos nutricional para calcular las calorías, la proteína, los carbohidratos y la grasa, y te presenta el resultado para que lo confirmes o lo ajustes.",
      },
      { type: "h2", text: "¿Qué tan preciso es?" },
      {
        type: "p",
        text: "En las comidas cotidianas, la estimación por foto suele acercarse lo suficiente como para que tus totales diarios tengan sentido y, sobre todo, es precisa <em>de forma constante</em>, lo que importa más que la perfección. Un método de seguimiento que usas de verdad cada día es mejor que uno preciso que abandonas a la semana. Los platos combinados, los aceites ocultos y los alimentos apilados son los casos más difíciles; por eso una buena app te permite editar la estimación de la IA con un solo toque.",
      },
      { type: "h2", text: "Cinco consejos para escanear mejor" },
      {
        type: "ul",
        items: [
          "Fotografía con un ligero ángulo (30–45°), no directamente desde arriba: así la IA calcula mejor la altura de la comida.",
          "Encuadra el plato entero, con el borde visible como referencia de tamaño.",
          "Una buena iluminación importa más que una buena cámara.",
          "En platos combinados como el biryani o los guisos, indica el nombre del plato cuando la app te lo pida: así la estimación es más precisa.",
          "Revisa la porción que estimó la IA en alimentos muy calóricos como el arroz, el aceite y los frutos secos.",
        ],
      },
      { type: "h2", text: "Cuándo usar otros métodos de registro" },
      {
        type: "p",
        text: "Las fotos son perfectas para comidas servidas en el plato. Para los alimentos envasados, escanear el código de barras es más rápido y exacto. Para un café rápido o un puñado de dátiles, gana el registro por voz («dos dátiles y un café con leche»). El mejor método combina los tres.",
      },
    ],
  },
  halalMacros: {
    title: "Cómo controlar los macros con comidas halal y culturales",
    description:
      "Kabuli pulao, mandi, biryani: los platos tradicionales merecen un seguimiento adecuado. Cómo registrar la cocina cultural con precisión.",
    breadcrumb: "Controlar los macros",
    dateLabel: "9 de junio de 2026",
    readTime: "5 min de lectura",
    blocks: [
      {
        type: "p",
        text: "La mayoría de las apps de nutrición se diseñaron pensando en menús occidentales. Busca «kabuli pulao», «mandi» o «machher jhol» y a menudo no encontrarás nada, o solo una entrada genérica de «arroz con carne» que no da en el blanco. Es un problema real: si tu comida no está en la base de datos, o calculas mal a ojo o dejas de hacer seguimiento por completo.",
      },
      { type: "h2", text: "Por qué es difícil registrar los platos culturales" },
      {
        type: "p",
        text: "Los platos tradicionales suelen ser combinados: arroz, carne, aceites, frutos secos y salsas cocinados juntos. Los macros dependen mucho de la preparación: un biryani casero y uno de restaurante pueden diferir en cientos de calorías por porción, sobre todo por la grasa de cocción. Las entradas genéricas de una base de datos no pueden reflejar esa variación, y pesar cada ingrediente de una receta familiar no es realista.",
      },
      { type: "h2", text: "Un enfoque práctico" },
      {
        type: "ul",
        items: [
          "<b>Usa una app con bibliotecas de cocinas culturales.</b> Las entradas creadas específicamente para la cocina afgana, árabe y de Oriente Medio, bangladesí y otras te acercan mucho más que los equivalentes genéricos.",
          "<b>Escanea con foto los platos servidos.</b> El escaneo con IA estima la porción real que tienes delante, algo especialmente útil cuando se comparte la comida en familia y «una porción» es un concepto difuso.",
          "<b>Vigila la grasa de cocción, no las especias.</b> Las especias apenas aportan nutrientes; el ghee y el aceite son donde se esconden las calorías. Si un plato se ve brillante, sube un poco la estimación de grasa.",
          "<b>Registra tus platos básicos una sola vez.</b> Guarda los platos habituales de tu casa como plantillas de comidas para volver a registrarlos con un solo toque.",
        ],
      },
      { type: "h2", text: "Macros de platos populares (por porción)" },
      {
        type: "p",
        text: "Cifras reales de la biblioteca de alimentos de MyNutriRise; úsalas como referencia cuando estimes porciones de restaurante o caseras:",
      },
      {
        type: "table",
        head: ["Plato", "kcal", "Proteína", "Carbohidratos", "Grasa"],
        rows: [
          ["Biryani de pollo (pakistaní)", "480", "28 g", "52 g", "18 g"],
          ["Kabuli pulao (afgano)", "480", "28 g", "55 g", "16 g"],
          ["Nihari (pakistaní)", "450", "35 g", "15 g", "28 g"],
          ["Tajín de pollo (marroquí)", "380", "30 g", "25 g", "18 g"],
          ["Adana kebab (turco)", "380", "32 g", "8 g", "24 g"],
          ["Koshari (egipcio)", "380", "14 g", "62 g", "8 g"],
          ["Shakshuka", "354", "18 g", "14 g", "24 g"],
        ],
      },
      {
        type: "p",
        text: "Encontrarás más platos con información nutricional completa en nuestra <recipes>página de recetas</recipes>; para convertir tu meta de calorías en objetivos en gramos, usa la <macroCalculator>calculadora de macros</macroCalculator>.",
      },
      { type: "h2", text: "Registrar comida halal va más allá de los ingredientes" },
      {
        type: "p",
        text: "Comer halal mientras persigues un objetivo de fitness no debería obligarte a seguir planes de pollo con brócoli. El camino sostenible es mantener la comida que te gusta y ajustar las porciones y la frecuencia, que es exactamente lo que permite un buen seguimiento. Durante el Ramadán, combinar el registro de comidas con un seguimiento del ayuno también te ayuda a mantener equilibrados el suhoor y el iftar en lugar de ir de un extremo a otro. Para ver el panorama completo del seguimiento apto para halal, consulta nuestra página sobre la <halalApp>app de nutrición halal</halalApp>.",
      },
    ],
  },
});
