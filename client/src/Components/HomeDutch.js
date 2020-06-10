import React, { Component } from "react";
import ITProjectsDutch from "./ITProjectsDutch";
import daanfoto from "../pictures/daanfoto.jpeg";
import "../CSS/Home.css";

export default class Home extends Component {
  state = { myDivToFocus: React.createRef() };

  render() {
    return (
      <div className="home-wrapper">
        <div className="home-introduction">
          <div className="welcome">
            Welkom op de website van Full Stack Webdeveloper Daan Ruijter
          </div>
          <div className="home-introduction-content">
            <img alt="daan" src={daanfoto} />
            Ik ben een gecertificeerde Full Stack MERN web developer die
            openstaat voor nieuwe mogelijkheden. Ik heb front-end- en
            back-endapplicaties gebouwd met React.js, Vue.js, Vanilla
            JavaScript, HTML en CSS en ik kijk er erg naar uit om nieuwe
            technologieën onder de knie te krijgen. <br />
            <br />
            Het creatieve proces van coderen gecombineerd met het analytische
            denken en de vele kansen om mijzelf te ontwikkelen maakt
            webdevelopment voor mij erg interessant. De internationale
            oriëntatie van de sector trekt mij ook aan, aangezien ik meerdere
            vreemde talen beheers en geïnteresseerd ben in andere culturen en
            talen.
            <br />
            <br />
            Hieronder vindt u de projecten waar ik aan gewerkt hebt. Als u er
            met de muis overheen gaat, krijgt u meer informatie. U kunt op de
            projecten klikken om ze te zien.{" "}
          </div>
        </div>
        <div className="home-IT-projects">
          <ITProjectsDutch />
        </div>
      </div>
    );
  }
}
