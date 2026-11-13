import type { Metadata } from "next";
import { CalorieCalculator } from "@/components/tools/CalorieCalculator";
import { ToolPage, toolMetadata } from "@/components/tools/ToolPage";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/calorie-calculator">): Promise<Metadata> {
  return toolMetadata((await params).lang as Locale, "calorie");
}

export default async function CalorieCalculatorPage({ params }: PageProps<"/[lang]/tools/calorie-calculator">) {
  const lang = (await params).lang as Locale;
  const { tools } = getMessages(lang);
  return (
    <ToolPage lang={lang} toolKey="calorie">
      <CalorieCalculator t={tools.calorie.calc} s={tools.shared} />
    </ToolPage>
  );
}
