import React from "react"
import { Link } from "gatsby"
import images from "./images.js"
const HtmlToReactParser = require("html-to-react").Parser

export default function ProjectOdd({ node }) {
  const htmlToReactParser = new HtmlToReactParser()
  const reactElement = htmlToReactParser.parse(node.html)
  return (
    <React.Fragment>
      <div className="space"></div>
      <div>
        <h2 className="projheading1">{node.frontmatter.name}</h2>
        <p>{node.frontmatter.technologies}</p>
      </div>
      <div className="right-left">
        <img src={images[node.frontmatter.identifier]} className="img-shrink" />
        <hr className="separation-dot" />
        <div className="content">{reactElement}</div>
      </div>
      <div className="space"></div>
    </React.Fragment>
  )
}
