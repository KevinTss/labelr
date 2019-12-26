import Router from "./router";
import "./style/index.styl";

window.app = {
  init() {
    (this.router = new Router()), this.router.history.start();
  }
};

window.app.init();
