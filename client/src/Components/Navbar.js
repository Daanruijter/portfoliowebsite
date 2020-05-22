import React, { Component } from "react";
import "../CSS/Navbar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <li>
              <div className="about-grid">
                <div className="about-position">
                  <a href="/">About</a>
                </div>
                <div className="arrow-position">
                  <ExpandMoreIcon />
                </div>
              </div>
            </li>
            <div class="dropdown">
              <div class="dropdown-content">
                <a href="#">
                  Local Articles Local ArticlesLocal ArticlesLocal ArticlesLocal
                  Articles
                </a>
                <br />
                <a href="#">Sport Articles</a> <br />
                <a href="#"></a>
              </div>
            </div>
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
