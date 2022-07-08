const toast = document.querySelector(".toast");
const successBtn = document.querySelector(".btn--success");
const failBtn = document.querySelector(".btn--fail");
const warningBtn = document.querySelector(".btn--warning");
const helpBtn = document.querySelector(".btn--help");

function handleToastMessage({ title, message, type }) {
  const icons = {
    success: "images/success.png",
    fail: "images/fail.png",
    warning: "images/warning.png",
    help: "images/question.png",
  };

  toast.innerHTML = `
    <div class="toast__item">
      <div class="toast__icon">
        <img src="${icons[type]}" draggable="false" alt="success">
      </div>
      <div class="toast__content">
        <h3 class="toast__title">${title}</h3>
        <p class="toast__message">${message}</p>
      </div>
      <div class="toast__close">
        <img src="images/close.png" alt="close" class="close">
      </div>
    </div>
    `;

  const decoration = {
    success: "images/green-bubbles.png",
    fail: "images/Red-bubbles.png",
    warning: "images/Yellow-bubbles.png",
    help: "images/Blue-bubbles.png",
  };

  const bgColor = {
    success: "#4E8D7C",
    fail: "#F64B3C",
    warning: "#EF8D32",
    help: "#3282B8",
  };

  const toastItem = document.querySelector(".toast__item");
  toastItem.style.backgroundImage = `url(${decoration[type]})`;
  toastItem.style.backgroundColor = `${bgColor[type]}`;

  const autoRemoveToast = setTimeout(() => {
    toastItem.remove();
  }, 6000);

  const closeToast = document.querySelector(".toast__close");
  closeToast.addEventListener("click", function () {
    toastItem.remove();
    clearTimeout(autoRemoveToast);
  });
}

successBtn.addEventListener("click", showSuccessToast);
function showSuccessToast(e) {
  handleToastMessage({
    title: "Well done!",
    message: "You successfully read this important message.",
    type: "success",
  });
}

failBtn.addEventListener("click", showFailToast);
function showFailToast(e) {
  handleToastMessage({
    title: "Oh snap!",
    message: "Change a few things up and try submitting again.",
    type: "fail",
  });
}

warningBtn.addEventListener("click", showWarningToast);
function showWarningToast(e) {
  handleToastMessage({
    title: "Warning!",
    message: "Sorry! There was a problem with your request.",
    type: "warning",
  });
}

helpBtn.addEventListener("click", showHelpToast);
function showHelpToast(e) {
  handleToastMessage({
    title: "Hi there!",
    message: "Do you have a problem? Just use this contact form.",
    type: "help",
  });
}
