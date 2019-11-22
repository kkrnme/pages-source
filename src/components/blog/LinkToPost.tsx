import React from "react"
import { Link } from "gatsby"
import { InterpolationWithTheme } from "@emotion/core"

export default ({ to, title, excerpt, status, css }: argument) => (
  <div css={css}>
    <Link to={to} className="flex items-baseline mt-8">
      <h2>{title}</h2>
      {status === "draft" ? (
        <label className="bg-pink-500 ml-2 rounded text-white">draft</label>
      ) : null}
    </Link>
    <p className="text-left">{excerpt}</p>
  </div>
)

interface argument {
  to: string
  title: string
  excerpt: string
  status: string
  css: InterpolationWithTheme<any>
}
