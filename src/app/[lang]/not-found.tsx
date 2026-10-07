import { locales } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { NotFoundView } from "./NotFoundView";

// not-found gets no params and must not read request headers (that would make
// every page dynamic), so it ships the small 404 text for all languages and the
// client view picks the one matching the URL.
export default function NotFound() {
  const all = Object.fromEntries(locales.map((l) => [l, getMessages(l).common.notFound]));
  return <NotFoundView all={all} />;
}
