import type { Metadata } from "next";
import { ToolPage, toolMetadata } from "@/components/tools/ToolPage";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/bmi-calculator">): Promise<Metadata> {
  return toolMetadata((await params).lang as Locale, "bmi");
}

export default async function BmiCalculatorPage({ params }: PageProps<"/[lang]/tools/bmi-calculator">) {
  const lang = (await params).lang as Locale;
  return <ToolPage lang={lang} toolKey="bmi" />;
}
