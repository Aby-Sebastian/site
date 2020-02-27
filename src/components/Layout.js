import React from "react"
import Header from "./header"
import FooterPage from "./footer"
import { Helmet } from "react-helmet"
import "./main.css"
import "./bootstrap.min.css"
import { useStaticQuery, graphql, withPrefix } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="21 VS code shortcuts" />
        <meta
          property="og:url"
          content="https://infallible-cori-68e745.netlify.com/articles/o/"
        />
        <meta
          property="og:description"
          content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling."
        />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/twitter.png`}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="21 VS code shortcuts" />
        <meta name="twitter:creator" content="@nickbilton" />
        <meta name="twitter:description" content="from twitter description" />
        <meta
          name="twitter:url"
          content="https://infallible-cori-68e745.netlify.com/articles/n/"
        />
        <meta
          name="twitter:image"
          content={`${withPrefix("/")}img/twitter.png`}
        />
      </Helmet>
      <div className="bg-color">
        <Header menuLinks={data.site.siteMetadata.menuLinks} />
        {children}
        <FooterPage />
      </div>
    </>
  )
}
export default Layout
