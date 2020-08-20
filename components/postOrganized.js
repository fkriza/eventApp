import React from "react"
import { Link } from "gatsby"
import "./post.css"
class Post extends React.Component {
  constructor(props) {
    super(props)

    let first3 =
      props.data.eventInfo.comments.length > 3
        ? props.data.eventInfo.comments.slice(0, 3)
        : props.data.eventInfo.comments
    this.state = {
      comment: "",
      comments: props.data.eventInfo.comments,
      firstThreeComments: first3,
    }
  }
  updateLast(e) {
    this.setState({ comment: e.target.value })
  }
  render() {
    console.log("hello", this.props.data)
    return (
      <div class="Post">
        <div class="postInfo">
          <div class="user">
            <img
              class="profilePic1"
              src="https://icon-library.net/images/user-image-icon/user-image-icon-4.jpg"
            />
            <div />
            <Link to={"/" + this.props.data.slug}>
              <p>fkriza</p>
            </Link>
          </div>
          <br />

          <div class="postPictureContainer">
            <div class="dummy11"></div>
            <img
              class="postPicture"
              src="https://www.sportilus.com/uploads/articles/pikado-ukratko-o-pravilima-9df02.jpg"
            />
            <div class="dummy12"></div>
          </div>
          <br />
          <div class="info">
            <div>
              <span class="labelInfo">Location: </span>
              <span class="info1">
                {this.props.data.eventInfo.location}Split
              </span>
            </div>
            <br></br>
            <div>
              <span class="labelInfo">Date and Time </span>
              <span class="info1">
                12:00 AM{this.props.data.eventInfo.dateAndTime}
              </span>
            </div>
            <br></br>
            <div>
              <span class="labelInfo">Category: </span>
              <span class="info1">{this.props.data.eventInfo.category}</span>
            </div>
            <br></br>
            <div>
              <span class="labelInfo">Description </span>
              <span class="info1">
                This is my first{this.props.data.eventInfo.description}
              </span>
            </div>
            <br />

            <hr class="crta" />
            <div class="cms1">
              {/* {this.state.firstThreeComments.map(user => (
                <p class="coments">{user}</p>
              ))} */}
              Click to see comments...
            </div>
            <br />
            {/* <span class="leave">Leave your comment</span>
            <br /> */}
            <div class="submitRec">
              <input
                type="textarea"
                class="cm1"
                placeholder="comment..."
                onChange={e => this.setState({ comment: e.target.value })}
              />
              <br />
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

              <br />
            </div>
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
          </div>
        </div>
      </div>
    )
  }
}

export default Post
