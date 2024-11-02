function showForm() {
    // Hide the challenge selection modal
    var selectionModal = document.getElementById("challenge-selection");
    var formModal = document.getElementById("challenge-form");

    // Check if the selection modal is currently visible
    if (!selectionModal.classList.contains("hidden")) {
        selectionModal.classList.add("hidden"); // Hide selection modal
        formModal.classList.remove("hidden");   // Show form modal
    } else {
        console.error("Selection modal is already hidden.");
    }
}
