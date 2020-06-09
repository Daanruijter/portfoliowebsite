import React, { Component } from "react";
// import bookstore from "../pictures/bookstore.jpeg";

export default class ITProjects extends Component {
  state = {
    projects: [
      { url: "https://myitinerariestravelapp.herokuapp.com", image: "" },
      { url: "https://daanruijter.github.io/WeatherApp", image: "" },
      {
        url: "https://daanruijter.github.io/BookstoreTechnicalChallenge",
        image: "",
      },
      {
        url: "https://daanruijter.github.io/tgifVUEtodeploy/index.html",
        image: "",
      },
      { url: "https://daanruijter.github.io/soccerproject", image: "" },
    ],
  };
  render() {
    return <div></div>;
  }
}
