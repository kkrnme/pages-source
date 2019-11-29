import React from "react"
import WrapperRoot from "../components/wrappers/Wrapper"
import "../styles/tailwind.css"
import meyend from "../resources/meyend.svg"
import script from "../resources/logo-script.svg"

export default () => (
  <WrapperRoot>
    <p className="text-center text-200">＼夜なべして作ってる／</p>
    <img className="m-auto" src={meyend} alt="" />
    <img src={script} alt="Kokorono.me" className="m-auto w-3/4" />
    <br />
  </WrapperRoot>
)
