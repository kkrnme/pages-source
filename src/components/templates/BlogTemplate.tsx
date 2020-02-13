import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import BlogPostHead, { BlogPostHeadProps } from "../organisms/BlogPostHead"
import { Warn } from "../molecules/Notes"
import PrevNextLink, { PrevNextLinkProps } from "../organisms/PrevNextLink"
import blogArticleComponents from "../atoms/MDXComponents"
import { TableOfContents, TOC } from "../organisms/TableOfContents"
import { BlogPage } from "./BlogPage"
import { DeepReadonly } from "ts-essentials"
import { Post } from "../../utils/Post"

type BlogTemplateProps = DeepReadonly<{
  pageContext: [Post, Post | null | undefined, Post | null | undefined]
}>

export const BlogTemplate: React.FC<BlogTemplateProps> = ({
  pageContext: [post, previous, next],
  pageContext: [{ body, title, description, tableOfContents: TOC }],
}) => (
  <BlogPage title={`${title}`} description={description}>
    <BlogPostHead post={post} />
    <PrevNextLink {...{ previous, next }} />
    <article className="p-3 md:p-5">
      {status === "draft" ? <Warn>この記事は書きかけです。</Warn> : null}

      <TableOfContents TOC={TOC} className="my-1" />
      <MDXProvider components={blogArticleComponents}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </article>
    <PrevNextLink {...{ previous, next }} />
  </BlogPage>
)

export default BlogTemplate
