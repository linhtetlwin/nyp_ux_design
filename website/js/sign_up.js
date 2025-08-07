// This is for 'Join Us' button — when clicked, the sign up modal appears
document.addEventListener('DOMContentLoaded', function () {
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

    function showError(input, message) {
        input.classList.add('invalid'); // Adds red border
        const error = input.parentElement.querySelector('.error-message');
        console.log(error)
        if (error) {
            error.textContent = message; // Show error message below
        }
    }

    // Open modal on button click
    document.addEventListener('click', function (event) {
        if (event.target.closest('.open-signup-modal')) {
            openModal();
        }
    });

    // Close modal on X buttons
    if (closeModal) closeModal.addEventListener('click', closeModalFunc);
    if (closeDialog) closeDialog.addEventListener('click', closeModalFunc);

    // Close modal on clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModalFunc();
        }
    });

    // Form submission handling
    console.log(signUpForm);

    signUpForm.addEventListener('submit', function (event) {
        console.log("🟢 Submit fired");
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

        const schoolInput = document.getElementById('school');
        if (schoolInput.value.trim() === '') {
            showError(schoolInput, 'School is required');
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
        if (emergencyNumber.value.trim().length !== 8) {
            showError(emergencyNumber, 'Emergency contact number must be 8 digits');
            isValid = false;
        }

        const joinBtn = document.getElementById('joinUsBtn');
        const profileIcon = document.getElementById('profileIcon');
        console.log(joinBtn, profileIcon)
        if (isValid) {
            alert('Thank you for signing up!');
            closeModalFunc();
            signUpForm.reset();
            joinBtn.style.display = 'none';
            profileIcon.style.display = 'inline';
        } 
    });
});
