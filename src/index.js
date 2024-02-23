import renderBots from './scripts/views/botView';

import render from './scripts/views/render';

// import { inputView } from './scripts/views/inputView';

import './index.scss';

export default function renderTabsAndEventHandlers() {
  const tabContentContainer = document.getElementById('myTabContent');
  tabContentContainer.innerHTML = renderBots();
}

render();
