import Link from "next/link";

import {
  testCase as formComponentPlusLinkComponentTestCase,
  Title as FormComponentPlusLinkComponentTitle,
} from "@/app/form-component-plus-link-component/layout";
import {
  testCase as formElementPlusLinkComponentTestCase,
  Title as FormElementPlusLinkComponentTitle,
} from "@/app/form-element-plus-link-component/layout";
import {
  testCase as formComponentPlusAElementTestCase,
  Title as FormComponentPlusAElementTitle,
} from "@/app/form-component-plus-a-element/layout";
import {
  testCase as formElementPlusAElementTestCase,
  Title as FormElementPlusAElementTitle,
} from "@/app/form-element-plus-a-element/layout";

export default function Home() {
  return (
    <>
      <h2>Test cases</h2>
      <Link href={`/${formComponentPlusLinkComponentTestCase}`}>
        ❌ <FormComponentPlusLinkComponentTitle />
      </Link>
      <Link href={`/${formElementPlusLinkComponentTestCase}`}>
        ✅ <FormElementPlusLinkComponentTitle />
      </Link>
      <Link href={`/${formComponentPlusAElementTestCase}`}>
        ✅ <FormComponentPlusAElementTitle />
      </Link>
      <Link href={`/${formElementPlusAElementTestCase}`}>
        ✅ <FormElementPlusAElementTitle />
      </Link>
    </>
  );
}
