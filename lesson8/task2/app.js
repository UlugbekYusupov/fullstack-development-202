const input = document.getElementById("password");
const result = document.getElementById("result");

input.addEventListener("input", () => {
  const value = input.value;

  let score = 0;

  if (value.length >= 8) score++;

  if (/\d/.test(value)) score++;

  if (/[A-Z]/.test(value)) score++;

  if (/[!@#$%^&*]/.test(value)) score++;

  if (score <= 2) {
    result.textContent = "Weak";
    result.className = "weak";
  } else if (score <= 4) {
    result.textContent = "Medium";
    result.className = "medium";
  } else {
    result.textContent = "Strong";
    result.className = "strong";
  }

  if (value.length === 0) {
    result.textContent = "";
    result.className = "";
  }
});
