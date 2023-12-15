function showTime() {
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

  //Vienna
  let viennaElement = document.querySelector("#vienna");
  let viennaDate = viennaElement.querySelector(".date");
  let viennaTime = viennaElement.querySelector(".time");

  viennaDate.innerHTML = `<div class="date">${moment()
    .tz("Europe/Vienna")
    .format("MMMM Do YYYY")}</div>`;

  viennaTime.innerHTML = `<div class="time">${moment()
    .tz("Europe/Vienna")
    .format("hh:mm:ss")} <section>${moment().format("A")}</section></div>`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  console.log(cityTime.format("MMMM Do YYYY"));
}

showTime();
setInterval(showTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
