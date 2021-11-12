import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

const Contact = () => {
  return (
    <center>
      <div id="contact">
        <h4>Send Me a Message</h4>
        <p style={{ color: "#fe6694" }}>grewal.jagnoor@gmail.com</p>
        <div>
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
  )
}

export default Contact
