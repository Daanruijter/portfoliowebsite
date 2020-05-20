import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../CSS/App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Resume from "./Resume";
import ResumeDutch from "./ResumeDutch";

function App() {
  return (
    <div className="App">
      <nav>
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
              path="/resume/dutch"
              render={(props) => <ResumeDutch {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
