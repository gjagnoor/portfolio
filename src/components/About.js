import React from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"

const About = () => {
  return (
    <div id="about">
      <Grid container xs={12} sm={12}>
        <Grid item xs={12} sm={12}>
          <h3 style={{ fontFamily: "Share Tech Mono, monospace" }}>
            I create value through code and design.
          </h3>
          <p>
            I’m Jagnoor, but people call me "Noor.” As a software engineer, I
            specialize in building efficient web applications (frontend and
            backend) that work across all platforms and browsers. I care deeply
            about putting together products that are usable and pleasant for
            most number of people possible. When off work, I spend time
            improving my knowledge on software development. I enjoy building
            projects (mostly developer tools) that help me understand how things
            work at a deeper level or just learn something new.
          </p>
          <br />
          <Link className="link_" to="#contact">
            # Get In touch
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
