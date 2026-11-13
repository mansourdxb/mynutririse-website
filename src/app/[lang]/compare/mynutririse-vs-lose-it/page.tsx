import type { Metadata } from "next";
import { ComparePage, compareMetadata } from "@/components/compare/ComparePage";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: PageProps<"/[lang]/compare/mynutririse-vs-lose-it">): Promise<Metadata> {
  return compareMetadata((await params).lang as Locale, "mynutririse-vs-lose-it");
}

export default async function LoseItComparePage({ params }: PageProps<"/[lang]/compare/mynutririse-vs-lose-it">) {
  return <ComparePage lang={(await params).lang as Locale} slug="mynutririse-vs-lose-it" />;
}
