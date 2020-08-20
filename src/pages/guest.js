import React from "react"
import "../../components/recommended.css"
import Post from "../../components/postGuest"
import Header from "../../components/headerGuest"
import Navigation from "../../components/navigation"
import Layout from "../../components/layoutGuest"
import arr from "./searchEvents"
import { graphql, useStaticQuery } from "gatsby"

import { Router, Link, navigate } from "@reach/router"

function Recommended(props) {
  const data = useStaticQuery(graphql`
    query MyQuery7 {
      allEventsJson {
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
  `)
  const eventsData = data.allEventsJson.edges
  return (
    <div class="reContent">
      <Layout location="recommendedEvents">
        {eventsData.map(data => (
          <Post data={data.node} />
        ))}
      </Layout>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Recommended
