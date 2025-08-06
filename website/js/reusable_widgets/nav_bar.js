// This js code pastes the content of nav_bar.html in the container of id navbar-container
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("navbar-container");

  if (container) {
    fetch("../html/reusable_widgets/nav_bar.html")
      .then(response => response.text())
      .then(data => {
        container.innerHTML = data;


        const joinBtn = document.getElementById('joinBtn');
        const profileIcon = document.getElementById('profileIcon');


        // This is for CTA button 
        joinBtn.addEventListener('click', () => {
          joinBtn.style.display = 'none';
          profileIcon.style.display = 'inline';

        });


      })
      .catch(error => {
        console.error("Error loading navbar:", error);
      });
  }
});
