// モーダル開閉
const menuButton = document.getElementById("js-menu");
const modal = document.getElementById("js-modal");

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("is-open");
  modal.classList.toggle("is-open");
});
