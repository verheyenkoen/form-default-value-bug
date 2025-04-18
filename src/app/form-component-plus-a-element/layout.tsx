import ViewCode from "@/components/view-code";

import Title from "./title";
import testCase from "./test-case";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>
        <Title />
      </h1>
      {children}
      <ViewCode testCase={testCase} />
    </>
  );
}
