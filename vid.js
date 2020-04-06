import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"


export const Vid = ({ data }) => {
        const posts = data.allFile.edges
        return (
            <Layout>
      <div className="container">
        <div className="main-area" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
     </Layout>
        )




export const pae = graphql `
  query {

  
  allFile(filter: {relativeDirectory: {eq: "videos"}}) {
    edges {
      node {
        childMarkdownRemark {
          html
        }
      }
    }
  }
}
`