import React from "react"
import { Link } from "gatsby";
import Typewriter from 'typewriter-effect';
import Layout from "../components/layout"
import SEO from "../components/seo"




const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", overflowY: "hidden"}}>
      <center>
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
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </center>
      <center>
        <div id="position">
          <h3 id="positiontext"> {` { Software Engineer }`}</h3>
        </div>
      </center>
      <center>
        <div id="languages">
          <h6 style={{fontSize: "1em", fontFamily: "Share Tech Mono, monospace"}}> Node.js . GraphQL . Express . React . Cypress . Firebase/Firestore . Socket.io . Agora . Webpack . Babel . Material-UI . Stripe . Gatsby . HTML . CSS/SCSS . PDFTron </h6>
        </div>
      </center>
      <center>
        <div id="enter">
          <Link to="/profile" className="link">
            <bold># ENTER</bold>
          </Link>
        </div>
        </center>
        </div>

    </Layout>
  )
}

export default IndexPage
