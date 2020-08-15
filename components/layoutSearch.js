import React from "react"
import Header from "./header"
import NavigationBar from "./navigation"
import "./layoutSearch.css"
let userData1 = "a"
function Layout({ children, location, isUser, userData }) {
  console.log(location)
  console.log("blabla_ ", userData)
  console.log(children)
  if (userData !== undefined) {
    userData1 = Object.values({ userData })
    console.log("uslo")
  }
  return (
    <div class="layoutcontent">
      <Header />
      <div class="layDummy" />
      <div class="lContent1">
        <NavigationBar
          isUser={isUser}
          location1={location}
          userData={userData}
          id="navBar"
          id="navBar"
        />
        <div> </div>
        <div class="children">{children}</div>
        <div class="dummy000" />
      </div>
    </div>
  )
}

export default Layout
