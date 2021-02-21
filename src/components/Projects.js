import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import editor from "../images/editor.png";
import aaria from "../images/aaria.png";
import portfolio from "../images/portfolio.png"
import chalkWebpack from "../images/Coming-Soon.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";



const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      fontSize: `0.8em`,
      flexGrow: 1,
      marginTop: `5%`
    }
  }));

const Profile = () => { 
    const data = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark(sort: {order: ASC, fields: frontmatter___position}, filter: {frontmatter: {type: {eq: "project"}}}) {
              edges {
                node {
                  frontmatter {
                    name
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
    const classes = useStyles();
  return (
    <div id="featuredprojects">
        <h4 style={{ color: "#04d9ff", fontFamily: 'Share Tech Mono, monospace', margin: "2em" }}>Featured Projects</h4>
          <div className={classes.root}>
              {
                  data.allMarkdownRemark.edges.map(({ node }) => {
                      let images = [editor, aaria, portfolio, chalkWebpack]
                      return (
                        <React.Fragment>
                            {
                                  node.frontmatter.position % 2 === 0 ? (
                                    <React.Fragment>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={7}>
                                                <Link to={node.frontmatter.link} target="_blank">
                                                      <img src={images[node.frontmatter.position]} className="projimg" />
                                                </Link>
                                            </Grid>
                                            <Grid item xs={12} sm={5} style={{display: "flex", flexDirection:"column"}}>
                                                <div>
                                                      <h5 className="projheading1">{ node.frontmatter.name }</h5>
                                                </div>
                                                <div>
                                                    <div className="projdesc1" dangerouslySetInnerHTML={{ __html: node.html }}></div>
                                                </div>
                                                <div>
                                                      <p className="projlangs">{ node.frontmatter.technologies }</p>
                                                  </div>
                                                  <center>
                                                        <div style={{display: "flex", padding: "3em", margin:0}}>
                                                            <div>
                                                                <Link to={node.frontmatter.github} style={{textDecoration: "none", color: "#04d9ff", cursor: "pointer"}} target="_blank">        
                                                                  <FontAwesomeIcon icon={ faGithubAlt } size="2x"  style={{margin: "0em 2em 0em 3em"}}></FontAwesomeIcon>
                                                                </Link>
                                                            </div> 
                                                          <div>
                                                                <Link to={node.frontmatter.link} style={{textDecoration: "none", color: "#04d9ff", cursor: "pointer"}} target="_blank">
                                                                  <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" style={{margin: "0em 2em 0em 0em"}}/>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                  </center>
                                            </Grid>
                                        </Grid>
                                        <hr id="line" />
                                    </React.Fragment>
                                  ) : (
                                    <React.Fragment>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={5} style={{display: "flex", flexDirection:"column"}}>
                                                <div>
                                                    <h5 className="projheading2">{ node.frontmatter.name }</h5>
                                                </div>
                                                <div>
                                                    <div className="projdesc2" dangerouslySetInnerHTML={{ __html: node.html }}></div>
                                                </div>
                                                <div>
                                                    <p className="projlangs">{node.frontmatter.technologies}</p>
                                                      </div>
                                                      <center>
                                                        <div style={{display: "flex", padding: "3em", margin:0}}>
                                                            <div>
                                                                <Link to={node.frontmatter.github} style={{textDecoration: "none", color: "#04d9ff", cursor: "pointer"}} target="_blank">        
                                                                  <FontAwesomeIcon icon={ faGithubAlt } size="2x"  style={{margin: "0em 2em 0em 3em"}}></FontAwesomeIcon>
                                                                </Link>
                                                            </div> 
                                                          <div>
                                                                <Link to={node.frontmatter.link} style={{textDecoration: "none", color: "#04d9ff", cursor: "pointer"}} target="_blank">
                                                                  <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" style={{margin: "0em 2em 0em 0em"}}/>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                  </center>
                                            </Grid>
                                            <Grid item xs={12} sm={7}>
                                                <Link to={node.frontmatter.link} target="_blank">
                                                    <img src={images[node.frontmatter.position]} className="projimg" width="120%" />
                                                </Link>
                                            </Grid>
                                        </Grid>
                                        <hr id="line" />  
                                    </React.Fragment>
                                          
                                ) 
                            }
                        </React.Fragment>

                      )
                  })
              }
        </div>
    </div>
  )
}

export default Profile;