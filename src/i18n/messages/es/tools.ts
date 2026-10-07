import type { Facts } from "@/data/facts";
import type en from "../en/tools";

const tools = (f: Facts): ReturnType<typeof en> => ({
  // Strings shared by several tool pages and calculators.
  shared: {
    breadcrumb: "Herramientas",
    faqHeading: "Preguntas frecuentes",
    disclaimer:
      "Esta herramienta ofrece estimaciones generales, no consejo médico. Consulta a un profesional antes de hacer cambios importantes en tu alimentación.",
    sexAria: "Sexo",
    male: "Hombre",
    female: "Mujer",
    age: "Edad",
    heightCm: "Altura (cm)",
    weightKg: "Peso (kg)",
    /** Validation under a number field. {unit} may be empty. */
    rangeError: "Introduce un valor entre {min} y {max} {unit}",
    units: {
      years: "años",
      cm: "cm",
      in: "in",
      kg: "kg",
      lb: "lb",
      kcal: "kcal",
    },
    kcalPerDay: "kcal/día",
    mifflin: {
      men: "Hombres: TMB = 10 × peso(kg) + 6,25 × altura(cm) − 5 × edad + 5",
      women: "Mujeres: TMB = 10 × peso(kg) + 6,25 × altura(cm) − 5 × edad − 161",
    },
  },

  index: {
    metaTitle: "Herramientas de nutrición gratuitas",
    metaDescription:
      "Calculadoras gratuitas de IMC, calorías diarias, macros, TMB y peso ideal, sin necesidad de registrarte.",
    title: "Herramientas de nutrición gratuitas",
    subtitle: "Cinco calculadoras, sin registro. Los mismos cálculos que usa MyNutriRise para crear tu plan.",
    cards: {
      calorie: {
        title: "Calculadora de calorías",
        description: "Objetivos diarios para bajar, mantener o subir de peso, con Mifflin–St Jeor.",
      },
      macro: {
        title: "Calculadora de macros",
        description: "Objetivos de proteína, carbohidratos y grasa a partir de tu meta de calorías.",
      },
      bmi: {
        title: "Calculadora de IMC",
        description: "Índice de masa corporal con orientación sobre el rango saludable, en sistema métrico o imperial.",
      },
      bmr: {
        title: "Calculadora de TMB",
        description: "Las calorías que tu cuerpo quema en reposo absoluto.",
      },
      idealWeight: {
        title: "Calculadora de peso ideal",
        description: "Rango de peso saludable para tu altura, con las fórmulas de Devine y Robinson.",
      },
    },
    quiz: {
      title: "Test de plan personalizado",
      description: "Todo lo anterior en uno: responde 4 preguntas y obtén tu plan completo.",
    },
  },

  bmi: {
    metaTitle: "Calculadora de IMC (índice de masa corporal)",
    metaDescription:
      "Calculadora de IMC gratuita (métrica e imperial). Compara tu índice de masa corporal con los rangos saludables y entiende qué significa.",
    breadcrumb: "Calculadora de IMC",
    title: "Calculadora de IMC",
    subtitle: "Descubre tu índice de masa corporal en segundos: gratis y sin registro.",
    whatIsHeading: "¿Qué es el IMC?",
    whatIs:
      "El índice de masa corporal relaciona tu peso con tu altura: <b>IMC = peso(kg) ÷ altura(m)²</b>. En adultos, de 18,5 a 24,9 se considera en general el rango saludable; de 25 a 29,9, sobrepeso, y 30 o más, obesidad.",
    whatIsCaveat:
      "El IMC no mide directamente la grasa corporal: los deportistas con mucha masa muscular suelen dar «sobrepeso» aunque estén perfectamente sanos, y los rangos saludables pueden variar ligeramente según el origen étnico. Tómalo como una señal de cribado, no como un veredicto.",
    resultHeading: "Qué hacer con tu resultado",
    result:
      "Si tu IMC está fuera del rango saludable, la respuesta sostenible es un ajuste moderado de calorías, no una dieta extrema. Calcula tu objetivo diario con la <calorie>calculadora de calorías</calorie>, consulta el rango de peso que hay detrás de los cálculos en la <ideal>calculadora de peso ideal</ideal> y apunta a un cambio de 0,25–0,5 kg por semana.",
    faqs: [
      {
        question: "¿Cuál es un IMC saludable?",
        answer:
          "Para la mayoría de los adultos, entre 18,5 y 24,9. Por debajo de 18,5 es bajo peso; de 25 a 29,9, sobrepeso; 30 o más, obesidad. La masa muscular, la complexión y el origen étnico influyen en lo que es adecuado para cada persona.",
      },
      {
        question: "¿Es preciso el IMC en personas musculosas?",
        answer:
          "No: el IMC no distingue el músculo de la grasa, así que los deportistas musculosos suelen aparecer con sobrepeso. La medida de la cintura y las estimaciones de grasa corporal dan una imagen más completa.",
      },
      {
        question: "¿Qué tan rápido puedo cambiar mi IMC de forma segura?",
        answer:
          "Con un cambio de peso de 0,25–0,5 kg por semana, es decir, un déficit o superávit diario de unas 250–500 kcal. Ir más rápido suele implicar perder músculo y sufrir un efecto rebote.",
      },
      {
        question: "¿Debo usar el sistema métrico o el imperial?",
        answer:
          "Cualquiera de los dos: la calculadora admite ambos. La fórmula es idéntica; en el sistema imperial simplemente se multiplica por 703 para convertir las unidades.",
      },
    ],
    ctaTitle: "¿Listo para pasar a la acción?",
    ctaBody: "MyNutriRise registra tus comidas, entrenamientos y progreso: toma una foto y la IA se encarga del registro.",
    calc: {
      unitsAria: "Unidades",
      metric: "Métrico (cm, kg)",
      imperial: "Imperial (in, lb)",
      heightMetric: "Altura (cm)",
      heightImperial: "Altura (pulgadas)",
      weightMetric: "Peso (kg)",
      weightImperial: "Peso (lb)",
      result: "Tu IMC",
      categories: {
        underweight: "Bajo peso",
        healthy: "Peso saludable",
        overweight: "Sobrepeso",
        obese: "Obesidad",
      },
      empty: "Introduce tu altura y tu peso para ver tu IMC.",
    },
  },

  bmr: {
    metaTitle: "Calculadora de TMB (tasa metabólica basal)",
    metaDescription:
      "Calculadora de TMB gratuita (Mifflin–St Jeor). Descubre cuántas calorías quema tu cuerpo en reposo y cómo convertirlas en un objetivo diario.",
    breadcrumb: "Calculadora de TMB",
    title: "Calculadora de TMB",
    subtitle: "Descubre cuántas calorías quema tu cuerpo en reposo absoluto.",
    whatIsHeading: "¿Qué es la TMB?",
    whatIs:
      "Tu tasa metabólica basal es la energía que tu cuerpo necesita solo para mantenerse con vida —respirar, hacer circular la sangre, reparar las células— antes de cualquier movimiento. Suele representar entre el 60 y el 70 % de las calorías que quemas en un día, y por eso es la base de cualquier objetivo de calorías.",
    equationIntro: "Esta calculadora usa la <b>ecuación de Mifflin–St Jeor</b>:",
    example:
      "<b>Ejemplo práctico:</b> una mujer de 28 años, de 162 cm y 60 kg: 10×60 + 6,25×162 − 5×28 − 161 = <b>1.312 kcal/día</b> en reposo absoluto.",
    targetHeading: "De la TMB a un objetivo diario",
    target:
      "La TMB es solo la mitad de la ecuación: la que corresponde al reposo. Multiplícala por un factor de actividad (1,2–1,9) para obtener tu gasto energético diario total; eso es exactamente lo que hace nuestra <calorie>calculadora de calorías</calorie>, y luego la <macro>calculadora de macros</macro> reparte el resultado en proteína, carbohidratos y grasa.",
    fastingHeading: "La TMB durante el ayuno",
    fasting:
      "El ayuno de corta duración —16:8 o los ayunos diarios del Ramadán— no reduce de forma significativa tu TMB. La ralentización metabólica solo es un problema con una ingesta muy baja y prolongada. Durante el Ramadán, tus necesidades en reposo siguen siendo las mismas; planifica el suhoor y el iftar para cubrirlas.",
    faqs: [
      {
        question: "¿Cuál es una TMB normal?",
        answer:
          "La mayoría de los adultos se sitúan aproximadamente entre 1.200 y 2.000 kcal/día, según su tamaño, edad y sexo. Los cuerpos más grandes y más jóvenes queman más en reposo; la TMB disminuye ligeramente con la edad.",
      },
      {
        question: "¿La TMB equivale a las calorías que debo comer?",
        answer:
          "No. La TMB es lo que quemas en reposo absoluto. Tu objetivo diario es la TMB multiplicada por un factor de actividad; usa la calculadora de calorías para obtener la cifra completa.",
      },
      {
        question: "¿El ayuno reduce mi TMB?",
        answer:
          "El ayuno intermitente diario, incluidos los ayunos del Ramadán, apenas afecta a la TMB. Solo una restricción severa y prolongada provoca una adaptación metabólica significativa.",
      },
      {
        question: "¿Cómo puedo aumentar mi TMB?",
        answer:
          "Ganar músculo es la forma más fiable: el tejido muscular quema más energía en reposo que la grasa. El entrenamiento de fuerza junto con suficiente proteína aumenta tu gasto en reposo con el tiempo.",
      },
    ],
    ctaTitle: "Pon tu número a trabajar",
    ctaBody:
      "MyNutriRise crea tu plan diario con estos mismos cálculos y luego registra cada comida con un escaneo por foto con IA.",
    calc: {
      result: "Tu TMB",
      resultNote: "kcal/día quemadas en reposo absoluto (Mifflin–St Jeor)",
      empty: "Completa tus datos para ver tu tasa metabólica basal.",
    },
  },

  calorie: {
    metaTitle: "Calculadora de calorías diarias",
    metaDescription:
      "Calcula tus calorías diarias con la ecuación de Mifflin–St Jeor. Objetivos gratis para bajar de peso, mantenerte o ganar músculo, y guía de Ramadán.",
    breadcrumb: "Calculadora de calorías",
    title: "Calculadora de calorías",
    subtitle:
      "Descubre cuántas calorías necesitas cada día para bajar de peso, mantenerlo o ganar músculo: gratis y sin registro.",
    howHeading: "Cómo se calculan tus necesidades de calorías",
    howIntro:
      "Esta calculadora usa la <b>ecuación de Mifflin–St Jeor</b>, la fórmula en la que más suelen confiar los nutricionistas para estimar la tasa metabólica basal (TMB), es decir, la energía que tu cuerpo quema en reposo:",
    tdeeIntro:
      "Después, tu TMB se multiplica por un factor de actividad para estimar tu gasto energético diario total (TDEE, por sus siglas en inglés):",
    table: {
      level: "Nivel de actividad",
      multiplier: "Multiplicador",
      week: "Semana típica",
      // Same order as the multipliers 1.2, 1.375, 1.55, 1.725, 1.9.
      rows: [
        { level: "Sedentario", week: "Trabajo de oficina, poco o ningún ejercicio" },
        { level: "Poco activo", week: "Ejercicio ligero 1–3 días/semana" },
        { level: "Moderadamente activo", week: "Ejercicio moderado 3–5 días/semana" },
        { level: "Muy activo", week: "Ejercicio intenso 6–7 días/semana" },
        { level: "Extremadamente activo", week: "Trabajo físico más entrenamiento" },
      ],
    },
    example:
      "<b>Ejemplo práctico:</b> un hombre de 30 años, de 175 cm y 75 kg, tiene una TMB de 10×75 + 6,25×175 − 5×30 + 5 = 1.699 kcal. Si hace ejercicio 3–5 días a la semana (×1,55), su mantenimiento es de ≈ 2.633 kcal/día: unas 2.133 para perder ~0,5 kg/semana, o ~2.933 para ganar músculo con un superávit moderado.",
    numberHeading: "Qué hacer con tu número",
    number:
      "Un objetivo solo funciona si haces seguimiento en función de él. Reparte tus calorías de forma razonable a lo largo del día —nuestra <macro>calculadora de macros</macro> gratuita convierte la cifra en objetivos de proteína, carbohidratos y grasa— y pésate cada semana, ajustando 100–200 kcal si tu tendencia no es la esperada. Si quieres entender la mitad de los cálculos que corresponde a la energía en reposo, consulta la <bmr>calculadora de TMB</bmr>.",
    ramadanHeading: "Calorías durante el Ramadán y el ayuno",
    ramadan:
      "El ayuno cambia <em>cuándo</em> comes, no cuánto necesita tu cuerpo. Durante el Ramadán, intenta alcanzar tu objetivo diario entre el suhoor y el iftar: basa el suhoor en proteína y carbohidratos de absorción lenta, rompe el ayuno con líquidos y dátiles, y mantén equilibrada la comida principal del iftar en lugar de concentrarlo todo en un plato enorme. La misma lógica se aplica al 16:8 y a otros protocolos; nuestra <guide>guía de 16:8 para principiantes</guide> explica los detalles.",
    faqs: [
      {
        question: "¿Cuántas calorías debo comer para bajar de peso?",
        answer:
          "Un déficit de unas 500 kcal por debajo de tu nivel de mantenimiento supone perder aproximadamente 0,5 kg (1 lb) por semana. Usa la calculadora de arriba para conocer tus calorías de mantenimiento y réstale 500, pero evita bajar de 1.200 kcal/día sin supervisión médica.",
      },
      {
        question: "¿Qué fórmula usa esta calculadora de calorías?",
        answer:
          "Usa la ecuación de Mifflin–St Jeor, considerada en general la fórmula más precisa para estimar las necesidades de energía en reposo, multiplicada por un factor de actividad entre 1,2 (sedentario) y 1,9 (extremadamente activo).",
      },
      {
        question: "¿Qué tan precisas son las calculadoras de calorías?",
        answer:
          "Las ecuaciones aciertan con un margen de aproximadamente ±10 % en la mayoría de las personas. Toma la cifra como punto de partida: registra lo que comes y tu peso durante 2–3 semanas y ajusta 100–200 kcal si tu tendencia real se aleja del objetivo.",
      },
      {
        question: "¿Cambian mis necesidades de calorías durante el Ramadán?",
        answer:
          "Tus necesidades energéticas diarias totales se mantienen más o menos iguales; lo que cambia es la ventana de alimentación. Intenta alcanzar tu objetivo diario habitual entre el suhoor y el iftar, basando cada comida en proteína y líquidos en lugar de concentrarlo todo en una sola comida abundante.",
      },
    ],
    ctaTitle: "Alcanza tu objetivo cada día",
    ctaBody:
      "MyNutriRise controla tus calorías automáticamente: toma una foto de tu comida y la IA la registra por ti.",
    calc: {
      activityLabel: "Nivel de actividad",
      // Same order as the multipliers 1.2, 1.375, 1.55, 1.725, 1.9.
      activityLevels: [
        "Sedentario (poco o ningún ejercicio)",
        "Poco activo (1–3 días/semana)",
        "Moderadamente activo (3–5 días/semana)",
        "Muy activo (6–7 días/semana)",
        "Extremadamente activo (trabajo físico + entrenamiento)",
      ],
      lose: "Bajar de peso",
      maintain: "Mantener",
      gain: "Ganar músculo",
      empty: "Completa tus datos para ver tus objetivos diarios de calorías.",
    },
  },

  idealWeight: {
    metaTitle: "Calculadora de peso ideal según tu altura",
    metaDescription:
      "Calculadora de peso ideal gratuita con las fórmulas de Devine y Robinson y el rango de IMC saludable: encuentra un objetivo realista para tu altura.",
    breadcrumb: "Peso ideal",
    title: "Calculadora de peso ideal",
    subtitle: "Estima un rango de peso saludable para tu altura: gratis y sin registro.",
    meansHeading: "Qué significa realmente «peso ideal»",
    means:
      "No existe un único número perfecto. Las fórmulas de <b>Devine</b> y <b>Robinson</b> se desarrollaron para calcular dosis clínicas y ofrecen un punto medio útil, mientras que el rango basado en el IMC (18,5–24,9) muestra el intervalo que suele asociarse con una buena salud:",
    formulas: [
      "Devine (hombres): 50 kg + 2,3 kg por cada pulgada por encima de 5 pies",
      "Devine (mujeres): 45,5 kg + 2,3 kg por cada pulgada por encima de 5 pies",
      "Robinson (hombres): 52 kg + 1,9 kg por cada pulgada por encima de 5 pies",
      "Robinson (mujeres): 49 kg + 1,7 kg por cada pulgada por encima de 5 pies",
    ],
    meansNote:
      "La masa muscular, la complexión y el origen étnico influyen en lo que es adecuado para ti: usa el rango como una orientación, no como una fecha límite.",
    sustainHeading: "Llegar de forma sostenible",
    sustain:
      "Elige un objetivo dentro de tu rango saludable y trabaja hacia atrás: la <calorie>calculadora de calorías</calorie> te da la ingesta diaria para un cambio de 0,25–0,5 kg por semana, y la <bmi>calculadora de IMC</bmi> te permite comprobar tu progreso por el camino.",
    faqs: [
      {
        question: "¿Cómo se calcula el peso ideal?",
        answer:
          "Esta herramienta muestra tres enfoques: las fórmulas clínicas de Devine y Robinson (basadas en la altura y el sexo) y el intervalo de peso que mantiene tu IMC entre 18,5 y 24,9.",
      },
      {
        question: "¿Por qué las fórmulas dan cifras distintas?",
        answer:
          "Cada una se ajustó con datos de poblaciones diferentes. La diferencia entre ellas es una ventaja: tu peso saludable es un rango, no un punto.",
      },
      {
        question: "¿El peso ideal es distinto para hombres y mujeres?",
        answer:
          "Sí: a la misma altura, las fórmulas asignan a los hombres una base más alta por las diferencias medias en masa muscular y complexión.",
      },
      {
        question: "¿Y si estoy lejos de mi rango ideal?",
        answer:
          "Apunta a un ritmo sostenible: 0,25–0,5 kg por semana mediante un déficit o superávit moderado de calorías, con la proteína y la actividad regular como base.",
      },
    ],
    ctaTitle: "Llega de forma sostenible",
    ctaBody: "MyNutriRise fija un ritmo realista, sigue la tendencia de tu peso y registra tus comidas a partir de una sola foto.",
    calc: {
      healthyRange: "Rango de peso saludable (IMC 18,5–24,9)",
      rangeValue: "{min}–{max} kg",
      devine: "Fórmula de Devine",
      robinson: "Fórmula de Robinson",
      formulaValue: "{value} kg",
      empty: "Introduce tu altura para ver tu rango de peso ideal estimado.",
    },
  },

  macro: {
    metaTitle: "Calculadora de macros: proteína, HC y grasa",
    metaDescription:
      "Calculadora de macros gratuita: tus calorías en objetivos de proteína, carbohidratos y grasa, con reparto equilibrado, alto en proteína, keto o resistencia.",
    breadcrumb: "Calculadora de macros",
    title: "Calculadora de macros",
    subtitle: "Convierte tu meta de calorías en objetivos diarios de proteína, carbohidratos y grasa: gratis y sin registro.",
    chooseHeading: "Cómo elegir tu reparto",
    choose:
      "Un reparto <b>equilibrado</b> (30 % proteína / 40 % carbohidratos / 30 % grasa) va bien a la mayoría de las personas. Opta por uno <b>alto en proteína</b> (40 %) si quieres ganar músculo o conservarlo durante un déficit; además, la proteína es el macro que más sacia. El reparto <b>keto</b> mantiene los carbohidratos cerca del 5 % para planes bajos en carbohidratos, y el de <b>resistencia</b> eleva los carbohidratos al 50 % para sostener grandes volúmenes de entrenamiento.",
    math:
      "El cálculo es sencillo: la proteína y los carbohidratos aportan <b>4 kcal por gramo</b>, y la grasa, <b>9 kcal por gramo</b>. Con 2.000 kcal y un reparto equilibrado, eso son 150 g de proteína, 200 g de carbohidratos y 67 g de grasa.",
    startHeading: "Parte de la cifra de calorías correcta",
    start:
      "Tu reparto solo es tan bueno como las calorías que divide. Si todavía no has fijado un objetivo diario, usa primero la <calorie>calculadora de calorías</calorie>; y si comes platos tradicionales, nuestra guía para <guide>controlar los macros con comidas culturales</guide> te muestra cómo alcanzar estos objetivos con biryani, tajín y kabuli pulao en el menú.",
    practiceHeading: "Cómo cumplir tus macros en la práctica",
    practice:
      "Construye cada comida en torno a una fuente de proteína, ajusta los carbohidratos según tu día de entrenamiento y deja la grasa como el resto. La constancia es más importante que la precisión: quedarte a ±10 g de cada objetivo ya es un buen día.",
    faqs: [
      {
        question: "¿Qué reparto de macros es mejor para bajar de peso?",
        answer:
          "Lo que más ayuda es más proteína: un 35–40 % de proteína preserva el músculo y te mantiene saciado durante un déficit de calorías. Lo que impulsa la pérdida de peso es el déficit en sí, no el reparto exacto.",
      },
      {
        question: "¿Cuánta proteína necesito para ganar músculo?",
        answer:
          "Alrededor de 1,6–2,2 g por kg de peso corporal al día. El reparto alto en proteína (40 %) con un superávit moderado alcanza ese rango en la mayoría de las personas.",
      },
      {
        question: "¿Importan más los macros que las calorías?",
        answer:
          "Las calorías determinan el cambio de peso; los macros determinan cómo te sientes y qué conservas. Fija primero las calorías y luego usa los macros para proteger tu músculo y tu energía.",
      },
      {
        question: "¿Puedo controlar los macros con comida halal o cultural?",
        answer: `Sí: los platos combinados como el biryani o el tajín tienen perfiles de macros conocidos. MyNutriRise abarca ${f.CUISINES} cocinas del mundo con la proteína, los carbohidratos y la grasa por porción.`,
      },
    ],
    ctaTitle: "Controla tus macros automáticamente",
    ctaBody:
      "Toma una foto y MyNutriRise registra la proteína, los carbohidratos y la grasa por ti, con desgloses diarios frente a tus objetivos.",
    calc: {
      caloriesLabel: "Calorías diarias",
      hint: "¿No sabes cuáles son las tuyas? Usa primero la <link>calculadora de calorías</link>.",
      dietAria: "Tipo de dieta",
      splits: {
        balanced: "Equilibrado",
        highprotein: "Alto en proteína",
        keto: "Keto / bajo en carbos",
        endurance: "Resistencia",
      },
      splitSummary: "{p} % proteína · {c} % carbohidratos · {f} % grasa",
      protein: "Proteína",
      carbs: "Carbohidratos",
      fat: "Grasa",
      grams: "{n} g",
      empty: "Introduce tus calorías diarias para ver tus objetivos de macros.",
    },
  },
});

export default tools;
