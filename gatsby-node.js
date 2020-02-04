const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value: slug,
    })
  }
} /* above lines of code is used to create slug. It is an Important and must step */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.title,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        title: node.frontmatter.title,
        slug: node.fields.slug,
      },
    })
  })
}

//   const dogData = [
//     {
//       name: "Fido",
//       breed: "Sheltie",
//     },
//     {
//       name: "Sparky",
//       breed: "Corgi",
//     },
//   ]
//   dogData.forEach(dog => {
//     createPage({
//       path: `/${dog.name}`,
//       component: require.resolve(`./src/templates/dog-template.js`),
//       context: { dog },
//     })
//   })

//   const catData = [
//     {
//       name: "Catone",
//       breed: "Dontknow",
//     },
//     {
//       name: "Cattwo",
//       breed: "Welliknow",
//     },
//   ]
//   catData.forEach(cat => {
//     createPage({
//       path: `/${cat.name}`,
//       component: require.resolve(`./src/templates/cat-template.js`),
//       context: { cat },
//     })
//   })
// }
