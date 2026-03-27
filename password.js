const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strength");

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    console.log(password);

    let strength = "";

    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);



    if (password.length < 6) {
        strength = "weak";
    }
    else if (hasLower && hasNumber && !hasUpper && !hasSymbol) {
        strength = "medium";
    }
    else if (hasLower && hasUpper && hasNumber && hasSymbol) {
        strength = "strong";
    }
    else {
        strength = "weak";
    }

    strengthText.textContent = strength.toUpperCase();

    strengthText.className = "strength " + strength;
});