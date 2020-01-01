import React, { Component } from "react";
import NavInternalHelper from "../components/NavInternalHelper";

class HomePage extends Component {
  render() {
    return (
      <NavInternalHelper onClick={this.onClickHandler}>
        <h1>Home</h1>
        <a href="/login">Login with Github</a>
      </NavInternalHelper>
    );
  }
}

export default HomePage;
