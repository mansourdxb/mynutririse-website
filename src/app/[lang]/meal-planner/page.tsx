import type { Metadata } from "next";
import { LandingPage, landingMetadata, type LandingConfig } from "@/components/landing/LandingPage";
import type { Locale } from "@/i18n/config";

const config: LandingConfig = {
  slug: "meal-planner",
  tools: ["calorie", "macro", "protein"],
  guides: ["how-many-calories-to-lose-weight", "track-macros-halal-cultural-meals", "ai-photo-calorie-tracking"],
};

export async function generateMetadata({ params }: PageProps<"/[lang]/meal-planner">): Promise<Metadata> {
  return landingMetadata((await params).lang as Locale, config.slug);
}

export default async function MealPlannerPage({ params }: PageProps<"/[lang]/meal-planner">) {
  return <LandingPage lang={(await params).lang as Locale} config={config} />;
}
