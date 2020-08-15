import React from "react"
import Header from "./headerGuest"
import NavigationBar from "./navigationGuest"
import "./layoutGuest.css"
function Layout({ children, location, isUser, userData }) {
  console.log(location)

  return (
    <div class="layoutcontent">
      <Header />
      <div class="layDummy" />
      <div class="lContent">
        <NavigationBar location1={location} id="navBar" id="navBar" />
        <div> </div>
        <div class="children">{children}</div>
        <div class="dummy000" />
      </div>
    </div>
  )
}

export default Layout
