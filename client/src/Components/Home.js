import React, { Component } from "react";
import ITProjects from "./ITProjects";
import daanfoto from "../pictures/daanfoto.jpeg";
import "../CSS/Home.css";
import { connect } from "react-redux";
import HomeDutch from "./HomeDutch";
import { Fragment } from "react";
import Media from "react-media";

class Home extends Component {
  state = { myDivToFocus: React.createRef() };

  render() {
    let homeEnglish = (
      <div className="home-wrapper">
        <div className="home-introduction">
          <div className="welcome">
            Welcome to the website of Full Stack Web Developer Daan Ruijter
          </div>

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
                    <div className="home-introduction-content">
                      <img alt="daan" src={daanfoto} />
                      I'm a certified Full Stack MERN web developer open to new
                      opportunities. Below you can see the projects I worked on.
                      Hover over them for more information and click to go to
                      the project.
                    </div>
                  </div>
                )}
                {matches.medium && (
                  <div>
                    {" "}
                    <div className="home-introduction-content">
                      <img alt="daan" src={daanfoto} />
                      I'm a certified Full Stack MERN web developer open to new
                      opportunities. I have built frontend and backend
                      applications with React.js, Vue.js, Vanilla JavaScript,
                      HTML and CSS and I'm thrilled to learn more techniques.{" "}
                      <br />
                      <br />
                      The creative process in coding, combined with the
                      analytical thinking and having many opportunities to
                      develop myself is what attracts me a lot in web
                      development. I also like the fact that the industry is
                      internationally oriented, because I'm interested in other
                      cultures and languages.
                      <br />
                      <br />
                      Below you can see the projects I worked on. Hover over
                      them for more information and click to go to the project.
                    </div>
                  </div>
                )}
                {matches.large && (
                  <div>
                    {" "}
                    <div className="home-introduction-content">
                      <img alt="daan" src={daanfoto} />
                      I'm a certified Full Stack MERN web developer open to new
                      opportunities. I have built frontend and backend
                      applications with React.js, Vue.js, Vanilla JavaScript,
                      HTML and CSS and I'm thrilled to learn more techniques.{" "}
                      <br />
                      <br />
                      The creative process in coding, combined with the
                      analytical thinking and having many opportunities to
                      develop myself is what attracts me a lot in web
                      development. I also like the fact that the industry is
                      internationally oriented, because I'm interested in other
                      cultures and languages.
                      <br />
                      <br />
                      Below you can see the projects I worked on. Hover over
                      them for more information and click to go to the project.
                    </div>
                  </div>
                )}
              </Fragment>
            )}
          </Media>
        </div>
        <div className="home-IT-projects">
          <ITProjects />
        </div>
      </div>
    );
    let homeDutch = (
      <div>
        <HomeDutch />
      </div>
    );
    if (
      this.props.languages.english === "english" ||
      this.props.languages.english === "nodutch"
    ) {
      return homeEnglish;
    }
    if (
      this.props.languages.dutch === "dutch" ||
      this.props.languages.english === "noenglish"
    ) {
      return homeDutch;
    }
    return <div></div>;
  }
}
const mapStateToProps = (state) => {
  return {
    languages: state.language,
  };
};
export default connect(mapStateToProps, null)(Home);
