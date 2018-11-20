import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import "./main.html";
import { Tracker } from "meteor/tracker";

import { Exercises } from "../import/api/exercises";
console.log(Exercises.find().fetch());

const LIST = [
  { id: 1, name: "Press-Ups", set: "5 sets of 5" },
  { id: 2, name: "Press-Ups", set: "5 sets of 5" },
  { id: 3, name: "Press-Ups", set: "5 sets of 5" },
  { id: 4, name: "Press-Ups", set: "5 sets of 5" },
  { id: 5, name: "Press-Ups", set: "5 sets of 5" }
];

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
          <h2>{title}</h2>

          <ul>
            <List2 />
          </ul>
        </div>
      );
    };

    ReactDOM.render(<App />, document.getElementById("app"));
  });
});
