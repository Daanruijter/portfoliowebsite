import React, { Component } from "react";
import grocery from "../pictures/grocery.png";
import weather from "../pictures/weather.png";
import mytinerary from "../pictures/mytineraries.png";
import ganzenbord from "../pictures/ganzenbord.png";
import soccer from "../pictures/soccerproject.png";
import tgif from "../pictures/tgif.png";
import worldnews from "../pictures/worldnews.png";
import todo from "../pictures/todo.png";
import bookstore from "../pictures/bookstore.png";
import "../CSS/ITProjects.css";

export default class ITProjects extends Component {
  state = {
    projects: [
      {
        title: "World news app",
        url: "http://worldnews-app.herokuapp.com",
        id: "worldnewsapp",
        image: worldnews,
        description:
          "App in Vue.js and TypeScript that displays diverse most recent news articles. The app has a functionality enabling users to get news data from an API to get their preferred news. They can search on countries, categories and randomly",
        tech: "Vue.js | TypeScript | Express.js | Node.js | CSS | HTML",
        photoCredit: "Photo by Vlad Tchompalov on Unsplash",
      },
      {
        title: "Mytineraries travel app",
        url: "http://myitinerariestravelapp.herokuapp.com",
        id: "mytineraries",
        image: mytinerary,
        description: "Travel application that shows favourite touristy cities.",
        tech:
          "Node.js | Express.js | MongoDB | Redux | React.js | Redux | CSS | Materialize | HTML",
        photoCredit: "Photo by postcardtrip on Pixabay ",
      },
      {
        title: "Weather app",
        url: "http://daanruijter.github.io/WeatherApp",
        id: "weatherapp",
        image: weather,
        description:
          "Weather app that displays the current weather for a particular city. Users can select different weather data to generate forecast charts",
        tech: "Vue.js | Chart.js | CSS | HTML",
        photoCredit: "Photo by Dimitris Vetsikas on Pixabay",
      },
      {
        title: "Transparent Government in Fact app",
        url: "http://daanruijter.github.io/tgifVUEtodeploy/index.html",
        image: tgif,
        id: "tgif",
        description:
          "TGIF: Transparent Government In Fact app that dynamically shows API data of the US Congress and Senate. After making the app in Vanilla JavaScript I repeated it with Vue.js.",
        tech: "Vue.js | JavaScript | CSS | Bootstrap",
        photoCredit: "Photo by David Everett Strickler on Unsplash",
      },

      {
        title: "Soccer project",
        url: "http://daanruijter.github.io/soccerproject",
        image: soccer,
        id: "nysl",
        description:
          "Youth soccer information website with HTML and CSS, using FlexBox and Grid to position elements. Also applied CSS media queries for responsiveness.",
        tech: "CSS | HTML",
        photoCredit: "Picture by Vetsikas on Pixabay",
      },
      {
        title: "Bookstore app",
        url: "http://ruijterbookstoreapp.herokuapp.com",
        id: "bookstore",
        image: bookstore,
        description:
          "Used an API to dynamically display an array of books with additional information and an image gallery using Vue.js.",
        tech: "Vue.js | FancyBox | CSS | HTML",
        photoCredit: "",
      },
      {
        title: "Digital grocery list",
        url: "https://github.com/Daanruijter/grocerylist",
        id: "Groceryapp",
        image: grocery,
        description:
          `Digital grocery store list. With a user interface users can add grocery items, modify, re-
          move them and indicate whether they have picked an item.`,
        tech: "HTML | CSS | JavaScript | React.js | Node.js | Express | MongoDB | Redux",
        photoCredit: "Photo by Squirrel_photos on Pixabay",
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
        photoCredit: "",
      },
      {
        title: "Todo app",
        url: "https://github.com/Daanruijter/todoAppAngular",
        id: "Todoapp",
        image: todo,
        description:
          `App created with an Angular.js tutorial. A user can create a todo list by adding items and
          also has the opportunity to remove them. The data come from JSON placeholder, a fake
          online RESTful API for testing and prototyping.`,
        tech: "Angular 2.0 | TypeScript | RESTful APIs | HTML5 | CSS3 | SASS",
        photoCredit: "",
      },
    ],
  };
  render() {
    let projects = this.state.projects;

    let projectsToDisplay = projects.map((project) => (
      <div className="project-contents-wrapper">
        <div className="small-devices">
          <div className="project-title mobile-configuration">
            <a href={project.url}>   <b>{project.title}</b>  </a>
          </div>
          <div key={project.description} className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-inner-mobile-configuration">
                <div className="projects flip-box-front" key={project.id}>
                  <div>
                    <img alt="projectimage" src={project.image} />
                  </div>
                </div>
              </div>


              <div className="flip-box-back flip-box-inner-mobile-configuration" >
                {" "}
                <div className="flip-box-back-text-div">
                  {project.description}
                  <div className="tech-used"><br />Technologies used</div>
                  {project.tech}
                  {project.photoCredit ? (<div><div className="tech-used"><br />Credit</div><i>{project.photoCredit}</i></div>) : null}
                </div>
              </div></div>
          </div>
        </div>


        <div className="big-devices">
          <div className="project-title desktop-configuration">
            <b>{project.title}</b>
          </div>
          <div key={project.description} className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-inner-desktop-configuration">
                <div className="projects flip-box-front" key={project.id}>
                  <a href={project.url}>
                    <img alt="projectimage" src={project.image} />
                  </a>
                </div>
              </div>

              <a className="flip-box-inner-desktop-configuration" href={project.url}>
                <div className="flip-box-back">
                  {" "}<div className="flip-box-back-contents">
                    {project.description}
                    <div className="tech-used"><br />Technologies used</div>
                    {project.tech}
                    {project.photoCredit ? (<div><div className="tech-used"><br />Credit</div><i>{project.photoCredit}</i></div>) : null}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    ));

    return <div className="projects-wrapper">{projectsToDisplay}</div>;
  }
}
