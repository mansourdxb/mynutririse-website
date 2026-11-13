import type { Metadata } from "next";
import { ToolPage, toolMetadata } from "@/components/tools/ToolPage";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/tdee-calculator">): Promise<Metadata> {
  return toolMetadata((await params).lang as Locale, "tdee");
}

export default async function TdeeCalculatorPage({ params }: PageProps<"/[lang]/tools/tdee-calculator">) {
  const lang = (await params).lang as Locale;
  return <ToolPage lang={lang} toolKey="tdee" />;
}
