const hourDigitalElement = document.getElementById("hour-digital");
const minuteDigitalElement = document.getElementById("minute-digital");

const printClockDigital = () => {
  const date = new Date();
  hourDigitalElement.textContent = `${date.getHours()}`;
  minuteDigitalElement.textContent = `${date.getMinutes()}`;
};
setInterval(printClockDigital);

const dayOfWeekElement = document.getElementById("day-of-week");
const dayElement = document.getElementById("day");
const monthElement = document.getElementById("month");
const yearElement = document.getElementById("year");

const dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthOfYear = [
  "Janyary",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const printClockDigitalDate = () => {
  const date = new Date();
  const dayName = dayOfWeek[date.getDay()];
  const monthName = monthOfYear[date.getMonth()];

  dayOfWeekElement.textContent = `${dayName}`;
  dayElement.textContent = `${date.getDate()}`;
  monthElement.textContent = `${monthName}`;
  yearElement.textContent = `${date.getFullYear()}`;
};

setInterval(printClockDigitalDate);

const hourHandElement = document.getElementById("hour-hand");
const minuteHandElement = document.getElementById("minute-hand");
const secondHandElement = document.getElementById("second-hand");

const printClockAnalog = () => {
  const date = new Date();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  const hourRotation = hour * 30 + minute * 0.5;
  const minuteRotation = minute * 6;
  const secondRotation = seconds * 6;

  hourHandElement.style.transform = `rotate(${hourRotation}deg)`;
  minuteHandElement.style.transform = `rotate(${minuteRotation}deg)`;
  secondHandElement.style.transform = `rotate(${secondRotation}deg)`;
};

setInterval(printClockAnalog);
