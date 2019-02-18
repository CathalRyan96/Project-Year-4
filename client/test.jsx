import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Test extends Component {
  render() {
    return (
      <div>
        <h1>Select Sports That You Play!</h1>
        <Button variant="primary">Primary</Button>
        <button>Soccer</button>
        <button>Rugby</button>
        <button>Gaelic Football</button>
      </div>
    );
  }
}

export default Test;
