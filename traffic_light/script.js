const redLight = document.getElementById("redLight");
const yellowLight = document.getElementById("yellowLight");
const greenLight = document.getElementById("greenLight");
const time = document.getElementById("time");
let lights = [redLight,yellowLight,greenLight];

const times = [5,2,3];
let index = 0;
let periodicTimerId;
let count= 0;

function start() {

    periodicTimerId = setInterval(() => {
        console.log(`Tick ${count + 1}`);
        time.innerText = count+1;
        setLight();
        count++;

        if (count === times[index]) {
            clearInterval(periodicTimerId);
            console.log('Timer cancelled');
            count = 0;
            index = (index+1)%times.length;
            start();
        }
    }, 1000);

}

function stop() {
    clearInterval(periodicTimerId);
    index = 0;
}

function setLight() {
    redLight.style.backgroundColor = "grey";
    yellowLight.style.backgroundColor = "grey";
    greenLight.style.backgroundColor = "grey";

    switch (index) {
        case 0:
            redLight.style.backgroundColor = "red";
            break;
        case 1:
            yellowLight.style.backgroundColor = "yellow";
            break;
        case 2:
            greenLight.style.backgroundColor = "green";
            break;

    }
}
