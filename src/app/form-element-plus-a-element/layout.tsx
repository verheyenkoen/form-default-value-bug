import ViewCode from "@/components/view-code";
import testCase from "./test-case";
import Title from "./title";

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
