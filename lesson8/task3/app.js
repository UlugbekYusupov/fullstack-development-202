const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    console.log(value);

    if (value === "C") {
      display.value = "";
    } else if (value === "DEL") {
      //oxirida ochirish
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        //natijani hisoblash
        display.value = eval(display.value);
      } catch {
        display.value = "Xato boldi";
      }
    } else {
      //oddiy raqam yozish
      display.value += value;
    }
  });
});
