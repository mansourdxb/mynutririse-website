import { factsFor } from "@/data/facts";
import type { Locale } from "../config";
import en from "./en";
import ar from "./ar";
import de from "./de";
import es from "./es";
import fr from "./fr";
import ru from "./ru";

export type Messages = ReturnType<typeof en>;

const builders: Record<Locale, (f: ReturnType<typeof factsFor>) => Messages> = {
  en,
  ar,
  de,
  es,
  fr,
  ru,
};

const cache = new Map<Locale, Messages>();

/** All messages for a language, with facts formatted for that language. */
export function getMessages(lang: Locale): Messages {
  let m = cache.get(lang);
  if (!m) {
    m = builders[lang](factsFor(lang));
    cache.set(lang, m);
  }
  return m;
}
