import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const posts = data.allFile.edges
    
    return (
      <Layout>
        
        <div className="container important">
          <div className="breadCrumb">
            <Link to="/">Home</Link> > Videos
          </div>
          <hr />
          <br />
            <div className="new-view row">
            {posts.map(({ node }) => {
              
              return (
                
                  <div className="card-article col-md-6 margi">
                    <h3>{node.childMarkdownRemark.frontmatter.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }} />
                    <h5>{node.childMarkdownRemark.frontmatter.description}</h5>
                  </div>
                
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query vidPageQueryFor {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: {relativeDirectory: {eq: "videos"}}) {
      edges {
        node {
          childMarkdownRemark {
            html
            frontmatter{
              title
              description
            }
          }
        }
      }
    }
  }
`
