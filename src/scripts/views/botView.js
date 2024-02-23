function generateRandomName() {
  const firstNames = ['John', 'Emma', 'Michael', 'Sophia', 'William', 'Isabella', 'James', 'Olivia', 'Benjamin', 'Amelia', 'Ethan', 'Ava', 'Matthew', 'Charlotte', 'Daniel', 'Sophie'];
  const lastNames = ['Smith', 'Johnson', 'Brown', 'Martinez', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Davis', 'Rodriguez', 'Wilson', 'Garcia', 'Lopez', 'Lee'];

  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirstName} ${randomLastName}`;
}

function generateBotCards(count) {
  let cardsHTML = '';
  for (let i = 0; i < count; i += 1) {
    const fullName = generateRandomName();
    const randomMessage = Math.random() < 0.5 ? 'Hello, are you there?' : 'How can I assist you today?';

    cardsHTML += `
      <div class="d-flex flex-column mb-2">
        <div class="card bot-card">
          <div class="card-body">
            <ul class="list-unstyled mb-0">
              <li class="p-2 border-bottom" style="background-color: #eee">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs" class="d-flex justify-content-between">
                  <div class="d-flex flex-row">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-${i + 1}.webp" alt="avatar" class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60">
                    <div class="pt-1">
                      <p class="fw-bold mb-0">${fullName}</p>
                      <p class="small text-muted">${randomMessage}</p>
                    </div>
                  </div>  
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
  return cardsHTML;
}

function renderBots() {
  const html = `
    <h3> Bots</h3>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="bots" role="tabpanel" aria-labelledby="bots-tab">
        <div class="row" id="bots-container">
          ${generateBotCards(3)}
        </div>
      </div>
    </div>
  `;

  return html;
}

export default renderBots;
