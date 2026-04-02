const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const formTitle = document.getElementById("formTitle");
const usernameGroup = document.getElementById("usernameGroup");
const submitBtn = document.getElementById("submitBtn");
const authForm = document.getElementById("authForm");
const message = document.getElementById("message");
const email = document.getElementById("email");
const password = document.getElementById("password");
const username = document.getElementById("username");

let isLoginMode = true;

function showLogin() {
  isLoginMode = true;
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  formTitle.textContent = "Login";
  submitBtn.textContent = "Login";
  usernameGroup.classList.add("hidden");
  username.removeAttribute("required");
  message.textContent = "";
  message.className = "message";
  authForm.reset();
}

function showRegister() {
  isLoginMode = false;
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
  formTitle.textContent = "Register";
  submitBtn.textContent = "Register";
  usernameGroup.classList.remove("hidden");
  username.setAttribute("required", "true");
  message.textContent = "";
  message.className = "message";
  authForm.reset();
}

loginTab.addEventListener("click", showLogin);
registerTab.addEventListener("click", showRegister);

authForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const usernameValue = username.value.trim();

  if (!email.checkValidity()) {
    message.textContent = "Email format noto‘g‘ri.";
    message.className = "message error";
    return;
  }

  if (passwordValue.length < 8) {
    message.textContent = "Password kamida 8 ta belgidan iborat bo‘lishi kerak.";
    message.className = "message error";
    return;
  }

  if (!isLoginMode && usernameValue.length < 3) {
    message.textContent = "Login kamida 3 ta belgidan iborat bo‘lsin.";
    message.className = "message error";
    return;
  }

  if (isLoginMode) {
    message.textContent = "Login muvaffaqiyatli bajarildi.";
    message.className = "message success";
  } else {
    message.textContent = "Register muvaffaqiyatli bajarildi.";
    message.className = "message success";
  }
});