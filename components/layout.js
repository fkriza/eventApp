import React from "react"
import Header from "./header"
import NavigationBar from "./navigation"
import "./layout.css"
function Layout({ children, location }) {
  console.log(location)

  return (
    <div class="layoutcontent">
      <Header />
      <div class="layDummy" />
      <div class="lContent">
        <NavigationBar location1={location} />
        <div> </div>
        <div class="children">{children}</div>
        <div class="dummy000" />
      </div>
    </div>
  )
}

export default Layout
