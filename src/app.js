import app from "ampersand-app";
import Router from "./router";
import "./style/index.styl";

// Epose ass to window
window.app = app;

app.extend({
  init() {
    (this.router = new Router()), this.router.history.start();
  }
});

app.init();
