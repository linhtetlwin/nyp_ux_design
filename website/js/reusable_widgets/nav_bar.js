// This js code pastes the content of nav_bar.html in the container of id navbar-container
// https://linhtetlwin.github.io/nyp_ux_design/website/html/reusable_widgets/nav_bar.html
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("navbar-container");
  const contaienrClassName = container.className;

  if (container) {
    fetch("https://linhtetlwin.github.io/nyp_ux_design/website/html/reusable_widgets/nav_bar.html")
      .then(response => response.text())
      .then(data => {
        container.innerHTML = data;

        assignChosenPage(contaienrClassName)
      })
      .catch(error => {
        console.error("Error loading navbar:", error);
      });
  }
});

function assignChosenPage(element) {
  var identifier = document.getElementById(element);
  identifier.classList.add("chosen-page")
  console.log(identifier)
}
