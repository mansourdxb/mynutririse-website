import { Fragment, type ReactNode } from "react";

/**
 * Renders a message string containing simple tags, so translators can move
 * emphasis and links freely:  "Use our free <link>calorie calculator</link>."
 *   rich(msg, { link: (c) => <Link href="/x">{c}</Link>, b: (c) => <strong>{c}</strong> })
 * Tags are <name>…</name>, may nest, and must be listed in `tags`.
 */
export function rich(
  message: string,
  tags: Record<string, (children: ReactNode) => ReactNode>,
): ReactNode {
  let key = 0;
  const parse = (input: string): ReactNode[] => {
    const out: ReactNode[] = [];
    const re = /<([a-zA-Z][\w-]*)>([\s\S]*?)<\/\1>/;
    let rest = input;
    while (rest.length) {
      const m = re.exec(rest);
      if (!m) {
        out.push(rest);
        break;
      }
      if (m.index > 0) out.push(rest.slice(0, m.index));
      const render = tags[m[1]];
      const inner = parse(m[2]);
      out.push(
        <Fragment key={key++}>{render ? render(inner) : inner}</Fragment>,
      );
      rest = rest.slice(m.index + m[0].length);
    }
    return out;
  };
  return <>{parse(message)}</>;
}

/** Replaces {name} placeholders: fill("{n} kcal", { n: 1800 }) -> "1800 kcal". */
export function fill(message: string, vars: Record<string, string | number>): string {
  return message.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? String(vars[k]) : `{${k}}`));
}
