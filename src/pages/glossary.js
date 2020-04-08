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
                    <div dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }} />
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
  query glossaryQueryFor {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: {relativeDirectory: {eq: "glossary"}}) {
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
