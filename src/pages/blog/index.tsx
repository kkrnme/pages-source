import React from "react"
import CenterdWrapper from "../../components/wrappers/CenterdWrapper"
import { graphql } from "gatsby"
import LinkToPost from "../../components/blog/LinkToPost"
import { BlogIndexQuery } from "../../../types/graphqlTypes"

const BlogIndex = ({ data }: { data: BlogIndexQuery }) => {
  const { edges: posts } = data.allAsciidoc
  return (
    <CenterdWrapper>
      <h1>いまのところundefined</h1>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <LinkToPost
              to={post.pageAttributes?.path ?? "404"}
              title={post.document?.title ?? "No title"}
              excerpt={post.document?.main ?? "No excerpt"}
              status={post.pageAttributes?.status!}
            ></LinkToPost>
          </li>
        ))}
      </ul>
    </CenterdWrapper>
  )
}

export const pageQuery = graphql`
  query BlogIndex {
    allAsciidoc(
      sort: { fields: pageAttributes___date, order: DESC }
      filter: { pageAttributes: { status: { ne: "private" } } }
    ) {
      edges {
        node {
          pageAttributes {
            path
            date
            status
          }
          document {
            main
            subtitle
            title
          }
          html
          id
        }
      }
    }
  }
`

/*export const _pageQuery = graphql`
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
`*/
export default BlogIndex
