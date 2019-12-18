import React from "react"
import { Link } from "gatsby"
import { InterpolationWithTheme, css } from "@emotion/core"
import GeoPattern from "geopattern"
import tw from "tailwind.macro"

export default ({ to, title, excerpt, status }: LinkToPostProps) => {
  const pattern = GeoPattern.generate(title)
  return (
    <div className="shadow-md rounded rounded-tl-none overflow-hidden h-full bg-gray-800">
      <Link
        to={to}
        className="block no-underline flex-wrap border-l-4 border-yellow-400 p-1 shadow transition bg-red-400"
        css={css`
          background-image: ${pattern.toDataUrl()};
          background-blend-mode: luminosity;
          background-size: contain;
          background-attachment: fixed;
        `}
      >
        <h2 className="text-lg">
          <span className="text-shadow">{title}</span>
          {status === "draft" ? (
            <TagLabel className="inline bg-pink">draft</TagLabel>
          ) : null}
        </h2>
      </Link>
      <p className="text-left p-2 text-gray-200 ">{excerpt}</p>
    </div>
  )
}

interface LinkToPostProps {
  to: string
  title: string
  excerpt: string
  status: string
  css?: InterpolationWithTheme<any>
}

const TagLabel: React.FC<TagLabelProps> = props => (
  <label
    className={`ml-2 px-2 rounded font-semibold tracking-none ${props.className}`}
  >
    {props.children}
  </label>
)
interface TagLabelProps {
  className?: string
}
