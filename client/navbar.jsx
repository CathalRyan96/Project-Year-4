import React, { Component } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

const About = () => {
  return <h1>About Info ...</h1>;
};

class NavBar extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Exercise Application
          </a>
          <form class="form-inline">
            <button class="btn btn-outline-secondary" type="button">
              Home
            </button>
            <button class="btn btn-outline-secondary" type="button">
              About
            </button>
            <Route
              path="/"
              render={() => {
                return <h1>Home</h1>;
              }}
            />

            <Route path="/about" exact strict component={About} />
          </form>
        </nav>
      </Router>
    );
  }
}

export default NavBar;
