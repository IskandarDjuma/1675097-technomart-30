const writeUsLink = document.querySelector(".write-us-link");
const writeUsPopup = document.querySelector(".modal-write-us");
const writeUsClose = writeUsPopup.querySelector(".modal-close");
const loginLogin = writeUsPopup.querySelector(".name-login");
const writeUsForm = writeUsPopup.querySelector(".write-us-form");
const loginMail = writeUsPopup.querySelector(".write-us-mail");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}
writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");

  if (storage) {
    loginLogin.value = storage;
    loginMail.focus();
  } else {
    loginLogin.focus();
  }

});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
  writeUsPopup.classList.remove("modal-error");
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
    writeUsPopup.classList.remove("modal-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("modal-error");
 } else {
   if (isStorageSupport) {
    localStorage.setItem("name", loginLogin.value);
   }
 }
});
