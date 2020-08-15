import React from "react"
import "./header.css"
import { FaUser } from "react-icons/fa"
import { navigate } from "@reach/router"

const Header = () => {
  return (
    <header class="headerContent">
      <div class="leftHeader">
        <img
          src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          class="profilePicture"
        />
        <p
          onClick={() => {
            navigate("recommended")
          }}
          class="appName"
        >
          EVENT &nbsp;&nbsp;APP
        </p>
      </div>
      <div />
      <div>
        <div class="bla">
          <p class="username">Username</p>
          <div />
          <button class="logOut" onClick={() => navigate("/")}>
            <p class="logOutText">Log out</p>
          </button>
          <div />
        </div>
      </div>
      <div />
    </header>
  )
}

export default Header
