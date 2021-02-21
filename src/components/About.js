import React from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"

const About = () => {
  return (
    <div id="about">
      <Grid container xs={12} sm={12}>
        <Grid item xs={12} sm={12}>
          <h3 style={{ fontFamily: "Share Tech Mono, monospace" }}>
            I build things for the web.
          </h3>
          <p>
            Hello, I'm a software engineer based in NY. My passion for software
            lies with dreaming up ideas and making them come true with elegant
            interfaces. I specialize in building web applications and websites
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
