import React, { Component } from "react";
import "./about";

import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

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
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Exercise Application
        </a>
      </nav>
    );
  }
}

export default NavBar;
