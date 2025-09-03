var year = prompt("Year to Check");

alert(isLeap(year));

function isLeap(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
    ? "It is a leap year"
    : "It is not a leap year";
}
