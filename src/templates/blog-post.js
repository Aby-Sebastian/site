import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"

import Layout from "../components/Layout"
import SEO from "../components/seo"

export const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const baseUrl = "https://infallible-cori-68e745.netlify.com"
  const prev = pageContext.prev //from here
    ? {
        url: `${pageContext.prev.childMarkdownRemark.fields.slug}`,
        title: pageContext.prev.childMarkdownRemark.frontmatter.title,
      }
    : null
  const next = pageContext.next
    ? {
        url: `${pageContext.next.childMarkdownRemark.fields.slug}`,
        title: pageContext.next.childMarkdownRemark.frontmatter.title,
      }
    : null //above code creates next and previous nav links
  return (
    <Layout>
      
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        keywords={post.frontmatter.keywords}
        card="summary_large_image"
        image={
          "https://infallible-cori-68e745.netlify.com" +
          post.frontmatter.image.image
        }
        alt={post.frontmatter.image.alt}
      />
      
      <div className="container important">
        <div className="breadCrumb">
          <Link to="/">Home</Link> > <Link to="/articles/">Articles</Link> >{" "}
          {post.frontmatter.title}{" "}
        </div>
        <br />
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h5>Posted by {post.frontmatter.author}</h5>
        on <small>{post.frontmatter.date}</small>
        <br />
        {/* <p>{post.frontmatter.description}</p> */}
        <div className="main-area" dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="taglist">
          <h4>Tags</h4>
          <ul>
            {post.frontmatter.tags.map(tag => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="share-post">
          Share this Post
          <div className="share-post social-media-links">
            <ul>
              <li>
                <a
                  href={
                    "https://www.facebook.com/sharer/sharer.php?u=" +
                    baseUrl +
                    pageContext.slug
                  }
                  className="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f fa-2x" />
                </a>
              </li>
              <li>
                <a
                  href={
                    "https://www.twitter.com/share?url=" +
                    baseUrl +
                    pageContext.slug +
                    "&text=" +
                    post.frontmatter.title +
                    "&via" +
                    post.frontmatter.author
                  }
                  className="twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter fa-2x" />
                </a>
              </li>
              <li>
                <a
                  href={
                    "https://www.linkedin.com/shareArticle?url=" +
                    baseUrl +
                    pageContext.slug
                  }
                  className="linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin fa-2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ul className="prevnext pager">
          <li className="previous">
            {prev && (
              <Link to={prev.url}>
                <span>Previous</span>
                <h3>{prev.title}</h3>
              </Link>
            )}
          </li>
          <li className="next">
            {next && (
              <Link to={next.url}>
                <span>Next</span>
                <h3>{next.title}</h3>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const postQuery = graphql`
  query BlogPostByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        title
        description
        author
        date(formatString: "MMMM DD, YYYY")
        keywords
        image{
          image
          alt
        }
        tags
      }
    }
  }
`
