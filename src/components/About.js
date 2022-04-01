import React from "react"
import { Link } from "gatsby"
import images from "./projects/images"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const About = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#ebf1f1" }}>
        <div className="header">
          <img
            className="meImg"
            style={{
              display: "block",
              padding: "1em",
              marginLeft: "auto",
              marginRight: "auto",
              width: "10%",
              borderRadius: "50%",
              border: "1px solid #88a2bc",
              // filter: "grayscale(100%)",
            }}
            src={images.meImg}
          />
          <p
            style={{
              textAlign: "center",
              fontSize: "4em",
              marginTop: "1em",
              fontWeight: "bolder",
            }}
          >
            Noor Grewal
          </p>
          <p style={{ textAlign: "center", fontSize: "2em", marginTop: "1em" }}>
            Fullstack Software Engineer and Programming Instructor
          </p>
          <p style={{ textAlign: "center" }}>Currently @ Fullstack Academy</p>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              textAlign: "right",
            }}
          >
            <Link
              to="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=grewal.jagnoor@gmail.com"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                style={{ margin: "1em" }}
              />
            </Link>
            <Link to="https://www.linkedin.com/in/noorgrewal/" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                style={{ margin: "1em" }}
              />
            </Link>
            <Link to="https://github.com/gjagnoor" target="_blank">
              <FontAwesomeIcon
                icon={faGithubAlt}
                size="2x"
                style={{ margin: "1em" }}
              />
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "70%",
        }}
      >
        <h1 style={{ textAlign: "left" }}>About Me</h1>
        <p>
          I am a Software Engineer with 2 years of experience in the education
          technology industry. I got my undergrad from UC Berkeley where I
          developed an interest in software engineering while completing
          research in computational biology.
        </p>
        <p>
          While in undergrad, I also attended Fullstack Academy, one of the best
          software engineering schools in New York with less than 8% acceptance
          rate. I graduated almost top of my class and was selected to be a
          teaching fellow thereafter. Now I work as an Instructor here, training
          the next generation of programmers. If you are looking for a Fullstack
          Software Engineer, please reach out. I would love to set up a call!
        </p>
        <p>
          I have experience working with Fullstack JavaScript
          (JavaScript/Node.js), HTML5/CSS3/SCSS, PostgreSQL/GraphQL,
          React/Redux, Cloud Services, Payment Gateways, and Gatsby
        </p>
        <p>
          While I am an engineer at heart, I do love to spend some free time
          building digital artwork as a hobby. Do take a peek at the Projects
          page and the Artwork page to see some of my work :)
        </p>
      </div>
    </div>
  )
}

export default About
