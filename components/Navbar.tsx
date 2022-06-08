import Link from "next/link"

function Navbar() {
  return (
    <div className="py-8 px-12  flex justify-between items-center text-blue-500">
      <h1 className="text-5xl font-black tracking-tighter">BlendEd</h1>
      <ul className="flex space-x-8 items-center font-bold">
        <li className="text-xl bg-blue-500 text-white rounded-md py-2 px-4">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="text-xl">
          <Link href="/feedback">
            <a>Feedback</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
