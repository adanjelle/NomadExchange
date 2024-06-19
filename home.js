// script.js
document.addEventListener("DOMContentLoaded", function() {
  showPopup();
});

function showPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
