import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { SiteHeader } from "../components/HeaderFooter"
import { BlogStyle } from "../components/style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

export default function PageTemplate({ data: { allMdx }, pageContext }) {
  const edge = allMdx.edges[0]
  return (
    <div>
      <BlogStyle />
      <SiteHeader></SiteHeader>
      <main>
        {PrevNextLink(pageContext)}
        <article css={{}}>
          <h1
            css={{
              display: `flex`,
              justifyContent: `space-between`,
              width: `100%`,
              flexWrap: `wrap`,
              "@media (width <= 800px)": {
                flexWrap: `wrap`,
              },
            }}
          >
            <span>{edge.node.frontmatter.title} </span>
            <span
              css={{
                alignSelf: `flex-end`,
                fontSize: `75%`,
                fontWeight: `400`,
                //width: `100%`,
                flexGrow: 1,
                textAlign: `right`,
                "@media (width <= 800px)": {},
              }}
            >
              Date:{edge.node.frontmatter.date}
            </span>
          </h1>
          <MDXRenderer>{edge.node.body}</MDXRenderer>
        </article>
        {PrevNextLink(pageContext)}
      </main>
    </div>
  )
}

const PrevNextLink = ({ next, previous }) => (
  <div
    css={{
      display: `flex`,
      justifyContent: `space-between`,
    }}
  >
    <span>
      {previous != null ? (
        <Link to={previous.frontmatter.path}>
          <FontAwesomeIcon icon={faChevronLeft} />
          {previous.frontmatter.title}
        </Link>
      ) : (
        <span>
          <FontAwesomeIcon icon={faChevronLeft} />
          ＊これ以上前の記録は見つからない。
        </span>
      )}
    </span>
    <span>
      {next != null ? (
        <Link to={next.frontmatter.path}>
          {next.frontmatter.title}
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      ) : (
        <span>
          ＊記録はここで途切れている。
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      )}
    </span>
  </div>
)

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    allMdx(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          body
          frontmatter {
            title
            date
          }
        }
        previous {
          frontmatter {
            title
          }
        }
        next {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
