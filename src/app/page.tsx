import ComponentName from "@/components/component-name";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>Test cases</h2>
      <Link href="/form-component-plus-link-component">
        ❌ <ComponentName type="next">Form</ComponentName> +{" "}
        <ComponentName type="next">Link</ComponentName>
      </Link>
      <Link href="/form-element-plus-link-component">
        ✅ <ComponentName type="html">form</ComponentName> +{" "}
        <ComponentName type="next">Link</ComponentName>
      </Link>
      <Link href="/form-component-plus-a-element">
        ✅ <ComponentName type="next">Form</ComponentName> +{" "}
        <ComponentName type="html">a</ComponentName>
      </Link>
    </>
  );
}
