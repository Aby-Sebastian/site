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
        link: "/comment",
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
