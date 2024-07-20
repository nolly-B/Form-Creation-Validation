document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("registration-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    let messages = ["Error", "Not found"];

    let username = document.getElementById("username").value.trim();

    if (username.length < 3) {
      isValid = false;
      feedbackDiv.textContent = messages[0];
      return;
    }
    let feedbackDiv = document.getElementById("form-feedback");

    feedbackDiv.style.display = "block";
    if (isValid === true) {
      feedbackDiv.textContent = "Registration successful";
      feedbackDiv.style.color = "#28a745";
      return;
    } else {
      feedbackDiv.innerHTML = messages[0] + "";
      feedbackDiv.style.color = "#dc3545";
    }
    let password = document.getElementById("password").value.trim();
    if (password.length >= 8) {
      isValid = false;
      feedbackDiv.textContent = messages[0];
      return;
    }
    let email = document.getElementById("email").value.trim();

    if (email.includes("@", ".")) {
      isValid = true;
      return;
    } else {
      isValid = false;
      feedbackDiv.textContent = messages[0];
      return;
    }
  });
  form.submit();
});
