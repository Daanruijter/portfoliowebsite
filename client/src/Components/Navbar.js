import React, { Component } from "react";
import "../CSS/Navbar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export default class Navbar extends Component {
  state = { dropDownOpen: false, sportArticlesOpen: false };
  expandDropDown = () => {
    this.setState({ dropDownOpen: !this.state.dropDownOpen });
  };
  expandSportArticlesDiv = () => {
    this.setState({ sportArticlesOpen: !this.state.sportArticlesOpen });
  };

  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <ul>
              <li>
                <div className="about-grid">
                  <div className="about-position">
                    <a href="/about">About</a>
                  </div>
                  {this.state.dropDownOpen ? (
                    <div
                      onClick={this.expandDropDown}
                      className="arrow-position"
                    >
                      <ExpandMoreIcon />
                    </div>
                  ) : (
                    <div
                      onClick={this.expandDropDown}
                      className="arrow-position"
                    >
                      <ExpandLessIcon />
                    </div>
                  )}
                </div>
              </li>
            </ul>
            <div className="dropdown">
              {this.state.dropDownOpen ? (
                <div className="dropdown-content">
                  <div className="local-articles-wrapper">
                    <div className="local-articles">
                      <div className="local-articles-header">
                        Local Articles
                      </div>
                      <a href="./localarticles">Rodi Media</a>
                    </div>
                  </div>
                  <br />{" "}
                  <div
                    className="sport-articles-wrapper"
                    onClick={this.expandSportArticlesDiv}
                  >
                    <div className="sport-articles-header">Sport Articles</div>
                    <div>
                      {" "}
                      <a href="./internationaltennis">International tennis</a>
                    </div>
                    <div>
                      {" "}
                      <a href="./localtennis">
                        Local tennis - tennis club De Gouw
                      </a>
                    </div>
                    <div>
                      {" "}
                      <a href="./ajax">Soccer - Ajax</a>
                    </div>
                    <div>
                      {" "}
                      <a href="./localsoccer">Local futsal - FCZSW</a>
                    </div>
                    <br />
                    {/* <a href="#"></a> */}
                  </div>
                </div>
              ) : null}
            </div>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          {/* <li>
            <a href="about.asp">Blog</a>
          </li> */}
        </ul>
      </div>
    );
  }
}
