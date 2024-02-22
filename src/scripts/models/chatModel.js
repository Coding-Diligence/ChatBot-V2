export default class ChatModel {
  constructor() {
    this.messages = [];
    this.maxMessageCount = 50;
  }

  processMessage(message, sender) {
    const formattedMessage = this.formatMessage(message, sender);
    this.addMessage(formattedMessage);
    return formattedMessage;
  }

  formatMessage(message, sender) {
    const timestamp = new Date().toLocaleString();
    return {
      text: message,
      timestamp,
      sender
    };
  }

  addMessage(message) {
    if (this.messages.length >= this.maxMessageCount) {
      this.messages.shift();
    }
    this.messages.push(message);
  }

  loadMessagesFromLocalStorage() {
    const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    this.messages = storedMessages.slice(-this.maxMessageCount);
  }

  saveMessagesToLocalStorage() {
    localStorage.setItem('chatMessages', JSON.stringify(this.messages));
  }
}
