const writeUsLink = document.querySelector(".write-us-link");
const writeUsPopup = document.querySelector(".modal-write-us");
const writeUsClose = writeUsPopup.querySelector(".modal-close");
const loginLogin = writeUsPopup.querySelector(".write-us-name");
const writeUsForm = writeUsPopup.querySelector(".write-us-form");
const loginMail = writeUsPopup.querySelector(".write-us-mail");

writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");
  loginLogin.focus();
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writeUsPopup.classList.remove("modal-show");
    }
  }
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginMail.value) {
    evt.preventDefault();
  }
});
