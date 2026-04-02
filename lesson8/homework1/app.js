const signupCard = document.getElementById("signupCard");
const loginCard = document.getElementById("loginCard");

const goLogin = document.getElementById("goLogin");
const goSignup = document.getElementById("goSignup");

goLogin.addEventListener("click", () => {
  signupCard.classList.add("hidden");
  loginCard.classList.remove("hidden");
});

goSignup.addEventListener("click", () => {
  loginCard.classList.add("hidden");
  signupCard.classList.remove("hidden");
});
