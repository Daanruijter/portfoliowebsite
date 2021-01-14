import React, { Component } from "react";
import bookstore from "../pictures/bookapp1.png";
import mytinerery from "../pictures/myitineraryapp1.png";
import nysl from "../pictures/soccerapp1.png";
import tgif from "../pictures/tgif1.png";
import weatherapp from "../pictures/weatherapp1.png";
import worldnewsapp from "../pictures/worldnewsapp1.png";
import todoapp from "../pictures/todoapp1.png";
import ganzenbord from "../pictures/ganzenbord1.png";
import groceryapp from "../pictures/groceryapp1.png";
import "../CSS/ITProjects.css";

export default class ITProjects extends Component {
  state = {
    projects: [
      {
        title: "World news app",
        url: "https://worldnews-app.herokuapp.com",
        id: "worldnewsapp",
        image: worldnewsapp,
        description:
          "App in Vue.js and TypeScript that displays diverse most recent news articles. The app has a functionality enabling users to get news data from an API to get their preferred news. They can search on countries, categories and randomly",
        tech: "Vue.js | TypeScript | Express.js | Node.js | CSS | HTML",
      },
      {
        title: "Mytineraries travel app",
        url: "https://myitinerariestravelapp.herokuapp.com",
        id: "mytineraries",
        image: mytinerery,
        description: "Travel application that shows favourite touristy cities.",
        tech:
          "Node.js | Express.js | MongoDB | Redux | React.js | Redux | CSS | Materialize | HTML",
      },
      {
        title: "Weather app",
        url: "https://daanruijter.github.io/WeatherApp",
        id: "weatherapp",
        image: weatherapp,
        description:
          "Weather app that displays the current weather for a particular city. Users can select different weather data to generate forecast charts",
        tech: "Vue.js | Chart.js | CSS | HTML",
      },
      {
        title: "Transparent Government in Fact app",
        url: "https://daanruijter.github.io/tgifVUEtodeploy/index.html",
        image: tgif,
        id: "tgif",
        description:
          "TGIF: Transparent Government In Fact app that dynamically shows API data of the US Congress and Senate. After making the app in Vanilla JavaScript I repeated it with Vue.js.",
        tech: "Vue.js | JavaScript | CSS | Bootstrap",
      },

      {
        title: "Soccer project",
        url: "https://daanruijter.github.io/soccerproject",
        image: nysl,
        id: "nysl",
        description:
          "Youth soccer information website with HTML and CSS, using FlexBox and Grid to position elements. Also applied CSS media queries for responsiveness.",
        tech: "CSS | HTML",
      },
      {
        title: "Bookstore app",
        url: "https://ruijterbookstoreapp.herokuapp.com",
        id: "bookstore",
        image: bookstore,
        description:
          "Used an API to dynamically display an array of books with additional information and an image gallery using Vue.js.",
        tech: "Vue.js | FancyBox | CSS | HTML",
      },
      {
        title: "Grocery app",
        url: "https://github.com/Daanruijter/grocerylist",
        id: "Groceryapp",
        image: groceryapp,
        description:
          `Digital grocery store list. With a user interface users can add grocery items, modify, re-
          move them and indicate whether they have picked an item.`,
        tech: "HTML | CSS | JavaScript | React.js | Node.js | Express | MongoDB | Redux",
      },
      {
        title: "Ganzenbord",
        url: "https://github.com/Daanruijter/GanzenbordJava",
        id: "Ganzenbord",
        image: ganzenbord,
        description:
          `Commandline version of the Dutch board game Ganzenbord. Players can enter their
          names and then play this game through the terminal, throwing their digital dice.`,
        tech: "Java",
      },
      {
        title: "Todo app",
        url: "https://github.com/Daanruijter/todoAppAngular",
        id: "Todoapp",
        image: todoapp,
        description:
          `App created with an Angular.js tutorial. A user can create a todo list by adding items and
          also has the opportunity to remove them. The data come from JSON placeholder, a fake
          online RESTful API for testing and prototyping.`,
        tech: "Angular.js | TypeScript | RESTful APIs | HTML5 | CSS3 | SASS",
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
            <a href={project.url}>
              <img alt="projectimage" src={project.image} />
            </a>
          </div>
          <a href={project.url}>
            <div className="flip-box-back">
              {" "}
              {project.description}
              <p className="tech-used">Tech used:</p>
              {project.tech}
            </div>
          </a>
        </div>
      </div>
    ));

    return <div className="projects-wrapper">{projectsToDisplay}</div>;
  }
}
