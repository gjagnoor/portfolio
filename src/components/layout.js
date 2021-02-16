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
    <>
      <div
        className="vertical-center"
        style={{
          margin: `0 auto`,
          padding: `5vw`,
          maxWidth: 1400,
        }}
      >
        <main>{children}</main>
        <footer
          // className="vertical-center_"
          style={{
            marginTop: `6vw`,
            textAlign: "center",
            color: `#04d9ff`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          ♥ by Noor Grewal
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
