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
      site {
        siteMetadata {
          postInfo {
            password
            username
            posts {
              comments
              dateAndTime
              description
              location
              tags
            }
          }
        }
      }
    }
  `)
  const posts = data.site.siteMetadata.postInfo
  return (
    <div class="reContent">
      <Layout location="recommendedEvents">
        {posts.map(user => (
          <Post data={user} />
        ))}
      </Layout>
    </div>
  )
}

export default Recommended
