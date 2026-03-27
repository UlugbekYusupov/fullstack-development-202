// import { evaluate } from 'mathjs';

let display = document.getElementById("displayId");

let text = "";

function clickButton(value){
    let last = parseFloat(text.slice(-1));
    let digitValue = parseFloat(value);
    console.log(last);
    if(value==="C") {
        text = "";
    } else if(value==="DEL") {
        text = text.slice(0,-1)
    } else if(value==="=") {
        if(text==="Error") {
            text="";
        } else {
            try {
                text = eval(text).toString();
            } catch (e) {
                text = "Error";
            }
        }
    }
    else if(isNaN(last) && isNaN(digitValue)) {
        text = text.slice(0,-1)+value;
    }
    else {
        text += value;
    }
    display.innerText = text;
}

