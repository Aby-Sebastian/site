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
        News
        <br />
        <h4>News One Title</h4>
        <p>
          {" "}
          Mollit elit ut ut velit ipsum culpa voluptate commodo pariatur.
          Ullamco aliqua qui laboris incididunt nostrud do minim duis mollit
          cillum do. Eiusmod tempor commodo ipsum minim anim ipsum ullamco dolor
          id officia.
        </p>
        <br />
        <h4>News Two Title</h4>
        <p>
          {" "}
          Mollit elit ut ut velit ipsum culpa voluptate commodo pariatur.
          Ullamco aliqua qui laboris incididunt nostrud do minim duis mollit
          cillum do. Eiusmod tempor commodo ipsum minim anim ipsum ullamco dolor
          id officia.
        </p>
        <br />
        <h4>News Three Title</h4>
        <p>
          {" "}
          Mollit elit ut ut velit ipsum culpa voluptate commodo pariatur.
          Ullamco aliqua qui laboris incididunt nostrud do minim duis mollit
          cillum do. Eiusmod tempor commodo ipsum minim anim ipsum ullamco dolor
          id officia.
        </p>
        <br />
        <h4>News Four Title</h4>
        <p>
          {" "}
          Mollit elit ut ut velit ipsum culpa voluptate commodo pariatur.
          Ullamco aliqua qui laboris incididunt nostrud do minim duis mollit
          cillum do. Eiusmod tempor commodo ipsum minim anim ipsum ullamco dolor
          id officia.
        </p>
        <div className="new-view row">
            {posts.map(({ node }) => {
              
              return (
                
                  <div className="card-article col-md-6 margi">
                    <h3>{node.childMarkdownRemark.frontmatter.title}</h3>
                    <p>{node.childMarkdownRemark.frontmatter.description}</p>
                    <a href={node.childMarkdownRemark.frontmatter.link} target="_blank">For More details </a>
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
  query newsQueryFor {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: {relativeDirectory: {eq: "news"}}) {
      edges {
        node {
          childMarkdownRemark {
            
            frontmatter{
              title
              description
              link
            }
          }
        }
      }
    }
  }
`
