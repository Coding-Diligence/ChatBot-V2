const people = [
  { fullName: 'John Smith' },
  { fullName: 'Emma Johnson' },
  { fullName: 'Michael Brown' },
  { fullName: 'Sophia Martinez' },
  { fullName: 'William Anderson' },
  { fullName: 'Isabella Thomas' },
  { fullName: 'James Jackson' },
  { fullName: 'Olivia White' },
  { fullName: 'Benjamin Harris' },
  { fullName: 'Amelia Martin' },
  { fullName: 'Ethan Davis' },
  { fullName: 'Ava Rodriguez' },
  { fullName: 'Matthew Wilson' },
  { fullName: 'Charlotte Garcia' },
  { fullName: 'Daniel Lopez' },
  { fullName: 'Sophie Lee' }
];

function generateBotCards(count) {
  let cardsHTML = '';
  for (let i = 0; i < count; i += 1) {
    cardsHTML += `
      <div class="d-flex flex-column mb-2">
        <div class="card bot-card">
          <div class="card-body">
            <ul class="list-unstyled mb-0">
              <li class="p-2 border-bottom" style="background-color: #eee">
                <a href="#!" class="d-flex justify-content-between">
                  <div class="d-flex flex-row">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-${i + 1}.webp" alt="avatar" class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60">
                    <div class="pt-1">
                      <p class="fw-bold mb-0">${people[i].fullName}</p>
                      <p class="small text-muted">Hello, Are you there?</p>
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

export default function renderBots() {
  const html = `
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="bots-tab" data-bs-toggle="tab" data-bs-target="#bots" type="button" role="tab" aria-controls="bots" aria-selected="true">Bots</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="historique-tab" data-bs-toggle="tab" data-bs-target="#historique" type="button" role="tab" aria-controls="historique" aria-selected="false">Historique</button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="bots" role="tabpanel" aria-labelledby="bots-tab">
        <div class="row" id="bots-container">
          ${generateBotCards(3)}
        </div>
      </div>
      <div class="tab-pane fade" id="historique" role="tabpanel" aria-labelledby="historique-tab">
        <div class="card">
          <!-- Le contenu de l'historique va ici -->
        </div>
      </div>
    </div>
  `;

  return html;
}
