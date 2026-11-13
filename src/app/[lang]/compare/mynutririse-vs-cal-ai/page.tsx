import type { Metadata } from "next";
import { ComparePage, compareMetadata } from "@/components/compare/ComparePage";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/compare/mynutririse-vs-cal-ai">): Promise<Metadata> {
  return compareMetadata((await params).lang as Locale, "mynutririse-vs-cal-ai");
}

export default async function CalAiComparePage({ params }: PageProps<"/[lang]/compare/mynutririse-vs-cal-ai">) {
  return <ComparePage lang={(await params).lang as Locale} slug="mynutririse-vs-cal-ai" />;
}
