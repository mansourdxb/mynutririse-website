import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { ArticlePage, articleMetadata } from "../ArticlePage";

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/how-much-protein-to-build-muscle">): Promise<Metadata> {
  return articleMetadata((await params).lang as Locale, "how-much-protein-to-build-muscle");
}

export default async function ProteinForMusclePost({ params }: PageProps<"/[lang]/blog/how-much-protein-to-build-muscle">) {
  return <ArticlePage lang={(await params).lang as Locale} slug="how-much-protein-to-build-muscle" />;
}
