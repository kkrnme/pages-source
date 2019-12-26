import { InterpolationWithTheme, css } from "@emotion/core"
import React from "react"
import SwipingAnchor from "./SwipingAnchor"

export const TableOfContents: React.FC<{
  TOC: TOC
  className?: string
  css?: InterpolationWithTheme<any>
}> = props => (
  <nav
    className={
      "text-90 bg-monochrome-2 border border-gray-700 rounded p-2  " +
        props.className ?? ""
    }
    css={css`
      width: 235px;
    `}
  >
    <ul className="">
      {props.TOC.items.map(v => (
        <li key={v.title}>
          <SwipingAnchor to={v.url}>{v.title}</SwipingAnchor>
        </li>
      ))}
    </ul>
  </nav>
)

export type TOC = { items: { url: string; title: string }[] }
