/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    postInfo: [
      {
        username: "Frane Križanović",
        password: "1234",
        posts: [
          {
            location: "Split",
            dateAndTime: "24.8.1997",
            tags: "#tag1 #tag2",
            description: "Trip to nature",
            comments: ["comment1"],
          },
          {
            location: "Split1",
            dateAndTime: "24.8.1997",
            tags: "#tag1 #tag2",
            description: "This is my first",
            comments: ["comment1"],
          },
        ],
      },
      {
        username: "Frane Bakić",
        password: "12345",

        posts: [
          {
            location: "Split",
            dateAndTime: "24.8.1997",
            tags: "#tag1 #tag2",
            description: "This is my first",
            comments: ["comment1"],
          },
        ],
      },
    ],
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
  ],
}
