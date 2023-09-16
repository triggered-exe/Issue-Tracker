// Add this JavaScript code to a separate .js file and include it in your HTML

document.addEventListener('DOMContentLoaded', function() {
    const openModalButton = document.getElementById('open-create-project-modal');
    const closeModalButton = document.getElementById('close-create-project-modal');
    const modal = document.getElementById('create-project-modal');

    openModalButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            console.log('clicked outside');
            modal.style.display = 'none';
        }
    });
});

