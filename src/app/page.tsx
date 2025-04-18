import ComponentName from "@/components/component-name";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>Test cases</h2>
      <Link href="/form-plus-link-component">
        <ComponentName type="next">Form</ComponentName> +{" "}
        <ComponentName type="next">Link</ComponentName>
      </Link>
    </>
  );
}
