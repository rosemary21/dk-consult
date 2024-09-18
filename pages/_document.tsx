import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="../public/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../public/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../public/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../public/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="../public/favicon/site.webmanifest" />
      </Head>
      <body className="antialiased font-outfit">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
