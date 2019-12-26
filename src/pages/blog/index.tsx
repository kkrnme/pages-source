import React from "react"
import { graphql } from "gatsby"
import LinkToPost from "../../components/blog/LinkToPost"
import { BlogIndexQuery } from "../../../types/graphqlTypes"
import { BlogPageWithoutTOC } from "../../components/templates/BlogPageWithoutTOC"

const BlogIndex = ({ data }: { data: BlogIndexQuery }) => {
  const posts = data.allMdx.edges
  return (
    <BlogPageWithoutTOC
      title="BLOG"
      description="プログラミングそこそこ好き高校生、もみにすのブログです。45%手作り。"
    >
      <h1 className="text-center text-200 font-bold">kkrnme-blog</h1>
      <article className="p-1">
        <ul className="list-none p-0 sm:flex-wrap sm:flex ">
          {posts.map(({ node: post }) => (
            <li
              className="w-full sm:w-1/2 lg:w-1/3 p-1"
              key={post.id ?? undefined}
            >
              <LinkToPost
                to={"/blog/" + post.frontmatter?.path ?? err}
                title={post.frontmatter?.title ?? err}
                excerpt={post.excerpt ?? err}
                status={post.frontmatter?.status ?? err}
              />
            </li>
          ))}
        </ul>
      </article>
    </BlogPageWithoutTOC>
  )
}
const err = `Recieved null/undefined in ${__filename}`

export const pageQuery = graphql`
  query BlogIndex {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            tags
            title
            status
          }
          timeToRead
          id
        }
      }
    }
  }
`

export default BlogIndex
