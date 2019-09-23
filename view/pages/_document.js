// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

import logo from "../../docs/p2p-square-logo-transparent-white.png";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />

          <link rel="manifest" href="/static/manifest.json" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/static/safari-pinned-tab.svg"
            color="#5bbad5"
          />

          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <body
          style={{
            backgroundColor: "#2A3A4B"
          }}
        >
          <center>
            <Link href="/">
              <a>
                <image
                  src={logo}
                  style={{
                    height: "128px"
                  }}
                ></image>
              </a>
            </Link>
          </center>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
