import React from "react"
import "../../components/recommended.css"
import Post from "../../components/postOrganized"
import Header from "../../components/header"
import Navigation from "../../components/navigation"
import Layout from "../../components/layout"
import arr from "./searchEvents"
import { graphql, useStaticQuery } from "gatsby"
import { useState } from "react"
import { Router, Link, navigate } from "@reach/router"
import { isUndefined } from "util"
function Recommended(props) {
  const data = useStaticQuery(graphql`
    query MyQuery5 {
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
              date
              time
              description
              category
              organizer
            }
          }
        }
      }
    }
  `)
  const eventsData = data.allEventsJson.edges

  return (
    <div class="reContent">
      <Layout location="organizedEvents">
        {eventsData.map(data => (
          // event={eventData}

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
