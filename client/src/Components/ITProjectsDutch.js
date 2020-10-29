import React, { Component } from "react";
import bookstore from "../pictures/bookstoreapp-large.jpeg";
import mytinerery from "../pictures/mytinerary.jpeg";
import nysl from "../pictures/nysl.jpeg";
import tgif from "../pictures/tgif.jpeg";
import weatherapp from "../pictures/weatherapp.jpeg";
import worldnewsapp from "../pictures/worldnewsapp.jpeg";
import "../CSS/ITProjects.css";

export default class ITProjects extends Component {
  state = {
    projects: [
      {
        title: "Wereldnieuwsapp",
        url: "https://worldnews-app.herokuapp.com",
        id: "wereldnieuwsapp",
        image: worldnewsapp,
        description:
          "App in Vue.js en TypeScript die het meest recente nieuws vertoont op basis van wat de gebruiker selecteert. Zij kunnen nieuws van een land of een bepaalde nieuwscategorie opvragen, maar ook op een willekeurig onderwerp zoeken. Wanneer zij dat doen, wordt het meest recente nieuws opgehaald bij een API en getoond in de app",
        tech: "Vue.js, TypeScript, Express.js, Node.js, CSS, HTML",
      },
      {
        title: "Mytineraries reisapp",
        url: "https://myitinerariestravelapp.herokuapp.com",
        id: "mytineraries",
        image: mytinerery,
        description: "Reisapplication die favoriete toeristische steden toont.",
        tech:
          "Node, Express, MongoDB, Redux, React,js, Redux, CSS, Materialize, HTML",
      },
      {
        title: "Weerapp",
        url: "https://daanruijter.github.io/WeatherApp",
        id: "weatherapp",
        image: weatherapp,
        description:
          "Weerapp die het huidige weer voor een bepaalde stad toont. Gebruikers kunnen verschillende weergegevens selecteren om grafieken met voorspellingen te genereren.",
        tech: "Vue.js, Chart.js, CSS, HTML",
      },
      {
        title: "Transparent Government in Fact-app",
        url: "https://daanruijter.github.io/tgifVUEtodeploy/index.html",
        image: tgif,
        id: "tgif",
        description:
          "TGIF: Transparent Government In Fact-app die op dynamische wijze via een API gegevens van het Amerikaanse parlement en de senaat laat zien. Nadat ik de app in Vanilla JavaScript heb gecreëerd herhaalde ik het proces in Vue.js.",
        tech: "Vue.js, JavaScript, CSS, Bootstrap",
      },

      {
        title: "Voetbalproject",
        url: "https://daanruijter.github.io/soccerproject",
        image: nysl,
        id: "nysl",
        description:
          "De NYSL is een door Ubiqum verzonnen jeugdvoetbalcompetitie in Amerika. De website toont information over de liga. Ik heb de site gebouwd met HTML en CSS, gebruikmakend van FlexBox en Grid om elementen te positioneren. Ik paste ook CSS-mediaregels toe om de website geschikt te maken voor mobiele en andere schermen.",
        tech: "CSS, HTML",
      },
      {
        title: "Boekenwinkelapp",
        url: "https://ruijterbookstoreapp.herokuapp.com",
        id: "bookstore",
        image: bookstore,
        description:
          "Om op dynamische wijze een reeks boeken te tonen gebruikte ik een API-dataset. Door met de muis over de boeken te gaan is meer informatie te verkrijgen en wordt ook een link naar een plaatjesgalerij zichtbaar. De app is gebouwd in Vue.js.",
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
            <a href={project.url}>
              <img alt="projectimage" src={project.image} />
            </a>
          </div>
          <a href={project.url}>
            <div className="flip-box-back">
              {" "}
              {project.description}
              <p className="tech-used">Gebruikte technologieën:</p>
              {project.tech}
            </div>
          </a>
        </div>
      </div>
    ));

    return <div className="projects-wrapper">{projectsToDisplay}</div>;
  }
}
