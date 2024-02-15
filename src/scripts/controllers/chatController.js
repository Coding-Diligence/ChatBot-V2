import '../models/chatModel';
import '../views/chatView';

export default class ChatController {
  constructor(chatModel, chatView) {
    this.chatModel = chatModel;
    this.chatView = chatView;
    this.setupEventListeners();
    this.loadInitialMessages();
  }

  setupEventListeners() {
    const messageInput = document.getElementById('message-input');

    messageInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const inputValue = messageInput.value;
        this.interactWithChat(inputValue);
        messageInput.value = '';
        event.preventDefault();
      }
    });

    document.getElementById('send-button').addEventListener('click', () => {
      const inputValue = messageInput.value;
      this.interactWithChat(inputValue);
      messageInput.value = '';
    });
  }

  interactWithChat(message) {
    const processedMessage = this.chatModel.processMessage(message);
    this.chatView.displayMessage(processedMessage);
    this.saveMessageToLocalStorage(processedMessage);
  }

  saveMessageToLocalStorage(message) {
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.push(message);
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }

  loadInitialMessages() {
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.forEach((message) => this.chatView.displayMessage(message));
  }
}
