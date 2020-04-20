import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const posts = data.allFile.edges
    const change = data.su.edges
    return (
      <Layout>
        <Helmet>
          <meta name="twitter:title" content="Blog posts are listed here" />
        </Helmet>
        <div className="container important">
          <div className="breadCrumb">
            <Link to="/">Home</Link> > Articles
          </div>
          <hr />
          <br />
          <div className="blog-list">
            {posts.map(({ node }) => {
              const title = node.childMarkdownRemark.frontmatter.title || node.childMarkdownRemark.fields.slug
              return (
                <div
                  key={node.childMarkdownRemark.fields.slug}
                  className="blog-post row"
                  style={{
                    marginBottom: "5em",
                  }}
                >
                  <div className="col-md-3">{node.childMarkdownRemark.frontmatter.date}</div>
                  <div className="col-md-6">
                    <Link style={{ boxShadow: "none" }} to={node.childMarkdownRemark.fields.slug}>
                      <h3>{title}</h3>
                    </Link>
                    <p>{node.childMarkdownRemark.frontmatter.description}</p>
                  </div>
                  <div className="col-md-3">
                    <Link to={node.childMarkdownRemark.fields.slug}>
                      <img
                        src={node.childMarkdownRemark.frontmatter.image.image}
                        alt={node.childMarkdownRemark.frontmatter.image.alt}
                        loading="lazy"
                        width="200"
                      />
                    </Link>
                  </div>

                  {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
                </div>
              )
            })}
          </div>
          <div className="new-view row">
            {change.map(({ node }) => {
              return (
                <div className="card-article col-md-3" key={node.childMarkdownRemark.fields.slug}>
                  <Link to={node.childMarkdownRemark.fields.slug}>
                    <h3>{node.childMarkdownRemark.frontmatter.title}</h3>
                  </Link>
                  <p>{node.childMarkdownRemark.excerpt}</p>
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
  query blogPageQueryFor {
    site {
      siteMetadata {
        title
      }
    }
    allFile(
      filter: {relativeDirectory: {eq: "articles"}}, 
      sort: { fields: [childMarkdownRemark___frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          childMarkdownRemark {

            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              image {
                alt
                image
              }
            }
          }
        }
      }
    }
    su: allFile(
      filter: {relativeDirectory: {eq: "articles"}}, 
      sort: { fields: [childMarkdownRemark___frontmatter___date], order: DESC }
      skip: 5
    ) {
      edges {
        node {
          childMarkdownRemark {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  }
`
