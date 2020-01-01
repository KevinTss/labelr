import React, { Component } from "react";
import NavInternalHelper from "../components/NavInternalHelper";

class Layout extends Component {
  render() {
    return (
      <NavInternalHelper className="container">
        <div>
          <nav className="menu">
            <a href="/">home</a>
            <a href="/repos">repos</a>
          </nav>
          <a href="/logout">Logout</a>
        </div>
        {this.props.children}
      </NavInternalHelper>
    );
  }
}

export default Layout;
