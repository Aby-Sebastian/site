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
        <meta property="og:title" content={title} />
        <meta
          property="og:url"
          content="https://infallible-cori-68e745.netlify.com/"
        />

        <meta
          property="og:image"
          content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://infallible-cori-68e745.netlify.com/ "
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="from twitter description" />
        <meta
          name="twitter:image"
          content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg"
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
