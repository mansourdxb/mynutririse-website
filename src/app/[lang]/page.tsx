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
import { Premium } from "@/components/sections/Premium";
import { CTA } from "@/components/sections/CTA";
import { BASE_URL, localePath, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  return pageMetadata(lang, "/", {});
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const lang = (await params).lang as Locale;
  const m = getMessages(lang);
  const t = m.home;

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "MyNutriRise",
    operatingSystem: "iOS, Android",
    applicationCategory: "HealthApplication",
    description: t.jsonLd.appDescription,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url: `${BASE_URL}${localePath(lang, "/")}`,
    installUrl: "https://apps.apple.com/app/mynutririse/id6764006876",
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
      <Features lang={lang} t={m.features} />
      <AppShowcase lang={lang} t={t.showcase} />
      <Premium lang={lang} t={t.premium} store={m.common.store} />
      <Science t={t.science} />
      <Community t={t.community} />
      <HomeFaq lang={lang} t={t.faq} />
      <CTA lang={lang} t={t.cta} store={m.common.store} />
    </>
  );
}
