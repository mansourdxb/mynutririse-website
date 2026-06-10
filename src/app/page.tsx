import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { StatsBand } from "@/components/sections/StatsBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Goals } from "@/components/sections/Goals";
import { PressBar } from "@/components/sections/PressBar";
import { Science } from "@/components/sections/Science";
import { Community } from "@/components/sections/Community";
import { HomeFaq } from "@/components/sections/HomeFaq";
import { homeFaqs } from "@/components/sections/homeFaqData";
import { Premium } from "@/components/sections/Premium";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "MyNutriRise",
  operatingSystem: "iOS, Android",
  applicationCategory: "HealthApplication",
  description:
    "Track calories, scan meals with AI, follow halal and cultural meal plans, monitor fasting, and get intelligent nutrition coaching.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: "https://www.mynutririse.com",
  installUrl: "https://apps.apple.com/app/mynutririse/id6764006876",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
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
      <Hero />
      <PressBar />
      <StatsBand />
      <HowItWorks />
      <Goals />
      <Features />
      <AppShowcase />
      <Testimonials />
      <Premium />
      <Science />
      <Community />
      <HomeFaq />
      <CTA />
    </>
  );
}
