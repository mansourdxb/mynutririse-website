import type { Metadata } from "next";
import { IdealWeightCalculator } from "@/components/tools/IdealWeightCalculator";
import { ToolPage, toolMetadata } from "@/components/tools/ToolPage";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/ideal-weight-calculator">): Promise<Metadata> {
  return toolMetadata((await params).lang as Locale, "idealWeight");
}

export default async function IdealWeightCalculatorPage({ params }: PageProps<"/[lang]/tools/ideal-weight-calculator">) {
  const lang = (await params).lang as Locale;
  const { tools } = getMessages(lang);
  return (
    <ToolPage lang={lang} toolKey="idealWeight">
      <IdealWeightCalculator t={tools.idealWeight.calc} s={tools.shared} />
    </ToolPage>
  );
}
