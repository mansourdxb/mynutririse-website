import type { Metadata } from "next";
import { BmrCalculator } from "@/components/tools/BmrCalculator";
import { ToolPage, toolMetadata } from "@/components/tools/ToolPage";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/bmr-calculator">): Promise<Metadata> {
  return toolMetadata((await params).lang as Locale, "bmr");
}

export default async function BmrCalculatorPage({ params }: PageProps<"/[lang]/tools/bmr-calculator">) {
  const lang = (await params).lang as Locale;
  const { tools } = getMessages(lang);
  return (
    <ToolPage lang={lang} toolKey="bmr">
      <BmrCalculator t={tools.bmr.calc} s={tools.shared} />
    </ToolPage>
  );
}
