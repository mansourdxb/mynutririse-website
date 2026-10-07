import { StoreButtons } from "@/components/ui/Button";

export function ArticleCta({ heading, body }: { heading: string; body: string }) {
  return (
    <div className="mt-12 rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 shadow-[0_30px_60px_-30px_rgb(4_120_87/0.55)] dark:from-emerald-900 dark:via-emerald-800 dark:to-teal-900 dark:shadow-none dark:ring-1 dark:ring-white/10 p-8 text-center sm:p-10">
      <h2 className="text-h3 text-white">{heading}</h2>
      <p className="mx-auto mt-3 max-w-md text-white/85">{body}</p>
      <StoreButtons className="mt-6" />
    </div>
  );
}
