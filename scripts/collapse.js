let display = true;

function toggleNav() {
  if (display == true) {
    closeNav();
    display = false;
  } else {
    openNav();
    display = true;
  }
}

function openNav() {
  document.getElementsByClassName("nav")[0].style.width = "200px";
  document.getElementsByClassName("tab-content")[0].style.marginLeft = "200px";

  $(".nav-link").css("font-size", "1rem");
  $(".hide").css("display", "inline");
}

function closeNav() {
  document.getElementsByClassName("nav")[0].style.width = "75px";
  document.getElementsByClassName("tab-content")[0].style.marginLeft = "75px";
  $(".nav-link").css("font-size", "0px");
  $(".fas").css("font-size", "1rem");
  $(".hide").css("display", "none");
}
