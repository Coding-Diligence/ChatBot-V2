import renderBots from './botView';
import renderConversations from './chatView';

export default function render() {
  const botsSection = renderBots();
  const conversationsSection = renderConversations();

  document.getElementById('bots-section').innerHTML = botsSection;
  document.getElementById('conversations-section').innerHTML = conversationsSection;
}
