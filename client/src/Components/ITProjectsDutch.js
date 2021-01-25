import React, { Component } from "react";
import grocery from "../pictures/grocery.png";
import weather from "../pictures/weather.png";
import mytinerary from "../pictures/mytineraries.png";
import ganzenbord from "../pictures/ganzenbord.png";
import soccerproject from "../pictures/soccerproject.png";
import tgif from "../pictures/tgif.png";
import worldnews from "../pictures/worldnews.png";
import todo from "../pictures/todo.png";
import bookstore from "../pictures/bookstore.png";
import "../CSS/ITProjects.css";

export default class ITProjects extends Component {
  state = {
    projects: [
      {
        title: "Wereldnieuwsapp",
        url: "http://worldnews-app.herokuapp.com",
        id: "wereldnieuwsapp",
        image: worldnews,
        description:
          "App in Vue.js en TypeScript die het meest recente nieuws vertoont op basis van wat de gebruiker selecteert. Zij kunnen nieuws van een land of een bepaalde nieuwscategorie opvragen, maar ook op een willekeurig onderwerp zoeken. Wanneer zij dat doen, wordt het meest recente nieuws opgehaald bij een API en getoond in de app",
        tech: "Vue.js | TypeScript | Express.js | Node.js | CSS | HTML",
        photoCredit: "Afbeelding van Vlad Tchompalov via Unsplash",
      },
      {
        title: "Mytineraries reisapp",
        url: "http://myitinerariestravelapp.herokuapp.com",
        id: "mytineraries",
        image: mytinerary,
        description: "Reisapplicatie die favoriete toeristische steden toont.",
        tech:
          "Node | Express | MongoDB | Redux | React,js | Redux | CSS | Materialize | HTML",
        photoCredit: "Afbeelding van postcardtrip via Pixabay ",
      },
      {
        title: "Weerapp",
        url: "http://daanruijter.github.io/WeatherApp",
        id: "weatherapp",
        image: weather,
        description:
          "Weerapp die het huidige weer voor een bepaalde stad toont. Gebruikers kunnen verschillende weergegevens selecteren om grafieken met voorspellingen te genereren.",
        tech: "Vue.js | Chart.js | CSS | HTML",
        photoCredit: "Afbeelding van Dimitris Vetsikas via Pixabay",
      },
      {
        title: "Transparent Government in Fact-app",
        url: "http://daanruijter.github.io/tgifVUEtodeploy/index.html",
        image: tgif,
        id: "tgif",
        description:
          "TGIF: Transparent Government In Fact-app die op dynamische wijze via een API gegevens van het Amerikaanse parlement en de senaat laat zien. Nadat ik de app in Vanilla JavaScript heb gecreëerd herhaalde ik het proces in Vue.js.",
        tech: "Vue.js | JavaScript | CSS | Bootstrap",
        photoCredit: "Afbeelding van David Everett Strickler via Unsplash",
      },

      {
        title: "Voetbalproject",
        url: "http://daanruijter.github.io/soccerproject",
        image: soccerproject,
        id: "nysl",
        description:
          "De NYSL is een door Ubiqum verzonnen jeugdvoetbalcompetitie in Amerika. De website toont information over de liga. Ik heb de site gebouwd met HTML en CSS, gebruikmakend van FlexBox en Grid om elementen te positioneren. Ik paste ook CSS-mediaregels toe om de website geschikt te maken voor mobiele en andere schermen.",
        tech: "CSS | HTML",
        photoCredit: "Afbeelding van Vetsikas via Pixabay",
      },
      {
        title: "Boekenwinkelapp",
        url: "http://ruijterbookstoreapp.herokuapp.com",
        id: "bookstore",
        image: bookstore,
        description:
          "Om op dynamische wijze een reeks boeken te tonen gebruikte ik een API-dataset. Door met de muis over de boeken te gaan is meer informatie te verkrijgen en wordt ook een link naar een plaatjesgalerij zichtbaar. De app is gebouwd in Vue.js.",
        tech: "Vue.js | FancyBox | CSS | HTML",
        photoCredit: "",
      },
      {
        title: "Digitaal Boodschappenlijstje",
        url: "https://github.com/Daanruijter/grocerylist",
        id: "Groceryapp",
        image: grocery,
        description:
          `Digitaal boodschappenlijstje. Met een gebruikersinterface kan de gebruiker boodschap-
          pen toevoegen, wijzigen, verwijderen en aangeven dat een item is gepakt.`,
        tech: "HTML | CSS | JavaScript | React.js | Node.js | Express | MongoDB | Redux",
        photoCredit: "Afbeelding van Squirrel_photos via Pixabay",
      },
      {
        title: "Ganzenbord",
        url: "https://github.com/Daanruijter/GanzenbordJava",
        id: "Ganzenbord",
        image: ganzenbord,
        description:
          `Commandlineversie van het spel Ganzenbord. Spelers kunnen hun namen invoeren en dit
          spel via de terminal spelen door met een digitale dobbelsteen te gooien.`,
        tech: "Java",
        photoCredit: "",
      },
      {
        title: "Todo app",
        url: "https://github.com/Daanruijter/todoAppAngular",
        id: "Todoapp",
        image: todo,
        description:
          `App aan de hand van een Angular-tutorial. Een gebruiker kan een todo-lijstje maken door
          items toe te voegen en kan deze ook verwijderen. De data komen van JSON placeholder,
          een nep online RESTful API voor testen en prototyperen.`,
        tech: "Angular 2.0 | TypeScript | RESTful APIs | HTML5 | CSS3 | SASS",
        photoCredit: "",
      },
    ],
  };
  // render() {
  //   let projects = this.state.projects;
  //   console.log(projects);
  //   let projectsToDisplay = projects.map((project) => (
  //     <div key={project.description} className="flip-box">   <div className="project-title">
  //     <b>{project.title}</b>
  //   </div>
  //     <div className="flip-box-inner">
  //       <div className="flip-box-inner-desktop-configuration">

  //         <div className="projects flip-box-front" key={project.id}>
  //           <a href={project.url}>
  //             <img alt="projectimage" src={project.image} />
  //           </a>
  //         </div>

  //       </div>
  //       <div className="flip-box-inner-mobile-configuration">
  //         <div className="project-title">
  //         <a href={project.url}>   <b>{project.title}</b>  </a>
  //         </div>
  //         <div className="projects flip-box-front" key={project.id}>

  //             <img alt="projectimage" src={project.image} />

  //         </div>

  //       </div>

  //       <a className = "flip-box-inner-desktop-configuration" href={project.url}>
  //         <div className="flip-box-back">
  //           {" "}
  //           {project.description}
  //           <div className="tech-used"><br />Gebruikte technologiëen</div>
  //           {project.tech}
  //           {project.photoCredit ? (<div><div className="tech-used"><br />Foto-credit</div><i>{project.photoCredit}</i></div>) : null}
  //         </div>
  //       </a>
  //       <div className="flip-box-back flip-box-inner-mobile-configuration" >
  //           {" "}
  //           {project.description}
  //           <div className="tech-used"><br />Gebruikte technologiëen</div>
  //           {project.tech}
  //           {project.photoCredit ? (<div><div className="tech-used"><br />Foto-credit</div><i>{project.photoCredit}</i></div>) : null}
  //         </div>

  //     </div>
  //   </div>
  //   ));

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
