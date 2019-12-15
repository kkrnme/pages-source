import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import { NewPost } from "../../utils/PostType"
export const PrevNextLink = ({
  post,
  type,
}: {
  post: NewPost
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
          to={previous.context?.post?.node?.path ?? "/"}
        >
          {previous.context?.post?.node?.title}
        </PrevNextLinkButton>
      ) : (
        <PrevNextLinkButton enabled={false} align="left">
          ＊これ以上前の記録は見つからない。
        </PrevNextLinkButton>
      )}

      {next != null ? (
        <PrevNextLinkButton
          enabled
          to={next.context?.post?.node?.path ?? ""}
          align="right"
        >
          {next.context?.post?.node?.title}
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
          <FontAwesomeIcon icon={faChevronLeft} key="faChevronLeft" className="mr-1" />,
          props.children,
        ]
      : [
          props.children,
          <FontAwesomeIcon icon={faChevronRight} key="faChevronRight" className="ml-1" />,
        ]
  return (
    <div
      className={`transition no-underline w-1/2 ${
        props.enabled
          ? "backdrop-blur bg-transparentBlack-8 hover:bg-blue text-monochrome-e  hover:text-monochrome-2"
          : "backdrop-blur bg-transparentBlack-8 text-monochrome-a hover:text-fluentGray-90"
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
