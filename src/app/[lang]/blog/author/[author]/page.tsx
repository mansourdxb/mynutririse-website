import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { authorPath, formatDate } from "../../ArticlePage";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { authors, type AuthorSlug } from "@/data/authors";
import { ORGANIZATION_ID, absoluteUrl, localePath, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";
import { articlesIn } from "@/i18n/posts";

export function generateStaticParams() {
  return authors.map((a) => ({ author: a.slug }));
}

function isAuthor(slug: string): slug is AuthorSlug {
  return authors.some((a) => a.slug === slug);
}

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/author/[author]">): Promise<Metadata> {
  const { lang, author } = await params;
  if (!isAuthor(author)) return {};
  const t = getMessages(lang as Locale).blog.authors[author];
  return pageMetadata(lang as Locale, authorPath(author), {
    title: { absolute: t.metaTitle },
    description: t.metaDescription,
  });
}

/** Author profile: bio and every article by the author in this language. */
export default async function AuthorPage({ params }: PageProps<"/[lang]/blog/author/[author]">) {
  const { lang: l, author } = await params;
  if (!isAuthor(author)) notFound();
  const lang = l as Locale;
  const { blog, common } = getMessages(lang);
  const t = blog.authors[author];
  const posts = articlesIn(lang).filter(({ article }) => article.author === author);

  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: absoluteUrl(lang, authorPath(author)),
    mainEntity: {
      "@type": "Person",
      name: authors.find((a) => a.slug === author)!.name,
      jobTitle: t.role,
      description: t.bio,
      worksFor: { "@id": ORGANIZATION_ID },
    },
  };

  return (
    <div className="wash-mint pt-24 pb-8">
      <JsonLd data={profileJsonLd} />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Breadcrumbs
          lang={lang}
          t={common.breadcrumbs}
          items={[
            { name: blog.index.breadcrumb, href: "/blog" },
            { name: t.name, href: authorPath(author) },
          ]}
        />
        <h1 className="mt-6 text-h2 text-ink">{t.name}</h1>
        <p className="mt-2 font-medium text-accent-strong">{t.role}</p>
        <p className="mt-6 text-lead text-ink-2">{t.bio}</p>

        <h2 className="mt-12 text-xl font-bold text-ink">{t.postsHeading}</h2>
        <ul className="mt-4 space-y-4">
          {posts.map(({ article, text }) => (
            <li key={article.slug}>
              <Link href={localePath(lang, `/blog/${article.slug}`)} className="group block card p-5">
                <span className="font-semibold text-ink group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                  {text.title}
                </span>
                <span className="mt-1 block text-sm text-ink-3">{text.description}</span>
                <span className="mt-2 block text-xs text-ink-3">
                  <time dateTime={article.date}>{formatDate(article.date, lang)}</time> · {text.readTime}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
