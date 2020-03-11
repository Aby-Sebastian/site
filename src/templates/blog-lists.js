import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
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
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div
                  key={node.fields.slug}
                  className="blog-post row"
                  style={{
                    marginBottom: "5em",
                  }}
                >
                  <div className="col-md-3">{node.frontmatter.date}</div>
                  <div className="col-md-6">
                    <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
                      <h3>{title}</h3>
                    </Link>
                    <p>{node.frontmatter.description}</p>
                  </div>
                  <div className="col-md-3">
                    <Link to={node.fields.slug}>
                      <img
                        src={node.frontmatter.image.image}
                        alt={node.frontmatter.image.alt}
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
                <div className="card-article col-md-3" key={node.fields.slug}>
                  <Link to={node.fields.slug}>
                    <h3>{node.frontmatter.title}</h3>
                  </Link>
                  <p>{node.excerpt}</p>
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
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
    su: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: 5
    ) {
      edges {
        node {
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
`
