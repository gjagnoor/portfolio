import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import About from "../components/About.js"
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
      <Drawer>
        <SEO title="profile" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <About />
          <Projects />
          <center>
            <div id="contact">
              <h4
                className="blue-highlight"
                style={{
                  fontFamily: "monospace",
                  fontSize: "10em",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Send Me a Message
              </h4>
              <p
                style={{
                  color: "#d8909c",
                  textAlign: "center",
                  marginTop: "5em",
                }}
              >
                <span>grewal.jagnoor</span>
                <span className="grey-highlight">@gmail.com</span>
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link
                  to="https://www.linkedin.com/in/noorgrewal/"
                  style={{ color: "black" }}
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
                  style={{ color: "black" }}
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
