import type { Metadata } from "next";
import { ProteinCalculator } from "@/components/tools/ProteinCalculator";
import { ToolPage, toolMetadata } from "@/components/tools/ToolPage";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/protein-calculator">): Promise<Metadata> {
  return toolMetadata((await params).lang as Locale, "protein");
}

export default async function ProteinCalculatorPage({ params }: PageProps<"/[lang]/tools/protein-calculator">) {
  const lang = (await params).lang as Locale;
  const { tools } = getMessages(lang);
  return (
    <ToolPage lang={lang} toolKey="protein">
      <ProteinCalculator lang={lang} t={tools.protein.calc} s={tools.shared} />
    </ToolPage>
  );
}
