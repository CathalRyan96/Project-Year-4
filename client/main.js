import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import "./main.html";

const LIST = [
  { id: 1, name: "Tom", score: 10 }, //<li>Tom, (10)</li>
  { id: 2, name: "Joe", score: 20 },
  { id: 3, name: "Jim", score: 30 },
  { id: 1, name: "Bob", score: 40 }
];

Meteor.startup(function _startup() {
  let title = "Test App!";
  let name = "Cathal";

  const List1 = props => (
    <li>
      {props.name}, {props.score}
    </li>
  );

  const List2 = () => {
    return LIST.map(p => {
      return <List1 key={p.id} {...p} />;
    });
  };

  let App = () => {
    return (
      <div>
        <h2>{title}</h2>
        <p>Hello my name is {name}</p>

        <ul>
          <List2 />
        </ul>
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("app"));
});
