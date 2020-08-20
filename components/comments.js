import React from "react"
import "./comments.css"

function Comments(props) {
  console.log("aaaaaaaaaaaaaaa", props.data)
  return (
    <div class="cmContainer">
      <hr class="lineAbove" />
      <div class="commentOne">
        <label class="commentator">User:</label>
        <p class="comment">{props.data}</p>
      </div>
    </div>
  )
}

export default Comments
