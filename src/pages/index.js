import React from "react"
import { Link } from "gatsby"
import "normalize.css"
import "@blueprintjs/core/lib/css/blueprint.css"
import "@blueprintjs/icons/lib/css/blueprint-icons.css"
import Typewriter from "typewriter-effect"
import Layout from "../components/layout"
import "../components/layout.css"
import { Translate } from "@material-ui/icons"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <div className="centerPage">
      <div style={{ fontSize: "2em" }}>
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString("My Portfolio")
              .callFunction(() => {
                console.log("String typed out!")
              })
              .pauseFor(2200)
              .deleteAll()
              .callFunction(() => {
                console.log("All strings were deleted")
              })
              .start()
          }}
          options={{
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="space">
        <h3> {` FullStack Software Engineer `}</h3>
      </div>
      <p
        style={{
          fontSize: "1em",
        }}
      >
        Fullstack JavaScript . HTML5/CSS3/SCSS . PostgreSQL/GraphQL .
        React/Redux . Cloud Services . Payment Gateways . Gatsby
      </p>
      <Link to="/projects" className="link">
        <span
          style={{
            color: "white",
            border: "1px solid white",
            padding: "0.5rem",
          }}
        >
          {" "}
          >{" "}
        </span>
      </Link>
      <div className="space"></div>
      <Footer />
    </div>
  )
}

export default IndexPage
