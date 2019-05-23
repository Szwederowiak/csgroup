/* TOGGLE MENU ON CLICK */

const buttonMenuToggle = document.getElementById("button-menu-toggle");
const siteNavigation = document.getElementById("site-navigation");

buttonMenuToggle.addEventListener("click", function() {
  siteNavigation.classList.toggle("active");
});

/* AUTO PADDING FOR FOOTER */

const siteBody = document.getElementById("site-body");
const siteFooter = document.getElementById("site-footer");

// window.addEventListener("load", function() {
//   bodyPadding(siteFooter, siteBody);
// });

function bodyPadding(element, elementNeedsPadding) {
  elementNeedsPadding.style = "padding-bottom: " + element.offsetHeight + "px;";
  console.log(element.offsetHeight);
}
