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
import { Gaelic } from "../import/api/Gaelic";
import { Soccer } from "../import/api/Soccer";
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

    let GaelicList = Gaelic.find().fetch();

    const List5 = props => (
      <li>
        {props.name}, {props.set}
      </li>
    );

    const List6 = () => {
      return GaelicList.map(p => {
        return <List5 key={p.id} {...p} />;
      });
    };

    let SoccerList = Soccer.find().fetch();

    const List7 = props => (
      <li>
        {props.name}, {props.set}
      </li>
    );

    const List8 = () => {
      return SoccerList.map(p => {
        return <List7 key={p.id} {...p} />;
      });
    };

    const Title = () => {
      return (
        <div className="title">
          <NavLink to="/hurling">
            <Button color="blue" size="lg" block>
              Hurling Exercises
            </Button>
            <NavLink to="gaelic">
              <Button color="blue" size="lg" block>
                Gaelic Football Exercises
              </Button>
              <NavLink to="rugby">
                <Button color="blue" size="lg" block>
                  Rugby Exercises
                </Button>
                <NavLink to="soccer">
                  <Button color="blue" size="lg" block>
                    Soccer Exercises
                  </Button>
                </NavLink>
              </NavLink>
            </NavLink>
          </NavLink>
        </div>
      );
    };

    const List = () => {
      return (
        <div className="nav">
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

    ReactDOM.render(
      <div>
        <NavBar />

        <Test />
        <Router>
          <div>
            <Route exact path="/" component={Title} />
            <Route path="/hurling" component={List2} />
            <Route path="/gaelic" component={List6} />
            <Route path="/rugby" component={List4} />
            <Route path="/soccer" component={List8} />
          </div>
        </Router>
        {/*<App />*/}
      </div>,
      document.getElementById("app")
    );
  });
});
