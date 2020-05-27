import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../CSS/App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Resume from "./Resume";
import ResumeDutch from "./ResumeDutch";
import LocalArticles from "./LocalArticles";
import DeGouw from "./DeGouw";
import TennisNL from "./TennisNL";
import Ajax from "./Ajax";
import FCZSW from "./FCZSW";

function App() {
  function redirecter() {
    console.log("handleClick");
    alert();
    console.log("testestet");
    this.handleOnClick();
    // this.child.handleOnClick();
  }

  // function handleOnClick(event) {
  //   console.log("hihihih");
  // }
  return (
    <div className="App">
      {/* <Home ref={(cd) => (this.child = cd)} /> */}
      <nav>
        <Navbar redirecter={redirecter} />
      </nav>

      <main className="main">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  // test={handleOnClick}
                />
              )}
            />
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
              render={(props) => <Home {...props} />}
            />
            <Route
              exact
              path="/resume/dutch"
              render={(props) => <ResumeDutch {...props} />}
            />
            <Route
              exact
              path="/localarticles"
              render={(props) => <LocalArticles {...props} />}
            />
            <Route
              exact
              path="/internationaltennis"
              render={(props) => <TennisNL {...props} />}
            />
            <Route
              exact
              path="/localtennis"
              render={(props) => <DeGouw {...props} />}
            />
            <Route exact path="/ajax" render={(props) => <Ajax {...props} />} />
            <Route
              exact
              path="/localsoccer"
              render={(props) => <FCZSW {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
