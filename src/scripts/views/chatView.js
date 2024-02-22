export default function renderConversations() {
  return `
    <div class="col-md-6 col-lg-7 col-xl-8 chat_parent">
          <ul class="list-unstyled bot_msg">
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

                <ul class="list-unstyled user_msg">
              <li class="d-flex justify-content-between mb-4">
                  
                  <div class="card">
                      <div class="card-header d-flex justify-content-between p-3">
                          <p class="fw-bold mb-0">Me</p>
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

                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar" class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60">
              </li>
          </ul>
    </div>

      <div class="btn_parent">
          
        <div class="input-group sticky-md-bottom mb-3">

        <!-- la zone d'écriture  -->
        
            <input type="text" class="form-control" placeholder="Type your text" aria-label="Type your text" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Envoyer</button>
          
        </div>
      </div>
    `;
}
