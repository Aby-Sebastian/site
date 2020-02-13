import React from "react"
import Header from "./header"
import FooterPage from "./footer"
import "./main.css"
import "./bootstrap.min.css"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  return (
    <div className="bg-color">
      <Header menuLinks={data.site.siteMetadata.menuLinks} />
      {children}
      <FooterPage />
    </div>
  )
}
export default Layout
