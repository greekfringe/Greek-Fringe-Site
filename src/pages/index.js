import React from "react"
import { Helmet } from "react-helmet"

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
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet"/> 
      </Helmet>
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