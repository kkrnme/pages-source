import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { MdxEdge } from "../../../../types/graphqlTypes"
import { BlogLikeWrapper } from "../../Wrappers"
import BlogPostHead from "../BlogPostHead"
import { Warn } from "../Notes"
import PrevNextLink from "../PrevNextLink"
import blogArticleComponents from "./blogArticleComponents"

export const BlogTemplate = ({
  pageContext,
}: {
  pageContext: { post: MdxEdge }
}) => {
  const { post } = pageContext

  const node = post.node
  return (
    <BlogLikeWrapper
      title={`${node.frontmatter?.title} - KKRN.ME`}
      description={node.frontmatter?.description ?? node.excerpt}
    >
      <BlogPostHead post={post} />
      {node.frontmatter?.status === "draft" ? (
        <Warn>この記事は書きかけです。</Warn>
      ) : null}
      <article className="p-3 md:p-5">
        <MDXProvider components={blogArticleComponents}>
          <MDXRenderer>{post.node.body}</MDXRenderer>
        </MDXProvider>
      </article>
      <PrevNextLink post={post} type="bottom" />
    </BlogLikeWrapper>
  )
}

export default BlogTemplate
