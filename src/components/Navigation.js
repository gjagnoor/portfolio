import { Link } from "gatsby"
import React from "react"

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
      <div>Open Resume</div>
    </div>
  )
}

export default Navigation
