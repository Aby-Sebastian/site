import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

const BlogIndex = props => {
  const { data } = props
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = ""

  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value
    const { data } = props

    const posts = data.allMarkdownRemark.edges || []

    const filteredData = posts.filter(post => {
      const { description, title, tags } = post.node.frontmatter
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        tags
          .join("")
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout>
      <div className="container">
        <h1 style={{ textAlign: `center` }}>Search</h1>

        <div className="searchBox">
          <input
            className="searchInput"
            type="text"
            aria-label="Search"
            placeholder="Type to filter posts..."
            onChange={handleInputChange}
          />
        </div>

        {posts.map(({ node }) => {
          const { excerpt } = node

          const { slug } = node.fields
          const { tags, title, date, description } = node.frontmatter
          return (
            <article key={slug}>
              <header>
                <h2>
                  <Link to={slug}>{title}</Link>
                </h2>

                <p>{date}</p>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: description || excerpt,
                  }}
                />
              </section>
              <hr />
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            description
            date

            tags
          }

          fields {
            slug
          }
        }
      }
    }
  }
`
