import ComponentName from "@/components/component-name";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/form-plus-link-component">
      <ComponentName>Form</ComponentName> + <ComponentName>Link</ComponentName>
    </Link>
  );
}
