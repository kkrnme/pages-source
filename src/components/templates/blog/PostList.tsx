import React from "react"
import LinkToPost from "../../blog/LinkToPost"
import { Mdx } from "../../../../types/graphqlTypes"

export const PostList = ({ edges: posts }: PostListProps) => (
  <ul className="list-none p-0 sm:flex-wrap sm:flex ">
    {posts.map(({ node }) => (
      <li className="w-full sm:w-1/2 lg:w-1/3 p-1" key={node.id ?? undefined}>
        <LinkToPost
          to={"/blog/" + node.frontmatter?.path!}
          title={node.frontmatter?.title!}
          excerpt={node.excerpt}
          status={node.frontmatter?.status!}
        />
      </li>
    ))}
  </ul>
)

export type PostListProps = {
  edges: {
    node: {
      frontmatter?: Nully<{
        path: string
        title: string
        status: string
      }> | null
      excerpt: string
      id: string
    }
  }[]
}

type Nully<T> = { [P in keyof T]?: T[P] | undefined | null }

export default PostList
