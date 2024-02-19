export default function renderConversations() {
  return `
      <div class="col-md-6 col-lg-7 col-xl-8">
          <ul class="list-unstyled">
              <li class="d-flex justify-content-between mb-4">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar" class="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60">
                  <div class="card">
                      <div class="card-header d-flex justify-content-between p-3">
                          <p class="fw-bold mb-0">Brad Pitt</p>
                          <p class="text-muted small mb-0">
                              <i class="far fa-clock"></i> 12 mins ago
                          </p>
                      </div>
                      <div class="card-body">
                          <p class="mb-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </p>
                      </div>
                  </div>
              </li>
          </ul>
        <div class="input-group sticky-md-bottom mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Envoyer</button>
        </div>
      </div>
    `;
}
