export default class BotModel {
  constructor(name, actions) {
    this.name = name;
    this.actions = actions;
  }

  processAction(action) {
    switch (action) {
      case 'action1':
        return this.action1();
      case 'action2':
        return this.action2();
      default:
        return `No action found for ${action}`;
    }
  }

  action1() {
    return `${this.name} is performing action 1`;
  }

  action2() {
    return `${this.name} is performing action 2`;
  }
}
