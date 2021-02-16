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
        style={{
          margin: `0 auto`,
          padding: `5em`,
          maxWidth: 960
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `11rem`,
            textAlign: "center",
            color: `#04d9ff`
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
