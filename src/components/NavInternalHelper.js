import app from "ampersand-app";
import localLinks from "local-links";
import React, { Component } from "react";

class NavInternalHelper extends Component {
  onClickHandler(event) {
    const pathname = localLinks.getLocalPathname(event);
    if (pathname) {
      event.preventDefault();
      app.router.history.navigate(pathname);
    }
  }

  render() {
    return (
      <div {...this.props} onClick={this.onClickHandler}>
        {this.props.children}
      </div>
    );
  }
}

export default NavInternalHelper;
