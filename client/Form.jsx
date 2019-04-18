import React, { Component } from "react";

class Form extends React.Component {
  state = {
    name: ""
  };

  render() {
    return (
      <form>
        <input placeholder="name" value={this.state.name} />
      </form>
    );
  }
}

export default Form;
