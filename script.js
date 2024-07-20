document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("registration-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    let messages = [];

    let username = document.getElementById("username").value.trim();

    if (username.length < 3) {
      isValid = false;
      feedbackDiv.textContent = messages.push(
        "Username must be at least 3 characters long"
      );
      return;
    }
    let feedbackDiv = document.getElementById("form-feedback");

    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br/");
      feedbackDiv.style.color = "#dc3545";
    }
    let password = document.getElementById("password").value.trim();
    if (password.length < 8) {
      isValid = false;
      feedbackDiv.textContent = messages.push(
        "Password must be atleast 8 characters long"
      );
      return;
    }
    let email = document.getElementById("email").value.trim();

    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      feedbackDiv.textContent = messages.push("Incorrect email format");
      return;
    }
  });
  form.submit();
});
