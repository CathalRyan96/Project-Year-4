import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";

const About = () => {
  return (
    <div>
      <p1>
        The purpose of this application is to help people find gym exercises
        suitable to the the sports they play.
      </p1>
      ;
    </div>
  );
};

class Test extends Component {
  clicked() {
    console.log("button was clicked");
  }

  render() {
    return (
      <Router>
        <div>
          <NavLink to="/" exact activeStyle={{ color: "green" }}>
            Home
          </NavLink>
          <NavLink to="/About" exact activeStyle={{ color: "green" }}>
            About
          </NavLink>

          <Route
            path="/"
            render={() => {
              return <h1>Select the Sports You Play</h1>;
            }}
          />

          <Route path="/about" exact strict component={About} />

          <Button onClick={this.clicked} color="blue" size="lg" block>
            Hurling
          </Button>
          <Button color="blue" size="lg" block>
            Soccer
          </Button>
          <Button color="blue" size="lg" block>
            Football
          </Button>
          <Button color="blue" size="lg" block>
            Rugby
          </Button>
        </div>
      </Router>
    );
  }
}

export default Test;
