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

    /*const Title = () => {
      return (
        <div className="title">
          <NavLink to="/list">
            <Button color="blue" size="lg" block>
              Hurling Exercises
            </Button>
          </NavLink>
        </div>
      );
    };

    const List = () => {
      return (
        <div className="nav">
          <ul>
            <li>list item</li>
            <li>list item</li>
          </ul>
          <NavLink to="/">
            <Button color="blue" size="lg" block>
              Home
            </Button>
          </NavLink>
        </div>
      );
    };
    */
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
          <p>
            The purpose of this application is to help people find gym exercises
            suitable to the the sports they play. On this page you will able to
            view images of the exercises described in order to be able to see
            how exactly you can perform these exercises. The images can be seen
            below:
          </p>
          <NavLink to="/">
            <Button> Home</Button>
          </NavLink>
          <p
            style={{
              textAlign: "center"
            }}
          >
            Sit-ups:
          </p>
          <img
            style={{
              display: "block",
              margin: "auto",
              width: "20%"
            }}
            src="situp.png"
          />

          <p
            style={{
              textAlign: "center"
            }}
          >
            Burpees:
          </p>
          <img
            style={{
              display: "block",
              margin: "auto",
              width: "30%"
            }}
            src="burpees.jpg"
          />

          <p
            style={{
              textAlign: "center"
            }}
          >
            Box-Jumps:
          </p>
          <img
            style={{
              display: "block",
              margin: "auto",
              width: "30%"
            }}
            src="box.jpg"
          />

          <p
            style={{
              textAlign: "center"
            }}
          >
            Lunges:
          </p>
          <img
            style={{
              display: "block",
              margin: "auto",
              width: "30%"
            }}
            src="lunge.jpg"
          />
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
              <App />

              <Route
                path="/"
                render={() => {
                  return <h1>Select the Sports You Play</h1>;
                }}
              />

              <Route path="/about" exact strict component={About} />

              {/*<Router>
                <div>
                  <Route exact path="/" component={Title} />
                  <Route path="/list" component={List} />
                </div>
              </Router>*/}

              {this.state.showComponent ? <List2 /> : null}
              {/*<Button color="blue" size="lg" block>
                Soccer
              </Button>
              <Button color="blue" size="lg" block>
                Football
              </Button>
              <Button color="blue" size="lg" block>
                Rugby
            </Button>*/}
            </div>
          </Router>
        );
      }
    }

    export default Test;
  });
});
