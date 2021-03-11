const mapLink = document.querySelector(".map-link");
const popupMap = document.querySelector(".modal-map");
const mapClose = popupMap.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("modal-show")) {
      evt.preventDefault();
      popupMap.classList.remove("modal-show");
    }
  }
});
