import { css } from "@emotion/core"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { MdxEdge } from "../../../types/graphqlTypes"
export const PrevNextLink = ({ post }: { post: MdxEdge }) => {
  const previous = post.previous,
    next = post.next
  return (
    <div className={`flex justify-between`} css={{}}>
      {previous != undefined ? (
        <PrevNextLinkButton
          enabled
          to={"/blog/" + previous.frontmatter?.path ?? "path-not-found"}
        >
          {previous.frontmatter?.title}
        </PrevNextLinkButton>
      ) : (
        <PrevNextLinkButton enabled={false}>
          ＊これ以上前の記録は見つからない。
        </PrevNextLinkButton>
      )}

      {next != null ? (
        <PrevNextLinkButton
          enabled
          to={"/blog/" + next.frontmatter?.path ?? "/"}
        >
          {next.frontmatter?.title}
        </PrevNextLinkButton>
      ) : (
        <PrevNextLinkButton enabled={false}>
          ＊記録はここで途切れている。
        </PrevNextLinkButton>
      )}
    </div>
  )
}

export default PrevNextLink

type PrevNextLinkButtonProps =
  | { enabled: true; to: string }
  | { enabled: false }

export const PrevNextLinkButton: React.FC<PrevNextLinkButtonProps> = props => {
  return (
    <div
      className={`transition w-1/2 backdrop-blur ${
        props.enabled
          ? "bg-transparentBlack-8 hover:bg-blue-400 text-gray-300  hover:text-gray-900"
          : "bg-transparentBlack-8 text-gray-400"
      }`}
      css={css`
        &:nth-of-type(odd) * div {
          text-align: left;
          svg.rightChevron {
            display: none;
          }
        }
        &:nth-of-type(even) * div {
          text-align: right;
          svg.leftChevron {
            display: none;
          }
        }
      `}
    >
      <LinkOrSpan {...props}>
        <PrevNextLinkButtonChildren>
          {props.children}
        </PrevNextLinkButtonChildren>
      </LinkOrSpan>
    </div>
  )
}

const LinkOrSpan: React.FC<PrevNextLinkButtonProps> = props => {
  return props.enabled ? (
    <Link className="block py-2 px-3 h-full" to={props.to}>
      {props.children}
    </Link>
  ) : (
    <span className="block py-2 px-3">{props.children}</span>
  )
}

const PrevNextLinkButtonChildren: React.FC<{}> = props => {
  return (
    <div>
      <FontAwesomeIcon icon={faChevronLeft} className="leftChevron mr-1" />
      <span>{props.children}</span>
      <FontAwesomeIcon icon={faChevronRight} className="rightChevron ml-1" />
    </div>
  )
}
