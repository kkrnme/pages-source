import React from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import ArticleHead from "../components/blog/ArticleHead"
import BlogWrapper from "../components/wrappers/BlogWrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

export default function PageTemplate({ pageContext }) {
  console.log(pageContext)

  const node = pageContext.node
  return (
    <BlogWrapper>
      {PrevNextLink(pageContext)}
      <article css={{}}>
        <ArticleHead node={node} />
        <MDXRenderer>{node.body}</MDXRenderer>
        {node.frontmatter.status === "draft" ? (
          <p>(この記事は未完成、まだ更新中なんだ。すまない)</p>
        ) : null}
      </article>
      {PrevNextLink(pageContext)}
    </BlogWrapper>
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
