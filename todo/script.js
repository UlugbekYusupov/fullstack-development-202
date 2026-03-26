// renderTasks();

const modal = document.getElementById("taskModal");

const openButton = document.getElementById("openModalBtn");
const closeButton = document.getElementById("closeModalBtn");
const addButton = document.getElementById("addTaskBtn");

const titleCtrl = document.getElementById("title-ctrl")
const descriptionCtrl = document.getElementById("description-ctrl")
const statusCtrl = document.getElementById("status-ctrl")



let tasks = [];

openButton.onclick = ()=>{
    modal.style.display = "flex";
}

closeButton.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if(event.target===modal) {
        modal.style.display = "none";
    }
}

addButton.onclick = function () {
    addTask();
}

function addTask() {
   if(titleCtrl.value==="") {
       alert("Title yozilmagan");
   } else if (descriptionCtrl.value==="") {
       alert("Description yozilmagan");
   } else if(statusCtrl.value==="") {
       alert("Status belgilanmagan");
   } else {
       let task = {
           "title":titleCtrl.value,
           "description":descriptionCtrl.value,
           "status":statusCtrl.value,
           "id": tasks.length
       }
       tasks.push(task);
       modal.style.display = "none";
       renderTasks();
   }
}


function renderTasks() {
    const items = document.getElementById("myItems");
    items.innerHTML = ``;
    tasks.forEach((item)=>{
        const newItem =  `<div class="task-item">
                    <div class="task-item-title">
                        <p>${item.title}</p>
                        <div class="task-status">${item.status}</div>
                    </div>
                    <p>${item.description}</p>
                    <button onclick="delTask(${item.id})" class="del-btn" type="button">Delete</button>
                </div>` ;
        items.innerHTML+=newItem;
    });
}

function delTask(id) {
    tasks = tasks.filter(item=>item.id !==id );
    renderTasks();
}
renderTasks();