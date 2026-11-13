import type { Metadata } from "next";
import { MacroCalculator } from "@/components/tools/MacroCalculator";
import { ToolPage, toolMetadata } from "@/components/tools/ToolPage";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/macro-calculator">): Promise<Metadata> {
  return toolMetadata((await params).lang as Locale, "macro");
}

export default async function MacroCalculatorPage({ params }: PageProps<"/[lang]/tools/macro-calculator">) {
  const lang = (await params).lang as Locale;
  const { tools } = getMessages(lang);
  return (
    <ToolPage lang={lang} toolKey="macro">
      <MacroCalculator lang={lang} t={tools.macro.calc} s={tools.shared} />
    </ToolPage>
  );
}
