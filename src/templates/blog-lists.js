import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1
        ? "/articles"
        : "/articles/" + (currentPage - 1).toString()
    const nextPage = "/articles/" + (currentPage + 1).toString()

    return (
      <Layout>
        <Helmet>
          <meta name="twitter:title" content="Blog posts are listed here" />
        </Helmet>
        <div className="container important">
          <div className="breadCrumb">
            <Link to="/">Home</Link> > Articles
          </div>
          <hr style={{ backgroundColor: "white" }} />
          <br />
          <div className="blog-list">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div
                  key={node.fields.slug}
                  className="blog-post row"
                  style={{
                    marginBottom: "10rem",
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
                        src={node.frontmatter.featuredimage}
                        loading="lazy"
                        width="200"
                      />
                    </Link>
                  </div>

                  {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
                </div>
              )
            })}
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                listStyle: "none",
                padding: 0,
              }}
            >
              {!isFirst && (
                <Link to={prevPage} rel="prev">
                  ← Previous Page
                </Link>
              )}
              {Array.from({ length: numPages }, (_, i) => (
                <li
                  key={`pagination-number${i + 1}`}
                  style={{
                    margin: 0,
                  }}
                >
                  <Link
                    to={`/${i === 0 ? "articles" : "articles/" + (i + 1)}`}
                    style={{
                      textDecoration: "none",
                      color: i + 1 === currentPage ? "#ffffff" : "",
                      background: i + 1 === currentPage ? "#007acc" : "",
                    }}
                  >
                    {i + 1}
                  </Link>
                </li>
              ))}
              {!isLast && (
                <Link to={nextPage} rel="next">
                  Next Page →
                </Link>
              )}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
            featuredimage
          }
        }
      }
    }
  }
`
