import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Web & Front end developer open for job offers"
          />
          <meta
            name="keywords"
            content="Next.js, React, Web Developer, Front end developer, HTML, CSS, JS, MERN developer"
          />
        </Head>
        <body className="bg-gradient-to-r from-indigo-purple to-indigo-red dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
