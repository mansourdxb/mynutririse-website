import type { Metadata } from "next";
import { ToolPage, toolMetadata } from "@/components/tools/ToolPage";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/calorie-calculator">): Promise<Metadata> {
  return toolMetadata((await params).lang as Locale, "calorie");
}

export default async function CalorieCalculatorPage({ params }: PageProps<"/[lang]/tools/calorie-calculator">) {
  const lang = (await params).lang as Locale;
  return <ToolPage lang={lang} toolKey="calorie" />;
}
