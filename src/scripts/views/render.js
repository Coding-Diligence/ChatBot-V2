import renderBots from './botView';
import { renderConversations } from './chatView';

export default function render() {
  const botsSection = renderBots();
  const messages = [
    { sender: 'user', text: 'coucou', time: '12 mins ago' },
    { sender: 'bot', text: 'Hello there!', time: '14 mins ago' },
    { sender: 'user', text: 'coucouu', time: '12 mins ago' },
    { sender: 'user', text: 'coucouu', time: '12 mins ago' },
    { sender: 'bot', text: 'Hello there!', time: '14 mins ago' }
  ];
  const conversationsSection = renderConversations(messages);

  document.getElementById('bots-section').innerHTML = botsSection;
  document.getElementById('conversations-section').innerHTML = conversationsSection;
}

render();
