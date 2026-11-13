import type { Metadata } from "next";
import { LandingPage, landingMetadata, type LandingConfig } from "@/components/landing/LandingPage";
import type { Locale } from "@/i18n/config";

// Arabic-first page; also available in English (see data/pages.ts).
const config: LandingConfig = {
  slug: "arabic-calorie-counter",
  tools: ["calorie", "macro", "deficit"],
  guides: ["calories-in-gulf-arabic-dishes", "track-macros-halal-cultural-meals", "ai-photo-calorie-tracking"],
};

export async function generateMetadata({ params }: PageProps<"/[lang]/arabic-calorie-counter">): Promise<Metadata> {
  return landingMetadata((await params).lang as Locale, config.slug);
}

export default async function ArabicCalorieCounterPage({ params }: PageProps<"/[lang]/arabic-calorie-counter">) {
  return <LandingPage lang={(await params).lang as Locale} config={config} />;
}
