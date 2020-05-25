import React, { Component } from "react";
import ITProjects from "./ITProjects";
import daanfoto from "../pictures/daanfoto.jpeg";
import "../CSS/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="home-introduction">
          <span className="welcome">
            Welcome to the website of Full Stack Webdeveloper Daan Ruijter
          </span>
          <p>
            <img alt="daan" src={daanfoto} />
            I'm a certified Full Stack MERN web developer. I have built frontend
            and backend applications with React.js, Vue.js, Vanilla JavaScript,
            HTML and CSS. <br />
            This creative process combined with the analytical thinking and
            having many opportunities to develop myself is what attracts me a
            lot in web development. <br />I also like the fact that the industry
            is internationally oriented, because I'm interested in other
            cultures and languages.
          </p>
          Below you can see the projects I worked on. Hover over them for more
          information and click to go to the project.
        </div>
        <ITProjects />
      </div>
    );
  }
}
