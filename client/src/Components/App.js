import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../CSS/App.css";
// import Home from "./Home";
// import Navbar from "./Navbar";
// import About from "./About";
// import Resume from "./Resume";
// import LocalArticles from "./LocalArticles";
// import DeGouw from "./DeGouw";
// import TennisNL from "./TennisNL";
// import Ajax from "./Ajax";
// import FCZSW from "./FCZSW";
// import Contact from "./Contact";
// import LocalArticlesDutch from "./LocalArticlesDutch";
// import TennisNLDutch from "./TennisNLDutch";
// import DeGouwDutch from "./DeGouwDutch";
// import AjaxDutch from "./AjaxDutch";
// import FCZSWDutch from "./FCZSWDutch";

import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      test of dit wel lukt
      {/* <nav>
        <Navbar />
      </nav>

      <main className="main">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/about"
              render={(props) => <About {...props} />}
            />
            <Route
              exact
              path="/resume"
              render={(props) => <Resume {...props} />}
            />
            <Route
              exact
              path="/contact"
              render={(props) => <Contact {...props} />}
            />
            <Route
              exact
              path="/localarticles"
              render={(props) => <LocalArticles {...props} />}
            />
            <Route
              exact
              path="/lokaleartikelen"
              render={(props) => <LocalArticlesDutch {...props} />}
            />
            <Route
              exact
              path="/internationaltennis"
              render={(props) => <TennisNL {...props} />}
            />
            <Route
              exact
              path="/internationaletennis"
              render={(props) => <TennisNLDutch {...props} />}
            />
            <Route
              exact
              path="/localtennis"
              render={(props) => <DeGouw {...props} />}
            />
            <Route
              exact
              path="/lokaletennis"
              render={(props) => <DeGouwDutch {...props} />}
            />
            <Route exact path="/ajax" render={(props) => <Ajax {...props} />} />
            <Route
              exact
              path="/ajaxnl"
              render={(props) => <AjaxDutch {...props} />}
            />
            <Route
              exact
              path="/localsoccer"
              render={(props) => <FCZSW {...props} />}
            />
            <Route
              exact
              path="/lokalevoetbal"
              render={(props) => <FCZSWDutch {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </main> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    languages: state.language,
  };
};
export default connect(mapStateToProps)(App);
