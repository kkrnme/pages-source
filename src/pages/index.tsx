import React from "react"
import { graphql } from "gatsby"
import { Mdx } from "../../types/graphqlTypes"
import { BlogPage } from "../components/templates/BlogPage"
import PostList from "../components/templates/blog/PostList"
import SwipingAnchor from "../components/atoms/SwipingAnchor"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTags,
  faArrowRight,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons"
import { PlainComponent } from "../utils/PlainComponent"
import { DeepReadonly } from "ts-essentials"
import styled from "@emotion/styled"

type Data = DeepReadonly<{
  allMdx: {
    edges: {
      node: Pick<Mdx, "excerpt" | "frontmatter" | "timeToRead" | "id">
    }[]
  }
}>

const Plain: PlainComponent<{ data: Data }> = ({
  data: {
    allMdx: { edges },
  },
  className,
}) => (
  <BlogPage
    title="BLOG"
    description="プログラミングそこそこ好き高校生、もみにすのブログです。45%手作り。"
    className={className}
  >
    <h1>CHIR.KKRN.ME</h1>
    <p>
      <SwipingAnchor to="/tags">
        日付順
        <FontAwesomeIcon icon={faCalendarDay} />{" "}
        <FontAwesomeIcon icon={faArrowRight} />{" "}
        <FontAwesomeIcon icon={faTags} />
        タグ一覧
      </SwipingAnchor>
    </p>
    <article>
      <PostList edges={edges} />
    </article>
  </BlogPage>
)

const Styled = styled(Plain)`
  & h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  }
  & p {
    text-align: center;
  }
  & article {
    padding: 0.25rem;
  }
`

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

export default Styled
