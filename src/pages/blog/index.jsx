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
              <Link
                to={post.frontmatter.path}
                css={{
                  display: `flex`,
                  alignItems: `baseline`,
                  textDecoration: `none`,
                  margin: `2rem 0 0rem`,
                }}
              >
                <h2
                  css={{
                    margin: 0,
                  }}
                >
                  {post.frontmatter.title}
                </h2>
                {post.frontmatter.status === "draft" ? (
                  <label
                    css={{
                      backgroundColor: `#ff0050`,
                      marginLeft: `8px`,
                      borderRadius: `5px`,
                      color: `white`,
                    }}
                  >
                    draft
                  </label>
                ) : null}
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            path
            status
          }
        }
      }
    }
  }
`
export default BlogIndex
