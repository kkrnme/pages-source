import { faCalendarDay, faTag, faTags } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { MdxEdge } from "../../../types/graphqlTypes"
import { BlogPage } from "./BlogPage"
import SwipingAnchor from "../atoms/SwipingAnchor"
import PostList from "./blog/PostList"
import { Post } from "../../utils/Post"

export const TagPage = ({
  pageContext,
}: {
  pageContext: { posts: Post[]; tag: string }
}) => {
  return (
    <BlogPage
      description="エンジニア系高校生のグダいブログ。タグ別目次。"
      title={"List of" + pageContext.tag}
    >
      <h1 className="text-center text-200 font-bold">
        <FontAwesomeIcon icon={faTag} />
        {pageContext.tag}
      </h1>
      <p className="text-center">
        <SwipingAnchor to="/">
          日付順
          <FontAwesomeIcon icon={faCalendarDay} />
        </SwipingAnchor>{" "}
        <SwipingAnchor to={"/tags"}>
          <FontAwesomeIcon icon={faTags} />
          タグ一覧
        </SwipingAnchor>
      </p>
      <article className="p-1">
        <PostList posts={pageContext.posts} />
      </article>
    </BlogPage>
  )
}

export default TagPage
