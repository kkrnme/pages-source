import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { SiteHeader } from "../components/SiteHeader"
import { BlogStyle, Main } from "../components/style"

export default function PageTemplate({ data: { allMdx }, pageContext }) {
  const edge = allMdx.edges[0]
  return (
    <div>
      <BlogStyle />
      <SiteHeader></SiteHeader>
      <Main>
        {PrevNextLink(pageContext)}
        <article css={{}}>
          <h1>{edge.node.frontmatter.title}</h1>
          <h2>{edge.node.frontmatter.date}</h2>
          <MDXRenderer>{edge.node.body}</MDXRenderer>
        </article>
      </Main>
    </div>
  )
}

const PrevNextLink = ({ next, previous }) => (
  <div
    css={{
      display: `flex`,
      justifyContent: `space-between`,
    }}
  >
    {previous != null ? (
      <Link to={previous.frontmatter.path}>{previous.frontmatter.title}</Link>
    ) : (
      <span>＊これ以上前の記録は見つからない。</span>
    )}
    {next != null ? (
      <Link to={next.frontmatter.path}>{next.frontmatter.title}</Link>
    ) : (
      <span>＊記録はここで途切れている。</span>
    )}
  </div>
)

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    allMdx(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          body
          frontmatter {
            title
            date
          }
        }
        previous {
          frontmatter {
            title
          }
        }
        next {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
