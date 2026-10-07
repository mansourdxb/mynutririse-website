import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      <p className="eyebrow">
        404
      </p>
      <h1 className="mt-4 text-h1 text-ink">
        This page wandered off
      </h1>
      <p className="mt-4 max-w-md text-lead text-ink-3">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 btn-primary px-8 py-3 text-base transition-all duration-200 hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
      >
        Back to home
      </Link>
    </section>
  );
}
