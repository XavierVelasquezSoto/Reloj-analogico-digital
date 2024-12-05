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
