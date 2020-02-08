import React from "react"
import LinkToPost from "../../molecules/LinkToPost"
import { Mdx } from "../../../../types/graphqlTypes"
import { PlainComponent } from "../../../utils/PlainComponent"
import styled from "@emotion/styled"
import { DeepReadonly } from "ts-essentials"

export type PostListProps = DeepReadonly<{
  edges: {
    node: Pick<Mdx, "excerpt" | "id" | "frontmatter">
  }[]
}>

export const Plain: PlainComponent<PostListProps> = ({
  edges: posts,
  className,
}) => (
  <ul className={className}>
    {posts.map(({ node }) => (
      <li key={node.id ?? undefined}>
        <LinkToPost
          to={`/${node.frontmatter?.path!}/`}
          title={node.frontmatter?.title!}
          excerpt={node.excerpt}
          status={node.frontmatter?.status!}
        />
      </li>
    ))}
  </ul>
)

export const PostList = styled(Plain)`
  list-style: none;
  padding: 0;
  @media (min-width: 640px) {
    flex-wrap: wrap;
    display: flex;
  }
  li {
    width: 100%;
    padding: 0.25rem;
    @media (min-width: 640px) {
      width: 50%;
    }
    @media (min-width: 1024px) {
      width: 33.333333%;
    }
  }
`

export default PostList
