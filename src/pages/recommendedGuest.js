import React from "react"
import "../../components/recommended.css"
import Post from "../../components/post"
import Header from "../../components/header"
import Navigation from "../../components/navigation"
import Layout from "../../components/layoutGuest"
import arr from "./searchEvents"
import { graphql, useStaticQuery } from "gatsby"
import { useState } from "react"
import { Router, Link, navigate } from "@reach/router"
import { isUndefined } from "util"
function Recommended(props) {
  const data = useStaticQuery(graphql`
    query MyQuer1 {
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

  let postData = data.allEventsJson.edges
  console.log("ll", postData)
  return (
    <div class="reContent">
      <Layout location="recommendedEvents">
        {postData.map(user => (
          <Post data={user.node} />
        ))}
      </Layout>
    </div>
  )
}

export default Recommended
