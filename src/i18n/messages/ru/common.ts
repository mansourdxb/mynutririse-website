import type { Facts } from "@/data/facts";
import type en from "../en/common";

// Shared UI strings: site metadata, navigation, footer, buttons, 404, download.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  site: {
    title: "MyNutriRise: ИИ-счётчик калорий и халяльное питание",
    titleTemplate: "%s — MyNutriRise",
    description:
      "Считай калории, сканируй блюда с помощью ИИ, следуй персональным планам питания и формируй здоровые привычки с MyNutriRise — твоим умным помощником для здоровья.",
    ogDescription:
      "Считай калории, сканируй блюда с помощью ИИ, следуй персональным планам питания и каждый день формируй здоровые привычки.",
    twitterDescription:
      "Твой умный помощник для учёта питания, сканирования блюд и здоровой жизни.",
    ogImageAlt: "MyNutriRise — учёт питания и фитнеса для реальной жизни",
  },
  nav: {
    features: "Возможности",
    tools: "Инструменты",
    customPlan: "Свой план",
    premium: "Premium",
    recipes: "Рецепты",
    blog: "Блог",
    support: "Поддержка",
    download: "Скачать приложение",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    language: "Язык",
  },
  footer: {
    tagline:
      "Твой умный помощник для здоровья — ИИ-сканирование блюд, халяльные и национальные рецепты, голодание и коучинг в одном приложении.",
    product: "Продукт",
    resources: "Ресурсы",
    company: "Компания",
    features: "Возможности",
    recipes: "Рецепты",
    halal: "Халяльное питание",
    premium: "Premium",
    compare: "Сравнение",
    download: "Скачать",
    helpCenter: "Справочный центр",
    blog: "Блог",
    quiz: "Тест для своего плана",
    tools: "Бесплатные инструменты",
    about: "О нас",
    press: "Для прессы",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    contact: "Контакты",
    rights: "MyNutriRise. Все права защищены.",
    madeWith: "Сделано с {heart} для здоровой жизни",
    heartLabel: "зелёное сердце",
    languages: "Языки",
  },
  store: {
    appleSmall: "Загрузите в",
    appleBig: "App Store",
    googleSmall: "ДОСТУПНО В",
    googleBig: "Google Play",
    reassurance: "Скачать бесплатно · Premium по желанию · Отмена в любой момент",
  },
  breadcrumbs: {
    home: "Главная",
    label: "Навигационная цепочка",
  },
  notFound: {
    eyebrow: "404",
    title: "Эта страница куда-то ушла",
    body: "Страница, которую ты ищешь, не существует или была перемещена.",
    back: "На главную",
  },
  download: {
    metaTitle: "Скачать MyNutriRise",
    metaDescription:
      "Скачай MyNutriRise для iPhone или Android — ИИ-сканирование блюд, халяльные и национальные планы питания, голодание и коучинг.",
    title: "Установи MyNutriRise",
    body: "На телефоне ты сразу попадёшь в магазин приложений. На компьютере выбери свою платформу:",
  },
  // Language names as written in this language (used in prose and lists).
  languageNames: ["английский", "арабский", "немецкий", "испанский", "французский", "русский"],
  /** "English, Arabic, German, Spanish, French, and Russian" */
  languageList: "английский, арабский, немецкий, испанский, французский и русский",
  /** Shown at the top of translated legal pages; empty in English. */
  legalBindingNote:
    "Это перевод, предоставленный для удобства. Юридически обязывающей является английская версия, и в случае расхождений преимущественную силу имеет она.",
});
