export default class MessageModel {
  constructor() {
    this.messages = [];
    this.maxMessageCount = 100; 
  }

  createMessage(text, sender = 'User') {
    const timestamp = new Date().toLocaleString();
    const message = { text, timestamp, sender };
    this.addMessage(message);
    return message;
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
