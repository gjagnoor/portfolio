import React from "react"
import "normalize.css"
import "@blueprintjs/core/lib/css/blueprint.css"
import "@blueprintjs/icons/lib/css/blueprint-icons.css"
import Layout from "../components/layout"
import About from "../components/About.js"
import ProjectsRender from "../components/Projects.js"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

const Projects = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Layout>
        <div style={{ margin: "4em" }}>
          <ProjectsRender />
        </div>
      </Layout>
      <Footer />
    </React.Fragment>
  )
}

export default Projects
