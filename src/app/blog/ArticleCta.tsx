import { StoreButtons } from "@/components/ui/Button";

export function ArticleCta({ heading, body }: { heading: string; body: string }) {
  return (
    <div className="mt-12 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-400 p-8 text-center sm:p-10">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
      <p className="mx-auto mt-3 max-w-md text-white/85">{body}</p>
      <StoreButtons className="mt-6" />
    </div>
  );
}
