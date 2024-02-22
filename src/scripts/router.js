import HomePage from './pages/homePage';
import ContactPage from './pages/contactPage';
import NotFoundPage from './pages/notFoundPage';

export default class Router {
  constructor() {
    this.routes = {
      '/': HomePage,
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
