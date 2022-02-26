import React from "react"
import images from "./projects/images"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const About = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#ebf1f1" }}>
        <div
          style={{
            height: "auto",
            padding: "3em",
          }}
        >
          <img
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
          <p style={{ textAlign: "center", fontSize: "4em", marginTop: "1em" }}>
            Noor Grewal
          </p>
          <p style={{ textAlign: "center", fontSize: "2em", marginTop: "1em" }}>
            Fullstack Software Engineer and Programming Instructor
          </p>
          <p style={{ textAlign: "center" }}>Currently @ Fullstack Academy</p>
        </div>
      </div>
      <div
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "60%",
        }}
      >
        <h1 style={{ textAlign: "left" }}>About Me</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dictasunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eosqui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.
        </p>
        <p>
          I have experience working with Fullstack JavaScript, HTML5/CSS3/SCSS,
          PostgreSQL/GraphQL, React/Redux, Cloud Services, Payment Gateways,
          Gatsby
        </p>
      </div>
      <div
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "60%",
          textAlign: "center",
        }}
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          style={{ margin: "1em" }}
        />
        <FontAwesomeIcon
          icon={faGithubAlt}
          size="2x"
          style={{ margin: "1em" }}
        />
        <p style={{ textAlign: "center" }}>
          Mail to : grewal.jagnoor@gmail.com
        </p>
      </div>
    </div>
  )
}

export default About
