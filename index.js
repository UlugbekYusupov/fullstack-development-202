// function atmWithdrawal(amount) {
//   if (amount % 10 !== 0) {
//     return "Error: Amount must be in multiples of 10";
//   }

//   const bills = [100, 50, 20, 10];
//   const result = {};

//   for (let bill of bills) {
//     result[bill] = Math.floor(amount / bill);
//     amount %= bill;
//   }

//   return result;
// }

// console.log(atmWithdrawal(130)); 

// console.log(atmWithdrawal(7665999464356780)); 

// console.log(atmWithdrawal(120)); 




// let car = {
//   brand: "Tesla",
//   model: "Model S",
//   year: 2024,
//   start: function(){
//     console.log("Car is stariting...");
    
//   }
// }

// console.log(car.brand);
// car.start()







// let person = new Object()
// person.name = "Alice";
// person.age = 25;
// person.greet = function(){
//   return `Hello, my name is ${this.name}`;
// }

// console.log(person.greet());





// function createPerson(name, age) {
//   return {
//     name,
//     age,
//     greet() {
//       return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
//     }
//   };
// }

// let person1 = createPerson("Alice", 25);
// let person2 = createPerson("Bob", 30);

// console.log(person1.greet()); 
// console.log(person2.greet()); 







// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
//   };
// }

// let person1 = new Person("Alice", 25);
// let person2 = new Person("Bob", 30);

// console.log(person1.greet()); 
// console.log(person2.greet()); 










// let animal = {
//   type: "Mammal",
//   makeSound() {
//     console.log("Some generic animal sound");
//   }
// };

// let dog = Object.create(animal);
// dog.breed = "Golden Retriever";

// dog.makeSound();
// console.log(dog.type); 







// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Hello, my name is ${this.name}`;
//   }
// }

// let person1 = new Person("Alice", 25);

// console.log(person1.greet());





// const config = Object.freeze({
//   theme: "dark",
//   version: "1.0.0"
// })

// config.theme = "light";
// console.log(config.theme);











// const students = [
//   { name: "Alice", scores: [80, 90, 100] },
//   { name: "Bob", scores: [50, 60, 70] },
//   { name: "Charlie", scores: [30, 40, 20] }
// ];

// let topStudent = "";
// let highestAvg = 0;

// students.forEach(student => {
//   const sum = student.scores.reduce((a, b) => a + b, 0);
//   const avg = sum / student.scores.length;

//   const passed = avg >= 50;

//   console.log(student.name + " average:", avg, "| passed:", passed);

//   if (avg > highestAvg) {
//     highestAvg = avg;
//     topStudent = student.name;
//   }
// });

// console.log(topStudent + " has the highest average:", highestAvg);






const tasks = [
  {
    title: "Learn JavaScript",
    description: "Study DOM, events, and arrays",
    status: "pending"
  },
  {
    title: "Build To-Do App",
    description: "Create task list with modal",
    status: "in progress"
  },
  {
    title: "Finish Project",
    description: "Complete and test everything",
    status: "completed"
  }
];

document.body.style.margin = "0";
document.body.style.padding = "30px";
document.body.style.boxSizing = "border-box";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#f4f6f8";

const style = document.createElement("style");
style.textContent = `
  * {
    box-sizing: border-box;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  .title {
    text-align: center;
    margin-bottom: 25px;
    color: #222;
  }

  .task-list {
    display: grid;
    gap: 16px;
    margin-bottom: 25px;
  }

  .task-card {
    background: #fff;
    border-radius: 12px;
    padding: 18px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }
 
  .task-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #222;
  }

  .task-description {
    font-size: 15px;
    color: #555;
    margin-bottom: 12px;
  }

  .task-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .status-badge {
    padding: 6px 12px;
    border-radius: 20px;
    color: #fff;
    font-size: 14px;
    text-transform: capitalize;
  }

  .status-pending {
    background: #f39c12;
  }

  .status-in-progress {
    background: #3498db;
  }

  .status-completed {
    background: #2ecc71;
  }

  .delete-btn,
  .add-btn,
  .save-btn,
  .close-btn {
    border: none;
    padding: 10px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
  }

  .delete-btn {
    background: #e74c3c;
    color: white;
  }

  .add-btn {
    display: block;
    margin: 0 auto;
    background: #222;
    color: white;
    font-size: 16px;
  }

  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: none;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .modal {
    width: 100%;
    max-width: 450px;
    background: white;
    border-radius: 14px;
    padding: 20px;
  }

  .modal h2 {
    margin-bottom: 18px;
    color: #222;
  }

  .form-group {
    margin-bottom: 14px;
  }

  .form-group label {
    display: block;
    margin-bottom: 6px;
    font-weight: bold;
    color: #333;
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
  }

  .form-group textarea {
    resize: none;
    height: 100px;
  }

  .modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 18px;
  }

  .save-btn {
    background: #2ecc71;
    color: white;
  }

  .close-btn {
    background: #bdc3c7;
    color: #222;
  }
`;
document.head.appendChild(style);

const container = document.createElement("div");
container.className = "container";

const title = document.createElement("h1");
title.className = "title";
title.textContent = "To-Do List";

const taskList = document.createElement("div");
taskList.className = "task-list";

const addBtn = document.createElement("button");
addBtn.className = "add-btn";
addBtn.textContent = "Add Task";

const modalOverlay = document.createElement("div");
modalOverlay.className = "modal-overlay";

const modal = document.createElement("div");
modal.className = "modal";

const modalTitle = document.createElement("h2");
modalTitle.textContent = "Add New Task";

const titleGroup = document.createElement("div");
titleGroup.className = "form-group";

const titleLabel = document.createElement("label");
titleLabel.textContent = "Task title";

const titleInput = document.createElement("input");
titleInput.type = "text";
titleInput.placeholder = "Enter task title";

titleGroup.append(titleLabel, titleInput);

const descGroup = document.createElement("div");
descGroup.className = "form-group";

const descLabel = document.createElement("label");
descLabel.textContent = "Task description";

const descInput = document.createElement("textarea");
descInput.placeholder = "Enter task description";

descGroup.append(descLabel, descInput);

const statusGroup = document.createElement("div");
statusGroup.className = "form-group";

const statusLabel = document.createElement("label");
statusLabel.textContent = "Status";

const statusSelect = document.createElement("select");

const statuses = ["pending", "in progress", "completed"];
statuses.forEach((status) => {
  const option = document.createElement("option");
  option.value = status;
  option.textContent = status;
  statusSelect.appendChild(option);
});

statusGroup.append(statusLabel, statusSelect);

const modalActions = document.createElement("div");
modalActions.className = "modal-actions";

const saveBtn = document.createElement("button");
saveBtn.className = "save-btn";
saveBtn.textContent = "Save Task";

const closeBtn = document.createElement("button");
closeBtn.className = "close-btn";
closeBtn.textContent = "Close";

modalActions.append(saveBtn, closeBtn);
modal.append(modalTitle, titleGroup, descGroup, statusGroup, modalActions);
modalOverlay.appendChild(modal);

container.append(title, taskList, addBtn);
document.body.append(container, modalOverlay);

function getStatusClass(status) {
  if (status === "pending") return "status-pending";
  if (status === "in progress") return "status-in-progress";
  return "status-completed";
}

function getCardClass(status) {
  if (status === "pending") return "pending";
  if (status === "in progress") return "in-progress";
  return "completed";
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const card = document.createElement("div");
    card.className = `task-card ${getCardClass(task.status)}`;

    const taskTitle = document.createElement("div");
    taskTitle.className = "task-title";
    taskTitle.textContent = task.title;

    const taskDescription = document.createElement("div");
    taskDescription.className = "task-description";
    taskDescription.textContent = task.description;

    const footer = document.createElement("div");
    footer.className = "task-footer";

    const statusBadge = document.createElement("span");
    statusBadge.className = `status-badge ${getStatusClass(task.status)}`;
    statusBadge.textContent = task.status;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    footer.append(statusBadge, deleteBtn);
    card.append(taskTitle, taskDescription, footer);
    taskList.appendChild(card);
  });
}

function openModal() {
  modalOverlay.style.display = "flex";
}

function closeModal() {
  modalOverlay.style.display = "none";
  titleInput.value = "";
  descInput.value = "";
  statusSelect.value = "pending";
}

addBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

saveBtn.addEventListener("click", () => {
  const titleValue = titleInput.value.trim();
  const descValue = descInput.value.trim();
  const statusValue = statusSelect.value;

  if (!titleValue || !descValue) {
    alert("Please fill all fields");
    return;
  }

  tasks.push({
    title: titleValue,
    description: descValue,
    status: statusValue
  });

  renderTasks();
  closeModal();
});

renderTasks();