console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.location.href);

alert("Hello, World!");

const title =document.getElementById("main-title");
const buttons = document.getElementsByClassName("btn");
const paragraphs = document.querySelectorAll("p");

document.getElementById("title").innerHTML= "New Title";
document.getElementById("description").textContent = "Updated description";

classList.add("class");
classList.remove("class");
classList.toggle("class");

document.getElementById("box").classList.classList.add("highlight");
document.getElementById("box").classList.remove("hidden");
document.getElementById("box").classList.toggle("dark-mode");


const newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph.";
document.body.appendChild(newPara);

const item = document.getElementById("item");
item.parentNode.removeChild(item);

document.getElementById("item").remove();

document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});



