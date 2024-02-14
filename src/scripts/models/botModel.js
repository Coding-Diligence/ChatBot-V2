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
      case 'action3':
        return this.action3();
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

  action3() {
    return `${this.name} is performing action 3`;
  }
}
// export default class BotModel {
//   constructor(name, actions) {
//     this.name = name;
//     this.actions = actions;
//     this.apiURL = 'https://example.com/api/';
//   }

//   processAction(action) {
//     if (this.actions.includes(action)) {
//       if (action === 'commonAction') {
//         return this.callCommonActionAPI();
//       } else {
//         return this.callSpecificActionAPI(action);
//       }
//     } else {
//       return `${this.name} does not support action ${action}`;
//     }
//   }

//   async callCommonActionAPI() {
//     try {
//       const response = await fetch(this.apiURL + 'commonAction');
//       const data = await response.json();
//       return `${this.name} performed common action: ${data.result}`;
//     } catch (error) {
//       console.error('Error calling common action API:', error);
//       return 'An error occurred while performing common action';
//     }
//   }

//   async callSpecificActionAPI(action) {
//     try {
//       const response = await fetch(this.apiURL + action);
//       const data = await response.json();
//       return `${this.name} performed specific action ${action}: ${data.result}`;
//     } catch (error) {
//       console.error(`Error calling ${action} API:`, error);
//       return `An error occurred while performing action ${action}`;
//     }
//   }
// }
