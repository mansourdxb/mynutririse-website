import type { Metadata } from "next";
import { ToolPage, toolMetadata } from "@/components/tools/ToolPage";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/protein-calculator">): Promise<Metadata> {
  return toolMetadata((await params).lang as Locale, "protein");
}

export default async function ProteinCalculatorPage({ params }: PageProps<"/[lang]/tools/protein-calculator">) {
  const lang = (await params).lang as Locale;
  return <ToolPage lang={lang} toolKey="protein" />;
}
