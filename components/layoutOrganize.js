import React from "react"
import Header from "./header"
import NavigationBar from "./navigation"
import "./layoutOrganize.css"
function Layout({ children }) {
  return (
    <div class="layoutcontent">
      <Header />
      <div class="layDummy" />
      <div class="lContent">
        <NavigationBar />
        <div> </div>
        <div class="children">{children}</div>
        <div class="dummy000" />
      </div>
    </div>
  )
}

export default Layout
