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
