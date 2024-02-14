import HomePage from './pages/homePage.js';
import AboutPage from './pages/aboutPage.js';
import ContactPage from './pages/contactPage.js';
import NotFoundPage from './pages/notFoundPage.js';

export default class Router {
  constructor() {
    this.routes = {
      '/': HomePage,
      '/about': AboutPage,
      '/contact': ContactPage
    };
  }

  init() {
    this.renderPage();
    window.addEventListener('popstate', () => this.renderPage());
  }

  renderPage() {
    const path = window.location.pathname;
    const Page = this.routes[path] || NotFoundPage;
    const params = this.parseParams(path);
    const pageInstance = new Page(params);
    pageInstance.render();
  }

  parseParams(path) {
    const params = {};
    const queryString = window.location.search;
    if (queryString) {
      const searchParams = new URLSearchParams(queryString);
      for (const [key, value] of searchParams.entries()) {
        params[key] = value;
      }
    }
    return params;
  }

  navigateTo(path) {
    window.history.pushState({}, '', path);
    this.renderPage();
  }
}
