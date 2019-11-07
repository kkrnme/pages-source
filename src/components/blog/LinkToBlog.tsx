import React from "react"
import { Link } from "gatsby"

export default ({ to, children }: argument) => (
  <Link to={to}>
    <div>{children}</div>
  </Link>
)

interface argument {
  to: string
  children: React.ReactNode
}
