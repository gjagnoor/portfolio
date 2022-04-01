import React, { Component } from "react"
import Navigation from "../components/Navigation"
import DztImageGalleryComponent from "reactjs-image-gallery"
import images from "../components/projects/images"

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
      <div>
        <Navigation />
        <h1
          style={{
            textAlign: "center",
            fontSize: "5em",
          }}
        >
          Featured Digital Artwork
        </h1>
        <DztImageGalleryComponent images={data} />
      </div>
    )
  }
}
