import MessageModel from '../models/messageModel';
import MessageView from '../views/messageView';

export default class MessageController {
  constructor(messageModel, messageView) {
    this.messageModel = messageModel;
    this.messageView = messageView;
    this.setupEventListeners();
  }

  setupEventListeners() {
    document.getElementById('message-input').addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        this.sendMessage(event.target.value);
        event.target.value = '';
      }
    });

    document.getElementById('send-button').addEventListener('click', () => {
      const messageInput = document.getElementById('message-input');
      this.sendMessage(messageInput.value);
      messageInput.value = '';
    });
  }

  sendMessage(messageText) {
    const newMessage = this.messageModel.createMessage(messageText);
    this.messageView.displayMessage(newMessage);
    this.saveMessageToLocalStorage(newMessage);
  }

  saveMessageToLocalStorage(message) {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
  }

  loadMessagesFromLocalStorage() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach((message) => this.messageView.displayMessage(message));
  }
}
