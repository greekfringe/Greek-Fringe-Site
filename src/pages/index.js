import React from "react"

//COMPONENTS ...
import Menu from "../components/menu"
import Burger from "../components/burger"
import Body from "../components/body"
import SEO from "../components/seo"

//STYLES ...
import "../styles/index.scss"

function App() {
  return (
    <div>
      <SEO 
      title="Greek Fringe"
      description="Your portal to contemporary Hellenic art and music from around the globe."/>
      <Burger/>
      <Menu />
      <Body />
    </div>
  )
}

export default App