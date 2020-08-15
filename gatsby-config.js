/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
            description: "This is my first event",
            comments: ["comment1"],
          },
          {
            location: "Split1",
            dateAndTime: "24.8.1997",
            tags: "#tag1 #tag2",
            description: "This is my first event",
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
            description: "This is my first event",
            comments: ["comment1"],
          },
        ],
      },
    ],
  },
}
