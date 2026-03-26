const addButton = document.getElementById("addButton");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("closeButton");
const saveButton = document.getElementById("saveButton");
const taskList = document.getElementById("taskList");

addButton.onclick = () => {
  modal.classList.remove("hidden");
};

closeButton.onclick = () => {
  modal.classList.add("hidden");
};

saveButton.onclick = () => {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;
  const status = document.getElementById("status").value;

  if (!title) return alert("title yozish kerk");

  const card = document.createElement("div");
  card.className = "card";

  let statusClass = "pending";
  if (status === "in progress") statusClass = "progress";
  if (status === "completed") statusClass = "completed";

  card.innerHTML = `
    <div class="card-header">
      <h4>${title}</h4>
      <p class="status ${statusClass}">${status}</p>
    </div>

    <p>${desc}</p>
    <button class="deleteButton">Delete</button>
  `;

  taskList.appendChild(card);

  modal.classList.add("hidden");

  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
};

taskList.addEventListener("click", (e) => {
  //indexga qarab ochrish
  if (e.target.classList.contains("deleteButton")) {
    e.target.parentElement.remove();
  }
});
