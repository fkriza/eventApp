import React from "react"
import "./post.css"
import { graphql, useStaticQuery } from "gatsby"

function Post({ data }) {
  console.log("bbb", { data })
  return (
    <div class="Post">
      <div class="postInfo">
        <div class="user">
          <img
            class="profilePic1"
            src="https://icon-library.net/images/user-image-icon/user-image-icon-4.jpg"
          />
          <div />
          <p>userName</p>
        </div>

        <div class="postPictureContainer">
          <div class="dummy11"></div>
          <img
            class="postPicture"
            src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <div class="dummy12"></div>
        </div>
        <div class="info">
          <div class="info">
            <div>
              <span class="labelInfo">Location: </span>
              <span class="info1">{data.posts[0].location}</span>
            </div>
            <br></br>
            <div>
              <span class="labelInfo">Date and Time </span>
              <span class="info1">{data.posts[0].dateAndTime}</span>
            </div>
            <br></br>
            <div>
              <span class="labelInfo">Tags: </span>
              <span class="info1">{data.posts[0].tags}</span>
            </div>
            <br></br>
            <div>
              <span class="labelInfo">Description </span>
              <span class="info1">{data.posts[0].description}</span>
            </div>
          </div>
          <br />{" "}
          <div class="buttons">
            <button class="postButton">
              <p class="postLato">Subscribe</p>
            </button>
            <button class="postButton">
              <p class="postLato">Recommend</p>
            </button>
            <button class="postButton">
              <p class="postLato">Follow&nbsp;&nbsp;&nbsp;</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
