import React from "react"

export default ({ node }: { node: nodetype }) => (
  <h1
    css={{
      fontSize: `200%`,
      display: `flex`,
      justifyContent: `space-between`,
      width: `100%`,
      flexWrap: `wrap`,
    }}
  >
    <span>{node.frontmatter.title}</span>
    <span
      css={{
        alignSelf: `flex-end`,
        fontSize: `75%`,
        fontWeight: 400,
        flexGrow: 1,
        textAlign: `right`,
      }}
    >
      Date:{node.frontmatter.date}
    </span>
  </h1>
)

type nodetype = {
  frontmatter: {
    title: string
    date: string
  }
}
