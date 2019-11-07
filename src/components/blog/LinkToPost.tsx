import React from "react"
import { Link } from "gatsby"

export default ({ to, title, excerpt, status }: argument) => (
  <div>
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
}
