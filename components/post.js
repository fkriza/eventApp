import React from "react"
import "./post.css"
class Post extends React.Component {
  constructor(props) {
    super(props)
    console.log("Logovi: " + props.data)
    console.log(props.data.comments.length)
    let first3 =
      props.data.comments.length > 3
        ? props.data.comments.slice(0, 3)
        : props.data.comments
    this.state = {
      comment: "",
      comments: props.data.comments,
      firstThreeComments: first3,
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
          <br />

          <div class="postPictureContainer">
            <div class="dummy11"></div>
            <img
              class="postPicture"
              src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <div class="dummy12"></div>
          </div>
          <br />
          <div class="info">
            <div>
              <span class="labelInfo">Location: </span>
              <span class="info1">{this.props.data.location}</span>
            </div>
            <br></br>
            <div>
              <span class="labelInfo">Date and Time </span>
              <span class="info1">{this.props.data.dateAndTime}</span>
            </div>
            <br></br>
            <div>
              <span class="labelInfo">Tags: </span>
              <span class="info1">{this.props.data.tags}</span>
            </div>
            <br></br>
            <div>
              <span class="labelInfo">Description </span>
              <span class="info1">{this.props.data.description}</span>
            </div>
            <br />
            <div class="buttons">
              <button class="postButton">
                <p class="postLato">Subscribe</p>
              </button>
              <button class="postButton">
                <p class="postLato">Recommend</p>
              </button>
              <button class="postButton">
                <p class="postLato">Follow</p>
              </button>
            </div>
            <br />
            <div class="cms1">
              {this.state.firstThreeComments.map(user => (
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
                    comment: "",
                  })
                  let first3 =
                    this.state.comments.length > 3
                      ? this.state.comments.slice(0, 3)
                      : this.state.comments
                  this.setState({
                    firstThreeComments: first3,
                  })
                }}
              >
                Submit
              </button>
              <div />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
