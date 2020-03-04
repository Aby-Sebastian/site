import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"

export default function Template({ data, pageContext }) {
  const post = data.markdownRemark
  const baseUrl = "https://infallible-cori-68e745.netlify.com"
  const prev = pageContext.prev //from here
    ? {
        url: `${pageContext.prev.fields.slug}`,
        title: pageContext.prev.frontmatter.title,
      }
    : null
  const next = pageContext.next
    ? {
        url: `${pageContext.next.fields.slug}`,
        title: pageContext.next.frontmatter.title,
      }
    : null //above code creates next and previous nav links
  return (
    <Layout>
      <Helmet>
        <meta name="twitter:title" content={post.frontmatter.title} />
        <meta
          name="twitter:description"
          content={post.frontmatter.description}
        />
        <meta
          name="twitter:image"
          content="https://www.dreamhost.com/blog/wp-content/uploads/2016/08/DreamHost-Accessibility-Tips-750x498.jpg"
        />
      </Helmet>
      <div className="container important">
        <div className="breadCrumb">
          <Link to="/">Home</Link> > <Link to="/articles/">Articles</Link> >{" "}
          {post.frontmatter.title}{" "}
        </div>
        <br />
        <Link to="/articles/">Go back</Link>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h5>
          Posted by {post.frontmatter.author} On {post.frontmatter.date}
        </h5>{" "}
        {/* <p>{post.frontmatter.description}</p> */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
                    "twitterHandle"
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

export const postQuery = graphql`
  query BlogPostByPath($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html

      frontmatter {
        title
        description
        author
        date
        tags
      }
    }
  }
`
