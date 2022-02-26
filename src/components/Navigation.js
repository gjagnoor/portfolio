import { Link } from "gatsby"
import React from "react"
import { Navbar, Button, Alignment } from "@blueprintjs/core"

const resumeLink =
  "https://drive.google.com/file/d/1M3t8mx_O7s6wNuAZeipqimlxzcjPhdZK/view?usp=sharing"
const Navigation = ({ children }) => {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Link to="/">
          <Button className="bp3-minimal">Noor Grewal</Button>
        </Link>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Link to="/projects">
          <Button className="bp3-minimal" icon="projects" text="Projects" />
        </Link>
        <Link to={resumeLink}>
          <Button className="bp3-minimal" icon="document" text="Resume" />
        </Link>
      </Navbar.Group>
    </Navbar>
  )
}

export default Navigation
