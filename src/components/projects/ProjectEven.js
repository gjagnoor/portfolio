import React from "react"
import { Link } from "gatsby"
import images from "./images.js"
const HtmlToReactParser = require("html-to-react").Parser

export default function ProjectEven({ node }) {
  const htmlToReactParser = new HtmlToReactParser()
  const reactElement = htmlToReactParser.parse(node.html)
  return (
    <React.Fragment>
      <div className="space"></div>

      <h2>{node.frontmatter.name}</h2>
      <p>{node.frontmatter.technologies}</p>
      <div className="left-right">
        <div>{reactElement}</div>
        <hr className="separation-dot" />
        <img src={images[node.frontmatter.identifier]} className="img-shrink" />
      </div>
      <div className="space"></div>
    </React.Fragment>
  )
}
