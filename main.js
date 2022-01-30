import "./style.css";

const validEmailFormat = /^\D\w*[.]*\w*@\w*[.]\w*/;
const emailInput = document.getElementById("email");
const emailMissingLabel = document.getElementById("email-missing");
const emailInvalidLabel = document.getElementById("email-invalid");
const submitButton = document.getElementById("submit-button");

emailInput.addEventListener("focus", (e) => {
  emailMissingLabel.classList.replace("block", "hidden");
  emailInvalidLabel.classList.replace("block", "hidden");
  emailInput.classList.replace("border-lightRed","border-paleBlue");
});

submitButton.addEventListener("click", (e) => {
  if (!emailInput.value) {
    emailMissingLabel.classList.replace("hidden", "block");
    emailInput.classList.replace("border-paleBlue","border-lightRed");

  } else if (!validEmailFormat.test(emailInput.value)) {
    emailInvalidLabel.classList.replace("hidden", "block");
    emailInput.classList.replace("border-paleBlue","border-lightRed");

  }
  else {
    emailInput.value = "";
  }
});
