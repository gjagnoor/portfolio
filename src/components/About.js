import React from "react"
import Timeline from "./Timeline"
const About = () => {
  return (
    <div>
      <div className="space"></div>
      <div>
        Hi, I'm <span style={{ color: "#fe6694" }}>Jagnoor</span>. I'm a
        <span style={{ color: "#fe6694" }}> FullStack Software Engineer</span>.
        This portfolio showcases my personal projects. If you feel you can
        connect with my work, please reach out to me at
        <span style={{ color: "#fe6694" }}> grewal.jagnoor@gmail.com</span>
      </div>
      <div>
        These projects were built alone from the ground up. They are meant to
        showcase my >
      </div>
      <Timeline
        components={["Curiosity to learn and grow", "Technical Knowledge"]}
      />
      <div className="space"></div>
    </div>
  )
}

export default About
