import React from "react"
import { Mdx, MdxEdge } from "../../../../types/graphqlTypes"
import { BlogPageWithoutTOC } from "../../templates/BlogPageWithoutTOC"
import LinkToPost from "../LinkToPost"

export const TagPage = ({
  pageContext,
}: {
  pageContext: { posts: MdxEdge[]; tag: string }
}) => {
  return (
    <BlogPageWithoutTOC
      description="エンジニア系高校生のグダいブログ。タグ別目次。"
      title={"List of" + pageContext.tag}
    >
      {pageContext.posts.map(edge => {
        const node = edge.node
        return (
          <LinkToPost
            to={"/blog/" + node.frontmatter?.path!}
            title={node.frontmatter?.title!}
            excerpt={node.excerpt}
            status={node.frontmatter?.status!}
          />
        )
      })}
    </BlogPageWithoutTOC>
  )
}

export default TagPage
