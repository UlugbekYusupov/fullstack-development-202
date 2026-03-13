function passwordCheker(password) {
  let count = 0;

  if (password.length < 8) {
    return "Minimum 8 ta bolsin";
  }

  if (/[A-Z]/.test(password)) count++;

  if (/[0-9]/.test(password)) count++;

  if (/[^A-Za-z0-9]/.test(password)) count++;

  if (count === 1) return "Weak";
  if (count === 2) return "Medium";
  if (count === 3) return "Strong";
  return "Error";
}

console.log(passwordCheker("12345678"));
