import React, { Component } from "react";

class Form extends React.Component {
  state = {
    name: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form>
        <input
          placeholder="name"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />

        <button onClick={e => this.onSubmit(e)}>Add</button>
      </form>
    );
  }
}

export default Form;
