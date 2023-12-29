// モーダル開閉
const menuButton = document.getElementById("js-header-menu");
const modal = document.getElementById("js-modal");

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("close");
  modal.classList.toggle("active");
});
