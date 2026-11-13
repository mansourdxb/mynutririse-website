import type { Metadata } from "next";
import { ToolPage, toolMetadata } from "@/components/tools/ToolPage";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/ideal-weight-calculator">): Promise<Metadata> {
  return toolMetadata((await params).lang as Locale, "idealWeight");
}

export default async function IdealWeightCalculatorPage({ params }: PageProps<"/[lang]/tools/ideal-weight-calculator">) {
  const lang = (await params).lang as Locale;
  return <ToolPage lang={lang} toolKey="idealWeight" />;
}
