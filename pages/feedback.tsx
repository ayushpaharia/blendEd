import type { NextPage } from "next"
import { ChangeEvent, useState } from "react"
import CenterCard from "../components/CenterCard"
import Layout from "../components/Layout"

const DEFAULT_FORM_VALUES = {
  name: "",
  email: "",
}
type formType = typeof DEFAULT_FORM_VALUES

const Feedback: NextPage = () => {
  const [formValues, setFormValues] = useState<formType>({
    ...DEFAULT_FORM_VALUES,
  })
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prev: formType) => ({
      ...prev,
      [name]: value,
    }))
  }
  const { name, email } = formValues
  return (
    <div className="">
      <Layout>
        <h1 className="px-12 text-lg text-gray-600 font-black uppercase tracking-widest">
          Feedback Page
        </h1>
        <CenterCard>
          <div className="bg-gray-200 w-96  rounded-lg flex flex-col text-2xl font-bold p-8">
            <h1 className="text-gray-600 font-black text-center mb-4">Form</h1>
            <span>
              <label
                htmlFor="name"
                className="text-sm text-gray-500 mb-4 font-black uppercase tracking-widest"
              >
                Name
              </label>
              <input
                value={name}
                onChange={handleInputChange}
                name="name"
                placeholder="Ayush Paharia"
                type="text"
                className="px-6 font-black w-full outline-none rounded-sm h-16 mb-4 text-lg"
              />
            </span>
            <span>
              <label
                htmlFor="name"
                className="text-sm text-gray-500 mb-4 font-black uppercase tracking-widest"
              >
                Name
              </label>
              <input
                value={email}
                onChange={handleInputChange}
                name="email"
                placeholder="ayush.paharia@email.com"
                type="text"
                className="px-6 font-black w-full outline-none rounded-sm h-16 text-lg mb-6"
              />
            </span>
            <button
              onClick={() => {
                console.log(formValues)
                setFormValues(DEFAULT_FORM_VALUES)
              }}
              className="text-xl bg-blue-500 text-white rounded-sm font-black p-4"
            >
              Submit
            </button>
          </div>
        </CenterCard>
      </Layout>
    </div>
  )
}

export default Feedback
