const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query Adoc {
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
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }

  const posts = result.data.allAsciidoc.edges
  console.log(posts)
  posts.forEach(post => {
    createPage({
      path: post.node.pageAttributes.path,
      component: path.resolve(`./src/templates/blogTemplate.tsx`),
      context: post,
    })
  })
}
