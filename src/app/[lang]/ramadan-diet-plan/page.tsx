import type { Metadata } from "next";
import { LandingPage, landingMetadata, type LandingConfig } from "@/components/landing/LandingPage";
import type { Locale } from "@/i18n/config";

const config: LandingConfig = {
  slug: "ramadan-diet-plan",
  tools: ["tdee", "protein", "deficit"],
  guides: ["ramadan-weight-loss-without-losing-muscle", "intermittent-fasting-16-8-guide", "track-macros-halal-cultural-meals"],
};

export async function generateMetadata({ params }: PageProps<"/[lang]/ramadan-diet-plan">): Promise<Metadata> {
  return landingMetadata((await params).lang as Locale, config.slug);
}

export default async function RamadanDietPlanPage({ params }: PageProps<"/[lang]/ramadan-diet-plan">) {
  return <LandingPage lang={(await params).lang as Locale} config={config} />;
}
