//DOM Elements

const monthName = [
  "January",
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

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

//show time

function showDate() {
    var date = new Date();
  document.getElementById("date").innerHTML =
      weekday[d.getDay()] + ", " + monthName[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();

}
// change color based on time
function timedColor() {
  var tc = new Date();
var hourCompare = tc.getHours();
if (hourCompare <= 9 && hourCompare >= 10) {
  //day time
  $('.time').css("background-color", "red");
} else {
  //night time
  $('.time').css("background-color", "green");
}
if (hourCompare <= 10 && hourCompare >= 11) {
  //day time
  $('.time').css("background-color", "red");
} else {
  //night time
  $('.time').css("background-color", "green");
}
if (hourCompare <= 11 && hourCompare >= 12) {
  //day time
  $('.time').css("background-color", "red");
} else {
  //night time
  $('.time').css("background-color", "green");
}
if (hourCompare <= 12 && hourCompare >= 13) {
  //day time
  $('.time').css("background-color", "red");
} else {
  //night time
  $('.time').css("background-color", "green");
}
if (hourCompare <= 13 && hourCompare >= 14) {
  //day time
  $('.time').css("background-color", "red");
} else {
  //night time
  $('.time').css("background-color", "green");
}
if (hourCompare <= 14 && hourCompare >= 15) {
  //day time
  $('.time').css("background-color", "red");
} else {
  //night time
  $('.time').css("background-color", "green");
}
if (hourCompare <= 15 && hourCompare >= 16) {
  //day time
  $('.time').css("background-color", "red");
} else {
  //night time
  $('.time').css("background-color", "green");
}
if (hourCompare <= 16 && hourCompare >= 17) {
  //day time
  $('.time').css("background-color", "red");
} 
}
  
timedColor();
showDate();