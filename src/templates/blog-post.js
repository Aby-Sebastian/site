import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className="container">
        <Link to="/research/">Go back</Link>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h4>Posted by {post.frontmatter.title}</h4>
        <p>{post.frontmatter.description}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
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
      }
    }
  }
`
