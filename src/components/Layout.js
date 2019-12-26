import React, { Component } from "react";
import NavInternalHelper from "../components/NavInternalHelper";

class Layout extends Component {
  render() {
    return (
      <NavInternalHelper className="container">
        <nav className="menu">
          <a href="/">home</a>
          <a href="/repos">repos</a>
        </nav>
        {this.props.children}
      </NavInternalHelper>
    );
  }
}

export default Layout;
