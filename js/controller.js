class ChatController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }
  
    sendMessage(message) {
      this.model.addMessage(message);
      this.view.displayMessage(message);
    }
  }
  
  const model = new ChatModel();
  const view = new ChatView();
  const controller = new ChatController(model, view);
  
  controller.sendMessage("Hello");
  