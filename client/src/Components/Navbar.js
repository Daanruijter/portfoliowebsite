import React, { Component } from "react";
import "../CSS/Navbar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { sendLanguageEnglish } from "../store/actions/languageActions";
import { sendLanguageDutch } from "../store/actions/languageActions";
import { connect } from "react-redux";
import { Fragment } from "react";
import Media from "react-media";



class Navbar extends Component {
  state = {
    dropDownOpen: false,
    sportArticlesOpen: false,
    redirect: false,
    dutch: "",
    english: "",
  };

 componentDidMount() {
    if (localStorage.getItem("english") === null) {
      localStorage.setItem("dutch", "");
      localStorage.setItem("english", "english");
    }

    let dutch = localStorage.getItem("dutch");
    let english = localStorage.getItem("english");
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
    let english = "noenglish";
    let dutch = "dutch";
    this.setState({ dutch, english });
    localStorage.setItem("dutch", dutch);
    localStorage.setItem("english", english);
    this.props.sendLanguageEnglish(english);
    this.props.sendLanguageDutch(dutch);
  };
  switchToEnglish = () => {
    let english = "english";
    let dutch = "nodutch";
    this.setState({ dutch, english });
    localStorage.setItem("dutch", dutch);
    localStorage.setItem("english", english);
    this.props.sendLanguageEnglish(english);
    this.props.sendLanguageDutch(dutch);
  };

  render() {
    console.log(this.state.english);
    let englishNavbar = (
      <div className="wrapper">
        <div>
          {" "}
          <div className="navbar-position">
            <div className="navbar">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/resume">CV</a>
                </li>
                <li>
                  <a className="contact" href="/contact">
                    {" "}
                    Contact
                  </a>
                </li>{" "}
                <li>
                  <ul className="about-menu-ul">
                    <li>
                      <div className="about-grid">
                        <div className="about-position">
                          <a href="/about">Publications</a>
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
                            <a href="./localtennis">Local tennis - De Gouw</a>
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
              </ul>
            </div>
          </div>
        </div>
        <div className="language-switch">
          {" "}
          <Media
            queries={{
              small: "(max-width: 767px)",
              medium: "(min-width: 768px) and (max-width: 1100px)",
              large: "(min-width: 1101px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.small && (
                  <div>
                    <ul>
                      <li onClick={this.switchToDutch}>
                        <img
                          alt="dutch flag"
                          src="http://daanruijter.eu/wp-content/uploads/2015/04/dutch-flag-large.jpg"
                        ></img>
                        NL
                      </li>
                      <li onClick={this.switchToEnglish}>
                        <img
                          alt="british flag"
                          src="http://daanruijter.eu/wp-content/uploads/2015/04/british-flag-large.jpg"
                        ></img>
                        EN
                      </li>
                    </ul>
                  </div>
                )}
                {matches.medium && (
                  <div>
                    <ul>
                      <li onClick={this.switchToDutch}>
                        <img
                          alt="dutch flag"
                          src="http://daanruijter.eu/wp-content/uploads/2015/04/dutch-flag-large.jpg"
                        ></img>
                        NL
                      </li>
                      <li onClick={this.switchToEnglish}>
                        <img
                          alt="british flag"
                          src="http://daanruijter.eu/wp-content/uploads/2015/04/british-flag-large.jpg"
                        ></img>
                        EN
                      </li>
                    </ul>
                  </div>
                )}
                {matches.large && (
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
                )}
              </Fragment>
            )}
          </Media>
        </div>
      </div>
    );
    let dutchNavbar = (
      <div className="wrapper">
        <div className="test">
          {" "}
          <div className="navbar-position">
            <div className="navbar">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>

                <li>
                  <a href="/resume">CV</a>
                </li>
                <li>
                  <a className="contact" href="/contact">
                    {" "}
                    Contact
                  </a>
                </li>
                <li>
                  <ul className="about-menu-ul">
                    <li>
                      <div className="about-grid">
                        <div className="about-position">
                          <a href="/about">Publicaties</a>
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
                              Internationaal tennis
                            </a>
                          </div>
                          <div>
                            {" "}
                            <a href="./localtennis">
                              Lokaal tennis - TV De Gouw
                            </a>
                          </div>
                          <div>
                            {" "}
                            <a href="./ajax">Voetbal - Ajax</a>
                          </div>
                          <div>
                            {" "}
                            <a href="./localsoccer">
                              Lokaal zaalvoetbal - FCZSW
                            </a>
                          </div>
                          <br />
                        </div>
                      </div>
                    ) : null}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        <div className="language-switch">
          {" "}
          <Media
            queries={{
              small: "(max-width: 767px)",
              medium: "(min-width: 768px) and (max-width: 1100px)",
              large: "(min-width: 1101px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.small && (
                  <div>
                    <ul>
                      <li onClick={this.switchToDutch}>
                        <img
                          alt="dutch flag"
                          src="http://daanruijter.eu/wp-content/uploads/2015/04/dutch-flag-large.jpg"
                        ></img>
                        NL
                      </li>
                      <li onClick={this.switchToEnglish}>
                        <img
                          alt="british flag"
                          src="http://daanruijter.eu/wp-content/uploads/2015/04/british-flag-large.jpg"
                        ></img>
                        EN
                      </li>
                    </ul>
                  </div>
                )}
                {matches.medium && (
                  <div>
                    <ul>
                      <li onClick={this.switchToDutch}>
                        <img
                          alt="dutch flag"
                          src="http://daanruijter.eu/wp-content/uploads/2015/04/dutch-flag-large.jpg"
                        ></img>
                        NL
                      </li>
                      <li onClick={this.switchToEnglish}>
                        <img
                          alt="british flag"
                          src="http://daanruijter.eu/wp-content/uploads/2015/04/british-flag-large.jpg"
                        ></img>
                        EN
                      </li>
                    </ul>
                  </div>
                )}
                {matches.large && (
                  <div>
                    <ul>
                      <li onClick={this.switchToDutch}>
                        <img
                          alt="dutch flag"
                          src="http://daanruijter.eu/wp-content/uploads/2015/04/dutch-flag-large.jpg"
                        ></img>
                        Nederlands
                      </li>
                      <li onClick={this.switchToEnglish}>
                        <img
                          alt="british flag"
                          src="http://daanruijter.eu/wp-content/uploads/2015/04/british-flag-large.jpg"
                        ></img>
                        Engels
                      </li>
                    </ul>
                  </div>
                )}
              </Fragment>
            )}
          </Media>
        </div>
      </div>
    );

    if (this.state.english === "english") {
      return englishNavbar;
    }
    if (this.state.dutch === "dutch") {
      return dutchNavbar;
    }

    if (this.state.english === "" && this.state.dutch === "") {
      if (localStorage.getItem("english") === "english") {
        return englishNavbar;
      }
      if (localStorage.getItem("dutch") === "dutch") {
        return dutchNavbar;
      }
    } return null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendLanguageEnglish: (english) => dispatch(sendLanguageEnglish(english)),
    sendLanguageDutch: (dutch) => dispatch(sendLanguageDutch(dutch)),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
