import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

function research({ data }) {
  return (
    <Layout>
      <div className="container">
        Research
        <br />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <>
            <h1>
              <Link to={node.frontmatter.title}>{node.frontmatter.title}</Link>
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
    allMarkdownRemark {
      edges {
        node {
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
