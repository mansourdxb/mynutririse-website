import type { Metadata } from "next";
import { LandingPage, landingMetadata, type LandingConfig } from "@/components/landing/LandingPage";
import type { Locale } from "@/i18n/config";

const config: LandingConfig = {
  slug: "muscle-gain-app",
  tools: ["protein", "macro", "bodyFat"],
  guides: ["track-macros-halal-cultural-meals", "ai-photo-calorie-tracking"],
};

export async function generateMetadata({ params }: PageProps<"/[lang]/muscle-gain-app">): Promise<Metadata> {
  return landingMetadata((await params).lang as Locale, config.slug);
}

export default async function MuscleGainAppPage({ params }: PageProps<"/[lang]/muscle-gain-app">) {
  return <LandingPage lang={(await params).lang as Locale} config={config} />;
}
