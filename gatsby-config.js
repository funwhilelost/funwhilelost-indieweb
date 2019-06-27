require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Fun While Lost",
    description:
      "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
    author: "Andy Jacobs",
    url: "https://www.funwhilelost.com", // No trailing slash allowed!
    image: "/images/icon.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@funwhilelost",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-mdx`,
      options: {
        // Apply gatsby-mdx to both .mdx and .md files
        extensions: ['.mdx', '.md'],
        defaultLayout: require.resolve('./src/components/blog-post-layout.js')
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "funwhilelost",
        short_name: "funwhilelost",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#000000",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-webmention`,
      options: {
        username: 'www.funwhilelost.com', // webmention.io username
        identity: {
          github: 'funwhilelost',
          twitter: 'funwhilelost' // no @
        },
        mentions: true,
        pingbacks: true,
        domain: 'www.funwhilelost.com',
        token: process.env.WEBMENTIONS_TOKEN
      }
    }
  ],
}
