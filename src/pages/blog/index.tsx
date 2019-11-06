import React from "react"
import CenterdWrapper from "../../components/wrappers/CenterdWrapper"
import { Link, graphql } from "gatsby"

const BlogIndex = ({ data }: { data: data }) => {
  const { edges: posts } = data.allMdx
  return (
    <CenterdWrapper>
        <h1>いまのところundefined</h1>
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
    </CenterdWrapper>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { status: { ne: "private" } } }
    ) {
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
type data = {
  allMdx: {
    edges: [
      {
        node: {
          id: string
          excerpt: string
          frontmatter: {
            title: string
            date: string
            path: string
            status: string
          }
        }
      }
    ]
  }
}
export default BlogIndex
