import React from "react"
import Header from "../components/header.js";
// import { Link } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import StepButton from "@material-ui/core/StepButton"
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link";
import StepIcon from '@material-ui/core/StepIcon';
import StepConnector from '@material-ui/core/StepConnector';
import clsx from 'clsx';
import Check from '@material-ui/icons/Check';




const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    fontSize: `0.8em`,
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepButton: {
    color: "white",
  }
}));

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#90fcdc',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#90fcdc',
    },
  },
  line: {
    borderColor: '#04d9ff',
    borderTopWidth: 4,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#784af4',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

function getSteps() {
  return ['Fullstack Academy', 'OutboxEDU', 'On leave due to family emergency', 'Codecademy', 'Gracehopper Academy', 'UC Berkeley'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div>
          <p className="workcontent"><span style={{color: "white"}}>Bootcamp Prep Instructor</span> <span style={{ color: "#04d9ff" }}> @ Fullstack Academy</span></p>
          <p>July 2020 - Present</p>
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span>Coach students in introductory software engineering principles (Javascript)</p>
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> Debug student code and identify error patterns to understand core development areas for students and provide 1:1 coaching to address gaps</p>
        </div>
      )
    case 1: 
      return (
        <div>
          <p className="workcontent"><span style={{color: "white"}}>Software Engineer</span> <span style={{ color: "#04d9ff" }}> @ OutboxEDU</span></p>
          <p>May 2020 - Present</p>
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> Lead web development team using agile development techniques in building our core product - a learning management system that allows schools and teachers to teach in a 3D learning space (React, CSS/SCSS, Firebase/Firestore, Express, Unity, Webpack, Babel, Socket.io, Material-UI, Stripe, PDFTron) </p> 
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> Implemented 80 features in one month and a half. Solved 100% bugs reported by users and developed 100% features requested </p>
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> TDD and QA: Introduced Cypress to our web development team, implemented end-to-end testing,  and automated 70+ test cases for our core platform (Cypress) </p>
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> CI/CD: Deployed web application to AWS Elastic Beanstalk, and configured SSL and HTTPS (Elastic Beanstalk, Amazon Route 53, Codepipeline)</p>
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> Payments: Built a payments platform that allows users to pay for products lifetime or weekly, ask for refund, file disputes, and receive payouts (Stripe API)</p>
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> Built a pdf management system that allows saving annotated documents to db in real time (React, PDFTRON, SCSS, Firebase/Firestore)</p>
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> Built an events calendar which allows students to view their upcoming assignments and deadlines (React-big-calendar)</p>
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> Communication: Built a video chat system that lets students and teachers communicate in real time (React, Agora, SCSS, Socket.io)</p>
        </div>
      )
    case 2:
      return (
        <div>
          <p>Aug 2018 - May 2020</p>
        </div>
      );
    case 3:
      return (
        <div>
          <p className="workcontent"><span style={{color: "white"}}>Curriculum Developer</span> <span style={{ color: "#04d9ff" }}> @ Codecademy</span></p>
          <p>May 2018 - Aug 2018</p>
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> Developed course work and projects for the data science team. Got excellent feedback</p> 
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> Provided technical support by fixing bugs</p>
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> Assisted with hiring developers for curriculum’s data science and web development team</p>
        </div>
      )
    case 4: 
      return (
        <div>
          <p className="workcontent"><span style={{color: "white"}}>Teaching Fellow</span> <span style={{ color: "#04d9ff" }}> @ Gracehopper Academy</span></p>
          <p>Jan 2018 - April 2018</p>
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> Coached 30+ women engineering students by serving as project manager, technical mentor, and code reviewer </p>
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> Created content and launched review lectures on engineering principles, HTTP, routing, raw drivers, ORMs, React, and Redux. Based on excellent student response, similar review lectures were initiated by peers </p>
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> Improved web application efficiency by consolidating disparate information and streamlining backend notification system (MEAN stack) </p>
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> Served as 1:1 coach for 5 students, that included 2 students who received highest class rank (out of class of 30 students), and 1 hackathon award winner </p>
        </div>
      )
    case 5: 
      return (
        <div>
          <p className="workcontent"><span style={{color: "white"}}>Undergraduate Researcher (Computational Toxicology)</span> <span style={{ color: "#04d9ff" }}> @ UC Berkeley</span>, Aug 2017 - Dec 2017</p>
          <p><span style={{color: "white"}}>Undergraduate Research Apprentice (Computational Biology)</span> <span style={{ color: "#04d9ff" }}> @ UC Berkeley</span>, Sep 2015 - Oct 2016</p>
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> Analyzed molecular structure of drug Lofexidine to identify structural changes that could minimize side effects </p>
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> Assisted in developing predator-prey web model using Lotka Volterra differential equation to visualize effects of chemical toxicity</p>
          <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> Aided in designing Eulerian and box model to visualize the relationship between clean fuel and pediatric pneumonia incidences</p>
        </div>
      )
    default:
      return null;
  }
}


const Profile = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(null);
  const steps = getSteps();
  const [open, setOpen] = React.useState(false);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Layout>
      <Header />
      <SEO title="profile" />
      <div id="about">
        <h3>I build things for the web.</h3>
        <p>Hello, I'm a software engineer based in NY. My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I specialize in building web applications and websites</p>
        <br />
        <Link className="link_">
          # Get In touch
        </Link>
      </div>
      <div id="workexperience">
        <h4 style={{color: "#04d9ff", fontFamily: 'Share Tech Mono, monospace', margin: 0}}>Work Experience</h4>
        <div className={classes.root}>
          <Stepper nonLinear activeStep={activeStep} orientation="vertical" style={{ backgroundColor: "transparent" }} connector={<QontoConnector />}>
            {
              steps.map((label, index) => {
                
                return (
                  <Step key={label}>
                    <StepButton
                      onClick={handleStep(index)}
                      className={classes.stepButton}
                    >
                      <StepLabel StepIconComponent={QontoStepIcon}><p style={{color: "white", marginTop: "1.4em", fontFamily: 'Share Tech Mono, monospace', color: (activeStep === index ? "#04d9ff" : "gray")}}><span style={{color: "#04d9ff", fontFamily: "Share Tech Mono, monospace"}}>0{index}. </span>{label}</p></StepLabel>
                    </StepButton>
                    <StepContent style={{color: "gray"}}>
                      {getStepContent(activeStep)}
                    </StepContent>
                  </Step>
                );
              })
            }
      </Stepper>
      </div>
      </div>
      <div id="featuredprojects">
        <h4 style={{ color: "#04d9ff", fontFamily: 'Share Tech Mono, monospace', margin: 0 }}>Featured Projects</h4>
      </div>
      <div id="contact">
        <h5>contact</h5>
      </div>
    </Layout>
  )
}

export default Profile
