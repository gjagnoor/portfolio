import React from "react"
import "normalize.css"
import "@blueprintjs/core/lib/css/blueprint.css"
import "@blueprintjs/icons/lib/css/blueprint-icons.css"
import Layout from "../components/layout"
import About from "../components/About.js"
import ProjectsRender from "../components/Projects.js"
import Navigation from "../components/Navigation"

const Projects = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Layout>
        <h1
          style={{
            textAlign: "center",
            fontSize: "5em",
            // textDecoration: "underline",
          }}
        >
          Featured Projects
        </h1>
        <div style={{ margin: "2em" }}>
          <ProjectsRender />
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Projects
