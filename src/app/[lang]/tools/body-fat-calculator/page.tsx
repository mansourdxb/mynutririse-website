import type { Metadata } from "next";
import { ToolPage, toolMetadata } from "@/components/tools/ToolPage";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/body-fat-calculator">): Promise<Metadata> {
  return toolMetadata((await params).lang as Locale, "bodyFat");
}

export default async function BodyFatCalculatorPage({ params }: PageProps<"/[lang]/tools/body-fat-calculator">) {
  const lang = (await params).lang as Locale;
  return <ToolPage lang={lang} toolKey="bodyFat" />;
}
