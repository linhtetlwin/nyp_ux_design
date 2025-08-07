// This is for 'Join Us' buttton
// when clicked, the sign up modal appears

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

    
    function showError(input, message) {
        input.classList.add('invalid'); // Adds red border
        const error = input.parentElement.querySelector('.error-message');
        if (error) {
            error.textContent = message; // Show error message below
        }
}

        signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;

        // Clear previous errors
        const inputs = signUpForm.querySelectorAll('input');
        inputs.forEach(input => {
            input.classList.remove('invalid');
            const error = input.parentElement.querySelector('.error-message');
            if (error) error.textContent = '';
        });

        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required');
            isValid = false;
        }

        const admissionInput = document.getElementById('admission');
        if (admissionInput.value.trim().length !== 7) {
            showError(admissionInput, 'Admission number must be 7 characters');
            isValid = false;
        }

        const phoneInput = document.getElementById('phone');
        if (phoneInput.value.trim().length !== 8) {
            showError(phoneInput, 'Phone number must be 8 digits');
            isValid = false;
        }

        const emergencyName = document.getElementById('emergencyName');
        if (emergencyName.value.trim() === '') {
            showError(emergencyName, 'Emergency contact name is required');
            isValid = false;
        }

        const emergencyNumber = document.getElementById('emergencyNumber');
        if (phoneInput.value.trim().length !== 8) {
            showError(emergencyNumber, 'Emergency contact number must be 8 digits');
            isValid = false;
        }

        if (isValid) {
            alert('Thank you for signing up!');
            closeModalFunc();
            signUpForm.reset();
        }
    });

        signUpForm.addEventListener('submit', function(event) {
        if (isValid === true) {
            event.preventDefault();
            alert('Thank you for signing up!');
            closeModalFunc();
            signUpForm.reset();
        }
        else {
            alert('Please fix the errors before submitting.');
        }
    });

});

