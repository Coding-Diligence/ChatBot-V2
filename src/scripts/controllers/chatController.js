import ChatModel from '../models/chatModel';
import { renderConversations } from '../views/chatView';

export default class ChatController {
  constructor() {
    this.chatModel = new ChatModel();
    this.setupEventListeners();
    this.loadInitialMessages();
  }

  setupEventListeners() {
    document.getElementById('send-button').addEventListener('click', () => {
      this.handleSendMessage();
    });

    document.getElementById('form-control').addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        this.handleSendMessage();
      }
    });
  }

  handleSendMessage() {
    const messageInput = document.getElementById('form-control');
    const inputValue = messageInput.value.trim();
    if (inputValue !== '') {
      this.interactWithChat(inputValue);
      messageInput.value = ''; // Clear input field after sending message
    }
  }

  interactWithChat(message) {
    const processedMessage = this.chatModel.processMessage(message, 'user');
    this.updateView(processedMessage);
    this.saveMessageToLocalStorage();
  }

  updateView(message) {
    const conversationSection = document.getElementById('conversations-section');
    const conversationHTML = renderConversations([message]);
    conversationSection.innerHTML += conversationHTML;
    this.scrollChatToBottom();
  }

  scrollChatToBottom() {
    const conversationSection = document.getElementById('conversations-section');
    conversationSection.scrollTop = conversationSection.scrollHeight;
  }

  saveMessageToLocalStorage() {
    this.chatModel.saveMessagesToLocalStorage();
  }

  loadInitialMessages() {
    this.chatModel.loadMessagesFromLocalStorage();
    const messages = this.chatModel.messages;
    const conversationSection = document.getElementById('conversations-section');
    const conversationHTML = renderConversations(messages);
    conversationSection.innerHTML = conversationHTML;
    this.scrollChatToBottom();
  }
}
