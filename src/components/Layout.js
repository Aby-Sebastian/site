import React from "react"
import Header from "./header"
import FooterPage from "./footer"

import "./main.css"
import "./bootstrap.min.css"
import { useStaticQuery, graphql, withPrefix } from "gatsby"
import twitter from "../../static/img/twitter.png"
import SEO from './seo'

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
      <SEO title="Home" />
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.12.0/css/all.css"
      ></link>
      <div className="bg-color">
        <Header menuLinks={data.site.siteMetadata.menuLinks} />
        {children}
        <FooterPage />
      </div>
    </>
  )
}
export default Layout
