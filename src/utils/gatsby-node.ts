import { GatsbyNode } from "gatsby"
import Path from "path"
import GQTypes, {
  AsciidocConnection,
  MdxConnection,
} from "../../types/graphqlTypes"
import { merge } from "lodash"
import Post from "./PostType"

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  type Data = {
    allAsciidoc: AsciidocConnection
    allMdx: MdxConnection
  }
  const { createPage } = actions
  const result = await graphql<Data>(`
    query gatsbyNode {
      allAsciidoc(
        sort: { fields: pageAttributes___date, order: ASC }
        filter: { pageAttributes: { status: { ne: "private" } } }
      ) {
        edges {
          node {
            pageAttributes {
              path
              date
              status
            }
            document {
              main
              subtitle
              title
            }
            id
            html
          }
          previous {
            pageAttributes {
              path
            }
            document {
              title
            }
          }
          next {
            pageAttributes {
              path
            }
            document {
              title
            }
          }
        }
      }
      allMdx(
        sort: { fields: frontmatter___date, order: ASC }
        filter: { frontmatter: { status: { ne: "private" } } }
      ) {
        edges {
          node {
            id
            body
            frontmatter {
              path
              status
              tags
              title
              date
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

  const asciiPosts = data.allAsciidoc.edges.map(
      (post): Post => {
        const { node, previous, next } = post,
          { pageAttributes, document } = node

        return {
          node: {
            path: "/blog/" + pageAttributes?.path ?? "/404",
            date: pageAttributes?.date,
            status: pageAttributes?.status ?? "private",
            title: document?.title ?? "no title",
            excerpt: document?.main ?? "no excerpt",
            html: node.html ?? "<span>Error: HTML is nully</span>",
            id: node.id,
          },
          previous:
            previous == null
              ? undefined
              : {
                  path: "/blog/" + previous?.pageAttributes?.path ?? "/404",
                  title: previous?.document?.title ?? "no title",
                },
          next:
            next == null
              ? undefined
              : {
                  path: "/blog/" + next?.pageAttributes?.path ?? "/404",
                  title: next?.document?.title ?? "no title",
                },
          type: "adoc",
        }
      }
    ),
    mdxPosts = data.allMdx.edges.map(
      (post): Post => {
        const { node, previous, next } = post,
          { frontmatter } = node

        return {
          node: {
            path: "/blog/" + frontmatter?.path ?? "/404",
            date: frontmatter?.date,
            status: frontmatter?.status ?? "public",
            title: frontmatter?.title ?? "no title",
            excerpt: node.excerpt ?? "no excerpt",
            html: node.body ?? "<span>Error: HTML is nully</span>",
            id: node.id,
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
      }
    )
  const posts: Post[] = []
  asciiPosts.forEach(v => posts.push(v))
  mdxPosts.forEach(v => posts.push(v))
  console.log(posts)
  posts.forEach(post => {
    createPage({
      path: post.node.path,
      component: Path.resolve(`./src/templates/blogTemplate.tsx`),
      context: { post, id: post.node.id },
    })
  })
}
