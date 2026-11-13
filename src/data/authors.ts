/**
 * Blog authors and reviewers. Language-neutral data only; role and bio are
 * translated in the `blog.authors` messages under the same slug.
 * TODO(owner): add a photo, credentials and profile links (sameAs) for each.
 */
export const authors = [{ slug: "mansour-shaaban", name: "Mansour Shaaban" }] as const;

export type AuthorSlug = (typeof authors)[number]["slug"];

export function author(slug: AuthorSlug) {
  return authors.find((a) => a.slug === slug)!;
}

/**
 * A reviewer shown as "Reviewed by" on an article. Leave an article's
 * `reviewedBy` null until a qualified reviewer (e.g. a registered dietitian)
 * has actually reviewed it; the line is hidden when empty.
 */
export type Reviewer = { name: string; credentials: string; url?: string };
