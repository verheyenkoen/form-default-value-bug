import fs from "node:fs";
import path from "node:path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default async function ViewCode({ testCase }: { testCase: string }) {
  const code = fs.readFileSync(
    path.join(process.cwd(), `/src/app/${testCase}/page.tsx`),
    "utf-8",
  );

  return (
    <details className="view-code">
      <summary>View code</summary>
      <SyntaxHighlighter
        language="tsx"
        showLineNumbers
        styles={{ fontSize: "0.7em" }}
      >
        {code}
      </SyntaxHighlighter>
    </details>
  );
}
