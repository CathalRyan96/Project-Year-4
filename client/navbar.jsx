import React, { Component } from "react";
import "./about";

import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";

const About = () => {
  return (
    <div>
      <h1>About Info ...</h1>;
    </div>
  );
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
            <NavLink to="/" exact activeStyle={{ color: "green" }}>
              Home
            </NavLink>
            <NavLink to="/About" exact activeStyle={{ color: "green" }}>
              About
            </NavLink>

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
