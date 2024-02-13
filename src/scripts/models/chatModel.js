export default class ChatModel {
  constructor() {
    this.messages = [];
  }

  processMessage(message) {
    const formattedMessage = this.formatMessage(message);
    this.addMessage(formattedMessage);
    return formattedMessage;
  }

  formatMessage(message) {
    return {
      text: message,
      timestamp: new Date().toLocaleString()
    };
  }

  addMessage(message) {
    this.messages.push(message);
  }
}
