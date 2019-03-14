import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";

import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.html";
import { Tracker } from "meteor/tracker";
import { Exercises } from "../import/api/exercises";
import Testing from "./testing";
import NavBar from "./navbar";

Meteor.startup(function _startup() {
  Tracker.autorun(function _Ready() {
    let title = "Exercise Tracker";
    let name = "Cathal";
    let ExerciseList = Exercises.find().fetch();

    const List1 = props => (
      <li>
        {props.name}, {props.set}
      </li>
    );

    const List2 = () => {
      return ExerciseList.map(p => {
        return <List1 key={p.id} {...p} />;
      });
    };

    const App = () => {
      return (
        <div>
          <link rel="stylesheet" href="main.css" />

          <ul>
            <List2 />
          </ul>
        </div>
      );
    };

    const About = () => {
      return (
        <div>
          <h2>
            The purpose of this application is to help people find gym exercises
            suitable to the the sports they play.
          </h2>
          ;
        </div>
      );
    };

    class Test extends Component {
      constructor(props) {
        super(props);
        this.state = {
          showComponent: false
        };
        this._onButtonClick = this._onButtonClick.bind(this);
      }

      _onButtonClick() {
        this.setState({
          showComponent: true
        });
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

              <Button
                onClick={this.state._onButtonClick}
                color="blue"
                size="lg"
                block
              >
                Hurling
              </Button>
              {this.state.showComponent ? <List2 /> : null}
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
  });
});
