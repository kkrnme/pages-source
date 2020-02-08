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

type BlogTemplateProps = DeepReadonly<{
  pageContext: {
    post: {
      node: {
        body: string
        excerpt: string
        tableOfContents: TOC
        frontmatter?: { description?: string; path?: string; status?: string }
      }
    } & PrevNextLinkProps["post"] &
      BlogPostHeadProps["post"]
  }
}>

export const BlogTemplate = ({
  pageContext: {
    post,
    post: {
      node: {
        body,
        excerpt,
        frontmatter: { title, description = excerpt, status } = {
          title: "",
          description: excerpt,
          date: "",
          tags: [],
          path: "404",
          status: "private",
        },
        tableOfContents: TOC,
      },
    },
  },
}: BlogTemplateProps) => (
  <BlogPage title={`${title}`} description={description}>
    <BlogPostHead post={post} />
    <PrevNextLink post={post} />
    <article className="p-3 md:p-5">
      {status === "draft" ? <Warn>この記事は書きかけです。</Warn> : null}

      <TableOfContents TOC={TOC} className="my-1" />
      <MDXProvider components={blogArticleComponents}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </article>
    <PrevNextLink post={post} />
  </BlogPage>
)

export default BlogTemplate
