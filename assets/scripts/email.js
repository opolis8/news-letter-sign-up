function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailPattern.test(email);
}

function emails() {
  const email = document.querySelector(".input-email").value;
  if (isValidEmail(email)) {
    const body = (document.body.innerHTML = `<main class="congrats-container">
    <div class="success"></div>
    <div class="Thanks"><p>Thanks for subscribing!</p></div>
    <div class="confirmation">
      <p class="para">
        A confirmation email has been sent to
        <span class="show-email">${email}</span>. Please open it
        and click the button inside to confirm your subscription.
      </p>
    </div>
    
    <button class="dismiss">Dismiss message</button>`);
  } else {
    const error = document.querySelector(".errors");
    const inputEmail = document.querySelector(".input-email");

    inputEmail.classList.add("js-input-error");
    error.classList.add("js-error");
  }
}

const emailInput = document.querySelector(".submit");
emailInput.addEventListener("click", () => {
  emails();
});
const emailEnter = document.querySelector(".input-email");
emailEnter.addEventListener("focus", () => {
  emailEnter.placeholder = "";
});

emailEnter.addEventListener("blur", () => {
  const error = document.querySelector(".errors");
  error.classList.remove("js-error");
  emailEnter.classList.remove("js-input-error");
  emailEnter.placeholder = "email@company.com";
});
emailEnter.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    console.log("press");
    emails();
  }
});
