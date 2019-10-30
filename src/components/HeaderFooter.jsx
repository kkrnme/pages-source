import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faBlog } from "@fortawesome/free-solid-svg-icons"

export const SiteFooter = () => (
  <footer
    css={{
      color: `#FFF4`,
      a: {
        color: `#FFF5`,
      },
      textAlign: `center`,
    }}
  >
    <p>
      <a href="https://github.com/kkrnme/kkrnme.github.io">
        Hosted on GitHub Pages
      </a>{" "}
      and{" "}
      <a href="https://github.com/kkrnme/pages-source">
        here's the source code under MIT License.
      </a>
    </p>
  </footer>
)

export const SiteHeader = () => (
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
      <ListLink to="/" icon={faHome}>
        HOME
      </ListLink>
      <ListLink to="/blog/" icon={faBlog}>
        BLOG
      </ListLink>
    </ul>
  </header>
)

const ListLink = ({ children, to, icon }) => (
  <li style={{ margin: `1px`, display: `block` }}>
    <Link
      to={to}
      style={{
        textDecoration: `none`,
      }}
    >
      <span
        css={{
          "@media (width <= 400px)": {
            svg: {
              height: `1.5em!important`,
              width: `1.5em!important`,
              margin: `0 2px`,
            },
            span: {
              display: `none`,
            },
          },
        }}
      >
        <FontAwesomeIcon icon={icon} />
        <span css={{}}>{children}</span>
      </span>
    </Link>
  </li>
)
