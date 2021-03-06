const path = require("path")
const _ = require("lodash")
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
      allFile(filter: {relativeDirectory: {eq: "articles"}}, sort: {order: DESC, fields: childMarkdownRemark___frontmatter___date}) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
              id
              frontmatter {
                title
                tags
              }
            }
          }
        }
        group(field: childMarkdownRemark___frontmatter___tags) {
          fieldValue
        }
      }
    }

  `)

  const posts = result.data.allFile.edges

  //create blog posts page
  posts.forEach(({ node }, index) => {
    const id = node.childMarkdownRemark.id
    createPage({
      path: node.childMarkdownRemark.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
        title: node.childMarkdownRemark.frontmatter.title,
        slug: node.childMarkdownRemark.fields.slug,
        id,
      },
    })
  })
  //extract data from query
  const tags = result.data.allFile.group
  //make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: path.resolve(`./src/templates/tags.js`),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
  //creates blog listing page
  const postsPerPage = 5
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/articles` : `/articles/${i + 1}`,
      component: path.resolve("./src/templates/blog-lists.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
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
