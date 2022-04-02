import React, { Component } from "react"
import Navigation from "../components/Navigation"
import DztImageGalleryComponent from "reactjs-image-gallery"
import images from "../components/projects/images"
import Layout from "../components/layout"

export default class Example extends Component {
  render() {
    var data = [
      {
        url: images.artWork.one,
        title: "A Boatride",
        thumbUrl: images.artWork.one,
      },
      {
        url: images.artWork.two,
        title: "The adorable ducklings",
        thumbUrl: images.artWork.two,
      },
      {
        url: images.artWork.three,
        title: "A fairy's tale",
        thumbUrl: images.artWork.three,
      },
      {
        url: images.artWork.four,
        title: "Countryside",
        thumbUrl: images.artWork.four,
      },

      {
        url: images.artWork.five,
        title: "Birds and the den",
        thumbUrl: images.artWork.five,
      },
    ]

    return (
      <React.Fragment>
        <Navigation />
        <Layout>
          <div
            style={{
              backgroundColor: "#40424a",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                fontSize: "5em",
                backgroundColor: "#40424a",
                color: "white",
              }}
            >
              Featured Digital Artwork
            </h1>
            <DztImageGalleryComponent images={data} />
          </div>
        </Layout>
      </React.Fragment>
    )
  }
}
