let addBtn = document.getElementById("addTaskBtn")
let modal = document.getElementById("modal")
let closeBtn = document.getElementById("closeBtn")
let saveBtn = document.getElementById("saveBtn")

let taskList = document.getElementById("taskList")

let titleInput = document.getElementById("title")
let descInput = document.getElementById("desc")
let statusInput = document.getElementById("status")



/* modal ochish */

addBtn.addEventListener("click", function(){

modal.style.display = "flex"

})


/* modal yopish */

closeBtn.addEventListener("click", function(){

modal.style.display = "none"

})



/* task qo'shish */

saveBtn.addEventListener("click", function(){

let title = titleInput.value
let desc = descInput.value
let status = statusInput.value

if(title === "" || desc === ""){
alert("Fill all fields")
return
}


let task = document.createElement("div")
task.classList.add("task")

let badgeClass = ""

if(status === "pending"){
badgeClass = "pending"
}
else if(status === "progress"){
badgeClass = "progress"
}
else{
badgeClass = "completed"
}


task.innerHTML = `
<h3>${title}</h3>
<p>${desc}</p>
<button class="delete">Delete</button>
<span class="badge ${badgeClass}">${status}</span>
`

taskList.appendChild(task)


/* delete */

let del = task.querySelector(".delete")

del.addEventListener("click", function(){

task.remove()

})


/* tozalash */

titleInput.value = ""
descInput.value = ""
statusInput.value = "pending"

modal.style.display = "none"

})