import React from "react"
import { Link } from "gatsby"
import { InterpolationWithTheme } from "@emotion/core"

export default ({ to, title, excerpt, status, css }: argument) => (
  <div css={css}>
    <Link
      to={to}
      css={{
        display: `flex`,
        alignItems: `baseline`,
        textDecoration: `none`,
        margin: `2rem 0 0rem`,
      }}
    >
      <h2
        css={{
          margin: 0,
        }}
      >
        {title}
      </h2>
      {status === "draft" ? (
        <label
          css={{
            backgroundColor: `#ff0050`,
            marginLeft: `8px`,
            borderRadius: `5px`,
            color: `white`,
          }}
        >
          draft
        </label>
      ) : null}
    </Link>
    <p
      css={{
        marginTop: `0`,
        textAlign: `left`,
      }}
    >
      {excerpt}
    </p>
  </div>
)

interface argument {
  to: string
  title: string
  excerpt: string
  status: string
  css: InterpolationWithTheme<any>
}
