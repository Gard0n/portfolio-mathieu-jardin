export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(src: string) {
  if (!BASE_PATH) return src;
  if (src.startsWith("http") || src.startsWith("data:")) return src;
  if (src.startsWith(BASE_PATH)) return src;
  if (src.startsWith("/")) return `${BASE_PATH}${src}`;
  return `${BASE_PATH}/${src}`;
}
