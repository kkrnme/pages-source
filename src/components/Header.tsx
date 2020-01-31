import styled from "@emotion/styled"
import {
  faHome,
  IconDefinition,
  faDivide,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React, { ReactChild } from "react"
import { scheme } from "../colors/colors"

type HeaderButtonProps = {
  children: ReactChild
  to: string
  icon: IconDefinition
}

const HeaderButtonList: HeaderButtonProps[] = [
  { to: "/", icon: faHome, children: "HOME" },
]
const HeaderButtonsComponent: React.FC<{ className?: string }> = ({
  className,
}) => (
  <ul className={className}>
    {HeaderButtonList.map(p => (
      <li key={p.children.toString()}>
        <HeaderButton {...p} />
      </li>
    ))}
  </ul>
)

const StyledHeaderButtonsComponent = styled(HeaderButtonsComponent)``

const Component: React.FC<{ className?: string }> = ({ className }) => (
  <header className={className}>
    <div>
      <ul>
        <StyledHeaderButtonsComponent />
      </ul>
    </div>
  </header>
)

export const SiteHeader = styled(Component)`
  background-color: ${scheme.background};
  border-bottom: 1px solid ${scheme.border};
  padding-left: 1rem;
  padding-right: 1rem;
  div {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    transition: 150ms all ease-in;
    @media (min-width: 640px) {
      .sm\:w-10\/12 {
        width: 80%;
      }
    }
    ul {
      list-style: none;
      display: flex;
      padding: 0;
      align-self: flex-start;
      li {
        margin: 0.25rem;
        display: block;
      }
    }
  }
`

const HeaderButton: React.FC<HeaderButtonProps> = ({ to, icon, children }) => (
  <Link to={`/${to}/`} className="no-underline text-gray-300">
    <span>
      <FontAwesomeIcon icon={icon} className="text-150" />
      <span>{children}</span>
    </span>
  </Link>
)

export default SiteHeader
