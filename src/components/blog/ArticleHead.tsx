import React from "react"
import { post } from "../../templates/blogTemplate"

export default ({ post }: { post: post }) => (
  <h1
    css={{
      fontSize: `200%`,
      display: `flex`,
      justifyContent: `space-between`,
      width: `100%`,
      flexWrap: `wrap`,
    }}
  >
    <span>{post.node.document?.title}</span>
    <span
      css={{
        alignSelf: `flex-end`,
        fontSize: `75%`,
        fontWeight: 400,
        flexGrow: 1,
        textAlign: `right`,
      }}
    >
      Date:{post.node.pageAttributes?.date}
    </span>
  </h1>
)
