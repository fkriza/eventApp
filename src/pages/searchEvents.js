import React from "react"
import ReactDOM from "react"
import { useStaticQuery } from "gatsby"
import Layout from "../../components/layoutSearch"
import "../../components/searchEvent.css"
import { navigate } from "@reach/router"
import Post from "../../components/post"
import NavigationBar from "../../components/navigation"
import { query } from "../templates/event"

const Events = () => {
  const events = useStaticQuery(graphql`
    query MyQuery602222 {
      allEventsJson {
        edges {
          node {
            slug
            id
            title
            img
            eventInfo {
              location
              comments
              date
              time
              description
              category
              organizer
            }
          }
        }
      }
    }
  `)
  return <SearchEvent data={events}></SearchEvent>
}
class SearchEvent extends React.Component {
  constructor(props) {
    super(props)
    console.log("ababab")
    this.info = props.data.allEventsJson.edges
    this.state = {
      generate: "",
      location: "",
      date: "",
      time: "",
      tags: "",
      organizer: "",
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
            <br />
            <br />
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
            <br />
            <br />
            <input
              class="textBox"
              type="date"
              onChange={this.updateDate.bind(this)}
            />
          </div>
          <div class="searchEVent">
            <label>
              Time:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              <br />
              <br />
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
              Category:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </label>
            <br />
            <br />
            <input
              class="textBox"
              type="text"
              onChange={this.updateTags.bind(this)}
            />
          </div>

          <div class="searchEVent">
            <label>Organizer: </label>
            <br />
            <br />
            <input
              class="textBox"
              type="text"
              onChange={this.updateOrganizer.bind(this)}
            />
          </div>

          <button
            class="searchButton"
            onClick={() => {
              //   let arr = [
              //     this.state.location,
              //     this.state.date,
              //     this.state.time,
              //     this.state.tags,
              //     this.state.organizer,
              //   ]
              //   console.log("arr_ ", arr)
              //   console.log(this.state.date)
              //   let flag = true
              //   for (let i = 0; i < 5; i++) if (arr[i] !== "") flag = false
              //   if (flag) console.log("ne")
              //   let organizer
              //   let isOrganizer = arr[4] === "" ? true : false
              //   if (!flag) {
              //     for (let i = 0; i < this.state.posts.length; i++) {
              //       if (arr[4] === this.state.posts[i].username)
              //         organizer = this.state.posts[i].posts
              //     }
              //     organizer = this.state.posts[0].posts
              //     let postData = []
              //     // console.log(organizer)
              //     for (let i = 0; i < organizer.length; i++) {
              //       if (
              //         (arr[0] === organizer[i].location || arr[0] === "") &&
              //         (arr[1] === organizer[i].date || arr[1] === "") &&
              //         (arr[2] === organizer[i].time || arr[2] === "") &&
              //         (arr[3] === organizer[i].tags || arr[3] === "")
              //       ) {
              //         console.log(
              //           "json",
              //           JSON.stringify(arr[3]) === "",
              //           organizer[i].date,
              //           arr[1]
              //         )
              //         postData.push(organizer[i])
              //       }
              //       console.log(
              //         "json",
              //         JSON.stringify(arr[3]) === "",
              //         organizer[0].date
              //       )
              //       this.setState({ postData: postData })
              //     }
              //   }
              //
              console.log(this.state.date)
              console.log("begin", this.info)
              console.log(this.props.data.allEventsJson.edges)
              let postOrg = []
              let postDate = []
              let postTime = []
              let postCategory = []
              let postLocation = []
              console.log("organize")
              if (this.state.organizer != "")
                for (let i = 0; i < this.info.length; i++) {
                  if (
                    this.info[i].node.eventInfo.organizer ==
                    this.state.organizer
                  ) {
                    console.log(this.info[i].node.eventInfo.organizer)
                    postOrg.push(this.info[i])
                  }
                }
              else postOrg = postOrg.length == 0 ? this.info : postOrg
              console.log("endOrganize", postOrg)
              if (this.state.location != "")
                for (let i = 0; i < postOrg.length; i++) {
                  if (
                    postOrg[i].node.eventInfo.location == this.state.location
                  ) {
                    postLocation.push(postOrg[i])
                  }
                }
              else
                postLocation = postLocation.length == 0 ? postOrg : postLocation

              if (this.state.time != "")
                for (let i = 0; i < postLocation.length; i++) {
                  if (postLocation[i].node.eventInfo.time == this.state.time) {
                    postTime.push(this.info[i])
                  }
                }
              else postTime = postTime.length == 0 ? postLocation : postTime

              if (this.state.date != "")
                for (let i = 0; i < postTime.length; i++) {
                  console.log(
                    "ppair",
                    postTime[i].node.eventInfo.date,
                    this.state.date
                  )
                  if (postTime[i].node.eventInfo.date == this.state.date) {
                    postDate.push(this.info[i])
                  }
                }
              else postDate = postDate.length == 0 ? postTime : postDate
              console.log("aaa", postDate)
              if (this.state.tags != "")
                for (let i = 0; i < postDate.length; i++) {
                  console.log(postDate[i].node.eventInfo.category)
                  console.log(this.state.category)
                  if (postDate[i].node.eventInfo.category == this.state.tags) {
                    console.log("usa")
                    postCategory.push(postDate[i])
                  }
                }
              else
                postCategory =
                  postCategory.length == 0 ? postDate : postCategory
              console.log(postCategory)
              this.setState({ postData: postCategory })

              //postCategory = postCategory.length == 0 ? postDate : postCategory
              //console.log(this.state.generate)
            }}
          >
            Search
          </button>
          {this.state.postData.map(user => (
            <Post data={user.node} />
          ))}
        </div>
      </Layout>
    )
  }
}

export default Events
