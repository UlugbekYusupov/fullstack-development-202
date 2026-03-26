
let passwordInput = document.getElementById("passwordInput")
let result = document.getElementById("result")

passwordInput.addEventListener("input", function(){
let password = passwordInput.value
let length = password.length

if(length === 0){
result.textContent = ""
result.className = "result"

}

else if(length < 6){
result.textContent = "Weak"
result.className = "result weak"
}

else if(length < 10){
result.textContent = "Medium"
result.className = "result medium"
}

else{
result.textContent = "Strong"
result.className = "result strong"
}

})