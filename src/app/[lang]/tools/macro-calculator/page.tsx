import type { Metadata } from "next";
import { ToolPage, toolMetadata } from "@/components/tools/ToolPage";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/macro-calculator">): Promise<Metadata> {
  return toolMetadata((await params).lang as Locale, "macro");
}

export default async function MacroCalculatorPage({ params }: PageProps<"/[lang]/tools/macro-calculator">) {
  const lang = (await params).lang as Locale;
  return <ToolPage lang={lang} toolKey="macro" />;
}
