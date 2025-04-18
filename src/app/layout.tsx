import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Next.js Form (default) value bug",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.page}>
          <div className={styles.info}>
            <h3>How to test?</h3>
            <ol className={styles.list}>
              <li>Click the &quot;Change search query&quot; link</li>
              <li>Notice the rendered search query and input value change</li>
              <li>Click the &quot;Empty search query&quot; link</li>
              <li>
                Notice the rendered search query and input value are emptied
              </li>
              <li>Type a search query in the field</li>
              <li>Click the &quot;Submit&quot; button</li>
              <li>Notice the rendered search query and input value change</li>
              <li>Click the &quot;Change search query&quot; link again</li>
              <li>
                Verify if the rendered search query and input value were changed
              </li>
              <li>Click the &quot;Empty search query&quot; link again</li>
              <li>
                Verify if the rendered search query and input value were emptied
              </li>
            </ol>
          </div>
          <main className={styles.main}>{children}</main>
        </div>

        <hr />

        <footer className={styles.footer}>
          <Link href="/">Home</Link>
        </footer>
      </body>
    </html>
  );
}
