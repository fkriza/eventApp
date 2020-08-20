import React from "react"
import Layout from "../../components/layout"
import { checkPropTypes } from "prop-types"
import Comments from "../../components/comments"

const EventTemplate = ({ data }) => {
  console.log("alala", data)

  const eventData = data.allEventsJson.edges[0].node

  console.log("alala", eventData)

  return (
    <Layout>
      <div class="commentContainer">
        <p class="commentTitle">Komentari</p>
        {eventData.eventInfo.comments.map(comment => (
          <Comments data={comment} />
        ))}
      </div>
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
            category
          }
        }
      }
    }
  }
`

export default EventTemplate
