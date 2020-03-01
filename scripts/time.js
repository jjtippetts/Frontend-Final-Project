//Display Time
//**************************************************************

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
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

  m = checkTime(m);

  let currentTime = h + ":" + m + " " + ampm;
  // $(".display-4").append("<p>" + currentTime + "</p>");
  // $('<h4 class="pb-2">' + currentTime + "</h4>").insertAfter(".display-4");
  $(".time").text(currentTime);

  setTimeout(displayTime, 60000);
});
