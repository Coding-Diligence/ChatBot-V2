class ChatView {
    constructor() {
      this.chatList = document.getElementById('chat-list');
    }
  
    displayMessage(message) {
      const li = document.createElement('li');
      li.textContent = message;
      this.chatList.appendChild(li);
    }
  }
  