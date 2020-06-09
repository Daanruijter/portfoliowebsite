import React, { Component } from "react";
import "../CSS/Navbar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export default class Navbar extends Component {
  state = {
    dropDownOpen: false,
    sportArticlesOpen: false,
    redirect: false,
    dutch: false,
    english: true,
  };
  componentDidMount() {
    let dutch = localStorage.getItem("dutch");
    let english = localStorage.getItem("english");
    this.setState({ dutch: dutch });
    this.setState({ english: english });
  }

  expandDropDown = () => {
    this.setState({ dropDownOpen: !this.state.dropDownOpen });
  };
  expandSportArticlesDiv = () => {
    this.setState({ sportArticlesOpen: !this.state.sportArticlesOpen });
  };
  switchToDutch = () => {
    this.setState({ dutch: true, english: false });
    localStorage.setItem("dutch", true);
    localStorage.setItem("english", false);
    console.log("switchssitescuh");
  };
  switchToEnglish = () => {
    this.setState({ dutch: false, english: true });
    localStorage.setItem("dutch", false);
    localStorage.setItem("english", true);
    console.log("switchssitescuh");
  };

  render() {
    return (
      <div className="wrapper">
        {/* {this.state.english ? ( */}
        <div className="navbar-position">
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
                        <div className="sport-articles-header">
                          Sport Articles
                        </div>
                        <div>
                          {" "}
                          <a href="./internationaltennis">
                            International tennis
                          </a>
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
                      </div>
                    </div>
                  ) : null}
                </div>
              </li>
              <li>
                <a href="/resume">Resume</a>
              </li>
              <li>
                <a href="/contact"> Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="language-switch">
          {" "}
          <ul>
            <li onClick={this.switchToDutch}>Dutch</li>
            <li onClick={this.switchToEnglish}>English</li>
          </ul>
        </div>
      </div>
    );
  }
}
