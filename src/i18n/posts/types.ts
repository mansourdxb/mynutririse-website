import type { Block } from "@/components/content/ContentBlocks";

/** Copy for one blog post in one language. */
export type PostContent = {
  title: string;
  /** <title>; defaults to `title` when omitted. */
  metaTitle?: string;
  description: string;
  breadcrumb: string;
  readTime: string;
  blocks: readonly Block[];
  cta: { heading: string; body: string };
};
