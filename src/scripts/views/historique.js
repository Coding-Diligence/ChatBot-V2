export default function renderHistorique() {
  return `
    <div class="tab-pane fade" id="historique" role="tabpanel" aria-labelledby="historique-tab">
        <div class="card">
            <!-- Le contenu de l'historique va ici -->
            <div class="card-header d-flex justify-content-between p-3">
                <p class="fw-bold mb-0">John Doe</p>
                <p class="text-muted small mb-0">
                    <i class="far fa-clock"></i> Just now
                </p>
            </div>
            <div class="card-body">
                <p class="mb-0">Hello, Are you there?</p>
            </div>
        </div>
    </div>
  `;
}
