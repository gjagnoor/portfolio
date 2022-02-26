import React from "react"
import "normalize.css"
import "@blueprintjs/core/lib/css/blueprint.css"
import "@blueprintjs/icons/lib/css/blueprint-icons.css"
import Layout from "../components/layout"
import About from "../components/About.js"
import Projects from "../components/Projects.js"
import Contact from "../components/Contact"
import Navigation from "../components/Navigation"

const Portfolio = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Layout>
        <About />
      </Layout>
    </React.Fragment>
  )
}

export default Portfolio
