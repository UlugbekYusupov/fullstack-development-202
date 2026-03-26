

const item1 = document.getElementById('item1');
item1.textContent = "SALOM";
item1.innerHTML = `<div style="background-color: blue;display: inline">UKAMMAM</div>`

const divs = document.getElementsByTagName("div");
for (let i = 0;i<divs.length;i++) {
    divs[i].textContent = `${i}`;
    divs[i].addEventListener("click",function (){
        console.log("LOLE LOLE LOLE");
        divs[i].innerHTML = `<div style="background-color: blueviolet">HAAAAAAAAAA</div>`;
    });
}

