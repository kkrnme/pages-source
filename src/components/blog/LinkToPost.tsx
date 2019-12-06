import React from "react"
import { Link } from "gatsby"
import { InterpolationWithTheme } from "@emotion/core"
import Post from "../../utils/PostType"
import GeoPattern from "geopattern"

export default ({ to, title, excerpt, status, type }: LinkToPostProps) => {
  const pattern = GeoPattern.generate(title)
  return (
    <div className="shadow-md rounded rounded-tl-none overflow-hidden h-full">
      <Link
        to={to}
        className="block no-underline flex-wrap border-l-4 border-fluentGray-160 p-1  shadow transition text-fluentGray-10"
        css={{
          backgroundImage: pattern.toDataUrl(),
        }}
      >
        <h2 className="font-bold text-lg">
          {title}
          {status === "draft" ? (
            <TagLabel className="inline bg-pink-500">draft</TagLabel>
          ) : null}
          <TagLabel className={`label-${type}`}>{type.toUpperCase()}</TagLabel>
        </h2>
      </Link>
      <p
        className="text-left p-2 text-fluentGray-120"
        css={{
          background: "linear-gradient(#323130, #0000)",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {excerpt}
      </p>
    </div>
  )
}

interface LinkToPostProps {
  to: string
  title: string
  excerpt: string
  status: string
  type: Post["type"]
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
