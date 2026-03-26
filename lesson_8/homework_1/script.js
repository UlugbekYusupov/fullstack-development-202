
let signupForm =
document.getElementById("signupForm")

let loginForm =
document.getElementById("loginForm")

let goLogin =
document.getElementById("goLogin")

let goSignup =
document.getElementById("goSignup")


goLogin.addEventListener("click", function(){
signupForm.style.display = "none"
loginForm.style.display = "block"

})

goSignup.addEventListener("click", function(){
loginForm.style.display = "none"
signupForm.style.display = "block"

})