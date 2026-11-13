import type { Metadata } from "next";
import { ToolPage, toolMetadata } from "@/components/tools/ToolPage";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/calorie-deficit-calculator">): Promise<Metadata> {
  return toolMetadata((await params).lang as Locale, "deficit");
}

export default async function DeficitCalculatorPage({ params }: PageProps<"/[lang]/tools/calorie-deficit-calculator">) {
  const lang = (await params).lang as Locale;
  return <ToolPage lang={lang} toolKey="deficit" />;
}
