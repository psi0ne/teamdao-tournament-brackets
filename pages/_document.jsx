import { Html, Head, Main, NextScript } from "next/document"
export default function Document() {
    return (
        <Html className="scroll-smooth transition-all dark">
            <Head>
                <meta charSet="utf-8" />
            </Head>
            <body className="bg-[url(/assets/cod.jpg)] object-cover bg-center bg-cover bg-no-repeat h-screen">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}