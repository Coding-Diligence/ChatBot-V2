import renderBots from './botView';
import { renderConversations } from './chatView';

const fullName = ['John', 'Emma', 'Michael', 'Sophia', 'William', 'Isabella', 'James', 'Olivia', 'Benjamin', 'Amelia', 'Ethan', 'Ava', 'Matthew', 'Charlotte', 'Daniel', 'Sophie'];

export default function render() {
  const botsSection = renderBots();
  const messages = [
    { sender: 'user', text: 'coucou', time: '12 mins ago' },
    {
      sender: fullName[0],
      text: 'Hello there!',
      time: '14 mins ago',
      profileImage: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp'
    },
    { sender: 'user', text: 'coucou', time: '12 mins ago' },
    { sender: 'user', text: 'coucou', time: '12 mins ago' },
    { sender: 'user', text: 'coucou', time: '12 mins ago' },
    { sender: 'user', text: 'coucou', time: '12 mins ago' },
    { sender: 'user', text: 'coucou', time: '12 mins ago' },
    { sender: 'user', text: 'coucou', time: '12 mins ago' },
    { sender: 'user', text: 'coucou', time: '12 mins ago' },
    { sender: 'user', text: 'coucou', time: '12 mins ago' },
    { sender: 'user', text: 'coucou', time: '12 mins ago' }
  ];
  const conversationsSection = renderConversations(messages);

  document.getElementById('bots-section').innerHTML = botsSection;
  document.getElementById('conversations-section').innerHTML = conversationsSection;
}

render();
