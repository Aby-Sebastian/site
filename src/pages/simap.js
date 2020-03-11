import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
const Simap = ({ data }) => {
  const post = data.allSitePage
  return (
    <Layout>
      <div className="container">
        <h1>Hello World!</h1>
        {post.edges.map(({ node }) => {
          return (
            <>
              <Link to={node.path} className="silinks">
                https://infallible-cori-68e745.netlify.com{node.path}
              </Link>{" "}
              <br />
            </>
          )
        })}
      </div>
    </Layout>
  )
}
export default Simap

export const simaplist = graphql`
  query siteMapQuery {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`
