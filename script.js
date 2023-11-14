
//Sign up page
let containerSignup = document.querySelector(".container-sign-up");
let username = document.getElementById("inputUsername");
let emailSignup = document.getElementById("input-Email-SignUp");
let passwordSignup = document.getElementById("input-Password-SignUp");
let confirmPassword = document.getElementById("inputConfirmPassword");
let termsCheckbox = document.getElementById("terms");
let buttonSignUp = document.getElementById("sign-up");
let signupMessage = document.getElementById("signup-message");

buttonSignUp.addEventListener("click", () => {
  if (username.value.length < 6) {
    signupMessage.innerText = "Username must be at least 6 characters long";
    return;
  } else if (passwordSignup.value !== confirmPassword.value) {
    signupMessage.innerText = "Passwords not match";
    return;
  } else if (!termsCheckbox.checked) {
    signupMessage.innerText = "Please agree to the terms & conditions";
    return;
  }

  let userData = {
    username: username.value,
    email: emailSignup.value,
    password: passwordSignup.value,
  };

  fetch("https://655273ad5c69a779032a0b90.mockapi.io/SignUp", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(response => response.json())
    .then(json => {
      console.log("Response from server:", json);
      if (json.status === "success") {
        signupMessage.innerText = "Sign up successful";
        window.location.href = "login.html";
      } else {
        signupMessage.innerText = "Sign up failed.";
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
});

//Login page
let containerLogin = document.querySelector(".container-login");
let emailLogin = document.getElementById("input-Email-SignIn");
let passwordLogin = document.getElementById("input-Password-SignIn");
let buttonlogin = document.getElementById("button-login");
let loginMessage = document.getElementById("login-message");

buttonlogin.addEventListener("click", () => {
  let enteredEmail = emailLogin.value;
  let enteredPassword = passwordLogin.value;

  fetch("https://655273ad5c69a779032a0b90.mockapi.io/SignUp", {
    method: "GET",
  })
    .then(response => response.json())
    .then(users => {
      console.log("Users from server:", users);

      let matchingUser = users.find(
        user => user.email === enteredEmail && user.password === enteredPassword
      );
      if (matchingUser) {
        fetch("https://655273ad5c69a779032a0b90.mockapi.io/SignIn", {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then(response => response.json())
          .then(json => {
            console.log("Response from server:", json);
            if (json.status === "success") {
              loginMessage.innerText = "Login successful";
              window.location.href = "products.html";
            } else {
              loginMessage.innerText = "Invalid email or password.";
            }
          })
          .catch(error => {
            console.error("Error:", error);
          });
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
});
