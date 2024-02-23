import Router from './scripts/router';
import './scripts/views/botView';
import render from './scripts/views/render';

import './index.scss';

const routes = [{
  url: '/',
  controller: render
}];

new Router(routes);
