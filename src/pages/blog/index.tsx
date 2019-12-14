import React from "react"
import { Wrapper } from "../../components/Wrappers"
import { graphql } from "gatsby"
import LinkToPost from "../../components/blog/LinkToPost"
import { BlogIndexQuery } from "../../../types/graphqlTypes"

const BlogIndex = ({ data }: { data: BlogIndexQuery }) => {
  const posts = data.allSitePage.edges
  return (
    <Wrapper>
      <h1 className="text-center text-200 font-bold">kkrnme-blog</h1>
      <article className="p-1">
        <ul className="list-none p-0 sm:flex-wrap sm:flex ">
          {posts.map(({ node: post }) => (
            <li
              className="w-full sm:w-1/2 lg:w-1/3 p-1"
              key={post.context?.post?.node?.id ?? undefined}
            >
              <LinkToPost
                to={post.context?.post?.node?.path ?? err}
                title={post.context?.post?.node?.title ?? err}
                excerpt={post.context?.post?.node?.excerpt ?? err}
                status={post.context?.post?.node?.status ?? err}
                type={post.context?.post?.type as "adoc" | "mdx"}
              />
            </li>
          ))}
        </ul>
      </article>
    </Wrapper>
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

export default BlogIndex
