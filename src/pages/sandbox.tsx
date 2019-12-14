import React, { useState } from "react"
import { Background, Container } from "../components/Wrappers"
import { css } from "@emotion/core"

export default () => (
  <Background>
    <Container className="bg-monochrome-2 p-4">
      <Color></Color>
    </Container>
  </Background>
)

interface color {
  hex: string
  rgb: { [key in "red" | "green" | "blue"]: number }
  sRGB: { [key in "sR" | "sG" | "sB"]: number }
}

const Color = () => {
  const [bg, setBg] = useState(onInput("#111")),
    [tx, setTx] = useState(onInput("#eee"))
  return (
    <div>
      <div
        css={css`
          background-color: #${bg.hex};
          color: #${tx.hex};
        `}
      >
        <p>tx: {tx.hex}</p>
      </div>
      <table className="text-center">
        <tr>
          <th>Color</th>
          <th>Text</th>
          <th>Background</th>
        </tr>
        <tr>
          <th>#HEX</th>
          <td>{tx.hex}</td>
          <td>{bg.hex}</td>
        </tr>
        <tr>
          <th>Red</th>
          <td>{tx.rgb.red}</td>
          <td>{bg.rgb.red}</td>
        </tr>
        <tr>
          <th>Green</th>
          <td>{tx.rgb.green}</td>
          <td>{bg.rgb.red}</td>
        </tr>
        <tr>
          <th>Blue</th>
          <td>{tx.rgb.blue}</td>
          <td>{bg.rgb.red}</td>
        </tr>
        <tr>
          <th>SRed</th>
          <td>{tx.sRGB.sR}</td>
          <td>{bg.sRGB.sR}</td>
        </tr>
        <tr>
          <th>SGreen</th>
          <td>{tx.sRGB.sG}</td>
          <td>{bg.sRGB.sG}</td>
        </tr>
        <tr>
          <th>SBlue</th>
          <td>{tx.sRGB.sB}</td>
          <td>{bg.sRGB.sB}</td>
        </tr>
      </table>
      <input
        type="text"
        placeholder="tx"
        className="text-monochrome-2"
        onInput={e => {
          setTx(onInput(e.currentTarget.value))
        }}
      />
      <input
        type="text"
        placeholder="bg"
        className="text-monochrome-2"
        onInput={e => {
          setBg(onInput(e.currentTarget.value))
        }}
      />
    </div>
  )
}

const onInput = (hex: string): color => {
  const rgb = hex2rgb(hex),
    sRGB = rgb2srgb(rgb)
  return {
    hex,
    rgb,
    sRGB: sRGB,
  }
}
const hex2rgb = (hex: string) => {
  const desharpedHex = hex.replace(/\s|#/g, ""),
    formatedHex =
      desharpedHex.length === 3
        ? desharpedHex.replace(/(.)/g, "$1$1")
        : desharpedHex,
    hexArray = formatedHex.match(/../g)
  if (hexArray == null) throw Error
  return {
    red: Number.parseInt(hexArray[0], 16),
    green: Number.parseInt(hexArray[1], 16),
    blue: Number.parseInt(hexArray[2], 16),
  }
}

const rgb2srgb = ({ red, green, blue }: color["rgb"]) => ({
  sR: red / 255,
  sG: green / 255,
  sB: blue / 255,
})
