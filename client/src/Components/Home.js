import React, { Component } from "react";
import ITProjects from "./ITProjects";
import daanfoto from "../pictures/daanfoto.jpeg";
import "../CSS/Home.css";

export default class Home extends Component {
  state = { myDivToFocus: React.createRef() };

  render() {
    return (
      <div className="home-wrapper">
        <div className="home-introduction">
          <div className="welcome">
            Welcome to the website of Full Stack Webdeveloper Daan Ruijter
          </div>
          <div className="home-introduction-content">
            <img alt="daan" src={daanfoto} />
            I'm a certified Full Stack MERN web developer open to new
            opportunities. I have built frontend and backend applications with
            React.js, Vue.js, Vanilla JavaScript, HTML and CSS and I'm thrilled
            to learn more techniques. <br />
            <br />
            The creative process in coding, combined with the analytical
            thinking and having many opportunities to develop myself is what
            attracts me a lot in web development. I also like the fact that the
            industry is internationally oriented, because I'm interested in
            other cultures and languages.
            <br />
            <br />
            Below you can see the projects I worked on. Hover over them for more
            information and click to go to the project.
          </div>
        </div>
        <div className="home-IT-projects">
          <ITProjects />
        </div>
      </div>
    );
  }
}
