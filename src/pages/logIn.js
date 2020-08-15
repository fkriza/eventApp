import React, { useState } from "react"
import "./logIn.css"
import { graphql, useStaticQuery } from "gatsby"

import { Router, Link, navigate } from "@reach/router"
import { render } from "react-dom"
import Recommended from "../../components/recommended"

function Button(user) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          postInfo {
            password
            username
          }
        }
      }
    }
  `)
  const userData = data.site.siteMetadata.postInfo
  console.log("bla ", user.username)
  return (
    <div>
      <button
        class="logButton"
        onClick={() => {
          let flag = false
          console.log(userData.length)
          for (let i = 0; i < userData.length; i++) {
            console.log(
              "iteration: ",
              user.username,
              userData[i].username,
              user.password,
              userData[i].password
            )
            if (
              user.username == userData[i].username &&
              user.password == userData[i].password
            ) {
              flag = true
              console.log("if:___", userData[i])
              navigate("/recommended")
            }
          }
          if (!flag) alert("Error: Wrong username or password")
        }}
      >
        LOG IN
      </button>
    </div>
  )
}
class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first: "",
      last: "",
    }
  }

  updateInput(e) {
    this.setState({ first: e.target.value })
  }
  updateLast(e) {
    this.setState({ last: e.target.value })
  }

  render() {
    console.log("aaa", this.state.first, this.state.last, this.state.isUser)
    return (
      <div class="content1">
        <Router>
          <Recommended path="recommended" />
        </Router>
        <div class="firstName">
          <label>Username: </label>
          <input
            class="first"
            value={this.state.first}
            type="text"
            placeholder="Username ..."
            onChange={this.updateInput.bind(this)}
          />
        </div>
        <div class="firstName">
          <label>Password: </label>
          <input
            class="first"
            value={this.state.last}
            type="password"
            placeholder="Password ..."
            onChange={this.updateLast.bind(this)}
          />
        </div>

        <Button
          isUser={this.state.isUser}
          username={this.state.first}
          password={this.state.last}
        />
      </div>
    )
  }
}
export default LogIn
