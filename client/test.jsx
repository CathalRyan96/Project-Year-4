import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Test extends Component {
  render() {
    return (
      <div>
        <h1>Select Sports That You Play!</h1>
        <Button color="blue" size="lg" block>
          Hurling
        </Button>
        <Button variant="primary">Soccer</Button>
        <Button variant="primary">Rugby</Button>
        <Button variant="primary">Gaelic Football</Button>
      </div>
    );
  }
}

export default Test;
