import type { Metadata } from "next";
import { LandingPage, landingMetadata, type LandingConfig } from "@/components/landing/LandingPage";
import type { Locale } from "@/i18n/config";

const config: LandingConfig = {
  slug: "weight-loss-app",
  tools: ["deficit", "tdee", "protein"],
  guides: ["ai-photo-calorie-tracking", "intermittent-fasting-16-8-guide"],
};

export async function generateMetadata({ params }: PageProps<"/[lang]/weight-loss-app">): Promise<Metadata> {
  return landingMetadata((await params).lang as Locale, config.slug);
}

export default async function WeightLossAppPage({ params }: PageProps<"/[lang]/weight-loss-app">) {
  return <LandingPage lang={(await params).lang as Locale} config={config} />;
}
