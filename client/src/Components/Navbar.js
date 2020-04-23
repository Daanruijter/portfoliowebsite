import React, { Component } from "react";
import "../CSS/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="resume">Resume</a>
          </li>
          {/* <li>
            <a href="about.asp">Blog</a>
          </li> */}
        </ul>
      </div>
    );
  }
}
