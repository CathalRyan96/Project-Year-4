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
        <Button color="blue" size="lg" block>
          Soccer
        </Button>
        <Button color="blue" size="lg" block>
          Football
        </Button>
        <Button color="blue" size="lg" block>
          Rugby
        </Button>
      </div>
    );
  }
}

export default Test;
