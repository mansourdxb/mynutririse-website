import type { Metadata } from "next";
import { BodyFatCalculator } from "@/components/tools/BodyFatCalculator";
import { ToolPage, toolMetadata } from "@/components/tools/ToolPage";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/body-fat-calculator">): Promise<Metadata> {
  return toolMetadata((await params).lang as Locale, "bodyFat");
}

export default async function BodyFatCalculatorPage({ params }: PageProps<"/[lang]/tools/body-fat-calculator">) {
  const lang = (await params).lang as Locale;
  const { tools } = getMessages(lang);
  return (
    <ToolPage lang={lang} toolKey="bodyFat">
      <BodyFatCalculator lang={lang} t={tools.bodyFat.calc} s={tools.shared} />
    </ToolPage>
  );
}
