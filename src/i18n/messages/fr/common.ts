import type { Facts } from "@/data/facts";
import type en from "../en/common";

// Shared UI strings: site metadata, navigation, footer, buttons, 404, download.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  site: {
    title: "MyNutriRise : compteur de calories IA et nutrition halal",
    titleTemplate: "%s — MyNutriRise",
    description:
      "Suivez vos calories, analysez vos repas grâce à l’IA, suivez des programmes alimentaires personnalisés et adoptez de meilleures habitudes avec MyNutriRise, votre compagnon bien-être intelligent.",
    ogDescription:
      "Suivez vos calories, analysez vos repas grâce à l’IA, suivez des programmes alimentaires personnalisés et adoptez chaque jour de meilleures habitudes.",
    twitterDescription:
      "Votre compagnon bien-être intelligent pour suivre votre nutrition, analyser vos repas et vivre plus sainement.",
    ogImageAlt: "MyNutriRise — le suivi nutrition et forme pour la vraie vie",
  },
  nav: {
    features: "Fonctionnalités",
    tools: "Outils",
    customPlan: "Programme personnalisé",
    premium: "Premium",
    recipes: "Recettes",
    blog: "Blog",
    support: "Aide",
    download: "Télécharger l’app",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
  },
  footer: {
    tagline:
      "Votre compagnon bien-être intelligent : analyse des repas par IA, recettes halal et du monde entier, jeûne et coaching réunis dans une seule app.",
    product: "Produit",
    resources: "Ressources",
    company: "Entreprise",
    features: "Fonctionnalités",
    recipes: "Recettes",
    halal: "Nutrition halal",
    premium: "Premium",
    compare: "Comparer",
    download: "Télécharger",
    helpCenter: "Centre d’aide",
    blog: "Blog",
    quiz: "Quiz programme personnalisé",
    tools: "Outils gratuits",
    about: "À propos",
    press: "Kit presse",
    privacy: "Politique de confidentialité",
    terms: "Conditions d’utilisation",
    contact: "Contact",
    rights: "MyNutriRise. Tous droits réservés.",
    madeWith: "Fait avec {heart} pour une vie plus saine",
    heartLabel: "cœur vert",
    languages: "Langues",
  },
  store: {
    appleSmall: "Télécharger dans",
    appleBig: "l’App Store",
    googleSmall: "DISPONIBLE SUR",
    googleBig: "Google Play",
    reassurance: "Téléchargement gratuit · Premium facultatif · Résiliable à tout moment",
  },
  breadcrumbs: {
    home: "Accueil",
    label: "Fil d’Ariane",
  },
  notFound: {
    eyebrow: "404",
    title: "Cette page s’est égarée",
    body: "La page que vous cherchez n’existe pas ou a été déplacée.",
    back: "Retour à l’accueil",
  },
  download: {
    metaTitle: "Télécharger MyNutriRise",
    metaDescription:
      "Téléchargez MyNutriRise sur iPhone ou Android : analyse des repas par IA, programmes halal et cuisines du monde, jeûne et coaching.",
    title: "Obtenir MyNutriRise",
    body: "Sur votre téléphone, vous serez redirigé directement vers votre boutique d’applications. Sur ordinateur, choisissez votre plateforme :",
  },
  // Language names as written in this language (used in prose and lists).
  languageNames: ["Anglais", "Arabe", "Allemand", "Espagnol", "Français", "Russe"],
  /** "English, Arabic, German, Spanish, French, and Russian" */
  languageList: "anglais, arabe, allemand, espagnol, français et russe",
  /** Shown at the top of translated legal pages; empty in English. */
  legalBindingNote:
    "Cette traduction est fournie à titre indicatif. Seule la version anglaise fait foi en cas de divergence.",
});
