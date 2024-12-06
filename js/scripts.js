//  TIMERS
//  setTimeout() -> Establecer un delay hasta la ejercuión de una función
//  setInterval() -> Repetir la ejercución de una función cada X milisegundos

// const sayHello = () => {
//   console.log("hola")
// }
// setTimeout(sayHello,5000)

//  DATE

// const date = new Date()

// console.log(date)
// console.log(date.getDate())Nos devuelve el día en el que nos encontramos.
// console.log(date.getDay())Nos devuelve el día de la semana en el que nos encontramos. 0 es domingo y 6 sábado
// console.log(date.getMonth()) Nos devuelve el mes en el que nos encontramos. 0 es enero y 11 diciembre
// console.log(date.getFullYear()) Nos devuelve el año en el que nos encontramos.
// console.log(date.getMiliseconds()) Nos devuelve los milisegundos para la hora en la que nos encontramos.
// console.log(date.getSeconds) Nos devuelve los segundos en los que nos encontramos.
// console.log(date.getMinutes) Nos devuelve los minutos en los que nos encontramos.
// console.log(date.getHours) Nos devuelve la hora en la que nos encontramos.

// const date = new Date() "Importante" debe de ir siempre dentro de la función, porque se ejecuta y captura la hora, ya no vuelve a capturar la hora
// const printClock = () => {
//   const date = new Date();
//   console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// };

// setInterval(printClock, 1000);

const hourDigitalElement = document.getElementById("hour-digital");
const minuteDigitalElement = document.getElementById("minute-digital");

const printClockDigital = () => {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }

  hourDigitalElement.textContent = `${hour}`;
  minuteDigitalElement.textContent = `${minute}`;
};

//

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

//

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

setInterval(() => {
  printClockDigital();
  printClockDigitalDate();
  printClockAnalog();
});
