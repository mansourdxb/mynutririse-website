import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 pt-24 pb-16 text-center">
      <p className="text-sm font-semibold tracking-widest uppercase text-emerald-600">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
        This page wandered off
      </h1>
      <p className="mt-4 max-w-md text-lg text-slate-500">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-emerald-500 px-8 py-3 text-base font-medium text-white shadow-sm shadow-emerald-500/20 transition-all duration-200 hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
      >
        Back to home
      </Link>
    </section>
  );
}
