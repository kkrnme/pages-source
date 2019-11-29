import React from "react"
import Post from "../../utils/PostType"

export default ({ post }: { post: Post }) => (
  <h1 className="flex justify-between w-full flex-wrap">
    <span className="text-200">{post.node.title}</span>
    <span className="self-end font-normal flex-grow text-right text-150">
      Date:{post.node.date}
    </span>
  </h1>
)
