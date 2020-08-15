import React from "react"
import "./post.css"
function Post({ data }) {
  console.log({ data })
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
          <p class="info1">Location: Split</p>
          <p class="info1">Date and Time: 20 00, 24. 10. 2019.</p>
          <div class="buttons">
            <div />
            <button class="postButton">
              <p class="postLato">Subscribe</p>
            </button>
            <button class="postButton">
              <p class="postLato">Recommend</p>
            </button>
            <button class="postButton">
              <p class="postLato">Follow&nbsp;&nbsp;&nbsp;</p>
            </button>
            <div />
          </div>
          <p class="tags">
            Tags: <a class="tg">#tg1</a> #tg2
          </p>
        </div>
      </div>
    </div>
  )
}

export default Post
