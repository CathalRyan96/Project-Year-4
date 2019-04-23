import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default class Form extends React.Component {
  state = {
    name: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    //this.props.onSubmit(this.state);
    this.setState({
      name: ""
    });
    this.props.onChange({
      name: ""
    });
  };

  render() {
    return (
      <form>
        <input
          name="name"
          placeholder="Name..."
          value={this.state.name}
          onChange={e => this.change(e)}
        />
        <br />

        <Button onClick={e => this.onSubmit(e)}>Add</Button>
        <br />
      </form>
    );
  }
}
