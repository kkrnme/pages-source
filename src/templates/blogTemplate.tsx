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
import { MDXProvider } from "@mdx-js/react"
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

  const node = post.node
  return (
    <BlogWrapper>
      <PrevNextLink post={post} type="top" />
      <article className="m-5">
        <ArticleHead post={post} />
        <Body type={post.type}>{post.node.html}</Body>
        {node.status === "draft" ? (
          <p>(この記事は未完成、まだ更新中なんだ。すまない)</p>
        ) : null}
      </article>
      <PrevNextLink post={post} type="bottom" />
    </BlogWrapper>
  )
}

const Body = ({ type, children }: { type: Post["type"]; children: string }) =>
  type === "adoc" ? (
    <div dangerouslySetInnerHTML={{ __html: children }} />
  ) : (
    <MDXProvider components={components}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  )

const components = {
  h1: (props: any) => (
    <h1 className="border-b border-gray-600 text-200" {...props}></h1>
  ),
  p: (props: any) => <p className="mx-1" {...props} />,
}

const PrevNextLink = ({
  post,
  type,
}: {
  post: NewPost
  type: "top" | "bottom"
}) => {
  const previous = post.previous,
    next = post.next
  return (
    <div
      className={
        `flex justify-between   bg-fluentGray-50 ` +
        (type === "top" ? "mb-4" : "mt-6 mt-2 border-gray-500")
      }
    >
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

const PrevNextLinkButton: React.FC<{
  align: "left" | "right"
} & ({ enabled: true; to: string } | { enabled: false })> = props => {
  const children =
    props.align === "left"
      ? [
          <FontAwesomeIcon icon={faChevronLeft} key="faChevronLeft" />,
          props.children,
        ]
      : [
          props.children,
          <FontAwesomeIcon icon={faChevronRight} key="faChevronRight" />,
        ]
  return (
    <div
      className={`transition  w-1/2 ${
        props.enabled
          ? "hover:bg-fluentBlue-10 hover:text-white"
          : "hover:bg-fluentGray-50 text-fluentGray-120 hover:text-fluentGray-100"
      } text-${props.align}`}
    >
      {props.enabled ? (
        <Link className="block py-2 px-3" to={props.to}>
          {children}
        </Link>
      ) : (
        <span className="block py-2 px-3">{children}</span>
      )}
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
