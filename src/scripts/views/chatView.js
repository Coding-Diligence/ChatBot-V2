import messageHandler from './messageHandler';

export function renderChatUser(message, time, profileImage = 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-7.webp') {
  return `
    <ul class="list-unstyled user_msg">
      <li class="d-flex justify-content-between mb-4">
        <div class="card">
          <div class="card-header d-flex justify-content-between p-3">
            <p class="fw-bold mb-0 m-1">Me</p>
            <p class="text-muted small mb-0">
              <i class="far fa-clock"></i> ${time}
            </p>
          </div>
          <div class="card-body">
            <p class="mb-0">
              ${message}
            </p>
          </div>
        </div>
        <img src="${profileImage}" alt="avatar" 
             class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60">
      </li>
    </ul>
  `;
}

export function renderBotMessage(sender, message, time, profileImage = 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp') {
  return (`
    <ul class="list-unstyled bot_msg">
      <li class="d-flex justify-content-between mb-4">
        <img src="${profileImage}" alt="avatar" 
             class="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60">
        <div class="card">
          <div class="card-header d-flex justify-content-between p-3">
            <p class="fw-bold mb-0">${sender}</p>
            <p class="text-muted small mb-0">
              <i class="far fa-clock"></i> ${time}
            </p>
          </div>
          <div class="card-body">
            <p class="mb-0">
              ${message}
            </p>
          </div>
        </div>
      </li>
    </ul>
  `);
}

export function renderConversations(messages) {
  let conversationHTML = '';
  messages.forEach((message) => {
    if (message.sender === 'user') {
      conversationHTML += renderChatUser(
        message.text,
        message.time,
        message.profileImage
      );
    } else {
      conversationHTML += renderBotMessage(
        message.sender,
        message.text,
        message.time,
        message.profileImage
      );
    }
  });

  return (`
    <div class="chat_parent">
      ${conversationHTML}
    </div>
    <div class="btn_parent">
      <div class="input-group sticky-md-bottom mb-3">
        <input type="text" id="message" class="form-control messageInput" placeholder="Type your text" aria-label="Type your text" aria-describedby="button-addon2">
        ${messageHandler()};
      </div>
    </div>
  `);
}
function sendMessage() {
  const message = userInput.value.trim();
  if (message !== '') {
    displayMessage('User', message);
    userInput.value = '';
    simulateBotResponse(message);
  }
}