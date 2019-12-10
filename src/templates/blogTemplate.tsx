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
import blogArticleComponents from "./blogArticleComponents"
import { Warn } from "../components/blog/Notes"

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
        {node.status === "draft" ? <Warn>この記事は書きかけです。</Warn> : null}
        <BlogArticleBody type={post.type}>{post.node.html}</BlogArticleBody>
      </article>
      <PrevNextLink post={post} type="bottom" />
    </WrapperRoot>
  )
}

const BlogArticleBody = ({
  type,
  children,
}: {
  type: Post["type"]
  children: string
}) =>
  type === "adoc" ? (
    <div dangerouslySetInnerHTML={{ __html: children }} />
  ) : (
    <div>
      <MDXProvider components={blogArticleComponents}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  )

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
