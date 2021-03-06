/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, keywords, title, card, image, alt }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const tcard = card || "summary"
  const timage =
    image ||
    "https://infallible-cori-68e745.netlify.com/static/Opnlogo-a76fc7b9f021af6bf9328e2cb9e26836.png"
  const talt = alt || "logo of coinedone technologies"
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `https://infallible-cori-68e745.netlify.com/`,
        },
        {
          property: `og:image`,
          content: timage,
        },
        {
          property: `og:image:alt`,
          content: talt,
        },
        {
          name: `twitter:card`,
          content: tcard,
        },
        {
          name: `twitter:creator`,
          content: "@Aby50781727",
        },
        {
          name: `twitter:site`,
          content: `CoinedOne Technologies`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:url`,
          content: `https://infallible-cori-68e745.netlify.com/`,
        },
        {
          name: `twitter:image`,
          content: timage,
        },
        {
          name: `twitter:image:alt`,
          content: talt,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
