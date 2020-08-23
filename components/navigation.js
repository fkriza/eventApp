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
          backgroundColor:
            location1 == "organizeEvent"
              ? "rgba(255, 252, 47, 0.836)"
              : "rgba(255,255,255,0.75)",
        }}
        class="eventButton2"
        id="organize"
        onClick={() => navigate("../organizeEvent", { replace: false })}
      >
        <p class=".lato"> Organize an Event</p>
      </button>
      <button
        style={{
          backgroundColor:
            location1 == "searchEvents"
              ? "rgba(255, 252, 47, 0.836)"
              : "rgba(255,255,255,0.75)",
        }}
        class="eventButton2"
        id="search"
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
            location1 == "subscribedEvents"
              ? "rgba(255, 252, 47, 0.836)"
              : "rgba(255,255,255,0.75)",
        }}
        class="eventButton2"
        id="subscribed"
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
          backgroundColor:
            location1 == "followedEvents"
              ? "rgba(255, 252, 47, 0.836)"
              : "rgba(255,255,255,0.75)",
        }}
        class="eventButton2"
        id="followed"
        onClick={() => {
          navigate("../followedEvents", { replace: false })
        }}
      >
        <p class=".lato">Followed Events</p>
      </button>
      <button
        style={{
          backgroundColor:
            location1 == "organizedEvents"
              ? "rgba(255, 252, 47, 0.836)"
              : "rgba(255,255,255,0.75)",
        }}
        class="eventButton2"
        id="organized"
        onClick={() => {
          navigate("../organizedEvents", { replace: false })
        }}
      >
        <p class=".lato">Organized Events</p>
      </button>
      <button
        style={{
          backgroundColor:
            location1 == "recommendedEvents"
              ? "rgba(255, 252, 47, 0.836)"
              : "rgba(255,255,255,0.75)",
        }}
        class="eventButton2"
        id="recommended11"
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
