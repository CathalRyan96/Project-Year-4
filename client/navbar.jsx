import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Exercise Application
        </a>
        <form class="form-inline">
          <button class="btn btn-outline-secondary" type="button">
            About
          </button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
