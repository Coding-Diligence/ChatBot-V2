import renderBots from './botView';
import { renderConversations } from './chatView';
import messageHandler from './messageHandler';

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
    { sender: 'user', text: 'montre-moi les photos de chatons migons', time: '12 mins ago' },
    { sender: 'user', text: 'coucou', time: '12 mins ago' },
    { sender: 'user', text: 'coucou', time: '12 mins ago' },
    { sender: 'user', text: 'coucou', time: '12 mins ago' },
    { sender: 'user', text: 'coucou', time: '12 mins ago' },
    { sender: 'user', text: 'coucou', time: '12 mins ago' },
    { sender: 'user', text: 'coucou', time: '12 mins ago' },
    { sender: 'user', text: 'coucou ça va là bas ?', time: '12 mins ago' }
  ];
  const conversationsSection = renderConversations(messages);

  document.getElementById('bots-section').innerHTML = botsSection;
  document.getElementById('conversations-section').innerHTML = conversationsSection;
}

document.addEventListener('DOMContentLoaded', () => {
  const messageInput = document.querySelector('.messageInput');
  const btn = document.querySelector('.button-addon2');

  btn.addEventListener('click', () => {
    const message = messageInput.value;
    messageHandler(message);
    // Réinitialiser le champ de saisie une fois le message envoyé
    messageInput.value = '';
  });

  render(); // Appeler la fonction render après que le DOM est chargé
});
