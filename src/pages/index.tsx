import React, { useState, useEffect } from "react"
import WrapperRoot from "../components/wrappers/Wrapper"
import "../styles/tailwind.css"
import meyend from "../resources/meyend.svg"
import script from "../resources/logo-script.svg"

export default () => (
  <WrapperRoot>
    <div className="p-5 md:p-5">
      <p className="text-center text-150 sm:text-200">＼夜なべして作ってる／</p>
      <img className="m-auto" src={meyend} alt="" />
      <img src={script} alt="Kokorono.me" className="m-auto w-3/4" />
      <br />
    </div>
  </WrapperRoot>
)

const ScreenSize: React.FC = () => {
  const [height, setHeight] = useState(screen.height),
    [width, setWidth] = useState(screen.width)
  useEffect(() =>
    window.addEventListener("resize", () => {
      setHeight(screen.height)
      setWidth(screen.width)
    })
  )
  return (
    <p>
      width:{width}, height:{height}
    </p>
  )
}
