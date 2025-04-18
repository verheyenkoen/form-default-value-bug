import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default async function ViewCode({ testCase }: { testCase: string }) {
  const response = await fetch(
    `https://raw.githubusercontent.com/verheyenkoen/form-default-value-bug/refs/heads/main/src/app/${testCase}/page.tsx`,
  );

  if (!response.ok) {
    return (
      <Link
        href={`https://github.com/verheyenkoen/form-default-value-bug/blob/main/src/app/${testCase}/page.tsx`}
        target="_blank"
      >
        View source code
      </Link>
    );
  }

  const code = await response.text();

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
