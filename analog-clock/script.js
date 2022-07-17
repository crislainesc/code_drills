const HOURPOINTER = document.querySelector("#hour");
const MINUTEPOINTER = document.querySelector("#minute");
const SECONDPOINTER = document.querySelector("#second");

const date = new Date();

let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let hourPosition = (hour * 360) / 12 + (minutes * (360 / 60)) / 12;
let minutePosition = (minutes * 360) / 60 + (seconds * (360 / 60)) / 60;
let secondPosition = (seconds * 360) / 60;

function runClock() {
  hourPosition += 3 / 360;
  minutePosition += 6 / 60;
  secondPosition += 6;

  HOURPOINTER.style.transform = "rotate(" + hourPosition + "deg)";
  MINUTEPOINTER.style.transform = "rotate(" + minutePosition + "deg)";
  SECONDPOINTER.style.transform = "rotate(" + secondPosition + "deg)";
}

const interval = setInterval(runClock, 1000);
