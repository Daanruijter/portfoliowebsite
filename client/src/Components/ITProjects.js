import React, { Component } from "react";
import bookstore from "../pictures/bookstoreapp-large.jpeg";
import mytinerery from "../pictures/mytinerary.jpeg";
import nysl from "../pictures/nysl.jpeg";
import tgif from "../pictures/tgif.jpeg";
import weatherapp from "../pictures/weatherapp.jpeg";
import "../CSS/ITProjects.css";

export default class ITProjects extends Component {
  state = {
    projects: [
      {
        title: "Mytineraries travel app",
        url: "https://myitinerariestravelapp.herokuapp.com",
        id: "mytineraries",
        image: mytinerery,
        description: "Travel application that shows favourite touristy cities.",
        tech:
          "Node, Express, MongoDB, Redux, React,js, Redux, CSS, Materialize, HTML",
      },
      {
        title: "Weather app",
        url: "https://daanruijter.github.io/WeatherApp",
        id: "weatherapp",
        image: weatherapp,
        description:
          "Weather app that displays the current weather for a particular city. Users can select different weather data to generate forecast charts",
        tech: "Vue.js, Chart.js, CSS, HTML",
      },
      {
        title: "Transparent Government in Fact app",
        url: "https://daanruijter.github.io/tgifVUEtodeploy/index.html",
        image: tgif,
        id: "tgif",
        description:
          "TGIF: Transparent Government In Fact app that dynamically shows API data of the US Congress and Senate. After making the app in Vanilla JavaScript I repeated it with Vue.js.",
        tech: "Vue.js, JavaScript, CSS, Bootstrap",
      },

      {
        title: "Soccer project",
        url: "https://daanruijter.github.io/soccerproject",
        image: nysl,
        id: "nysl",
        description:
          "Youth soccer information website with HTML and CSS, using FlexBox and Grid to position elements. Also applied CSS media queries for responsiveness.",
        tech: "CSS, HTML",
      },
      {
        title: "Bookstore app",
        url: "https://ruijterbookstoreapp.herokuapp.com",
        id: "bookstore",
        image: bookstore,
        description:
          "Used an API to dynamically display an array of books with additional information and an image gallery using Vue.js.",
        tech: "Vue.js, FancyBox, CSS, HTML",
      },
    ],
  };
  render() {
    let projects = this.state.projects;
    console.log(projects);
    let projectsToDisplay = projects.map((project) => (
      <div key={project.description} className="flip-box">
        <div className="flip-box-inner">
          <div className="project-title">
            <b>{project.title}</b>
          </div>
          <div className="projects flip-box-front" key={project.id}>
            {/* <a href={project.url}> */}
            <img alt="projectimage" src={project.image} />
            {/* </a> */}
          </div>
          {/* <a href={project.url}> */}
          <div className="flip-box-back">
            {" "}
            {project.description}
            <p className="tech-used">Tech used:</p>
            {project.tech}
          </div>
          {/* </a> */}
        </div>
      </div>
    ));

    return <div className="projects-wrapper">{projectsToDisplay}</div>;
  }
}
