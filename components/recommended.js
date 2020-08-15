import React from "react"
import "./recommended.css"
import Layout from "./layout"
import Post from "./post"
import Header from "./header"
import Navigation from "./navigation"
function Recommended(username) {
  console.log("recommended ", username)
  return (
    <div class="reContent">
      <Header />
      <div class="navContent">
        <div class="dummy1" />
        <Navigation location="recommendedEvents" />
        <div class="dummy2" />
        <div>
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}

export default Recommended
