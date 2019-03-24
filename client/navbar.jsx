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
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" href="#">
          Sport Exercises
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Router>
              <NavLink to="/" exact activeStyle={{ color: "green" }}>
                Home
              </NavLink>
              <NavLink to="/About" exact activeStyle={{ color: "green" }}>
                About
              </NavLink>
            </Router>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
