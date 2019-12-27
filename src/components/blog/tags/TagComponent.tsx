import React from "react"
import { Stylable } from "../../Components"

export const TagComponent: React.FC<Stylable> = props => (
  <label
    className={`ml-2 px-2 rounded font-semibold tracking-none ${props.className}`}
  >
    {props.children}
  </label>
)
