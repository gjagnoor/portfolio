import React from "react"
import { Link } from "gatsby";

const About = () => {
  return (
    <div id="about">
        <h3 style={{fontFamily:"Share Tech Mono, monospace"}}>I build things for the web.</h3>
        <p>Hello, I'm a software engineer based in NY. My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I specialize in building web applications and websites</p>
        <br />
        <Link className="link_" to="#contact">
            # Get In touch
        </Link>
    </div>
  )
}

export default About;
