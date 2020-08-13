import React from "react"

//COMPONENTS ...
import Menu from "../components/menu"
import Burger from "../components/burger"
import Body from "../components/body"

//STYLES ...
import "../styles/index.scss"

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