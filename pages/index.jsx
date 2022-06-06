import Head from "next/head"
import Body from "../components/Body"
import Header from "../components/Header"

export default function Index() {
  return (
    <>
      <Head>
        <title>Call of Duty : Mobile</title>
      </Head>
      <div className="fixed h-[1080px] w-screen bg-black/60">
        <Header />
        <Body />
      </div>
    </>
  )
}