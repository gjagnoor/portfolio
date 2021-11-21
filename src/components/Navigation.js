import { Link } from "gatsby"
import React from "react"

const resumeLink =
  "https://drive.google.com/file/d/1M3t8mx_O7s6wNuAZeipqimlxzcjPhdZK/view?usp=sharing"
const Navigation = ({ children }) => {
  return (
    <div
      style={{
        height: "3%",
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        width: "98vw",
      }}
    >
      <Link to="/" style={{ color: "white" }}>
        Portfolio
      </Link>
      <a href={resumeLink} target="_blank" style={{ color: "white" }}>
        Open Resume
      </a>
    </div>
  )
}

export default Navigation
