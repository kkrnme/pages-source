import React, { useState, useEffect } from "react"
import { Color, rgb2hsl, hex2rgb, hsl2rgb } from "../utils/color"
import { Background, Container } from "../components/Wrappers"
import { css } from "@emotion/core"
import _ from "lodash"

export default () => {
  const [tx, setTx] = useState(new Color(rgb2hsl(hex2rgb("#0ff"))))
  const bg = new Color(rgb2hsl(hex2rgb("#222")))
  return (
    <Background>
      <Container>
        <Picker tx={tx} setTx={setTx} bg={bg}></Picker>
      </Container>
    </Background>
  )
}

export const Picker = ({
  tx,
  setTx,
  bg,
}: {
  tx: Color
  setTx: React.Dispatch<React.SetStateAction<Color>>
  bg: Color
}) => {
  return (
    <div>
      <div
        className="p-8 text-150"
        css={css`
          background-color: #${bg.getHex()};
          color: #${tx.getHex()};
        `}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit
          quia omnis velit, ad quo maxime dolorum vitae ab! Ipsa asperiores ab
          ad corrupti sapiente commodi, vitae blanditiis! Unde, repudiandae.
        </p>
      </div>
      <input
        type="number"
        placeholder="tx"
        className="text-monochrome-2"
        max={360}
        min={0}
        onInput={e => {
          setTx(
            new Color({
              hue: Number.parseInt(e.currentTarget.value),
              saturation: 90 * 2.55,
              lightness: 70 * 2.55,
            })
          )
        }}
      />
    </div>
  )
}
