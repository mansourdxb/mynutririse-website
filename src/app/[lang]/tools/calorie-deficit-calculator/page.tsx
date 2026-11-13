import type { Metadata } from "next";
import { DeficitCalculator } from "@/components/tools/DeficitCalculator";
import { ToolPage, toolMetadata } from "@/components/tools/ToolPage";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/calorie-deficit-calculator">): Promise<Metadata> {
  return toolMetadata((await params).lang as Locale, "deficit");
}

export default async function DeficitCalculatorPage({ params }: PageProps<"/[lang]/tools/calorie-deficit-calculator">) {
  const lang = (await params).lang as Locale;
  const { tools } = getMessages(lang);
  return (
    <ToolPage lang={lang} toolKey="deficit">
      <DeficitCalculator
        lang={lang}
        t={tools.deficit.calc}
        s={tools.shared}
        activityLabel={tools.calorie.calc.activityLabel}
        activityLevels={tools.calorie.calc.activityLevels}
      />
    </ToolPage>
  );
}
