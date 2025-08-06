document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('signUpModal');
    const closeModal = document.getElementById('closeModal');
    const closeDialog = document.getElementById('closeDialog');
    const signUpForm = document.getElementById('signUpForm');

    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModalFunc() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    // ✅ Attach listener to *all* buttons with this class (even ones loaded later)
    document.addEventListener('click', function(event) {
        if (event.target.closest('.open-signup-modal')) {
            openModal();
        }
    });

    if (closeModal) closeModal.addEventListener('click', closeModalFunc);
    if (closeDialog) closeDialog.addEventListener('click', closeModalFunc);

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModalFunc();
        }
    });

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for signing up!');
        closeModalFunc();
        signUpForm.reset();
    });
});
