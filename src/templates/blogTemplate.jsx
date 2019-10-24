import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { SiteHeader } from "../components/SiteHeader"
import { BlogStyle, Main } from "../components/style"

export default function PageTemplate({ data: { mdx } }) {
  return (
    <div>
      <BlogStyle />
      <SiteHeader></SiteHeader>
      <Main>
        <article css={{}}>
          <h1>{mdx.frontmatter.title}</h1>
          <h2>{mdx.frontmatter.date}</h2>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </article>
      </Main>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
