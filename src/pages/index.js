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
      title="Greek Frine"
      description="An exploration of contemporary Hellenic diversity and innovation."/>
      <Burger/>
      <Menu />
      <Body />
    </div>
  )
}

export default App