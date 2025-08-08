// For reusing footer
// This js code pastes the content of footer.html in the container of id footer-container
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("footer-container");
  if (container) {
    fetch("https://linhtetlwin.github.io/nyp_ux_design/website/html/reusable_widgets/footer.html")
      .then(response => response.text())
      .then(data => {
        container.innerHTML = data;
      })
      .catch(error => {
        console.error("Error loading footer:", error);
      });
  }
});