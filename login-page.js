const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "elliot" && password === "agathaisthebest<3") {
        alert("Hope you enjoyed the show. Have a present: RS{NEVER_SHARE_PASSWORD}");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})