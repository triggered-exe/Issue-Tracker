
// modal.js

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('createIssueModal');
    const modalBtn = document.getElementById('openCreateIssueModal');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Show the modal
    modalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Hide the modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal if user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
