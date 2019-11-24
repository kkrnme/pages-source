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
  BlogTemplateQuery,
  Maybe,
  SitePageContextPostNode,
} from "../../types/graphqlTypes"
import Post from "../utils/PostType"
import { MDXRenderer, MDXRendererProps } from "gatsby-plugin-mdx"
import { merge } from "lodash"

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

type NewPost = Post & {
  previous: {
    context: Maybe<{
      post: Maybe<{
        node: Maybe<Pick<SitePageContextPostNode, "path" | "title">>
      }>
    }>
  }
  next: {
    context: Maybe<{
      post: Maybe<{
        node: Maybe<Pick<SitePageContextPostNode, "path" | "title">>
      }>
    }>
  }
  node: {
    context: Maybe<{
      post: Maybe<{
        node: Maybe<Pick<SitePageContextPostNode, "id">>
      }>
    }>
  }
}

export default ({
  data,
  pageContext,
}: {
  data: BlogTemplateQuery
  pageContext: { id: string; post: Post }
}) => {
  const { id } = pageContext
  const post: NewPost = merge(
    pageContext.post,
    data.allSitePage.edges.find(v => v.node.context?.post?.node?.id === id)
  )

  console.log(post)

  const node = post.node
  return (
    <BlogWrapper>
      <PrevNextLink post={post} />
      <article>
        <ArticleHead post={post} />
        <Body type={post.type}>{post.node.html}</Body>
        {node.status === "draft" ? (
          <p>(この記事は未完成、まだ更新中なんだ。すまない)</p>
        ) : null}
      </article>
      <PrevNextLink post={post} />
    </BlogWrapper>
  )
}

const Body = ({ type, children }: { type: Post["type"]; children: string }) =>
  type === "adoc" ? (
    <div dangerouslySetInnerHTML={{ __html: children }} />
  ) : (
    <MDXRenderer>{children}</MDXRenderer>
  )

const PrevNextLink = ({ post }: { post: NewPost }) => {
  const previous = post.previous,
    next = post.next
  console.log({ previous, next })
  return (
    <div className="flex justify-between">
      <span>
        {previous != undefined ? (
          <Link to={previous.context?.post?.node?.path ?? "/"}>
            <FontAwesomeIcon icon={faChevronLeft} />
            {previous.context?.post?.node?.title}
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
          <Link to={next.context?.post?.node?.path ?? ""}>
            {next.context?.post?.node?.title}
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
export const query = graphql`
  query BlogTemplate {
    allSitePage(
      sort: { fields: context___post___node___date, order: ASC }
      filter: { path: { regex: "/^/blog/.+/" } }
    ) {
      edges {
        previous {
          context {
            post {
              node {
                path
                title
              }
            }
          }
        }
        next {
          context {
            post {
              node {
                path
                title
              }
            }
          }
        }
        node {
          context {
            post {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
`
