import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        className="vertical-center"
        style={{
          maxWidth: 1400,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <main>{children}</main>
        <footer
          // className="vertical-center_"
          style={{
            marginTop: `1em`,
            textAlign: "center",
            color: `black`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `} thought by Noor Grewal
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
