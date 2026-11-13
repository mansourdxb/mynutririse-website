import type { Block } from "@/components/content/ContentBlocks";

/** Copy for one landing page in one language. */
export type LandingContent = {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  /** The H1; must contain the page's main keyword. */
  title: string;
  intro: string;
  /** `name` is a file in public/screenshots/<lang>/ (without .webp). */
  screenshots: readonly { name: string; alt: string; caption: string }[];
  blocks: readonly Block[];
  faqs: readonly { question: string; answer: string }[];
  disclaimer: string;
  ctaTitle: string;
  ctaBody: string;
};
