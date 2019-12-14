import React, { useState, useEffect } from "react"
import { Background, Container } from "../components/Wrappers"
import { css } from "@emotion/core"

export default () => (
  <Background>
    <Container className="bg-monochrome-2 p-4">
      <Color></Color>
    </Container>
  </Background>
)

export interface color {
  hex: string
  rgb: { [key in "red" | "green" | "blue"]: number }
  sRGB: { [key in "sR" | "sG" | "sB"]: number }
  hsl: { [key in "hue" | "saturation" | "lightness"]: number }
  relativeLuminance: number
}

const Color = () => {
  const [bg, setBg] = useState(onInput("#111")),
    [tx, setTx] = useState(onInput("#eee")),
    [contrastRatio, setContrastRatio] = useState(
      rt(bg.relativeLuminance, tx.relativeLuminance)
    )
  useEffect(() =>
    setContrastRatio(rt(tx.relativeLuminance, bg.relativeLuminance))
  )
  return (
    <div>
      <div
        className="p-8 text-150"
        css={css`
          background-color: #${bg.hex};
          color: #${tx.hex};
        `}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit
          quia omnis velit, ad quo maxime dolorum vitae ab! Ipsa asperiores ab
          ad corrupti sapiente commodi, vitae blanditiis! Unde, repudiandae.
        </p>
      </div>
      <span></span>
      <table
        className="text-center mx-auto my-2"
        css={css`
          tr td,
          tr th {
            padding: 0.3rem;
            border: solid 1px #888;
          }
        `}
      >
        <tbody>
          <tr>
            <th></th>
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
            <td>{bg.rgb.green}</td>
          </tr>
          <tr>
            <th>Blue</th>
            <td>{tx.rgb.blue}</td>
            <td>{bg.rgb.blue}</td>
          </tr>
          <tr>
            <th>Hue</th>
            <td>{tx.hsl.hue}</td>
            <td>{bg.hsl.hue}</td>
          </tr>
          <tr>
            <th>Saturation</th>
            <td>{tx.hsl.saturation}</td>
            <td>{bg.hsl.saturation}</td>
          </tr>
          <tr>
            <th>Lightness</th>
            <td>{tx.hsl.lightness}</td>
            <td>{bg.hsl.lightness}</td>
          </tr>
          <tr>
            <th>Relative Luminance</th>
            <td>{round(tx.relativeLuminance, 4)}</td>
            <td>{round(bg.relativeLuminance, 4)}</td>
          </tr>
          <tr
            css={css`
              color: #${contrastRatio > 7 ? "0df" : contrastRatio > 4 ? "0fd" : "f99"};
            `}
          >
            <th>Contrast Ratio</th>
            <td>{round(contrastRatio, 2)}:1</td>
            <td>
              {contrastRatio > 7 ? "AAA" : contrastRatio > 4 ? "AA" : "NG"}
            </td>
          </tr>
        </tbody>
      </table>
      <div
        className="mx-auto text-center"
        css={css`
          input {
            margin: 2px;
            padding: 1px;
          }
        `}
      >
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
    </div>
  )
}
const onInput = (hex: string): color => {
  try {
    const desharpedHex = hex.replace(/\s|#/g, "").toLowerCase()
    if (hexValidate(desharpedHex)) {
      throw new Error("invalid value")
    }
    const rgb = hex2rgb(desharpedHex),
      sRGB = rgb2srgb(rgb)
    const relativeLuminance =
      typeof sRGB === "object"
        ? 0.2126 * rl(sRGB.sR) + 0.7152 * rl(sRGB.sG) + 0.0722 * rl(sRGB.sB)
        : sRGB
    return {
      hex,
      rgb,
      sRGB,
      relativeLuminance,
      hsl: rgb2hsl(rgb),
    }
  } catch (e) {
    return {
      hex: e.message,
      rgb: {
        red: e.message,
        green: e.message,
        blue: e.message,
      },
      sRGB: {
        sR: e.message,
        sB: e.message,
        sG: e.message,
      },
      hsl: {
        hue: e.message,
        saturation: e.message,
        lightness: e.message,
      },
      relativeLuminance: e.message,
    }
  }
}
