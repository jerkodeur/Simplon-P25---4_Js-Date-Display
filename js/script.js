const BTN = document.querySelector("button");
const CONTENT = document.querySelector("timer");
const TIMER = document.querySelector("#timer");

BTN.addEventListener("click", function () {
  CONTENT.textContent = "Hello World";
});

function displayTime() {
  const date = new Date();
  const seconds = date.getSeconds();

  const isDivisibleBy3 = seconds % 3 === 0;

  TIMER.classList.toggle("text-danger", isDivisibleBy3);
  TIMER.classList.toggle("fw-bold", isDivisibleBy3);

  TIMER.innerHTML = date.toLocaleTimeString("fr");
}

setInterval(displayTime, 1000);
