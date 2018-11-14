import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import "./main.html";

Meteor.startup(function _startup() {
  let title = "Test App!";
  let name = "Cathal";

  let html = (
    <div>
      <h2>{title}</h2>
      <p>My name is {name}</p>
      <p>test</p>
    </div>
  );

  ReactDOM.render(html, document.getElementById("app"));
});
