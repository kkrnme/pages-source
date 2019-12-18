import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { MdxEdge } from "../../../types/graphqlTypes"
export const PrevNextLink = ({
  post,
}: {
  post: MdxEdge
  type: "top" | "bottom"
}) => {
  const previous = post.previous,
    next = post.next
  return (
    <div className={`flex justify-between    `}>
      {previous != undefined ? (
        <PrevNextLinkButton
          enabled
          align="left"
          to={"/blog/" + previous.frontmatter?.path ?? "path-not-found"}
        >
          {previous.frontmatter?.title}
        </PrevNextLinkButton>
      ) : (
        <PrevNextLinkButton enabled={false} align="left">
          ＊これ以上前の記録は見つからない。
        </PrevNextLinkButton>
      )}

      {next != null ? (
        <PrevNextLinkButton
          enabled
          to={"/blog/" + next.frontmatter?.path ?? "/"}
          align="right"
        >
          {next.frontmatter?.title}
        </PrevNextLinkButton>
      ) : (
        <PrevNextLinkButton enabled={false} align="right">
          ＊記録はここで途切れている。
        </PrevNextLinkButton>
      )}
    </div>
  )
}

export default PrevNextLink

export const PrevNextLinkButton: React.FC<{
  align: "left" | "right"
} & ({ enabled: true; to: string } | { enabled: false })> = props => {
  const children =
    props.align === "left"
      ? [
          <FontAwesomeIcon
            icon={faChevronLeft}
            key="faChevronLeft"
            className="mr-1"
          />,
          props.children,
        ]
      : [
          props.children,
          <FontAwesomeIcon
            icon={faChevronRight}
            key="faChevronRight"
            className="ml-1"
          />,
        ]
  return (
    <div
      className={`transition w-1/2 backdrop-blur ${
        props.enabled
          ? "bg-transparentBlack-8 hover:bg-blue-400 text-gray-300  hover:text-gray-900"
          : "bg-transparentBlack-8 text-gray-400"
      } text-${props.align}`}
    >
      {props.enabled ? (
        <Link className="block py-2 px-3 h-full" to={props.to}>
          {children}
        </Link>
      ) : (
        <span className="block py-2 px-3">{children}</span>
      )}
    </div>
  )
}
