import type { NextPage } from "next"
import CenterCard from "../components/CenterCard"
import Layout from "../components/Layout"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const Main: NextPage = () => {
  const router = useRouter()
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (count === 10) {
      router.push("/feedback")
    }
    let interval = setInterval(() => setCount((prev) => prev + 1), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [count, router])

  return (
    <div className="">
      <Layout>
        <div className="px-12 flex justify-between text-lg text-gray-600 font-black uppercase tracking-widest">
          <h1>Home Page</h1>
          <p className="text-xl bg-blue-500 text-white rounded-md py-2 px-4">
            {count}
          </p>
        </div>

        <CenterCard>
          <div className="bg-gray-200 w-96 h-96 rounded-lg grid place-items-center text-2xl font-bold">
            {router.pathname}
          </div>
        </CenterCard>
      </Layout>
    </div>
  )
}

export default Main
