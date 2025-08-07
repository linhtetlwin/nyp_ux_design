// This js code pastes the content of nav_bar.html in the container of id navbar-container
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("navbar-container");

  if (container) {
    fetch("../html/reusable_widgets/nav_bar.html")
      .then(response => response.text())
      .then(data => {
        container.innerHTML = data;
      })
      .catch(error => {
        console.error("Error loading navbar:", error);
      });
  }
});
