const navigateToSingUp = document.getElementById("navigateToSignUp");
const navigateToLogin = document.getElementById("navigateToLogin");

const title = document.getElementById("authType");
const emailInput = document.getElementById("emailInput");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");

let authType = "login";//register

function toLogin() {
    navigateToSingUp.style.display = "none";
    usernameInput.style.display = "none";
    navigateToLogin.style.display = "none";
    navigateToSingUp.style.display = "inline";
    title.innerText = "Login";
    authType = "login";
}

function toRegister() {
    navigateToLogin.style.display = "inline";
    navigateToSingUp.style.display = "none";
    usernameInput.style.display = "inline";
    title.innerText = "Sign Up";
    authType = "register";
}


function submit() {
    if(authType==="register") {
        alert("Ro'yhatdan o'tish");
    }
    else {
        alert("Hisobga kirish");
    }
}