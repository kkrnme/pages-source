import React, { ReactChild } from "react"
import { Stylable } from "../../Components"
import { Link } from "gatsby"

export const TagComponent: React.FC<TagComponentProps> = props => (
  <label
    className={`ml-2 px-2 rounded font-semibold tracking-none  text-gray-900 ${props.className}`}
  >
    {props.children}
  </label>
)

export const TagLink: React.FC<TagLinkProps> = props => (
  <TagComponent className="bg-yellow-500">
    <Link to={"/blog/tags/" + props.children}>{props.children}</Link>
  </TagComponent>
)

export type TagComponentProps = Stylable & {
  children: ReactChild
}

export type TagLinkProps = TagComponentProps & { children: string }

export default TagComponent
