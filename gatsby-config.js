const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdPlugins: [require('remark-abbr')],
        // Setting in gatsby-node.js
        // defaultLayouts: {
        //   posts: require.resolve("./src/templates/post.tsx")
        // },
        gatsbyRemarkPlugins: [
          { resolve: `gatsby-remark-grid-tables`, options: {} },
          { resolve: `gatsby-remark-images`, options: {} },
          { resolve: `gatsby-remark-katex`, options: {} },
          { resolve: `gatsby-remark-prismjs`, options: {} },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: { displayName: false },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the
        // root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline
    // functionality To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
