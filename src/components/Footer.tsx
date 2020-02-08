import React from "react"
import SwipingAnchor from "./atoms/SwipingAnchor"
import { css } from "@emotion/core"

export const SiteFooter = () => (
  <footer
    css={css`
      text-align: center;
    `}
  >
    {
      //FIXME バージョンを変えとく
    }
    <p>CHIR.KKRN.ME version 20.01.1</p>
    <p>
      {"Hosted on "}
      <SwipingAnchor to="https://github.com/kkrnme/kkrnme.github.io">
        GitHub Pages
      </SwipingAnchor>
      {", licensed under "}
      <SwipingAnchor to="https://github.com/kkrnme/pages-source">
        the MIT License.
      </SwipingAnchor>
    </p>
  </footer>
)
export default SiteFooter
