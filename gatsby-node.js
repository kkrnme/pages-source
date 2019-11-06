const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: ASC }
        filter: { frontmatter: { status: { ne: "private" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              date
              title
              status
            }
          }
          previous {
            frontmatter {
              path
              date
              title
            }
          }
          next {
            frontmatter {
              path
              date
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
  // Create blog post pages.
  const posts = result.data.allMdx.edges
  // you'll call `createPage` for each result
  posts.forEach(({ node, previous, next }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.frontmatter.path,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/blogTemplate.jsx`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id, previous, next },
    })
  })
}
