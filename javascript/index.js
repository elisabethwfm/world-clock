//London
let londonElement = document.querySelector("#london");
let londonDate = londonElement.querySelector(".date");
let londonTime = londonElement.querySelector(".time");

londonDate.innerHTML = `<div class="date">${moment()
  .tz("Europe/London")
  .format("MMMM Do YYYY")}</div>`;

londonTime.innerHTML = `<div class="time">${moment()
  .tz("Europe/London")
  .format("hh:mm:ss")} <section>${moment().format("A")}</section></div>`;
