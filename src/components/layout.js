/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div
        className="vertical-center"
        style={{
          // don't remove the padding it affects the profile page man
          padding: "6vw",
          maxWidth: 1400,
          display: "flex",
          flexDirection: "column",
          // border: '1px solid white'
        }}
      >
        <main>{children}</main>
        <footer
          // className="vertical-center_"
          style={{
            marginTop: `1em`,
            textAlign: "center",
            color: `#04d9ff`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          ♥ by Noor Grewal
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
