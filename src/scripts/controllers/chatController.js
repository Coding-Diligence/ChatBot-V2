import ChatModel from '../models/chatModel.js';
import ChatView from '../views/chatView.js';

export default class ChatController {
  constructor(chatModel, chatView) {
    this.chatModel = chatModel;
    this.chatView = chatView;
  }

  interactWithChat(message) {
    const processedMessage = this.chatModel.processMessage(message);
    this.chatView.displayMessage(processedMessage);
  }
}
