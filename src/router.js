import Router from "ampersand-router";
import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/home";
import RepoPage from "./pages/repo";

export default Router.extend({
  routes: {
    "": "home",
    repos: "repos"
  },

  home() {
    ReactDOM.render(<HomePage />, document.querySelector("#app"));
  },
  repos() {
    ReactDOM.render(<RepoPage />, document.querySelector("#app"));
  }
});
