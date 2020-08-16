import React from "react"

//COMPONENTS ...
import Menu from "../components/menu"
import Burger from "../components/burger"
import Body from "../components/body"

//STYLES ...
import "../styles/index.scss"
import Headroom from "react-headroom"

function App() {
  return (
    <div>
      <Burger/>
      <Menu />
      <Body />
    </div>
  )
}

export default App