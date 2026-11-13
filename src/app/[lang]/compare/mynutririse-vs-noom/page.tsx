import type { Metadata } from "next";
import { ComparePage, compareMetadata } from "@/components/compare/ComparePage";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/compare/mynutririse-vs-noom">): Promise<Metadata> {
  return compareMetadata((await params).lang as Locale, "mynutririse-vs-noom");
}

export default async function NoomComparePage({ params }: PageProps<"/[lang]/compare/mynutririse-vs-noom">) {
  return <ComparePage lang={(await params).lang as Locale} slug="mynutririse-vs-noom" />;
}
