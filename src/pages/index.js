import React from "react"
import Typewriter from 'typewriter-effect';
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="name">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('noor grewal')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(2200)
            .deleteAll()
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start()          
        }}
        options={{
          autoStart:true,
          loop:true
        }}
      />
    </div>
  </Layout>
)

export default IndexPage
