import Document, {Html, Head, Main, NextScript, DocumentContext} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return initialProps;
    }

    render() {
        return (
            <Html>
                <Head>
                  <meta charSet="UTF-8"/>
                  <meta name="description" content="My mind's digital home."/>
                  <meta name="keywords" content="blog, webdevelopment, nextjs"/>
                  <meta name="author" content="Rafa"/>
                  <link rel="icon" type="image/x-icon" href="../public/favicon.ico" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;