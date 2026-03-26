
let red = document.getElementById("red")
let yellow = document.getElementById("yellow")
let green = document.getElementById("green")
let button = document.getElementById("changeButton")

let step = 0
button.addEventListener("click", function(){

red.style.background = "gray"
yellow.style.background = "gray"
green.style.background = "gray"

if(step === 0){
red.style.background = "red"

}

else if(step === 1){
yellow.style.background = "yellow"

}

else{

green.style.background = "green"

}

step++
if(step > 2){
step = 0

}


})