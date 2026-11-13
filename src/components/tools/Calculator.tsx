import type { ToolKey } from "@/data/tools";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { BmiCalculator } from "./BmiCalculator";
import { BmrCalculator } from "./BmrCalculator";
import { BodyFatCalculator } from "./BodyFatCalculator";
import { CalorieCalculator } from "./CalorieCalculator";
import { DeficitCalculator } from "./DeficitCalculator";
import { IdealWeightCalculator } from "./IdealWeightCalculator";
import { MacroCalculator } from "./MacroCalculator";
import { ProteinCalculator } from "./ProteinCalculator";
import { TdeeCalculator } from "./TdeeCalculator";

/** The interactive calculator for a tool, used by the tool page and its embed. */
export function Calculator({ toolKey, lang }: { toolKey: ToolKey; lang: Locale }) {
  const { tools } = getMessages(lang);
  const s = tools.shared;
  switch (toolKey) {
    case "calorie":
      return <CalorieCalculator t={tools.calorie.calc} s={s} />;
    case "macro":
      return <MacroCalculator lang={lang} t={tools.macro.calc} s={s} />;
    case "bmi":
      return <BmiCalculator t={tools.bmi.calc} s={s} />;
    case "bmr":
      return <BmrCalculator t={tools.bmr.calc} s={s} />;
    case "idealWeight":
      return <IdealWeightCalculator t={tools.idealWeight.calc} s={s} />;
    case "tdee":
      return <TdeeCalculator lang={lang} t={tools.tdee.calc} s={s} activityLevels={tools.calorie.calc.activityLevels} />;
    case "protein":
      return <ProteinCalculator lang={lang} t={tools.protein.calc} s={s} />;
    case "deficit":
      return (
        <DeficitCalculator
          lang={lang}
          t={tools.deficit.calc}
          s={s}
          activityLabel={tools.calorie.calc.activityLabel}
          activityLevels={tools.calorie.calc.activityLevels}
        />
      );
    case "bodyFat":
      return <BodyFatCalculator lang={lang} t={tools.bodyFat.calc} s={s} />;
  }
}
