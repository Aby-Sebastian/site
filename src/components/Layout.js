import React from "react"
import Header from "./header"
import FooterPage from "./footer"
import { Helmet } from "react-helmet"
import "./main.css"
import "./bootstrap.min.css"
import { useStaticQuery, graphql, withPrefix } from "gatsby"
import twitter from "../../static/img/twitter.png"

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
        {/* <meta property="og:site_name" content="freeCodeCamp.org" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Version a REST API" />
        <meta
          property="og:description"
          content="API versioning is difficult to do effectively. Users of APIs feel the pain of changes that break their code, and maintainers of APIs struggle to find strategies for effective API evolution. This article provides a guide to overcoming those challenges."
        />
        <meta
          property="og:url"
          content="https://www.freecodecamp.org/news/how-to-version-a-rest-api/"
        />
        <meta
          property="og:image"
          content="https://www.freecodecamp.org/news/content/images/2020/03/Art-Exhibit-Blog-Banner.png"
        /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Version a REST API" />
        <meta
          name="twitter:description"
          content="API versioning is difficult to do effectively. Users of APIs feel the pain of changes that break their code, and maintainers of APIs struggle to find strategies for effective API evolution. This article provides a guide to overcoming those challenges."
        />
        <meta
          name="twitter:url"
          content="https://www.freecodecamp.org/news/how-to-version-a-rest-api/"
        />
        <meta
          name="twitter:image"
          content={`${withPrefix("/")}img/twitter.png`}
        />
        {/* <meta
          name="twitter:image"
          content="https://www.freecodecamp.org/news/content/images/2020/03/Art-Exhibit-Blog-Banner.png"
        /> */}

        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nytimes" />
        <meta name="twitter:creator" content="@SarahMaslinNir" />
        <meta
          name="twitter:title"
          content="Parade of Fans for Houston’s Funeral"
        />
        <meta
          name="twitter:description"
          content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here."
        />
        <meta
          name="twitter:image"
          content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg"
        /> */}
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
