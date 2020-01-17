import {
  faBlog,
  faHome,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React, { ReactChild } from "react"

const HeaderButtonList: HeaderButtonProps[] = [
  { to: "/", icon: faHome, children: "HOME" },
  { to: "/blog/", icon: faBlog, children: "BLOG" },
]

export const SiteHeader = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-700 px-4 shadow-md">
      <div
        className="
    flex items-center 
    mx-auto w-full sm:w-10/12  px-2
     transition"
      >
        <ul className="list-none flex p-0 self-start ">
          {HeaderButtonList.map(p => (
            <li key={p.children.toString()} className="m-1 block">
              <HeaderButton {...p} />
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ to, icon, children }) => (
  <Link to={to} className="no-underline text-gray-300">
    <span>
      <FontAwesomeIcon icon={icon} className="text-150" />
      <span>{children}</span>
    </span>
  </Link>
)

type HeaderButtonProps = {
  children: ReactChild
  to: string
  icon: IconDefinition
}

export default SiteHeader
