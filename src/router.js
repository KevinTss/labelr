import Router from "ampersand-router";
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/home";
import RepoPage from "./pages/repo";

export default Router.extend({
  renderPage(page, options = { layout: true }) {
    if (options.layout) {
      page = <Layout>{page}</Layout>;
    }
    ReactDOM.render(page, document.querySelector("#app"));
  },

  routes: {
    "": "home",
    repos: "repos"
  },

  home() {
    this.renderPage(<HomePage />, { layout: false });
  },
  repos() {
    this.renderPage(<RepoPage />);
  }
});
