import React, { ReactNode } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faBlog,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons"
import Logo from "../resources/meyend.svg"

export default () => (
  <header className="bg-fluentRed-10 px-4 shadow-md">
    <div
      className="
    flex items-center 
    mx-auto w-full sm:w-10/12  px-2
     transition"
    >
      <Link to="/" className="w-10">
        <img src={Logo} alt="KKRN.ME" />
      </Link>
      <ul className="list-none flex p-0 self-start ">
        <ListLink to="/" icon={faHome}>
          HOME
        </ListLink>
        <ListLink to="/blog/" icon={faBlog}>
          BLOG
        </ListLink>
      </ul>
    </div>
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
