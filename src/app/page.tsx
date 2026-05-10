import { readFileSync } from "node:fs";
import { join } from "node:path";
import NavHighlighter from "./NavHighlighter";

export default function Home() {
  const body = readFileSync(join(process.cwd(), "src/app/original-body.html"), "utf8");

  return (
    <>
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: body }} />
      <NavHighlighter />
    </>
  );
}
