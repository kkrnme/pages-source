import React, { ReactNode } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faBlog,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons"
import Logo from "../resources/meyend.svg"
import Script from "../resources/logo-script.svg"

export default () => (
  <header className="flex bg-fluentRed-10 items-center">
    <Link to="/" className="w-10 m-1">
      <img src={Logo} alt="KKRN.ME" />
    </Link>
    <ul className="list-none flex">
      <ListLink to="/" icon={faHome}>
        HOME
      </ListLink>
      <ListLink to="/blog/" icon={faBlog}>
        BLOG
      </ListLink>
    </ul>
  </header>
)

const ListLink = ({
  children,
  to,
  icon,
}: {
  children: ReactNode
  to: string
  icon: IconDefinition
}) => (
  <li className="m-1 block">
    <Link to={to} className="no-underline text-white">
      <span className="">
        <FontAwesomeIcon icon={icon} className="text-150" />
        <span>{children}</span>
      </span>
    </Link>
  </li>
)
