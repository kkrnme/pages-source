import React from "react"
import CenterdWrapper from "../../components/wrappers/CenterdWrapper"
import { graphql } from "gatsby"
import LinkToPost from "../../components/blog/LinkToPost"
import { BlogIndexQuery } from "../../../types/graphqlTypes"

const BlogIndex:React.FC<BlogIndexQuery> = (data) => {
  const { edges: posts } = data.allMdx
  return (
    <CenterdWrapper>
      <h1>いまのところundefined</h1>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <LinkToPost
              to={post.frontmatter?.path!}
              title={post.frontmatter?.title!}
              excerpt={post.excerpt}
              status={post.frontmatter?.status!}
            ></LinkToPost>
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
export default BlogIndex
