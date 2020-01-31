import { InterpolationWithTheme, css } from "@emotion/core"
import React from "react"
import SwipingAnchor from "./SwipingAnchor"
import { DeepReadonly } from "ts-essentials"

export const TableOfContents: React.FC<TOCComponentProps> = props => (
  <nav
    className="text-90 bg-monochrome-2 border border-gray-700 rounded p-2  "
    css={css`
      font-size: 0.9rem;
      width: 235px;
    `}
  >
    <TOCItemConponent items={props.TOC.items} />
  </nav>
)

const TOCItemConponent: React.FC<TOC> = ({ items }) => (
  <ul>
    {items.map(i => (
      <li key={i.title} className="ml-1">
        <SwipingAnchor to={i.url}>{i.title}</SwipingAnchor>
        {i.items ? <TOCItemConponent items={i.items} /> : null}
      </li>
    ))}
  </ul>
)

export type TOCComponentProps = DeepReadonly<{
  TOC: TOC
  className?: string
  css?: InterpolationWithTheme<any>
}>

export type TOC = DeepReadonly<{ items: TOCItems }>

export type TOCItems = {
  url: string
  title: string
  items?: TOCItems
}[]
