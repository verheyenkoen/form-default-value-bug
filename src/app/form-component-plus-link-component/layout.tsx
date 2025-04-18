import ComponentName from "@/components/component-name";
import ViewCode from "@/components/view-code";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>
        <ComponentName type="next">Form</ComponentName> +{" "}
        <ComponentName type="next">Link</ComponentName>
      </h1>
      {children}
      <ViewCode testCase="form-component-plus-link-component" />
    </>
  );
}
