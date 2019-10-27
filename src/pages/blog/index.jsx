import React from "react"
import { Link, graphql } from "gatsby"
import { BlogStyle } from "../../components/style"
import { SiteHeader } from "../../components/HeaderFooter"

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <div>
      <BlogStyle />
      <SiteHeader />
      <main>
        <h1>Awesome MDX Blog</h1>
        <ul
          css={{
            listStyle: `none`,
          }}
        >
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <Link to={post.frontmatter.path}>
                <h2
                  css={{
                    margin: `2rem auto 0rem`,
                  }}
                >
                  {post.frontmatter.title}
                </h2>
              </Link>
              <p
                css={{
                  marginTop: `0`,
                }}
              >
                {post.excerpt}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`
export default BlogIndex
