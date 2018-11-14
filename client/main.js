import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import "./main.html";

Meteor.startup(function _startup() {
  let title = "Test App!";
  let name = "Cathal";

  let App = () => {
    return (
      <div>
        <h2>{title}</h2>
        <p>Hello my name is {name}</p>
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("app"));
});
