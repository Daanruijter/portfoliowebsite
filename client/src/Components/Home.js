import React, { Component } from "react";
import ITProjects from "./ITProjects";
import "../CSS/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        Welcome on the web page of full stack web developer Daan Ruijter.
        <ITProjects />
      </div>
    );
  }
}
