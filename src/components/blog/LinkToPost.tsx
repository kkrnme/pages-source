import { css, InterpolationWithTheme } from "@emotion/core"
import { Link } from "gatsby"
import GeoPattern from "geopattern"
import React from "react"
import { TagComponent } from "./tags/TagComponent"

export default ({ to, title, excerpt, status }: LinkToPostProps) => {
  const pattern = GeoPattern.generate(title)
  return (
    <Link
      to={to}
      className="block shadow-md rounded rounded-tl-none overflow-hidden h-full bg-gray-800"
      css={css`
        transition: 150ms filter ease-in-out;
        &:hover {
          filter: brightness(1.1);
        }
      `}
    >
      <div
        className="no-underline flex-wrap border-l-4 border-yellow-400 p-1 shadow transition text-gray-200"
        css={css`
          background-image: ${pattern.toDataUrl()};
          background-size: contain;
          background-attachment: fixed;
          filter: saturate(180%);
        `}
      >
        <h2 className="text-lg">
          <span className="text-shadow">{title}</span>
          {status === "draft" ? (
            <TagComponent className="inline bg-pink">draft</TagComponent>
          ) : null}
        </h2>
      </div>
      <p className="text-left p-2 text-gray-500 ">{excerpt}</p>
    </Link>
  )
}

interface LinkToPostProps {
  to: string
  title: string
  excerpt: string
  status: string
  css?: InterpolationWithTheme<any>
}
