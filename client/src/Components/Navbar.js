import React, { Component } from "react";
import "../CSS/Navbar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Home from "./Home";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";
import { Redirect } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;

// const ScrollLink = Scroll.ScrollLink;

export default class Navbar extends Component {
  state = { dropDownOpen: false, sportArticlesOpen: false, redirect: false };

  handleClick = () => {
    this.props.redirecter();
  };
  setRedirect = () => {
    console.log("hi");
    this.setState({
      redirect: true,
    });
  };
  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     console.log("hsssi");
  //     return <Redirect to="/resume" />;
  //   }
  // };
  expandDropDown = () => {
    this.setState({ dropDownOpen: !this.state.dropDownOpen });
  };
  expandSportArticlesDiv = () => {
    this.setState({ sportArticlesOpen: !this.state.sportArticlesOpen });
  };

  render() {
    // if (this.state.redirect) {
    //   console.log("hsssi");
    //   return <Redirect to="#" />;
    // }
    return (
      <div className="navbar">
        {/* {this.renderRedirect()} */}
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
            {/* onClick={this.setRedirect()} */}
            {/* <Route> */}
            {/* <div> */}

            {/* <Link to="/"> */}
            <a
              // onClick={this.handleClick}
              href="/"
            >
              Contact
            </a>
            <ScrollLink
              to="example-destination"
              spy={true}
              smooth={true}
              duration={500}
              className="some-class"
              activeClass="some-active-class"
            >
              Link Text Goes Here
            </ScrollLink>

            {/* <Link
                  onClick={() => this.setRedirect()}
                  to="home-contact"
                  // spy={true}
                  // smooth={true}
                  // duration={500}
                  // className=""
                  // activeClass="active"
                  // component="Home"
                >
                  {" "}
                  // Contact
                </Link> */}
            {/* </Link> */}
            {/* </div> */}
            {/* </Route> */}
          </li>

          {/* <li>
            <a href="about.asp">Blog</a>
          </li> */}
        </ul>
      </div>
    );
  }
}
