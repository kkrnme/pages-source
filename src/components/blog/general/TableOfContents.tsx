import React from "react"
import SwipingAnchor from "./SwipingAnchor"

export const TableOfContents: React.FC<{ TOC: TOC }> = ({ TOC }) => (
  <nav className="bg-monochrome-2 border border-gray-600 rounded">
    <ul className="list-disc py-1 px-2 pl-8">
      {TOC.items.map(v => (
        <li key={v.title}>
          <SwipingAnchor to={v.url}>{v.title}</SwipingAnchor>
        </li>
      ))}
    </ul>
  </nav>
)

export type TOC = { items: { url: string; title: string }[] }
