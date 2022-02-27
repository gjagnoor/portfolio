import React from "react"
import { Link } from "gatsby"
import images from "./images.js"
const HtmlToReactParser = require("html-to-react").Parser

export default function ProjectEven({ node }) {
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
      <p>{node.frontmatter.technologies}</p>
      <div className="left-right">
        <div>{reactElement}</div>
        <hr className="separation-dot" />
        <img src={images[node.frontmatter.identifier]} className="img-shrink" />
      </div>
      <div className="space"></div>
    </div>
  )
}
