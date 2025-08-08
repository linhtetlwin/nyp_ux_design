// For reusing join us
// This js code pastes the content of footer.html in the container of id modal-container
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("modal-container");

  if (container) {
    fetch("https://linhtetlwin.github.io/nyp_ux_design/website/html/reusable_widgets/join_us_modal.html")
      .then(response => response.text())
      .then(data => {
        container.innerHTML = data;

        // Now that the modal HTML is inserted, attach the modal-related JS
        const modal = document.getElementById('joinUsModal');
        const joinUsForm = document.getElementById('joinUsForm');

        function openModal() {
          modal.style.display = 'block';
          document.body.style.overflow = 'hidden';
        }

        function closeModalFunc() {
          modal.style.display = 'none';
          document.body.style.overflow = '';
        }

        function showError(input, message) {
          input.classList.add('invalid');
          const error = input.parentElement.querySelector('.error-message');
          if (error) {
            error.textContent = message;
          }
        }

        // Open modal on button click
        document.addEventListener('click', function (event) {
          if (event.target.closest('.openJoinUsModal')) {
            openModal();
          }
        });

        // Close modal

        window.addEventListener('click', function (event) {
          if (event.target === modal) {
            closeModalFunc();
          }
        });

        if (joinUsForm) {
          joinUsForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let isValid = true;

            const inputs = joinUsForm.querySelectorAll('input');
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

            if (isValid) {
              const toastEl = document.getElementById('successToast');
              const toast = new bootstrap.Toast(toastEl);
              toast.show();
              
              closeModalFunc();
              joinUsForm.reset();
              if (joinBtn) joinBtn.style.display = 'none';
              if (profileIcon) profileIcon.style.display = 'inline';
            }
          });
        }
      })
      .catch(error => {
        console.error("Error loading modal:", error);
      });
  }
});
