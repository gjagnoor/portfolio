import React from "react"
import { Link } from "gatsby"
import images from "./images.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
const HtmlToReactParser = require("html-to-react").Parser

export default function ProjectEven({ node }) {
  const htmlToReactParser = new HtmlToReactParser()
  const reactElement = htmlToReactParser.parse(node.html)
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p className="projlangs">{node.frontmatter.technologies}</p>
        <h4 className="projheading1">{node.frontmatter.name}</h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <FontAwesomeIcon icon={faGithubAlt} size={"2x"} />
          <FontAwesomeIcon
            style={{ marginLeft: "2em" }}
            icon={faExternalLinkAlt}
            size={"2x"}
            className="pink-highlight"
          />
        </div>
      </div>
      <div>{reactElement}</div>
      <hr style={{ marginTop: "2%" }} />
    </React.Fragment>
  )
}
