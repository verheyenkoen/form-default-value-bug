import ComponentName from "@/components/component-name";
import ViewCode from "@/components/view-code";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>
        <ComponentName type="html">form</ComponentName> +{" "}
        <ComponentName type="next">Link</ComponentName>
      </h1>
      {children}
      <ViewCode testCase="form-plus-link-component" />
    </>
  );
}
