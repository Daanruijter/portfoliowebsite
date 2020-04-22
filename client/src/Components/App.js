import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import "../CSS/App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar"></nav>
      <main className="main">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
