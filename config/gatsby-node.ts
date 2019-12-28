import { GatsbyNode } from "gatsby"
import Path from "path"
import { MdxConnection, MdxEdge, Mdx } from "../types/graphqlTypes"

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
            tableOfContents(maxDepth: 10)
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
  const { edges: posts } = result.data.allMdx

  const classfiedPosts: { [index: string]: MdxEdge[] } = {}

  posts.forEach(post => {
    if (post.node.frontmatter == null) {
      throw new Error("frontmatter is null")
    }

    if (post.node.frontmatter.path == null) {
      throw new Error("path is null")
    }
    if (post.node.frontmatter.tags) {
      post.node.frontmatter.tags.forEach(tag => {
        if (tag) {
          if (!classfiedPosts[tag]) {
            classfiedPosts[tag] = []
          }
          classfiedPosts[tag].push(post)
        } else {
        }
      })
    }
    createPage({
      path: "/blog/" + post.node.frontmatter.path,
      component: Path.resolve(`./src/components/blog/general/blogTemplate.tsx`),
      context: { post, id: post.node.id },
    })
  })

  Object.keys(classfiedPosts).forEach(tag => {
    return createPage({
      path: "/blog/tags/" + tag + "/",
      component: Path.resolve(`./src/components/blog/tags/TagPage.tsx`),
      context: { posts: classfiedPosts[tag], tag },
    })
  })

  createPage({
    path: "/blog/tags/",
    component: Path.resolve(`./src/components/blog/tags/TagsIndex.tsx`),
    context: { classfiedPosts },
  })
}
