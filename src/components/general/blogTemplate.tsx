import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React, { useState } from "react"
import { MdxEdge } from "../../../types/graphqlTypes"
import BlogPostHead from "./BlogPostHead"
import { Warn } from "./Notes"
import PrevNextLink from "./PrevNextLink"
import blogArticleComponents from "./blogArticleComponents"
import { TableOfContents, TOC } from "./TableOfContents"
import { onFirstRender } from "../../hooks/onFirstRender"
import { BlogPageWithTOC } from "../templates/BlogPageWithTOC"

export const BlogTemplate = ({
  pageContext,
}: {
  pageContext: { post: MdxEdge }
}) => {
  const { post } = pageContext,
    node = post.node,
    TOC: TOC = node.tableOfContents
  const [isSmallerThanMd, setISTM] = useState(false)
  onFirstRender(() => {
    setISTM(matchMedia("(max-width: 1023px)").matches)
    addEventListener("resize", () =>
      setISTM(matchMedia("(max-width: 1023px)").matches)
    )
  })
  return (
    <BlogPageWithTOC
      title={`${node.frontmatter?.title}`}
      description={node.frontmatter?.description ?? node.excerpt}
      TOC={TOC}
      visible={isSmallerThanMd}
    >
      <BlogPostHead post={post} />
      <PrevNextLink post={post} />
      <article className="p-3 md:p-5">
        {node.frontmatter?.status === "draft" ? (
          <Warn>この記事は書きかけです。</Warn>
        ) : null}
        {isSmallerThanMd ? (
          <TableOfContents TOC={TOC} className="my-1" />
        ) : null}
        <MDXProvider components={blogArticleComponents}>
          <MDXRenderer>{post.node.body}</MDXRenderer>
        </MDXProvider>
      </article>
      <PrevNextLink post={post} />
    </BlogPageWithTOC>
  )
}

export default BlogTemplate
