import React from "react"
import Post from "../../utils/PostType"

export default ({ post }: { post: Post }) => (
  <h1 className="flex justify-between w-full flex-wrap text-2.5xl">
    <span>{post.node.title}</span>
    <span
      className="self-end font-normal flex-grow text-right"
      css={{
        fontSize: `75%`,
      }}
    >
      Date:{post.node.date}
    </span>
  </h1>
)
