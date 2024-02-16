import renderBots from './botView';
import renderHistorique from './historique';
import renderConversations from './chatView';

export default function render() {
  const botsSection = renderBots();
  const historiqueSection = renderHistorique();
  const conversationsSection = renderConversations();

  document.getElementById('bots-section').innerHTML = botsSection;
  document.getElementById('historique-section').innerHTML = historiqueSection;
  document.getElementById('conversations-section').innerHTML = conversationsSection;
}
