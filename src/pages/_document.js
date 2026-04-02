import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preload" as="image" href="https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/hero-bg.webp" />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
