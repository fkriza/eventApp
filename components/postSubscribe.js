import React from "react"
import "./post.css"
class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: "",
      comments: props.data.comments,
    }
  }
  updateLast(e) {
    this.setState({ comment: e.target.value })
  }
  render() {
    console.log(this.state.comments)
    return (
      <div class="Post">
        <div class="postInfo">
          <div class="user">
            <img
              class="profilePic1"
              src="https://icon-library.net/images/user-image-icon/user-image-icon-4.jpg"
            />
            <div />
            <p>fkriza</p>
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
            <p class="info1">Location: {this.props.data.location}</p>
            <p class="info1">Date and Time:{this.props.data.dateAndTime}</p>
            <p class="tags">Tags: {this.props.data.tags}</p>
            <p class="description">Description:{this.props.data.description}</p>
            <div class="buttons">
              <div />
              <button class="postButton">
                <p class="postLato">Recommend</p>
              </button>
              <button class="postButton">
                <p class="postLato">Remove and follow</p>
              </button>
              <button class="postButton">
                <p class="postLato">Remove&nbsp;&nbsp;&nbsp;</p>
              </button>
              <div />
            </div>
          </div>
          <div class="cms1">
            {this.state.comments.map(user => (
              <p class="coments">{user}</p>
            ))}
          </div>
          <div class="submitRec">
            <input
              type="textarea"
              id="cm1"
              class="cm1"
              placeholder="comment..."
              onChange={e => this.setState({ comment: e.target.value })}
            />
            <button
              class="submitButtonRec"
              onClick={() => {
                this.setState({
                  comments: this.state.comments.concat(this.state.comment),
                })
              }}
            >
              Submit
            </button>
            <div />
          </div>
        </div>
      </div>
    )
  }
}
export default Post
