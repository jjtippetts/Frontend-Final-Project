var slideIndex = 1;
ShowNW(slideIndex);
ShowSouthWater(slideIndex);

function plusNW(n) {
  ShowNW(slideIndex += n);
}

function plusSouthWater(n) {
    ShowSouthWater(slideIndex += n);
}

function ShowNW(n) {
  var i;
  var x = document.getElementsByClassName("NWSlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function ShowSouthWater(n) {
    var i;
    var x = document.getElementsByClassName("SouthWaterSlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}