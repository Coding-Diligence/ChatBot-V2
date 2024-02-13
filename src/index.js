// Controllers
import BotController from './scripts/controllers/botController.js';
import ChatController from './scripts/controllers/chatController.js';
import MessageController from './scripts/controllers/messageController.js';
// Models
import BotModel from './scripts/models/botModel.js';
import ChatModel from './scripts/models/chatModel.js';
import MessageModel from './scripts/models/messageModel.js';
// Views
import AppView from './scripts/views/appView.js';
import BotView from './scripts/views/botView.js';
import MessageView from './scripts/views/messageView.js';

// initialize Model
const botModel = new BotModel();
const chatModel = new ChatModel();
const messageModel = new MessageModel();
// initialize View
const appView = new AppView();
const botView = new BotView();
const messageView = new MessageView();
// initialize Controller
const botController = new BotController();
const chatController = new ChatController();
const messageController = new MessageController();

// Set up event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Add event listeners for sending messages
  appView.setupMessageInput(messageController.sendMessage.bind(messageController));
  // Add event listeners for handling bot interactions
  appView.setupBotInteraction(botController.interactWithBot.bind(botController));
  // Add event listeners for handling chat interactions
  appView.setupChatInteraction(chatController.interactWithChat.bind(chatController));
});
