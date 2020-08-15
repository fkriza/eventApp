import React from "react"
import "./navigationGuest.css"
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
          pointerEvents: "none",
          backgroundColor: location1 == "organizeEvent" ? "cyan" : "lightgray",
        }}
        class="eventButton"
        onClick={() => navigate("organizeEvent", { replace: true })}
      >
        <p class=".lato"> Organize an Event</p>
      </button>
      <button
        style={{
          backgroundColor: location1 == "searchEvents" ? "cyan" : "lightgray",
        }}
        class="eventButton1"
        onClick={() => {
          navigate("../searchEventsGuest", {
            replace: true,
          })
        }}
      >
        <p class=".lato">Search Events</p>
      </button>
      <button
        style={{
          pointerEvents: "none",
          backgroundColor:
            location1 == "subscribedEvents" ? "cyan" : "lightgray",
        }}
        class="eventButton"
        onClick={() => {
          navigate("subscribedEvents", {
            replace: true,
          })
        }}
      >
        <p class=".lato">Subscribed Events</p>
      </button>
      <button
        style={{
          pointerEvents: "none",
          backgroundColor: location1 == "followedEvents" ? "cyan" : "lightgray",
        }}
        class="eventButton"
        onClick={() => {
          navigate("followedEvents", { replace: true })
        }}
      >
        <p class=".lato">Followed Events</p>
      </button>
      <button
        style={{
          pointerEvents: "none",
          backgroundColor:
            location1 == "organizedEvents" ? "cyan" : "lightgray",
        }}
        class="eventButton"
        onClick={() => {
          navigate("organizedEvents", { replace: true })
        }}
      >
        <p class=".lato">Organized Events</p>
      </button>
      <button
        style={{
          backgroundColor:
            location1 == "recommendedEvents" ? "cyan" : "lightgray",
        }}
        class="eventButton1"
        onClick={() => {
          navigate("guest", {
            replace: true,
          })
        }}
      >
        <p class=".lato">Recommended Events</p>
      </button>
    </div>
  )
}

export default NavigationBar
