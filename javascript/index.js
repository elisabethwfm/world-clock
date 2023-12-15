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

  let dubaiElement = document.querySelector("#dubai");
  let dubaiDate = dubaiElement.querySelector(".date");
  let dubaiTime = dubaiElement.querySelector(".time");

  dubaiDate.innerHTML = `<div class="date">${moment()
    .tz("Asia/Dubai")
    .format("MMMM Do YYYY")}</div>`;

  dubaiTime.innerHTML = `<div class="time">${moment()
    .tz("Asia/Dubai")
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
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  //   let cityName = this.options[this.selectedIndex].text;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` 
  <div class="city" >
          <h2>
              ${cityName}</h2>
          
          <div class="time">${cityTime.format(
            "hh:mm:ss"
          )} <section>${moment().format("A")}</section></div>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>

          
        
        </div>
        
        <a href="/">🔙</a>`;

  setTimeout(() => {
    updateCity(event);
  }, 1000);
}

// function currentTimeZone(event) {
//   let cityTimeZone = event.target.value;
//   if (cityTimeZone === "current") {
//     cityTimeZone = moment.tz.guess();
//   }
//   let cityName = cityTimeZone.replace("_", " ").split("/")[1];
//   let cityTime = moment().tz(cityTimeZone);
//   let citiesElement = document.querySelector("#cities");
//   citiesElement.innerHTML = `
//   <div class="city" >
//           <h2>
//               ${cityName}</h2>

//           <div class="time">${cityTime.format(
//             "hh:mm:ss"
//           )} <section>${moment().format("A")}</section></div>
//           <div class="date">${cityTime.format("MMMM Do YYYY")}</div>

//         </div>`;
// }

showTime();
setInterval(showTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);

// let currentCitiySelectElement = document.querySelector("#city .current");

// currentCitiySelectElement.addEventListener("change", currentTimeZone);
