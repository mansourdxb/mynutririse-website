import type { Metadata } from "next";
import { ToolPage, toolMetadata } from "@/components/tools/ToolPage";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/bmr-calculator">): Promise<Metadata> {
  return toolMetadata((await params).lang as Locale, "bmr");
}

export default async function BmrCalculatorPage({ params }: PageProps<"/[lang]/tools/bmr-calculator">) {
  const lang = (await params).lang as Locale;
  return <ToolPage lang={lang} toolKey="bmr" />;
}
