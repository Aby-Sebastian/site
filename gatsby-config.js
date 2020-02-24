/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "CoinedOne Teachnologies",
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
        name: "Research",
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
        name: "Contact Us",
        link: "/contact-us",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/blogs`,
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
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
