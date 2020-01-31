import { faCalendarDay, faTag, faTags } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { MdxEdge } from "../../../types/graphqlTypes"
import { BlogPageWithoutTOC } from "../templates/BlogPageWithoutTOC"
import SwipingAnchor from "../general/SwipingAnchor"
import LinkToPost from "../general/LinkToPost"
import PostList from "../templates/blog/PostList"

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
      <h1 className="text-center text-200 font-bold">
        <FontAwesomeIcon icon={faTag} />
        {pageContext.tag}
      </h1>
      <p className="text-center">
        <SwipingAnchor to="/blog">
          日付順
          <FontAwesomeIcon icon={faCalendarDay} />
        </SwipingAnchor>{" "}
        <SwipingAnchor to={"/tags"}>
          <FontAwesomeIcon icon={faTags} />
          タグ一覧
        </SwipingAnchor>
      </p>
      <article className="p-1">
        <PostList edges={pageContext.posts} />
      </article>
    </BlogPageWithoutTOC>
  )
}

export default TagPage
