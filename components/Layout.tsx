import type { NextPage } from "next"
import Head from "next/head"
import React from "react"
import Navbar from "../components/Navbar"

const Main: NextPage<any> = ({ children }) => {
  return (
    <div className="">
      <Head>
        <title>BlendED</title>
        <meta name="description" content="BlendED App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col h-screen w-screen">
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default Main
