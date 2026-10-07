import type { Facts } from "@/data/facts";
import type en from "../en/common";

// Shared UI strings: site metadata, navigation, footer, buttons, 404, download.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  site: {
    title: "MyNutriRise: contador de calorías con IA y nutrición halal",
    titleTemplate: "%s — MyNutriRise",
    description:
      "Controla calorías, escanea comidas con IA, sigue planes personalizados y crea hábitos saludables con MyNutriRise, tu compañero de bienestar.",
    ogDescription:
      "Controla tus calorías, escanea tus comidas con IA, sigue planes de alimentación personalizados y crea hábitos más saludables cada día.",
    twitterDescription:
      "Tu compañero inteligente de bienestar para el seguimiento nutricional, el escaneo de comidas y una vida más saludable.",
    ogImageAlt: "MyNutriRise: seguimiento de nutrición y fitness para la vida real",
  },
  nav: {
    features: "Funciones",
    tools: "Herramientas",
    customPlan: "Plan personalizado",
    premium: "Premium",
    recipes: "Recetas",
    blog: "Blog",
    support: "Ayuda",
    download: "Descargar la app",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
  },
  footer: {
    tagline:
      "Tu compañero inteligente de bienestar: escaneo de comidas con IA, recetas halal y culturales, ayuno y coaching en una sola app.",
    product: "Producto",
    resources: "Recursos",
    company: "Empresa",
    features: "Funciones",
    recipes: "Recetas",
    halal: "Nutrición halal",
    premium: "Premium",
    compare: "Comparar",
    download: "Descargar",
    helpCenter: "Centro de ayuda",
    blog: "Blog",
    quiz: "Test de plan personalizado",
    tools: "Herramientas gratuitas",
    about: "Sobre nosotros",
    press: "Kit de prensa",
    privacy: "Política de privacidad",
    terms: "Términos del servicio",
    contact: "Contacto",
    rights: "MyNutriRise. Todos los derechos reservados.",
    madeWith: "Hecho con {heart} para una vida más saludable",
    heartLabel: "corazón verde",
    languages: "Idiomas",
  },
  store: {
    appleSmall: "Descárgalo en el",
    appleBig: "App Store",
    googleSmall: "DISPONIBLE EN",
    googleBig: "Google Play",
    reassurance: "Descarga gratuita · Premium opcional · Cancela cuando quieras",
  },
  breadcrumbs: {
    home: "Inicio",
    label: "Ruta de navegación",
  },
  notFound: {
    eyebrow: "404",
    title: "Esta página se ha perdido",
    body: "La página que buscas no existe o se ha movido.",
    back: "Volver al inicio",
  },
  download: {
    metaTitle: "Descarga MyNutriRise",
    metaDescription:
      "Descarga MyNutriRise para iPhone o Android: escaneo de comidas con IA, planes de alimentación halal y culturales, ayuno y coaching.",
    title: "Consigue MyNutriRise",
    body: "En tu teléfono irás directamente a tu tienda de aplicaciones. Desde un equipo de escritorio, elige tu plataforma:",
  },
  // Language names as written in this language (used in prose and lists).
  languageNames: ["inglés", "árabe", "alemán", "español", "francés", "ruso"],
  /** "inglés, árabe, alemán, español, francés y ruso" */
  languageList: "inglés, árabe, alemán, español, francés y ruso",
  /** Shown at the top of translated legal pages; empty in English. */
  legalBindingNote:
    "Esta traducción se ofrece solo por comodidad. La versión en inglés es la jurídicamente vinculante y prevalece en caso de discrepancia.",
});
