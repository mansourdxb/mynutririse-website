import type { Facts } from "@/data/facts";
import type en from "../en/press";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Kit de prensa",
  metaDescription:
    "Recursos de prensa de MyNutriRise: texto de presentación, ficha técnica, recursos de marca y contacto para medios.",
  title: "Kit de prensa",
  intro: "Todo lo que necesitas para escribir sobre MyNutriRise.",
  boilerplateTitle: "Texto de presentación",
  boilerplate: `MyNutriRise es una app de nutrición y fitness con IA creada para las personas que los grandes contadores de calorías pasan por alto. Los usuarios fotografían cualquier comida y la IA registra al instante las calorías y los macros, con ${f.RECIPES} recetas y ${f.CUISINES} cocinas del mundo, planes de alimentación aptos para halal, ${f.FASTING_PLAN_COUNT} planes de ayuno intermitente que incluyen un horario de Ramadán, seguimiento de entrenamientos y un coach IA. Disponible en iOS y Android en inglés, árabe, alemán, español, francés y ruso.`,
  factSheetTitle: "Ficha técnica",
  factSheet: [
    { key: "Producto", value: "MyNutriRise: app de seguimiento de nutrición y fitness con IA" },
    { key: "Plataformas", value: "iOS y Android" },
    { key: "Idiomas", value: "Inglés, árabe, alemán, español, francés y ruso" },
    {
      key: "Recetas",
      value: `${f.RECIPES}, con cantidades reales de ingredientes y pasos de preparación, en ${f.DISHES} platos`,
    },
    { key: "Cocinas", value: `${f.CUISINES} cocinas del mundo, con el filtro halal verificado en cada plato` },
    {
      key: "Planes de ayuno",
      value: `${f.FASTING_PLAN_COUNT} planes, incluidos 16:8, 5:2, OMAD y un horario de Ramadán`,
    },
    { key: "Planes de alimentación", value: `${f.DIET_PLAN_COUNT} planes guiados de 4 semanas, incluido «Saludable de Medio Oriente»` },
    {
      key: "Biblioteca de entrenamientos",
      value: `${f.STRENGTH_EXERCISE_COUNT} ejercicios de fuerza, ${f.CARDIO_ACTIVITY_COUNT} actividades de cardio y deportivas, y rutinas predefinidas`,
    },
    { key: "Precio", value: "Descarga gratuita; suscripción Premium opcional" },
    { key: "Sitio web", value: "www.mynutririse.com" },
  ],
  assetsTitle: "Recursos de marca",
  logo: "Logotipo de la app (PNG)",
  screenshots: "Capturas de pantalla de la app: disponibles bajo petición, o usa las pantallas que se muestran en este sitio.",
  colors: "Colores de marca: esmeralda <code>#10b981</code>, blanco <code>#FFFFFF</code>, pizarra <code>#1e293b</code>",
  contactTitle: "Contacto para medios",
  contact: "Para entrevistas, acceso para reseñas o cualquier otra consulta: <link>contact@mynutririse.com</link>",
});
