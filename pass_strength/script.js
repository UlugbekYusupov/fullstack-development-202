const passwordInput = document.getElementById("passwordInput");
const alert = document.getElementById("alert");

passwordInput.addEventListener("input",(e)=>{
    renderAlert();
})


function checkPasswordStrength(password) {
    if(password.length<8) {
        return "You must be write 8 or more letter";
    }
    let score = 0;

    if (/[a-z]/.test(password)) score++;       // kichik harf
    if (/[A-Z]/.test(password)) score++;       // katta harf
    if (/[0-9]/.test(password)) score++;       // raqam
    if (/[^A-Za-z0-9]/.test(password)) score++; // maxsus belgi

    if (score <= 2) return "Weak";
    if (score === 3) return "Medium";
    if (score === 4) return "Strong";
}

function renderAlert() {
    let response = checkPasswordStrength(passwordInput.value);
    console.log(response);
    if(response==="Strong") {
        alert.style.backgroundColor = "green";
        alert.textContent = response;
    } else if (response === "Medium") {
        alert.style.backgroundColor = "yellow";
        alert.textContent = response;
    } else if (response === "Weak") {
        alert.style.backgroundColor = "red";
        alert.textContent = response;
    } else {
        alert.style.display = "block";
        alert.textContent = response;
        alert.style.backgroundColor = "grey";
    }
}