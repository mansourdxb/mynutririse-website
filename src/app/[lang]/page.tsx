import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Goals } from "@/components/sections/Goals";
import { PressBar } from "@/components/sections/PressBar";
import { Science } from "@/components/sections/Science";
import { Community } from "@/components/sections/Community";
import { HomeFaq } from "@/components/sections/HomeFaq";
import { HomeIntro } from "@/components/sections/HomeIntro";
import { HomeResources } from "@/components/sections/HomeResources";
import { Premium } from "@/components/sections/Premium";
import { CTA } from "@/components/sections/CTA";
import { MotionProvider } from "@/components/ui/MotionProvider";
import {
  APP_STORE_URL,
  BASE_URL,
  BRAND,
  ORGANIZATION_ID,
  PLAY_STORE_URL,
  absoluteUrl,
  screenshot,
  type Locale,
} from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";

// Screens listed in the MobileApplication JSON-LD (public/screenshots/<lang>/).
const jsonLdScreens = ["today", "meal-photos", "food-detail", "analytics", "fasting", "recipes"];

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const { site } = getMessages(lang).common;
  // The home title already carries the brand, so it skips the title template.
  return pageMetadata(lang, "/", { title: { absolute: site.title }, description: site.description });
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const lang = (await params).lang as Locale;
  const m = getMessages(lang);
  const t = m.home;

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "@id": `${BASE_URL}/#app`,
    name: BRAND,
    operatingSystem: "iOS, Android",
    applicationCategory: "HealthApplication",
    description: t.jsonLd.appDescription,
    inLanguage: lang,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url: absoluteUrl(lang, "/"),
    installUrl: [APP_STORE_URL, PLAY_STORE_URL],
    screenshot: jsonLdScreens.map((name) => `${BASE_URL}${screenshot(lang, name)}`),
    publisher: { "@id": ORGANIZATION_ID },
    // TODO(owner): add aggregateRating only from real store rating data
    // (ratingValue + ratingCount). No rating figures exist in the codebase.
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero lang={lang} t={t.hero} store={m.common.store} />
      <PressBar t={t.pressBar} />
      <HowItWorks t={t.howItWorks} />
      <Goals lang={lang} t={t.goals} />
      <MotionProvider>
        <Features lang={lang} t={m.features} />
      </MotionProvider>
      <AppShowcase lang={lang} t={t.showcase} />
      <Premium lang={lang} t={t.premium} store={m.common.store} />
      <Science t={t.science} />
      <HomeIntro t={t.intro} />
      <HomeResources lang={lang} t={t.resources} tools={m.tools.index.cards} />
      <Community t={t.community} />
      <HomeFaq lang={lang} t={t.faq} />
      <CTA lang={lang} t={t.cta} store={m.common.store} />
    </>
  );
}
