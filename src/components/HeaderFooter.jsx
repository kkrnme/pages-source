import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faBlog } from "@fortawesome/free-solid-svg-icons"
import LogoBlockSmall from "./logo-block-small.svg"

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
      backgroundColor: `#111`,
      display: `flex`,
    }}
  >
    <Link to="/">
      <img src={LogoBlockSmall} alt="KKRN.ME" />
    </Link>
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
      css={{
        textDecoration: `none`,
        color: `#0aa`,
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
