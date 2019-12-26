import React, { Component } from "react";
import NavInternalHelper from "../components/NavInternalHelper";

class HomePage extends Component {
  render() {
    return (
      <NavInternalHelper onClick={this.onClickHandler}>
        <h1>Home</h1>
        <a href="/repos">repos</a>
      </NavInternalHelper>
    );
  }
}

export default HomePage;
