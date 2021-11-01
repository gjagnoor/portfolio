import React from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import tree from "../images/tree.svg"

const About = () => {
  return (
    <div id="about">
      <Grid container xs={12} sm={12}>
        <Grid item xs={12} sm={12}>
          <div>
            <img src={tree} className="projectImage" />
            Hi, I'm <span className="pink-highlight">Jagnoor</span>. I'm a
            FullStack Software Engineer. This portfolio showcases my personal
            projects. If you feel you can connect with my portfolio, please
            reach out to me at
            <span>
              <span className="pink-highlight"> grewal.jagnoor</span>
              <span className="grey-highlight">@gmail.com.</span>
            </span>
          </div>
          <div style={{ marginTop: "1em" }}>
            These projects were built alone from the ground up. They are meant
            to showcase my >
            <ul style={{ marginTop: "1em" }}>
              <li>Technical Acumen</li>
              <li>Technical Knowledge</li>
              <li>Curiosity to learn a new skillset</li>
              <li>Design preference</li>
            </ul>
          </div>
          <div style={{ marginTop: "1em" }}>
            Please Know - I will not be able to get back to everyone, but when
            I'm looking for a role again, I'll definitely reach out to you. I
            apologize for the inconvenience.
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
