import React from "react";
import ReactDOM from "react-dom";
import { Button, Table } from "react-bootstrap";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import "./Button.css";
import "./main.css";
import Form from "./Form";

import "bootstrap/dist/css/bootstrap.min.css";

import "./main.html";
import { Tracker } from "meteor/tracker";
import { Exercises } from "../import/api/exercises";
import { Rugby } from "../import/api/Rugby";
import { Gaelic } from "../import/api/Gaelic";
import { Soccer } from "../import/api/Soccer";
import Test from "./test";
import NavBar from "./navbar";
import Welcome from "./Welcome";

console.log(Exercises.find().fetch());

<link type="text/css" href="./main.css" />;

const buttonStyle = {
  padding: "20px"
};

Meteor.startup(function _startup() {
  Tracker.autorun(function _Ready() {
    let title = "Exercises";
    let name = "Cathal";
    let ExerciseList = Exercises.find().fetch();

    const AddUser = () => {
      return (
        <body
          style={{
            textAlign: "center"
          }}
        >
          <form
            style={{
              border: "1px",
              padding: "20px 20px",
              background: "grey",
              display: "inline-block"
            }}
          >
            <input type="text" />
            <Button
              style={{
                padding: "20px 12px"
              }}
            >
              Add User
            </Button>
          </form>
        </body>
      );
    };

    const List1 = props => (
      <div
        style={{
          background: "cyan",
          textAlign: "center",
          fontFamily: "Helvetica",
          fontSize: "25px",
          margin: "20px",
          border: "5px solid"
        }}
      >
        <li>
          {props.name}, {props.set}
        </li>
        <NavLink to="/">
          <Button> Home</Button>
        </NavLink>
      </div>
    );

    const List2 = () => {
      return ExerciseList.map(p => {
        return <List1 key={p.id} {...p} />;
      });
    };

    let RugbyList = Rugby.find().fetch();

    const List3 = props => (
      <div
        style={{
          background: "pink",
          textAlign: "center",
          fontFamily: "Helvetica",
          fontSize: "25px",
          margin: "20px",
          border: "5px solid"
        }}
      >
        <NavLink to="/">
          <Button> Home</Button>
        </NavLink>
        <li>
          {props.name}, {props.set}
        </li>
      </div>
    );

    const List4 = () => {
      return RugbyList.map(p => {
        return <List3 key={p.id} {...p} />;
      });
    };

    let GaelicList = Gaelic.find().fetch();

    const List5 = props => (
      <div
        style={{
          background: "pink",
          textAlign: "center",
          fontFamily: "Helvetica",
          fontSize: "25px",
          margin: "20px",
          border: "5px solid"
        }}
      >
        <NavLink to="/">
          <Button> Home</Button>
        </NavLink>
        <li>
          {props.name}, {props.set}
        </li>
      </div>
    );

    const List6 = () => {
      return GaelicList.map(p => {
        return <List5 key={p.id} {...p} />;
      });
    };

    let SoccerList = Soccer.find().fetch();

    const List7 = props => (
      <div
        style={{
          background: "pink",
          textAlign: "center",
          fontFamily: "Helvetica",
          fontSize: "25px",
          margin: "20px",
          border: "5px solid"
        }}
      >
        <NavLink to="/">
          <Button> Home</Button>
        </NavLink>
        <li>
          {props.name}, {props.set}
        </li>
      </div>
    );

    const List8 = () => {
      return SoccerList.map(p => {
        return <List7 key={p.id} {...p} />;
      });
    };

    const Title = () => {
      return (
        <div className="title">
          <div style={{ padding: "40px 20px" }}>
            <NavLink to="/hurling">
              <Button variant="primary" size="lg" block>
                Hurling Exercises
              </Button>
              <div style={{ padding: "40px 20px" }}>
                <NavLink to="gaelic">
                  <Button color="blue" size="lg" block>
                    Gaelic Football Exercises
                  </Button>
                  <div style={{ padding: "40px 20px" }}>
                    <NavLink to="rugby">
                      <Button color="blue" size="lg" block>
                        Rugby Exercises
                      </Button>
                      <div style={{ padding: "40px" }}>
                        <NavLink to="soccer">
                          <Button color="blue" size="lg" block>
                            Soccer Exercises
                          </Button>
                        </NavLink>
                      </div>
                    </NavLink>
                  </div>
                </NavLink>
              </div>
            </NavLink>
          </div>
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

    onSubmit = fields => {
      console.log("coming from main.js: ", fields);
    };

    ReactDOM.render(
      <div>
        <NavBar />
        {/*<Welcome />*/}
        <Form onSubmit={fields => this.onSubmit(fields)} />
        {/*<AddUser />*/}

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
