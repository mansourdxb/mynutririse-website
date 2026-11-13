import type { Metadata } from "next";
import { BmiCalculator } from "@/components/tools/BmiCalculator";
import { ToolPage, toolMetadata } from "@/components/tools/ToolPage";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/bmi-calculator">): Promise<Metadata> {
  return toolMetadata((await params).lang as Locale, "bmi");
}

export default async function BmiCalculatorPage({ params }: PageProps<"/[lang]/tools/bmi-calculator">) {
  const lang = (await params).lang as Locale;
  const { tools } = getMessages(lang);
  return (
    <ToolPage lang={lang} toolKey="bmi">
      <BmiCalculator t={tools.bmi.calc} s={tools.shared} />
    </ToolPage>
  );
}
