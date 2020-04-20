import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

class Glossary extends React.Component {
  render() {
  const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const posts = data.allFile.edges
  return (
    <Layout>
      <div className="container">
        <div className="breadCrumb">
          <Link to="/">Home</Link> > News
        </div>
        <br />
        Glossary
        <br />
        
        <div>
            {posts.map(({ node }) => {
              
              return (
                
                  <div>
                    <h3>{node.childMarkdownRemark.frontmatter.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }} />
                    <a href={node.childMarkdownRemark.frontmatter.link} target="_blank">For More details </a>
                    <br/  >
                    <br/  >
                  </div>
                
              )
            })}
          </div>
      </div>
    </Layout>
  )
}
}
export default Glossary

export const pageQuery = graphql`
  query glossaryQueryFor {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: {relativeDirectory: {eq: "glossary"}}, sort: {fields: childMarkdownRemark___frontmatter___title, order: ASC}) {
      edges {
        node {
          childMarkdownRemark {
            html
            frontmatter{
              title
              link
            }
          }
        }
      }
    }
  }
`
