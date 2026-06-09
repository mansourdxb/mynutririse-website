import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { SocialProof } from "@/components/sections/SocialProof";
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <Hero />
      <SocialProof />
      <Features />
      <AppShowcase />
      <Premium />
      <CTA />
    </>
  );
}
