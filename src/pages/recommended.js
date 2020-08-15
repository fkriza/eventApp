import React from "react"
import "../../components/recommended.css"
import Post from "../../components/post"
import Header from "../../components/header"
import Layout from "../../components/layout"
import arr from "./searchEvents"
import { graphql, useStaticQuery } from "gatsby"
import { useState } from "react"
import { Router, Link, navigate } from "@reach/router"
import { isUndefined } from "util"
function Recommended(props) {
  const data = useStaticQuery(graphql`
    query MyQuery6 {
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

  let postData = posts[0].posts
  console.log("ll", postData)
  return (
    <div class="reContent">
      <Layout location="recommendedEvents">
        {postData.map(user => (
          <Post data={user} />
        ))}
      </Layout>
    </div>
  )
}

export default Recommended
