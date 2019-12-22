import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React, { useEffect, useState, useRef } from "react"
import { MdxEdge } from "../../../../types/graphqlTypes"
import { BlogLikeWrapper } from "../../Wrappers"
import BlogPostHead from "../BlogPostHead"
import { Warn } from "../Notes"
import PrevNextLink from "../PrevNextLink"
import blogArticleComponents from "./blogArticleComponents"
import { TableOfContents, TOC } from "./TableOfContents"

export const BlogTemplate = ({
  pageContext,
}: {
  pageContext: { post: MdxEdge }
}) => {
  const { post } = pageContext,
    node = post.node,
    TOC: TOC = node.tableOfContents
  const [isSmallerThanMd, setISTM] = useState(false),
    isFirstRef = useRef(true)
  useEffect(() => {
    if (isFirstRef.current) {
      setISTM(matchMedia("(max-width: 1024px)").matches)
      addEventListener("resize", () =>
        setISTM(matchMedia("(max-width: 1024px)").matches)
      )
      isFirstRef.current = false
    } else {
    }
  })
  return (
    <BlogLikeWrapper
      title={`${node.frontmatter?.title} - KKRN.ME`}
      description={node.frontmatter?.description ?? node.excerpt}
      TOC={isSmallerThanMd ? undefined : TOC}
      ISTM={isSmallerThanMd}
    >
      <BlogPostHead post={post} />

      <article className="p-3 md:p-5">
        {node.frontmatter?.status === "draft" ? (
          <Warn>この記事は書きかけです。</Warn>
        ) : null}
        {isSmallerThanMd ? <TableOfContents TOC={TOC} /> : null}
        <MDXProvider components={blogArticleComponents}>
          <MDXRenderer>{post.node.body}</MDXRenderer>
        </MDXProvider>
      </article>
      <PrevNextLink post={post} />
    </BlogLikeWrapper>
  )
}

export default BlogTemplate
