import React from "react"
import Timeline from "./Timeline"
const About = () => {
  return (
    <div>
      <div className="space"></div>
      <div>
        Hi, I'm <span style={{ color: "#fe6694" }}>Jagnoor</span>. I'm a{" "}
        <span style={{ color: "#fe6694" }}> Full Stack Software Engineer</span>.
        This portfolio is meant to showcase my personal projects. If you feel
        you can connect with my work, please reach out to me at
        <span style={{ color: "#fe6694" }}> grewal.jagnoor@gmail.com</span>. I’d
        love to see if there is an opportunity at your company I may be a fit
        for.
      </div>
      <div className="space"></div>
      <div>
        Please note : These projects were built alone from the ground up. They
        are meant to give you an idea about my >
      </div>
      <div className="space"></div>
      <Timeline
        components={["Ability to learn a new skill set", "Technical Knowledge"]}
      />
      <div className="space"></div>
    </div>
  )
}

export default About
