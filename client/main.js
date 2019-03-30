import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

import "./main.html";
import { Tracker } from "meteor/tracker";
import { Exercises } from "../import/api/exercises";
import { Rugby } from "../import/api/Rugby";
import Test from "./test";
import NavBar from "./navbar";

console.log(Exercises.find().fetch());

Meteor.startup(function _startup() {
  Tracker.autorun(function _Ready() {
    let title = "Exercises";
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

    Meteor.startup(function _startup() {
      Tracker.autorun(function _Ready() {
        let RugbyList = Rugby.find().fetch();

        const List3 = props => (
          <li>
            {props.name}, {props.set}
          </li>
        );

        const List4 = () => {
          return RugbyList.map(p => {
            return <List3 key={p.id} {...p} />;
          });
        };
      });
    });

    const Title = () => {
      return (
        <div className="title">
          <NavLink to="/list">
            <Button color="blue" size="lg" block>
              Hurling Exercises
            </Button>
            <NavLink to="list2">
              <Button color="blue" size="lg" block>
                Gaelic Football Exercises
              </Button>

              <Button color="blue" size="lg" block>
                Rugby Exercises
              </Button>
              <Button color="blue" size="lg" block>
                Soccer Exercises
              </Button>
            </NavLink>
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
            <button>Back Home</button>
          </NavLink>
        </div>
      );
    };

    const App = () => {
      return (
        <div>
          {/*<link rel="stylesheet" href="main.css" />*/}

          <h2>{title}</h2>

          <ul>
            <List2 />
          </ul>
        </div>
      );
    };

    const Testing = () => {
      return (
        <button className="btn" onClick={this.displaySports}>
          View Sports
        </button>
      );
    };

    ReactDOM.render(
      <div>
        <NavBar />

        <Test />
        <Router>
          <div>
            <Route exact path="/" component={Title} />
            <Route path="/list" component={List2} />
            <Route path="/list2" component={List4} />
          </div>
        </Router>
        {/*<App />*/}
      </div>,
      document.getElementById("app")
    );
  });
});
