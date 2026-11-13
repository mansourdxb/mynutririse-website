import type { Metadata } from "next";
import { TdeeCalculator } from "@/components/tools/TdeeCalculator";
import { ToolPage, toolMetadata } from "@/components/tools/ToolPage";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/tdee-calculator">): Promise<Metadata> {
  return toolMetadata((await params).lang as Locale, "tdee");
}

export default async function TdeeCalculatorPage({ params }: PageProps<"/[lang]/tools/tdee-calculator">) {
  const lang = (await params).lang as Locale;
  const { tools } = getMessages(lang);
  return (
    <ToolPage lang={lang} toolKey="tdee">
      <TdeeCalculator lang={lang} t={tools.tdee.calc} s={tools.shared} activityLevels={tools.calorie.calc.activityLevels} />
    </ToolPage>
  );
}
