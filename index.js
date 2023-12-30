// モーダル開閉
const menuButton = document.getElementById("js-menu");
// const menuLine = document.getElementsByClassName("js-menu-line");
// const menuText = document.getElementById("js-menu-text");
const modal = document.getElementById("js-modal");

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("is-open");
  // menuLine.classList.toggle("is-open");
  // menuText.classList.toggle("is-open");
  modal.classList.toggle("is-open");
});
