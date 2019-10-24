import React from "react"
import { Link, graphql } from "gatsby"
import { Main, BlogStyle } from "../../components/style"
import { SiteHeader } from "../../components/SiteHeader"

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <div>
      <BlogStyle />
      <SiteHeader />
      <Main>
        <h1>Awesome MDX Blog</h1>
        <ul>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <Link to={post.frontmatter.path}>
                <h2>{post.frontmatter.title}</h2>
              </Link>
              <p>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </Main>
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
