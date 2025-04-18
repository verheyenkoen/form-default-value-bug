import Image from "next/image";

import html_icon from "./html-icon.svg";
import next_icon from "./next-icon.svg";

export default function ComponentName({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "html" | "next";
}) {
  return (
    <code>
      {type === "html" && (
        <Image
          className="icon"
          src={html_icon}
          alt="HTML icon"
          style={{ verticalAlign: "middle", marginRight: "5px" }}
        />
      )}
      {type === "next" && (
        <Image
          className="icon"
          src={next_icon}
          alt="Next.js icon"
          style={{ verticalAlign: "middle", marginRight: "5px" }}
        />
      )}
      &lt;{children} /&gt;
    </code>
  );
}
