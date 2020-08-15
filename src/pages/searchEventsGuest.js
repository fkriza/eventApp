import React from "react"
import ReactDOM from "react"
import { useStaticQuery } from "gatsby"
import Layout from "../../components/layoutSearchGuest"
import "../../components/searchEvent.css"
import { navigate } from "@reach/router"
import Post from "../../components/post"
class searchEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: "",
      date: "",
      time: "",
      tags: "",
      organizer: "",
      posts: [
        {
          username: "Frane Križanović",
          password: "1234",
          posts: [
            {
              location: "Split",
              date: "1997-08-24",
              time: "00:00",
              tags: "#tag1 #tag2",
              description: "This is my first event",
              comments: ["comment1"],
            },
            {
              location: "Split1",
              date: "1997-08-24",
              time: "00:00",
              tags: "#tag1 #tag2",
              description: "This is my first event",
              comments: ["comment1"],
            },
          ],
        },
        {
          username: "Frane Bakić",
          password: "12345",

          posts: [
            {
              location: "Split",
              date: "1997-08-24",
              time: "00:00",
              tags: "#tag1 #tag2",
              description: "This is my first event",
              comments: ["comment1"],
            },
          ],
        },
      ],
      postData: [],
    }
  }

  updateLocation(e) {
    this.setState({ location: e.target.value })
  }
  updateDate(e) {
    this.setState({ date: e.target.value })
  }
  updateTime(e) {
    this.setState({ time: e.target.value })
  }

  updateTags(e) {
    this.setState({ tags: e.target.value })
  }

  updateOrganizer(e) {
    this.setState({ organizer: e.target.value })
  }

  render() {
    return (
      <Layout location="searchEvents">
        <div class="search">
          <div class="searchEVent">
            <label>Location: &nbsp;&nbsp;</label>
            <input
              class="textBox"
              type="text"
              onChange={this.updateLocation.bind(this)}
            />
          </div>
          <div class="searchEVent">
            <label>
              Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input
              class="textBox"
              type="date"
              onChange={this.updateDate.bind(this)}
            />
          </div>
          <div class="searchEVent">
            <label>
              Time:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            </label>
            <input
              class="textBox"
              type="time"
              id="appt"
              name="appt"
              onChange={this.updateTime.bind(this)}
              required
            />
          </div>

          <div class="searchEVent">
            <label>
              Tags:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </label>
            <input
              class="textBox"
              type="text"
              onChange={this.updateTags.bind(this)}
            />
          </div>

          <div class="searchEVent">
            <label>Organizer: </label>
            <input
              class="textBox"
              type="text"
              onChange={this.updateOrganizer.bind(this)}
            />
          </div>

          <button
            class="searchButton"
            onClick={() => {
              let arr = [
                this.state.location,
                this.state.date,
                this.state.time,
                this.state.tags,
                this.state.organizer,
              ]
              console.log("arr_ ", arr)
              console.log(this.state.date)
              let flag = true
              for (let i = 0; i < 5; i++) if (arr[i] !== "") flag = false
              if (flag) console.log("ne")
              let organizer
              let isOrganizer = arr[4] === "" ? true : false
              if (!flag) {
                for (let i = 0; i < this.state.posts.length; i++) {
                  if (arr[4] === this.state.posts[i].username)
                    organizer = this.state.posts[i].posts
                }
                organizer = this.state.posts[0].posts
                let postData = []
                // console.log(organizer)
                for (let i = 0; i < organizer.length; i++) {
                  if (
                    (arr[0] === organizer[i].location || arr[0] === "") &&
                    (arr[1] === organizer[i].date || arr[1] === "") &&
                    (arr[2] === organizer[i].time || arr[2] === "") &&
                    (arr[3] === organizer[i].tags || arr[3] === "")
                  ) {
                    console.log(
                      "json",
                      JSON.stringify(arr[3]) === "",
                      organizer[i].date,
                      arr[1]
                    )
                    postData.push(organizer[i])
                  }
                  console.log(
                    "json",
                    JSON.stringify(arr[3]) === "",
                    organizer[0].date
                  )
                  this.setState({ postData: postData })
                }
              }
            }}
          >
            {" "}
            Search
          </button>
          {this.state.postData.map(user => (
            <Post data={user} />
          ))}
        </div>
      </Layout>
    )
  }
}
export default searchEvent
