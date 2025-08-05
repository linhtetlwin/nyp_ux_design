// For reusing nav bar 
// run code as soon as web page is loaded 
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("footer-container");
  if (container) {
    fetch("https://linhtetlwin.github.io/nyp_ux_design_assignment/footer.html")
      .then(response => response.text())
      .then(data => {
        container.innerHTML = data;
      })
      .catch(error => {
        console.error("Error loading footer:", error);
      });
  }
});