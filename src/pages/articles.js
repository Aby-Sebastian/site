import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

function research({ data }) {
  return (
    <Layout>
      <div className="container">
        <div className="breadCrumb">
          <Link to="/">Home</Link> > Articles
        </div>
        <br />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <>
            <h1>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h1>
            <div>{node.frontmatter.description}</div>
          </>
        ))}
      </div>
    </Layout>
  )
}

export default research

export const query = graphql`
  {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
          excerpt
          fileAbsolutePath
        }
      }
    }
  }
`
