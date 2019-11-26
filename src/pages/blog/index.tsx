import React from "react"
import CenterdWrapper from "../../components/wrappers/CenterdWrapper"
import { graphql } from "gatsby"
import LinkToPost from "../../components/blog/LinkToPost"
import { BlogIndexQuery } from "../../../types/graphqlTypes"

const BlogIndex = ({ data }: { data: BlogIndexQuery }) => {
  const posts = data.allSitePage.edges
  return (
    <CenterdWrapper>
      <h1>いまのところundefined</h1>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.context?.post?.node?.id ?? undefined}>
            <LinkToPost
              to={post.context?.post?.node?.path ?? err}
              title={post.context?.post?.node?.title ?? err}
              excerpt={post.context?.post?.node?.excerpt ?? err}
              status={post.context?.post?.node?.status ?? err}
              type={post.context?.post?.type as "adoc" | "mdx"}
            ></LinkToPost>
          </li>
        ))}
      </ul>
    </CenterdWrapper>
  )
}
const err = `Recieved null/undefined in ${__filename}`

export const pageQuery = graphql`
  query BlogIndex {
    allSitePage(
      sort: { fields: context___post___node___date, order: ASC }
      filter: { path: { regex: "/^/blog/.+/" } }
    ) {
      edges {
        node {
          context {
            post {
              node {
                date
                excerpt
                path
                title
                status
                id
              }
              type
            }
          }
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
