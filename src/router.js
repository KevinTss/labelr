import Router from "ampersand-router";
import qs from "qs";
import React from "react";
import ReactDOM from "react-dom";
import uuidv4 from "uuid/v4";
import xhr from "xhr";
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
    repos: "repos",
    login: "login",
    "auth/callback?:query": "authCallBack"
  },

  home() {
    this.renderPage(<HomePage />, { layout: false });
  },
  repos() {
    this.renderPage(<RepoPage />);
  },
  login() {
    const state = uuidv4();
    window.localStorage.state = state;
    window.location = `https://github.com/login/oauth/authorize?${qs.stringify({
      client_id: "5208dba34e7efb72937f",
      redirect_uri: `${window.location.origin}/auth/callback`,
      scope: "user,repo",
      state
    })}`;
  },
  logout() {
    window.localStorage.clear();
    window.location = "/";
  },
  authCallBack(query) {
    query = qs.parse(query);
    if (query.state == window.localStorage.state) {
      delete window.localStorage.state;
      xhr(
        {
          url: `http://localhost:9999/authenticate/${query.code}`, // url: `https://labelr-backend-kev.herokuapp.com/authenticate/${query.code}`,
          json: true
        },
        (error, response, body) => {
          if (error) {
            console.log("something went wrong");
          } else {
            app.me.token = body.token;
            this.redirectTo("/repos");
          }
        }
      );
    } else {
      console.log("state value is not correct");
    }
  }
});
