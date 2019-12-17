import { GatsbyNode } from "gatsby"
import Path from "path"
import { MdxConnection, MdxEdge } from "../../types/graphqlTypes"

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  type Data = {
    allMdx: MdxConnection
  }
  const { createPage } = actions
  const result = await graphql<Data>(`
    query gatsbyNode {
      allMdx(
        sort: { fields: frontmatter___date, order: ASC }
        filter: { frontmatter: { status: { ne: "private" } } }
      ) {
        edges {
          node {
            id
            body
            excerpt
            frontmatter {
              path
              status
              tags
              title
              date
              description
            }
          }
          next {
            frontmatter {
              path
              title
            }
          }
          previous {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }

  if (!result.data) return
  const data = result.data

  data.allMdx.edges.forEach(post => {
    if (post.node.frontmatter == null) {
      throw new Error("frontmatter is null")
    }

    if (post.node.frontmatter.path == null) {
      throw new Error("path is null")
    }
    createPage({
      path: "/blog/" + post.node.frontmatter.path,
      component: Path.resolve(`./src/components/blog/general/blogTemplate.tsx`),
      context: { post, id: post.node.id },
    })
  })
}
