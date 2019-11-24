import React from "react"
import { Link, graphql } from "gatsby"
//import { MDXRenderer } from "gatsby-plugin-mdx"
import ArticleHead from "../components/blog/ArticleHead"
import BlogWrapper from "../components/wrappers/BlogWrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import {
  BlogIndexQuery,
  Asciidoc,
  Maybe,
  AsciidocPageAttributes,
  AsciidocDocument,
} from "../../types/graphqlTypes"

export type pageAttributes = Maybe<
  Pick<AsciidocPageAttributes, "path" | "date" | "status">
>
export type node = {
  pageAttributes: pageAttributes
  document: Maybe<Pick<AsciidocDocument, "main" | "subtitle" | "title">>
}
export type post = {
  node: Pick<Asciidoc, "html"> & node
  previous: Maybe<node>
  next: Maybe<node>
}

/*() => ((
  <BlogWrapper>
    {PrevNextLink(post)}
    <article css={{}}>
      <ArticleHead node={node} />
      <MDXRenderer>{node.body}</MDXRenderer>
      {node.frontmatter.status === "draft" ? (
        <p>(この記事は未完成、まだ更新中なんだ。すまない)</p>
      ) : null}
    </article>
    {PrevNextLink(post)}
  </BlogWrapper>
))*/

export default ({ pageContext: post }: { pageContext: post }) => {
  console.log(post)

  const node = post.node
  return (
    <BlogWrapper>
      <PrevNextLink post={post} />
      <article css={{}}>
        <ArticleHead post={post} />
        <div dangerouslySetInnerHTML={{ __html: node.html! }} />
        {node.pageAttributes?.status === "draft" ? (
          <p>(この記事は未完成、まだ更新中なんだ。すまない)</p>
        ) : null}
      </article>
      <PrevNextLink post={post} />
    </BlogWrapper>
  )
}

const PrevNextLink: React.FC<{ post: post }> = ({ post }) => {
  const { previous, next } = post
  return (
    <div
      css={{
        display: `flex`,
        justifyContent: `space-between`,
      }}
    >
      <span>
        {previous != null ? (
          <Link to={previous.pageAttributes?.path ?? "/"}>
            <FontAwesomeIcon icon={faChevronLeft} />
            {previous.document?.title}
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
          <Link to={next.pageAttributes?.path ?? ""}>
            {next.document?.title}
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
}
