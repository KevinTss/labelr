import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style/index.styl";

class Hello extends Component {
  render() {
    return <div>Hello guys</div>;
  }
}

ReactDOM.render(<Hello />, document.querySelector("#app"));
