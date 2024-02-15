import ChatModel from '../models/chatModel';
import ChatView from '../views/chatView';

export default class ChatController {
  constructor(chatModel, chatView) {
    this.chatModel = chatModel;
    this.chatView = chatView;
    this.setupEventListeners();
    this.loadInitialMessages();
  }

  setupEventListeners() {
    document.getElementById('message-input').addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        this.interactWithChat(event.target.value);
        event.target.value = '';
      }
    });

    document.getElementById('send-button').addEventListener('click', () => {
      const messageInput = document.getElementById('message-input');
      this.interactWithChat(messageInput.value);
      messageInput.value = '';
    });
  }

  interactWithChat(message) {
    const processedMessage = this.chatModel.processMessage(message);
    this.chatView.displayMessage(processedMessage);
    this.saveMessageToLocalStorage(processedMessage);
  }

  saveMessageToLocalStorage(message) {
    let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.push(message);
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }

  loadInitialMessages() {
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.forEach((message) => this.chatView.displayMessage(message));
  }
}
