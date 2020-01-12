import React from "react"
import { graphql, Link } from "gatsby"
import LinkToPost from "../../components/blog/LinkToPost"
import { BlogIndexQuery } from "../../../types/graphqlTypes"
import { BlogPageWithoutTOC } from "../../components/templates/BlogPageWithoutTOC"
import PostList from "../../components/templates/blog/PostList"
import SwipingAnchor from "../../components/blog/general/SwipingAnchor"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTags,
  faArrowRight,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons"

const BlogIndex = ({ data }: { data: BlogIndexQuery }) => {
  const edges = data.allMdx.edges
  return (
    <BlogPageWithoutTOC
      title="BLOG"
      description="プログラミングそこそこ好き高校生、もみにすのブログです。45%手作り。"
    >
      <h1 className="text-center text-200 font-bold">CHIRAURA.KKRN.ME</h1>
      <p className="text-center">
        <SwipingAnchor to="/blog/tags">
          日付順
          <FontAwesomeIcon icon={faCalendarDay} />{" "}
          <FontAwesomeIcon icon={faArrowRight} />{" "}
          <FontAwesomeIcon icon={faTags} />
          タグ一覧
        </SwipingAnchor>
      </p>
      <article className="p-1">
        <PostList edges={edges} />
      </article>
    </BlogPageWithoutTOC>
  )
}
const err = `Recieved null/undefined in ${__filename}`

export const pageQuery = graphql`
  query BlogIndex {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            tags
            title
            status
          }
          timeToRead
          id
        }
      }
    }
  }
`

export default BlogIndex
