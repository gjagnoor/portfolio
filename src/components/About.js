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
          <br />
          <br />
          <br />
          <br />
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
