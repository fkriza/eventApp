import React from "react"
import "./navigation.css"
import { navigate } from "@reach/router"
import { cyan } from "color-name"
import { FaRegBell } from "react-icons/fa"
import { useState } from "react"

let userData1 = "a"
const NavigationBar = ({ location1 }) => {
  console.log({ location1 })

  return (
    <div class="navBarContent">
      <button
        style={{
          backgroundColor: location1 == "organizeEvent" ? "cyan" : "lightgray",
        }}
        class="eventButton2"
        onClick={() => navigate("../organizeEvent", { replace: false })}
      >
        <p class=".lato"> Organize an Event</p>
      </button>
      <button
        style={{
          backgroundColor: location1 == "searchEvents" ? "cyan" : "lightgray",
        }}
        class="eventButton2"
        onClick={() => {
          navigate("../searchEvents", {
            replace: false,
          })
        }}
      >
        <p class=".lato">Search Events</p>
      </button>
      <button
        style={{
          backgroundColor:
            location1 == "subscribedEvents" ? "cyan" : "lightgray",
        }}
        class="eventButton2"
        onClick={() => {
          navigate("../subscribedEvents", {
            replace: false,
          })
        }}
      >
        <p class=".lato">Subscribed Events</p>
      </button>
      <button
        style={{
          backgroundColor: location1 == "followedEvents" ? "cyan" : "lightgray",
        }}
        class="eventButton2"
        onClick={() => {
          navigate("../followedEvents", { replace: false })
        }}
      >
        <p class=".lato">Followed Events</p>
      </button>
      <button
        style={{
          backgroundColor:
            location1 == "organizedEvents" ? "cyan" : "lightgray",
        }}
        class="eventButton2"
        onClick={() => {
          navigate("../organizedEvents", { replace: false })
        }}
      >
        <p class=".lato">Organized Events</p>
      </button>
      <button
        style={{
          backgroundColor:
            location1 == "recommendedEvents" ? "cyan" : "lightgray",
        }}
        class="eventButton2"
        onClick={() => {
          navigate("../recommended", {
            replace: false,
          })
        }}
      >
        <p class=".lato">Recommended Events</p>
      </button>
    </div>
  )
}

export default NavigationBar
