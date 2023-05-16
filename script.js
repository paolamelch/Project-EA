let sidebar = document.getElementById("sidebar-wrapper");
let sideToggle = document.getElementById("side-toggle");
let hidingNav = document.getElementById("navbar");
let mainNav = document.getElementById("navbar2");
let closeToggle = document.getElementById("close-toggle");

// User Bar Toggle
let userToggle = document.getElementById("user-toggle");
let profileWrapper = document.getElementById("profile-wrapper");
let profileClose = document.getElementById("profile-close");
userToggle.addEventListener("click", () => {
  profileWrapper.style.top = "36px";
});

profileClose.addEventListener("click", () => {
  profileWrapper.style.top = "-44rem";
});

// Fine UserBar Toggle

// Sidebar Toggle
sideToggle.addEventListener("click", () => {
  console.log("click");
  sidebar.style.left = "0";
});
closeToggle.addEventListener("click", () => {
  sidebar.style.left = "-41rem";
});

// Fine Sidebar Toggle

// Navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar2").style.top = "36px";
    sidebar.style.top = "36px";
  } else {
    document.getElementById("navbar").style.top = "-20px";
    document.getElementById("navbar2").style.top = "0";
    sidebar.style.top = "0";
  }
  prevScrollpos = currentScrollPos;
};

// Fine Navbar
