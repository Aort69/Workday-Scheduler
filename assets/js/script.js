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
    weekday[d.getDay()] +
    ", " +
    monthName[date.getMonth()] +
    " " +
    date.getDate() +
    " " +
    date.getFullYear();
}
// change color based on time
function timedColor() {
  document.querySelectorAll(".colorMe");
  var timeBlocks = document.querySelectorAll(".colorMe");

  for (var i = 0; i < timeBlocks.length; i++) {
    var hour = parseInt(timeBlocks[i].dataset.time);
    var date = new Date();
    var currentHour = date.getHours();
    if (hour > currentHour) {
      timeBlocks[i].classList.add("future");
    } else if (hour === currentHour) {
      timeBlocks[i].classList.add("present");
    } else if (hour < currentHour) {
      timeBlocks[i].classList.add("past");
    }
  }
}

// click function
$(".saveBtn").click(function () {
  var userInput = $(this).siblings(".colorMe").text().trim();
  console.log(userInput);
  var hour = $(this).siblings(".hour").text().trim();
  // var userInput = $(this).siblings('.hour').attr('data-time')
});

timedColor();
showDate();
