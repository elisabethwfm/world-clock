//London
let londonElement = document.querySelector("#london");
let londonDate = londonElement.querySelector(".date");
let londonTime = londonElement.querySelector(".time");

londonDate.innerHTML = `<div class="date">${moment().format(
  "MMMM Do YYYY"
)}</div>`;

londonTime.innerHTML = `<div class="time">${moment().format(
  "hh:mm:ss"
)} <section>${moment().format("A")}</section></div>`;
