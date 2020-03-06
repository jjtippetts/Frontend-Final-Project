//Display Time
//**************************************************************

//Source: www.geeksforgeeks.org
function convertTimestamptoTime(unixTimestamp) {
  // convert to milliseconds and
  // then create a new Date object
  dateObj = new Date(unixTimestamp * 1000);
  console.log(dateObj);
  utcString = dateObj.toUTCString();
  console.log(utcString);

  time = utcString.slice(-12, -4);
  console.log(time);
  return time;
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function formatTime(hours, minutes, military) {
  //Get AM or PM
  let ampm = hours >= 12 ? "pm" : "am";

  //Change Hours
  hours = hours % 12;
  if (hours == 0) {
    hours = 12;
  }

  //Add extra zero if single digit
  minutes = addZero(minutes);

  //Format
  let currentTime = hours + ":" + minutes + " " + ampm;
  return currentTime;
}

$(document).ready(function displayTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let ampm = h >= 12 ? "pm" : "am";

  h = h % 12;
  if (h == 0) {
    h = 12;
  }

  m = addZero(m);

  let currentTime = h + ":" + m + " " + ampm;
  // $(".display-4").append("<p>" + currentTime + "</p>");
  // $('<h4 class="pb-2">' + currentTime + "</h4>").insertAfter(".display-4");
  $(".time").text(currentTime);

  setTimeout(displayTime, 60000);
});
