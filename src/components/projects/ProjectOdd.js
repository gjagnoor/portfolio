import React from "react"
import { Link } from "gatsby"
import images from "./images.js"
const HtmlToReactParser = require("html-to-react").Parser

export default function ProjectOdd({ node }) {
  const htmlToReactParser = new HtmlToReactParser()
  const reactElement = htmlToReactParser.parse(node.html)
  return (
    <div className="header">
      <div className="space"></div>
      <div style={{ display: "flex" }}>
        <p
          style={{
            borderRadius: "50%",
            fontSize: "5em",
          }}
        >
          {node.frontmatter.position}
        </p>
        <h2>{node.frontmatter.name}</h2>
      </div>
      <div>
        <p>{node.frontmatter.technologies}</p>
      </div>
      <div className="right-left">
        <img src={images[node.frontmatter.identifier]} className="img-shrink" />
        <hr className="separation-dot" />
        <div className="content">{reactElement}</div>
      </div>
      <div className="space"></div>
    </div>
  )
}
