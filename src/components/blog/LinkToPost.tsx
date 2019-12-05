import React from "react"
import { Link } from "gatsby"
import { InterpolationWithTheme } from "@emotion/core"
import Post from "../../utils/PostType"

export default ({ to, title, excerpt, status, type }: LinkToPostProps) => (
  <div className="shadow-md mt-8 rounded overflow-hidden">
    <Link
      to={to}
      className="flex items-baseline no-underline flex-wrap bg-fluentBlue-10 text-white p-1  shadow transition"
    >
      <h2 className="font-bold text-lg">{title}</h2>
      {status === "draft" ? (
        <TagLabel className="bg-pink-500">draft</TagLabel>
      ) : null}
      <TagLabel className={`label-${type}`}>{type.toUpperCase()}</TagLabel>
    </Link>
    <p className="text-left p-2">{excerpt}</p>
  </div>
)

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
