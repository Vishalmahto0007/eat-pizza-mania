import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="pizza-slice.png" />
      <title>EatPizzaMania</title>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
