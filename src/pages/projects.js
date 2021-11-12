import React from "react"
import Layout from "../components/layout"
import About from "../components/About.js"
import Projects from "../components/Projects.js"
import Contact from "../components/Contact"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

const Portfolio = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Layout>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Layout>
    </React.Fragment>
  )
}

export default Portfolio
