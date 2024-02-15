import Router from './router';
import HeaderView from './views/headerView';
import FooterView from './views/footerView';

export default class App {
  constructor() {
    this.router = new Router();
    this.headerView = new HeaderView();
    this.footerView = new FooterView();
  }

  init() {
    this.renderHeader();
    this.renderFooter();
    this.router.init();
  }

  renderHeader() {
    this.headerView.render();
  }

  renderFooter() {
    this.footerView.render();
  }
}

const app = new App();
app.init();
