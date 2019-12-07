import React from "react"
import { Link, graphql } from "gatsby"
import BlogPostHead from "../components/blog/BlogPostHead"
import WrapperRoot from "../components/wrappers/Wrapper"
import { BlogTemplateQuery } from "../../types/graphqlTypes"
import Post, { NewPost } from "../utils/PostType"
import PrevNextLink from "../components/blog/PrevNextLink"
import { MDXRenderer, MDXRendererProps } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { merge } from "lodash"

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
    <WrapperRoot>
      <BlogPostHead post={post} />
      <article className="p-3 md:p-5">
        <Body type={post.type}>{post.node.html}</Body>
        {node.status === "draft" ? (
          <p>(この記事は未完成、まだ更新中なんだ。すまない)</p>
        ) : null}
      </article>
      <PrevNextLink post={post} type="bottom" />
    </WrapperRoot>
  )
}

const Body = ({ type, children }: { type: Post["type"]; children: string }) =>
  type === "adoc" ? (
    <div dangerouslySetInnerHTML={{ __html: children }} />
  ) : (
    <div>
      <MDXProvider components={components}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  )

const components = {
  h1: (props: any) => (
    <h1 className="border-b border-fluentGray-70 text-150 mt-4" {...props}></h1>
  ),
  h2: (props: any) => (
    <h2
      className="border-b border-fluentGray-70 font-medium text-120 px-1 pt-2"
      {...props}
    />
  ),
  p: (props: any) => <p className="py-1 px-2" {...props} />,
  a: (props: any) => <a className="underline-anchor" {...props}></a>,
  ul: (props: any) => <ul className="list-disc py-1 px-2 pl-8" {...props} />,
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
