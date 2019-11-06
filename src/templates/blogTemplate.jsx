import React from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { SiteHeader } from "../components/HeaderFooter"
import { BlogStyle } from "../components/style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Twemoji from "react-twemoji"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

export default function PageTemplate({ pageContext }) {
  console.log(pageContext)

  const node = pageContext.node
  return (
    <div>
      <BlogStyle />
      <SiteHeader></SiteHeader>
      <Twemoji noWrapper>
        <main>
          {PrevNextLink(pageContext)}
          <article css={{}}>
            <h1
              css={{
                fontSize: `200%`,
                display: `flex`,
                justifyContent: `space-between`,
                width: `100%`,
                flexWrap: `wrap`,
                "@media (width <= 800px)": {
                  flexWrap: `wrap`,
                },
              }}
            >
              <span>{node.frontmatter.title} </span>
              <span
                css={{
                  alignSelf: `flex-end`,
                  fontSize: `75%`,
                  fontWeight: `400`,
                  flexGrow: 1,
                  textAlign: `right`,
                  "@media (width <= 800px)": {},
                }}
              >
                Date:{node.frontmatter.date}
              </span>
            </h1>
            <MDXRenderer>{node.body}</MDXRenderer>
            {node.frontmatter.status === "draft" ? (
              <p>(この記事は未完成、まだ更新中なんだ。すまない)</p>
            ) : null}
          </article>
          {PrevNextLink(pageContext)}
        </main>
      </Twemoji>
    </div>
  )
}

const PrevNextLink = ({ next, previous }) => (
  <div
    css={{
      display: `flex`,
      justifyContent: `space-between`,
    }}
  >
    <span>
      {previous != null ? (
        <Link to={previous.frontmatter.path}>
          <FontAwesomeIcon icon={faChevronLeft} />
          {previous.frontmatter.title}
        </Link>
      ) : (
        <span>
          <FontAwesomeIcon icon={faChevronLeft} />
          ＊これ以上前の記録は見つからない。
        </span>
      )}
    </span>
    <span>
      {next != null ? (
        <Link to={next.frontmatter.path}>
          {next.frontmatter.title}
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      ) : (
        <span>
          ＊記録はここで途切れている。
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      )}
    </span>
  </div>
)
