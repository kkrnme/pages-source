import React from "react"
import CenterdWrapper from "../components/wrappers/CenterdWrapper"
import "../styles/tailwind.css"
import _ from "lodash"

export default () => {
  return (
    <div className="bg-gray-900 h-screen w-screen text-gray-100 text-center font-sans text-base tracking-widest">
      <header className="mb-10">
        <h1 className="text-3xl">TailwindCSS &amp; Gatsby</h1>
        <p className="">Hello, world from Tailwind CSS!</p>
      </header>
    </div>
  )
}
