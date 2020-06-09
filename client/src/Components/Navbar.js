import React, { Component } from "react";
import "../CSS/Navbar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { sendLanguageEnglish } from "../store/actions/languageActions";
import { sendLanguageDutch } from "../store/actions/languageActions";
import { connect } from "react-redux";

class Navbar extends Component {
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

    this.props.sendLanguageEnglish(english);
    this.props.sendLanguageDutch(dutch);
  }

  expandDropDown = () => {
    this.setState({ dropDownOpen: !this.state.dropDownOpen });
  };
  expandSportArticlesDiv = () => {
    this.setState({ sportArticlesOpen: !this.state.sportArticlesOpen });
  };
  switchToDutch = () => {
    let english = false;
    let dutch = true;
    this.setState({ dutch, english });
    localStorage.setItem("dutch", true);
    localStorage.setItem("english", false);
    this.props.sendLanguageEnglish(english);
    this.props.sendLanguageDutch(dutch);
  };
  switchToEnglish = () => {
    let english = true;
    let dutch = false;
    this.setState({ dutch, english });
    localStorage.setItem("dutch", false);
    localStorage.setItem("english", true);
    this.props.sendLanguageEnglish(english);
    this.props.sendLanguageDutch(dutch);
  };

  render() {
    return (
      <div className="wrapper">
        {this.state.english ? (
          <div>
            {" "}
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
                            //English navbar
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
          </div>
        ) : (
          <div>
            {" "}
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
                            <a href="/about">Over</a>
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
                                Lokale artikelen
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
                              Sportartikelen
                            </div>
                            <div>
                              {" "}
                              <a href="./internationaltennis">
                                Internationale tennis
                              </a>
                            </div>
                            <div>
                              {" "}
                              <a href="./localtennis">
                                Lokale tennis - tennisvereniging De Gouw
                              </a>
                            </div>
                            <div>
                              {" "}
                              <a href="./ajax">Voetbal - Ajax</a>
                            </div>
                            <div>
                              {" "}
                              <a href="./localsoccer">
                                Lokale zaalvoetbal - FCZSW
                              </a>
                            </div>
                            <br />
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </li>
                  <li>
                    <a href="/resume/dutch">CV</a>
                  </li>
                  <li>
                    <a href="/contact"> Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {/* language switcher */}

        <div className="language-switch">
          {" "}
          <div>
            <ul>
              <li onClick={this.switchToDutch}>
                <img
                  alt="dutch flag"
                  src="http://daanruijter.eu/wp-content/uploads/2015/04/dutch-flag-large.jpg"
                ></img>
                Dutch
              </li>
              <li onClick={this.switchToEnglish}>
                <img
                  alt="british flag"
                  src="http://daanruijter.eu/wp-content/uploads/2015/04/british-flag-large.jpg"
                ></img>
                English
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendLanguageEnglish: (english) => dispatch(sendLanguageEnglish(english)),
    sendLanguageDutch: (dutch) => dispatch(sendLanguageDutch(dutch)),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
