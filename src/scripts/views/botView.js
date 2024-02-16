export default function renderBots() {
  return `
    <div class="col-md-6 border col-lg-5 col-xl-4 mb-4 mb-md-0">
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
                <div class="card">
                    <div class="card-body">
                        <ul class="list-unstyled mb-0">
                            <li class="p-2 border-bottom" style="background-color: #eee">
                                <a href="#!" class="d-flex justify-content-between">
                                    <div class="d-flex flex-row">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp" alt="avatar" class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60">
                                        <div class="pt-1">
                                            <p class="fw-bold mb-0">John Doe</p>
                                            <p class="small text-muted">Hello, Are you there?</p>
                                        </div>
                                    </div>
                                    <div class="pt-1">
                                        <p class="small text-muted mb-1">Just now</p>
                                        <span class="badge bg-danger float-end">1</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="historique" role="tabpanel" aria-labelledby="historique-tab">
                <div class="card">
                    <!-- Le contenu de l'historique va ici -->
                </div>
            </div>
        </div>
    </div>
  `;
}
