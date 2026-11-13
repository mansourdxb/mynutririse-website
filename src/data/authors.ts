/**
 * Blog authors and reviewers. Language-neutral data only; role, bio and
 * location are translated in the `blog.authors` messages under the same slug.
 * Never add degrees, certifications or credentials that are not real.
 */
export type Author = {
  slug: string;
  name: string;
  /** Square photo in /public, or null until one is provided. */
  image: string | null;
  /** Personal profile URLs (e.g. LinkedIn), confirmed by the owner. */
  sameAs: readonly string[];
};

export const authors = [
  {
    slug: "mansour-shaaban",
    name: "Mansour Shaaban",
    // TODO(owner): add public/authors/mansour-shaaban.webp (400×400) and set it here.
    image: null,
    sameAs: [],
  },
] as const satisfies readonly Author[];

export type AuthorSlug = (typeof authors)[number]["slug"];

export function author(slug: AuthorSlug): Author {
  return authors.find((a) => a.slug === slug)!;
}

/**
 * A reviewer shown as "Reviewed by" on an article. Leave an article's
 * `reviewedBy` null until a qualified reviewer (e.g. a registered dietitian)
 * has actually reviewed it; the line is hidden when empty.
 */
export type Reviewer = { name: string; credentials: string; url?: string };
