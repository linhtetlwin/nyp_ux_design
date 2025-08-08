// For reusing success toast 
// This js code pastes the content of footer.html in the container of id success-toast-container
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("success-toast-container");
  if (container) {
    fetch("reusable_widgets/success_toast.html")
      .then(response => response.text())
      .then(data => {
        container.innerHTML = data;
      })
      .catch(error => {
        console.error("Error loading footer:", error);
      });
  }
});