import {
  faArrowLeft,
  faCalendarDay,
  faTag,
  faTags,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { MdxEdge } from "../../../types/graphqlTypes"
import PostList from "./blog/PostList"
import { BlogPage } from "./BlogPage"
import MDXComponents from "../atoms/MDXComponents"
import SwipingAnchor from "../atoms/SwipingAnchor"

export const TagsIndex = ({
  pageContext,
}: {
  pageContext: {
    classfiedPosts: { [index: string]: MdxEdge[] }
  }
}) => {
  const { classfiedPosts } = pageContext
  return (
    <BlogPage title="Tags" description="エンジニア系高校生ブログ。タグのリスト">
      <h1 className="text-center text-200 font-bold">CHIR.KKRN.ME</h1>
      <p className="text-center">
        <SwipingAnchor to="/">
          日付順
          <FontAwesomeIcon icon={faCalendarDay} />{" "}
          <FontAwesomeIcon icon={faArrowLeft} />{" "}
          <FontAwesomeIcon icon={faTags} />
          タグ一覧
        </SwipingAnchor>
      </p>
      <article className="p-1">
        {Object.keys(classfiedPosts).map(tag => {
          return (
            <section key={tag}>
              <MDXComponents.h1>
                <SwipingAnchor to={`tags/${tag}`}>
                  <FontAwesomeIcon icon={faTag} />
                  {tag}
                </SwipingAnchor>
              </MDXComponents.h1>
              <PostList edges={classfiedPosts[tag]} />
            </section>
          )
        })}
      </article>
    </BlogPage>
  )
}

export default TagsIndex
