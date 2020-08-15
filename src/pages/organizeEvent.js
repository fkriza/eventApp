import React from "react"
import Layout from "../../components/layoutSearch"
import "../../components/searchEvent.css"
import { navigate } from "@reach/router"
import { cyan } from "color-name"
class searchEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: "",
      date: "",
      time: "",
      tags: "",
      organizer: "",
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
      <Layout location="organizeEvent">
        <div class="search">
          <div class="searchEVent">
            <label>Event title: </label>
            <br></br>
            <br />
            <input
              class="textBox"
              type="text"
              onChange={this.updateLocation.bind(this)}
            />
          </div>

          <div class="searchEVent">
            <label>Location: &nbsp;&nbsp;</label>
            <br></br>
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
            <br></br>
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
            </label>
            <br></br>
            <br />
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
            <br></br>
            <br />
            <input
              class="textBox"
              type="text"
              onChange={this.updateTags.bind(this)}
            />
          </div>

          <button
            class="searchButton"
            onClick={() => {
              navigate("recommended")
            }}
          >
            <p>Organize</p>
          </button>
        </div>
      </Layout>
    )
  }
}
export default searchEvent
