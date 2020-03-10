/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "CoinedOne Technologies",
    description:
      "Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.",
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Articles",
        link: "/articles",
      },
      {
        name: "News",
        link: "/research",
      },
      {
        name: "Resource",
        link: "/resource",
      },
      {
        // name: "About Us",
        name: "Tags",
        link: "/tags",
      },
      {
        name: "About Us",
        link: "/about",
      },
      {
        name: "Contact Us",
        link: "/contact-us",
      },
      {
        name: "Search",
        link: "/search",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `blogs`,
    //     path: `${__dirname}/src/blogs/`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img/logos/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: "img",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
            name: "images",
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
              loading: "lazy",
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
  ],
}
