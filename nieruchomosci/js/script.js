/* TOGGLE MENU ON CLICK */

const buttonMenuToggle = document.getElementById("button-menu-toggle");
const siteNavigation = document.getElementById("site-navigation");

buttonMenuToggle.addEventListener("click", function() {
  siteNavigation.classList.toggle("active");
});
