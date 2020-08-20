import React from "react"
import Layout from "../../components/layout"

const EventTemplate = ({ data }) => {
  console.log("alala", data)

  const eventData = data.allEventsJson.edges[0].node

  console.log("alala", eventData)

  return (
    <Layout>
      <h1>{eventData.title}</h1>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    allEventsJson(filter: { id: { eq: $id } }) {
      edges {
        node {
          slug
          id
          title
          img
          eventInfo {
            location
            comments
            dateAndTime
            description
            tags
          }
        }
      }
    }
  }
`

export default EventTemplate
