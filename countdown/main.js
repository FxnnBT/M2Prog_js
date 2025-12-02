
function CountdownTimer() {

let now = new Date();

let release = new Date("19 november 2026");

let daysElement = document.getElementById("days");
let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");


let milliseconds = release - now;
let days = Math.floor((milliseconds / (1000 * 60 * 60 * 24)));
  let hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  console.log(days, hours, minutes, seconds);

  daysElement.innerText = days + " Dagen";
  hoursElement.innerText = hours + " Uren";
  minutesElement.innerText = minutes + " Minuten";
  secondsElement.innerText = seconds + " Seconden";
}

  setInterval(CountdownTimer, 1000);