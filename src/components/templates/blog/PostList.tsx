import React from "react"
import LinkToPost from "../../molecules/LinkToPost"
import { Mdx } from "../../../../types/graphqlTypes"
import { PlainComponent } from "../../../utils/PlainComponent"
import styled from "@emotion/styled"
import { DeepReadonly } from "ts-essentials"
import { Post } from "../../../utils/Post"

export type PostListProps = DeepReadonly<{
  posts: Pick<Post, "excerpt" | "id" | "title" | "path">[]
}>

export const Plain: PlainComponent<PostListProps> = ({ posts, className }) => (
  <ul className={className}>
    {posts.map(p => (
      <li key={p.id ?? undefined}>
        <LinkToPost post={{ ...p, path: `/${p.path}/` }} />
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
