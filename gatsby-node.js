/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const EventTemplate = path.resolve("./src/templates/event.js")

  const result = await graphql(`
    {
      allEventsJson {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const Pages = result.data.allEventsJson.edges
  Pages.forEach(post => {
    createPage({
      path: `/${post.node.slug}`,
      component: EventTemplate,
      context: {
        id: post.node.id,
      },
    })
  })
}
