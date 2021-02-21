import React, { useEffect } from "react"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import StepContent from "@material-ui/core/StepContent"
import StepButton from "@material-ui/core/StepButton"
import StepConnector from "@material-ui/core/StepConnector"
import clsx from "clsx"
import Check from "@material-ui/icons/Check"
import { useStaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    fontSize: `0.8em`,
    flexGrow: 1,
    // marginTop: `5%`,
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepButton: {
    color: "white",
  },
}))

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#90fcdc",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#90fcdc",
    },
  },
  line: {
    borderColor: "#04d9ff",
    borderTopWidth: 4,
    borderRadius: 1,
  },
})(StepConnector)

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#784af4",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
})

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles()
  const { active, completed } = props

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  )
}

const Profile = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { order: ASC, fields: frontmatter___position }
          filter: { frontmatter: { type: { eq: "workexperience" } } }
        ) {
          edges {
            node {
              frontmatter {
                period
                role
                company
                position
              }
              html
            }
          }
        }
      }
    `
  )
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(null)
  const [steps, setSteps] = React.useState([])

  useEffect(() => {
    setSteps(
      data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter.company)
    )
  }, [])

  console.log("data:::", data)

  function handleStep(index) {
    setActiveStep(index)
  }

  function getContent(step) {
    return data.allMarkdownRemark.edges[step].node.html ? (
      <div
        dangerouslySetInnerHTML={{
          __html: data.allMarkdownRemark.edges[step].node.html,
        }}
        className={`workexperiencecontent`}
      ></div>
    ) : (
      ""
    )
  }
  return (
    <div id="workexperience">
      <h4
        style={{
          color: "#04d9ff",
          fontFamily: "Share Tech Mono, monospace",
          margin: "2em",
        }}
      >
        Work Experience
      </h4>
      <div className={classes.root}>
        <Stepper
          nonLinear
          activeStep={activeStep}
          orientation="vertical"
          style={{ backgroundColor: "transparent" }}
          connector={<QontoConnector />}
        >
          {steps.map((label, index) => {
            return (
              <Step key={index}>
                <StepButton
                  onClick={() => handleStep(index)}
                  className={classes.stepButton}
                >
                  <StepLabel StepIconComponent={QontoStepIcon}>
                    <span
                      style={{
                        marginTop: "1.4em",
                        fontFamily: "Share Tech Mono, monospace",
                        color: activeStep === index ? "#04d9ff" : "gray",
                        fontSize: `1.2em`,
                        textAlign: "left",
                      }}
                    >
                      <span
                        style={{
                          color: "#04d9ff",
                          fontFamily: "Share Tech Mono, monospace",
                          marginLeft: `${
                            index % 2 !== 0 && index !== 5 ? "-2em" : 0
                          }`,
                        }}
                      >
                        {index === 5 ? `★ ` : `0${index}.`}
                      </span>
                      {label}
                    </span>
                    <p
                      style={{
                        textAlign: "left",
                        fontFamily: "Share Tech Mono, monospace",
                        color: "white",
                      }}
                    >
                      {`${data.allMarkdownRemark.edges[index].node.frontmatter.period}`}
                    </p>
                  </StepLabel>
                </StepButton>
                <StepContent style={{ color: "gray" }}>
                  <div>
                    <p className="workcontent">
                      <React.Fragment>
                        <span style={{ color: "white" }}>
                          {
                            data.allMarkdownRemark.edges[index].node.frontmatter
                              .role
                          }
                        </span>
                        <span style={{ color: "#04d9ff" }}>
                          {`${
                            data.allMarkdownRemark.edges[index].node.frontmatter
                              .company === "On leave due to a family emergency"
                              ? " "
                              : ` @ ${
                                  data.allMarkdownRemark.edges[index].node
                                    .frontmatter.company !==
                                  "Finished College at UC Berkeley"
                                    ? data.allMarkdownRemark.edges[index].node
                                        .frontmatter.company
                                    : "UC Berkeley"
                                }`
                          }`}
                        </span>
                      </React.Fragment>
                    </p>
                    <br />
                    {getContent(index)}
                  </div>
                </StepContent>
              </Step>
            )
          })}
        </Stepper>
      </div>
    </div>
  )
}

export default Profile
