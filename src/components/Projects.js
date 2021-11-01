import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import ProjectEven from "./projects/ProjectEven.js"
import ProjectOdd from "./projects/ProjectOdd.js"

const Profile = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { order: ASC, fields: frontmatter___position }
          filter: { frontmatter: { type: { eq: "project" } } }
        ) {
          edges {
            node {
              frontmatter {
                name
                identifier
                position
                technologies
                type
                imgURL
                link
                github
              }
              html
            }
          }
        }
      }
    `
  )
  return (
    <div id="featuredprojects">
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <React.Fragment>
              {isEven(node.frontmatter.position) ? (
                <ProjectEven node={node} />
              ) : (
                <ProjectOdd node={node} />
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

function isEven(position) {
  return position % 2 === 0
}
export default Profile
