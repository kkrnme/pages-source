import React from "react"
import { Stylable } from "../../Components"
import { Link } from "gatsby"

export const TagComponent: React.FC<Stylable & {
  children: string
}> = props => (
  <label
    className={`ml-2 px-2 rounded font-semibold tracking-none ${props.className}`}
  >
    <Link to={"/blog/tags/" + props.children}>{props.children}</Link>
  </label>
)

export default TagComponent
