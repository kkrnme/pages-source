import React from "react"
import { Link } from "gatsby"

export const SiteHeader = () => (
  <header>
    <header
      style={{
        backgroundColor: `#ddd`,
        display: `flex`,
      }}
    >
      <span
        style={{
          color: `#222`,
          margin: `auto 8px`,
          fontSize: `200%`,
        }}
      >
        KKRN.ME
      </span>
      <ul
        style={{
          display: `flex`,
          listStyle: `none`,
        }}
      >
        <ListLink to="/">HOME</ListLink>
        <ListLink to="/blog/">BLOG</ListLink>
      </ul>
    </header>
  </header>
)

const ListLink = ({ children, to }) => (
  <li style={{ margin: `1px`, display: `block` }}>
    <Link to={to} style={{ textDecoration: `none` }}>
      {children}
    </Link>
  </li>
)
