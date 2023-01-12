(container = document.querySelector(".container")),
  (pwShowHide = document.querySelectorAll(".showhidepw")),
  (pwFields = document.querySelectorAll(".password")),
  (signUp = document.querySelector(".signup-link")),
  (login = document.querySelector(".login-link"));

// To show & hide password

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";
        pwShowHide.forEach((icon) => {
          Icon.classList.replace("fa-eye-slash", "fa-eye");
        });
      } else {
        pwField.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("fa-eye", "fa-eye-slash");
        });
      }
    });
  });
});

// js code to appear signup and login form
signUp.addEventListener("click", function () {
  container.classList.add("active");
});

login.addEventListener("click", function () {
  container.classList.remove("active");
});

//form validation
function loginvalidation() {
  let email = document.forms.loginForm.email.value;
  let password = document.forms.loginForm.password.value;
  let regEmail =
    /^[a-zA-Z0-9.!#$%&'*/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)"$/;
  if (email == "" || regEmail.test(email)) {
    alert("please input your email properly.");
    email.focus();
    return false;
  }
  if (password == "") {
    alert("please input your password");
    password.focus();
    return false;
  } else {
    alert("Login successful.");
  }
}

function signUpValidation() {
  let name = document.forms.signUp.name.value;
  let email = document.forms.signUpForm.email.value;
  let password = document.forms.signUpForm.password.value;
  let confirmpsw = document.forms.signUpForm.confirmpsw.value;
  let regEmail =
    /^[a-zA-Z0-9.!#$%&'*/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)"$/;
  let regName = /\d+/g;
  if (name == "" || regName.test(name)) {
    alert("Please input your name properly.");
    name.focus();
    return false;
  }
  if (email == "" || regEmail.test(email)) {
    alert("Please input your email properly.");
    email.focus();
    return false;
  }
  if (password == "" || regName.test(password)) {
    alert("Please input your password.");
    password.focus();
    return false;
  }
  if (confirmpsw == "" || regName.test(confirmpsw)) {
    alert("Please confirm your password.");
    confirmpsw.focus();
    return false;
  }
}
