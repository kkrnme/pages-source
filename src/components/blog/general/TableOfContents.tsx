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
    <TOCItemConponent items={props.TOC.items} />
  </nav>
)

const TOCItemConponent: React.FC<{ items: TOCItem[] }> = ({ items }) => (
  <ul>
    {items.map(i => (
      <li key={i.title} className="ml-1">
        <SwipingAnchor to={i.url}>{i.title}</SwipingAnchor>
        {i.items ? <TOCItemConponent items={i.items} /> : null}
      </li>
    ))}
  </ul>
)

export type TOC = { items: TOCItem[] }

export type TOCItem = { url: string; title: string; items?: TOCItem[] }
