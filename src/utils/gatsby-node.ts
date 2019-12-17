import { GatsbyNode } from "gatsby"
import Path from "path"
import { MdxConnection } from "../../types/graphqlTypes"

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

  const posts: Post[] = data.allMdx.edges.map(edge => {
    const { node, previous, next } = edge,
      { frontmatter } = node

    if (frontmatter == null) {
      console.error("frontmatter is null")
      throw new Error()
    }

    if (frontmatter.path == null) {
      throw new Error("path is null")
    }

    return {
      node: {
        path: "/blog/" + frontmatter.path,
        date: frontmatter.date,
        status: frontmatter.status ?? "public",
        title: frontmatter.title,
        excerpt: node.excerpt,
        body: node.body,
        id: node.id,
        description: frontmatter.description ?? node.excerpt,
      },
      previous:
        previous == null
          ? undefined
          : {
              path: "/blog/" + previous.frontmatter?.path ?? "/404",
              title: previous.frontmatter?.title ?? "no title",
            },
      next:
        next == null
          ? undefined
          : {
              path: "/blog/" + next?.frontmatter?.path ?? "/404",
              title: next?.frontmatter?.title ?? "no title",
            },
      type: "mdx",
    }
  })
  posts.forEach(post => {
    createPage({
      path: post.node.path,
      component: Path.resolve(`./src/components/blog/general/blogTemplate.tsx`),
      context: { post, id: post.node.id },
    })
  })
}
