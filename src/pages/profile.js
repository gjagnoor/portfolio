import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import About from "../components/About.js"
import WorkExperience from "../components/WorkExperience.js"
import Projects from "../components/Projects.js"
import Drawer from "../components/Drawer.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    fontSize: `0.8em`,
    flexGrow: 1,
    marginTop: `5%`,
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepButton: {
    color: "white",
  },
}))

const Profile = () => {
  const classes = useStyles()

  return (
    <Layout>
      {/* <Header /> */}
      <Drawer>
        <SEO title="profile" />
        <div
          style={{ margin: "auto", display: "flex", flexDirection: "column" }}
        >
          <About />
          <WorkExperience />
          <Projects />
          <center>
            <div id="contact">
              <h4
                style={{
                  color: "#04d9ff",
                  fontFamily: "Share Tech Mono, monospace",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Get In Touch
              </h4>
              <p
                style={{
                  color: "#3ce397",
                  textAlign: "center",
                  marginTop: "5em",
                }}
              >
                grewal.jagnoor@gmail.com
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link
                  to="https://www.linkedin.com/in/noorgrewal/"
                  style={{ color: "#04d9ff" }}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    style={{ margin: "1em" }}
                  />
                </Link>
                <Link
                  to="https://github.com/gjagnoor"
                  style={{ color: "#04d9ff" }}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faGithubAlt}
                    size="2x"
                    style={{ margin: "1em" }}
                  />
                </Link>
              </div>
            </div>
          </center>
        </div>
      </Drawer>
    </Layout>
  )
}

export default Profile
