import ComponentName from "@/components/component-name";
import ViewCode from "@/components/view-code";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>
        <ComponentName type="html">form</ComponentName> +{" "}
        <ComponentName type="html">a</ComponentName>
      </h1>
      {children}
      <ViewCode testCase="form-element-plus-a-element" />
    </>
  );
}
