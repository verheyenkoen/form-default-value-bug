import ComponentName from "@/components/component-name";
import ViewCode from "@/components/view-code";

export const testCase = "form-element-plus-link-component";

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

export function Title() {
  return (
    <>
      {" "}
      <ComponentName type="html">form</ComponentName> +{" "}
      <ComponentName type="next">Link</ComponentName>
    </>
  );
}
