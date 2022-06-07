import { Html, Head, Main, NextScript } from "next/document"
export default function Document() {
    return (
        <Html className="scroll-smooth transition-all dark">
            <Head>
                <meta charSet="utf-8" />
            </Head>
            <body className="bg-black">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}