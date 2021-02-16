import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';

export default function WorkExperience() {
  return (
    <React.Fragment>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">
                <div>
                    <p className="workcontent"><span style={{color: "white"}}>Bootcamp Prep Instructor</span> <span style={{ color: "#04d9ff" }}> @ Fullstack Academy</span></p>
                    <p style={{color: "gray", fontFamily: 'Share Tech Mono, monospace', fontSize: '0.7em'}}>July 2020 - Present</p>
                    <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span>Coach students in introductory software engineering principles (Javascript)</p>
                    <p className="workcontent"> <span style={{color: "#04d9ff"}}>‣ </span> Debug student code and identify error patterns to understand core development areas for students and provide 1:1 coaching to address gaps</p>
                </div>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Fullstack Academy</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">
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
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Code</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">12:00 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Sleep</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">9:00 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Repeat</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
}