import type { Facts } from "@/data/facts";

// Shared UI strings: site metadata, navigation, footer, buttons, 404, download.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts) => ({
  site: {
    title: "Diet & Calorie Counter App for Weight Loss | MyNutriRise",
    titleTemplate: "%s — MyNutriRise",
    description:
      "MyNutriRise is a free diet and calorie counter app for weight loss: snap a photo to log meals, track macros and follow halal meal plans. Download it free.",
    ogDescription:
      "Track calories, scan meals with AI, follow personalized meal plans, and build healthier habits daily.",
    twitterDescription:
      "Your smart wellness companion for nutrition tracking, meal scanning, and healthier living.",
    ogImageAlt: "MyNutriRise — Nutrition & Fitness tracking for real life",
  },
  nav: {
    logoAlt: "MyNutriRise logo",
    features: "Features",
    tools: "Tools",
    customPlan: "Custom Plan",
    premium: "Premium",
    recipes: "Recipes",
    blog: "Blog",
    support: "Support",
    download: "Download App",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  footer: {
    social: {
      instagram: "MyNutriRise on Instagram",
      facebook: "MyNutriRise on Facebook",
      x: "MyNutriRise on X",
    },
    tagline:
      "Your smart wellness companion — AI meal scanning, halal & cultural recipes, fasting, and coaching in one app.",
    product: "Product",
    resources: "Resources",
    company: "Company",
    features: "Features",
    recipes: "Recipes",
    halal: "Halal Nutrition",
    premium: "Premium",
    compare: "Compare",
    download: "Download",
    helpCenter: "Help Center",
    blog: "Blog",
    quiz: "Custom Plan Quiz",
    tools: "Free Tools",
    about: "About Us",
    press: "Press Kit",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    contact: "Contact",
    rights: "MyNutriRise. All rights reserved.",
    madeWith: "Made with {heart} for healthier living",
    heartLabel: "green heart",
    languages: "Languages",
  },
  store: {
    appleSmall: "Download on the",
    appleBig: "App Store",
    googleSmall: "GET IT ON",
    googleBig: "Google Play",
    reassurance: "Free to download · Premium optional · Cancel anytime",
  },
  breadcrumbs: {
    home: "Home",
    label: "Breadcrumb",
  },
  notFound: {
    eyebrow: "404",
    title: "This page wandered off",
    body: "The page you're looking for doesn't exist or has moved.",
    back: "Back to home",
  },
  download: {
    metaTitle: "Download the Free Diet App for iPhone & Android",
    metaDescription:
      "Download MyNutriRise, the free diet app for iPhone and Android: AI meal scanning, calorie and macro tracking and halal meal plans. Get started free today.",
    title: "Get MyNutriRise",
    body: "On your phone, you'll be taken straight to your app store. On desktop, pick your platform:",
  },
  // Language names as written in this language (used in prose and lists).
  languageNames: ["English", "Arabic", "German", "Spanish", "French", "Russian"],
  /** "English, Arabic, German, Spanish, French, and Russian" */
  languageList: "English, Arabic, German, Spanish, French, and Russian",
  /** Shown at the top of translated legal pages; empty in English. */
  legalBindingNote: "",
});
