import React from "react"
import Post, { NewPost } from "../../utils/PostType"
import GeoPattern from "geopattern"
import PrevNextLink from "./PrevNextLink"

export const BlogPostHead: React.FC<ArticleHeadProps> = ({ post }) => (
  <div
    css={{
      backgroundImage: GeoPattern.generate(post.node.title).toDataUrl(),
    }}
  >
    <h1 className="flex justify-between w-full flex-wrap text-white p-1">
      <span className="text-200">{post.node.title}</span>
      <span className="self-end font-normal flex-grow text-right text-150">
        Date:{post.node.date}
      </span>
    </h1>
    <PrevNextLink post={post} type="top" />
  </div>
)

export interface ArticleHeadProps {
  post: NewPost
}

export default BlogPostHead
