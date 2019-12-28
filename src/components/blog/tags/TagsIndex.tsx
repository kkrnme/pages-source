import {
  faArrowLeft,
  faCalendarDay,
  faTag,
  faTags,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { MdxEdge } from "../../../../types/graphqlTypes"
import PostList from "../../templates/blog/PostList"
import { BlogPageWithoutTOC } from "../../templates/BlogPageWithoutTOC"
import BlogArticleComponents from "../general/blogArticleComponents"
import SwipingAnchor from "../general/SwipingAnchor"

export const TagsIndex = ({
  pageContext,
}: {
  pageContext: {
    classfiedPosts: { [index: string]: MdxEdge[] }
  }
}) => {
  const { classfiedPosts } = pageContext
  return (
    <BlogPageWithoutTOC
      title="Tags - KKRN.ME"
      description="エンジニア系高校生ブログ。タグのリスト"
    >
      <h1 className="text-center text-200 font-bold">kkrnme-blog</h1>
      <p className="text-center">
        <SwipingAnchor to="/blog">
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
              <BlogArticleComponents.h1>
                <SwipingAnchor to={`/blog/tags/${tag}`}>
                  <FontAwesomeIcon icon={faTag} />
                  {tag}
                </SwipingAnchor>
              </BlogArticleComponents.h1>
              <PostList edges={classfiedPosts[tag]} />
            </section>
          )
        })}
      </article>
    </BlogPageWithoutTOC>
  )
}

export default TagsIndex

/**Object.keys(pageContext).map(tag => pageContext.classfiedPosts[tag]).map(post => (
          <LinkToPost
            to={post.frontmatter?.path!}
            title={post.frontmatter?.path!}
            excerpt={post.excerpt}
            status={post.frontmatter?.status!}
          />
        )) */
