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
            <Link to="/">Home</Link> > Articles
          </div>
          <hr />
          <br />
            <div className="video-list">
            {posts.map(({ node }) => {
              
              return (
                

                  <p dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }} />
                
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
          }
        }
      }
    }
  }
`
