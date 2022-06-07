import Head from "next/head"
import Body from "../components/Body"
import Header from "../components/Header"

export default function Index() {
  return (
    <>
      <Head>
        <title>Call of Duty : Mobile</title>
      </Head>
      <div className="absolute h-[1000px] w-[2000px] flex justify-center items-center">
        <div className="bg-[url(/assets/cod.jpg)] h-[1000px] w-[1800px] object-cover bg-center bg-cover bg-no-repeat">
          <div className="bg-black/60">
            <Header />
            <Body />
          </div>
        </div>
      </div>
    </>
  )
}