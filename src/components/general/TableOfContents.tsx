import { InterpolationWithTheme, css } from "@emotion/core"
import React from "react"
import SwipingAnchor from "./SwipingAnchor"
import { DeepReadonly } from "ts-essentials"
import styled from "@emotion/styled"
import { scheme } from "../../colors/colors"

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

const TOCItemComponent: React.FC<TOC> = ({ items }) => (
  <ul>
    {items.map(i => (
      <li key={i.title} className="ml-1">
        <SwipingAnchor to={i.url}>{i.title}</SwipingAnchor>
        {i.items ? <TOCItemComponent items={i.items} /> : null}
      </li>
    ))}
  </ul>
)

export const Component: React.FC<TOCComponentProps> = ({ className, TOC }) => (
  <nav className={className}>
    <TOCItemComponent items={TOC.items} />
  </nav>
)

export const StyledComponent = styled(Component)`
  font-size: 0.9rem;
  background-color: #222;
  border: 1px solid ${scheme.border};
  border-radius: 0.25rem;
  padding: 0.5rem;
`

export { StyledComponent as TableOfContents }
