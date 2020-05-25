import React, { Component } from "react";
import ITProjects from "./ITProjects";
import daanfoto from "../pictures/daanfoto.jpeg";
import "../CSS/Home.css";
import telephone from "../pictures/telephone.jpg";
import email from "../pictures/email.png";

export default class Home extends Component {
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
        <div className="home-contact">
          <div className="home-contact-form-wrapper">
            <div className="home-contact-form-header">
              Contact me using the form
            </div>
            <div className="home-contact-form">
              <form>
                Name:
                <label htmlFor="name">
                  <input type="text" id="name" placeholder="name"></input>
                </label>
                <br />
                Phone number:
                <label htmlFor="phone">
                  <input type="text" id="hone" placeholder="phone"></input>
                </label>
                <br />
                Company:
                <label htmlFor="company">
                  <input
                    type="company"
                    id="company"
                    placeholder="company"
                  ></input>
                </label>
                <br />
                Message:
                <label htmlFor="message">
                  <textarea
                    type="message"
                    id="message"
                    placeholder="message"
                  ></textarea>
                </label>
                <br />
                <input
                  className="home-submit-button"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
          <div className="home-contact-direct-wrapper">
            <div className="home-contact-direct-header">
              Contact me directly
            </div>
            <div className="home-contact-direct">
              <div className="home-contact-direct-phone">
                <div className="home-contact-direct-phone-width">
                  <img alt="telephone" src={telephone} />
                </div>

                <div className="home-contact-direct-phone-text">0615178860</div>
              </div>
              <div className="home-contact-direct-email">
                <div className="home-contact-direct-email-width">
                  <img alt="email" src={email} />
                </div>
                <div className="home-contact-direct-email-text">
                  {" "}
                  daan_ruijter@hotmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
