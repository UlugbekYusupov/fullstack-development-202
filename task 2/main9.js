const input = document.getElementById("parol");
const app = document.querySelector(".app");

const result = document.createElement("div");
result.id = "respn";
app.appendChild(result);

input.addEventListener("input", (e) => {
    const value = e.target.value;
    check(value);
});

function check(value) {
    if (value.length < 8) {
        setResult("Too short", "#6b7280", "#e5e7eb");
        return;
    }

    let letter = 0;
    let number = 0;
    let special = 0;

    for (const char of value) {
        if (/^[a-zA-Z]$/.test(char)) {
            letter += 1;
        } else if (/^[0-9]$/.test(char)) {
            number += 1;
        } else if (/^[^a-zA-Z0-9]$/.test(char)) {
            special += 1;
        }
    }

    if (letter > 0 && number > 0 && special > 0) {
        setResult("Strong", "white", "#16a34a");
    } else if (
        (letter > 0 && number > 0) ||
        (letter > 0 && special > 0) ||
        (number > 0 && special > 0)
    ) {
        setResult("Medium", "white", "#f59e0b");
    } else {
        setResult("Weak", "white", "#ef4444");
    }
}

function setResult(text, color, bg) {
    result.textContent = text;
    result.style.color = color;
    result.style.backgroundColor = bg;
}
