import Link from "next/link";

import formComponentPlusLinkComponentTestCase from "./form-component-plus-link-component/test-case";
import FormComponentPlusLinkComponentTitle from "./form-component-plus-link-component/title";

import formElementPlusLinkComponentTestCase from "./form-element-plus-link-component/test-case";
import FormElementPlusLinkComponentTitle from "./form-element-plus-link-component/title";

import formComponentPlusAElementTestCase from "./form-component-plus-a-element/test-case";
import FormComponentPlusAElementTitle from "./form-component-plus-a-element/title";

import formElementPlusAElementTestCase from "./form-element-plus-a-element/test-case";
import FormElementPlusAElementTitle from "./form-element-plus-a-element/title";

export default function Home() {
  return (
    <>
      <h2>Test cases</h2>
      <p>
        ❌{" "}
        <Link href={`/${formComponentPlusLinkComponentTestCase}`}>
          <FormComponentPlusLinkComponentTitle />
        </Link>
      </p>
      <p>
        ✅{" "}
        <Link href={`/${formElementPlusLinkComponentTestCase}`}>
          <FormElementPlusLinkComponentTitle />
        </Link>
      </p>
      <p>
        ✅{" "}
        <Link href={`/${formComponentPlusAElementTestCase}`}>
          <FormComponentPlusAElementTitle />
        </Link>
      </p>
      <p>
        ✅{" "}
        <Link href={`/${formElementPlusAElementTestCase}`}>
          <FormElementPlusAElementTitle />
        </Link>
      </p>
    </>
  );
}
