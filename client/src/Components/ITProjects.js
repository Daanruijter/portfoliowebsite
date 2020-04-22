import React, { Component } from "react";
import bookstore from "../pictures/bookstore.jpeg";
import mytinerery from "../pictures/mytinerary.jpeg";
import nysl from "../pictures/nysl.jpeg";
import tgif from "../pictures/tgif.jpeg";
import weatherapp from "../pictures/weatherapp.jpeg";
import "../CSS/ITProjects.css";

export default class ITProjects extends Component {
  state = {
    projects: [
      {
        url: "https://myitinerariestravelapp.herokuapp.com",
        id: "mytineraries",
        image: mytinerery,
        description: "Travel application that shows favourite touristy cities.",
        tech: "Node, Express, MongoDB, React,js, Redux, CSS, Materialize",
      },
      {
        url: "https://daanruijter.github.io/WeatherApp",
        id: "weatherapp",
        image: weatherapp,
        description: "",
        tech: "",
      },
      {
        url: "https://daanruijter.github.io/BookstoreTechnicalChallenge",
        id: "bookstore",
        image: tgif,
        description: "",
        tech: "",
      },
      {
        url: "https://daanruijter.github.io/tgifVUEtodeploy/index.html",
        image: nysl,
        id: "tgif",
        description: "",
        tech: "",
      },
      {
        url: "https://daanruijter.github.io/soccerproject",
        image: bookstore,
        id: "nysl",
        description: "",
        tech: "",
      },
    ],
  };
  render() {
    let projects = this.state.projects;
    console.log(projects);
    let projectsToDisplay = projects.map((project) => (
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="projects flip-box-front" key={project.id}>
            <a href={project.url}>
              <img src={project.image} />
            </a>
          </div>
          <div className="flip-box-back">
            {project.description}
            <p className="tech-used">Tech used:</p>
            {project.tech}
          </div>
        </div>
      </div>
    ));

    return <div className="projects-wrapper">{projectsToDisplay}</div>;
  }
}
