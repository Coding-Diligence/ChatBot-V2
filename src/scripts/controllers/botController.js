import BotModel from '../models/botModel';
import  '../views/botView';

export default class BotController {
  constructor(botModel, botView) {
    this.botModel = botModel;
    this.botView = botView;

    this.addDefaultBots();
  }

  addDefaultBots() {
    const defaultsBotsData = [
      { name: 'Bot 1', actions: ['action1', 'action2', 'action3'] },
      { name: 'Bot 2', actions: ['action1', 'action2', 'action3'] },
      { name: 'Bot 3', actions: ['action1', 'action2', 'action3'] }
    ];

    defaultsBotsData.forEach((botData) => {
      const newBot = new BotModel(botData.name, botData.actions);
      this.botModel.addBot(newBot);
    });
  }

  interactionWithBot(botName, action) {
    const bot = this.botModel.getBotByName(botName);
    if (bot) {
      const response = bot.processAction(action);
      this.botView.displayResponse(botName, response);
    } else {
      this.botView.displayError(`Bot "${botName}" not found.`);
    }
  }
}
