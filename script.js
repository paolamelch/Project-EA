let sidebar = document.getElementById("sidebar-wrapper");
let sideToggle = document.getElementById("side-toggle");
let hidingNav = document.getElementById("navbar");
let mainNav = document.getElementById("navbar2");
let closeToggle = document.getElementById("close-toggle");
let sidebarOverlay = document.getElementById("sidebar-overlay");
// User Bar Toggle
let userToggle = document.getElementById("user-toggle");
let userToggleTablet = document.getElementById("user-toggle-tablet");
let profileWrapper = document.getElementById("profile-wrapper");
let profileClose = document.getElementById("profile-close");
let mobileUserToggle = document.getElementById("user-toggle-mobile");

mobileUserToggle.addEventListener("click", () => {
  console.log("click");
});

userToggle.addEventListener("click", () => {
  profileWrapper.style.top = "30px";
  document.documentElement.style.overflow = "hidden";
});

userToggleTablet.addEventListener("click", () => {
  profileWrapper.style.top = "0";
  document.documentElement.style.overflow = "hidden";
});

profileClose.addEventListener("click", () => {
  profileWrapper.style.top = "-44rem";
  document.documentElement.style.overflow = "scroll";
});

// Fine UserBar Toggle

// Sidebar Toggle
sideToggle.addEventListener("click", () => {
  console.log("click");
  sidebar.style.left = "0";
  sidebar.style.top = "36px";
  sidebarOverlay.style.display = "block";
  sidebarOverlay.style.visibility = "visible";
  document.documentElement.style.overflow = "hidden";
  document.getElementById("navbar").style.overflowX = "auto";
  document.getElementById("navbar").style.overflowY = "auto";
  document.getElementById("navbar").style.top = "0";
  document.getElementById("navbar2").style.top = "36px";
});
closeToggle.addEventListener("click", () => {
  sidebar.style.left = "-41rem";
  sidebarOverlay.style.display = "none";
  sidebarOverlay.style.visibility = "hidden";
  document.documentElement.style.overflow = "scroll";
  document.body.scroll = "yes";
  document.getElementById("navbar").style.top = "-20px";
  document.getElementById("navbar2").style.top = "0";
});

// Fine Sidebar Toggle
// TABLET SIDEBAR
let tabletSidebar = document.getElementById("tablet-sidebar");
let openTabletSidebar = document.getElementById("tablet-nav-toggle");
let closeTabletSidebar = document.getElementById("tablet-nav-close");

openTabletSidebar.addEventListener("click", () => {
  tabletSidebar.style.left = "0";
  sidebarOverlay.style.display = "block";
  sidebarOverlay.style.visibility = "visible";
  document.documentElement.style.overflow = "hidden";
  document.body.scroll = "no";
});

closeTabletSidebar.addEventListener("click", () => {
  tabletSidebar.style.left = "-41rem";
  sidebarOverlay.style.display = "none";
  sidebarOverlay.style.visibility = "hidden";
  document.documentElement.style.overflow = "scroll";
  document.body.scroll = "yes";
});

let rotateSideArrow = document.getElementById("button1");
let rotateSideArrow2 = document.getElementById("button2");
let rotateSideArrow3 = document.getElementById("button3");
let rotateSideArrow4 = document.getElementById("button4");
let rotateSideArrow5 = document.getElementById("button5");

let arrow1 = document.getElementById("arrow1");
rotateSideArrow.addEventListener("click", () => {
  console.log("click");
  if (arrow1.style.transform === "rotate(180deg)") {
    arrow1.style.transform = "rotate(0deg)";
  } else {
    arrow1.style.transform = "rotate(180deg)";
  }
});

let arrow2 = document.getElementById("arrow2");
rotateSideArrow2.addEventListener("click", () => {
  console.log("click");
  if (arrow2.style.transform === "rotate(180deg)") {
    arrow2.style.transform = "rotate(0deg)";
  } else {
    arrow2.style.transform = "rotate(180deg)";
  }
});

let arrow3 = document.getElementById("arrow3");
rotateSideArrow3.addEventListener("click", () => {
  console.log("click");
  if (arrow3.style.transform === "rotate(180deg)") {
    arrow3.style.transform = "rotate(0deg)";
  } else {
    arrow3.style.transform = "rotate(180deg)";
  }
});

let arrow4 = document.getElementById("arrow4");
rotateSideArrow4.addEventListener("click", () => {
  console.log("click");
  if (arrow4.style.transform === "rotate(180deg)") {
    arrow4.style.transform = "rotate(0deg)";
  } else {
    arrow4.style.transform = "rotate(180deg)";
  }
});

let arrow5 = document.getElementById("arrow5");
rotateSideArrow5.addEventListener("click", () => {
  console.log("click");
  if (arrow5.style.transform === "rotate(180deg)") {
    arrow5.style.transform = "rotate(0deg)";
  } else {
    arrow5.style.transform = "rotate(180deg)";
  }
});

// FINE TABLET SIDEBAR
// Navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar2").style.top = "36px";
  } else {
    document.getElementById("navbar").style.top = "-20px";
    document.getElementById("navbar2").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
};

// Fine Navbar

// FAQ Wrapper
let faqWrapper = document.getElementById("faq-wrapper");
let faqClose = document.getElementById("faq-close");
let faqToggle = document.getElementById("faq-toggle");

faqToggle.addEventListener("click", () => {
  faqWrapper.style.top = "30px";
  document.documentElement.style.overflow = "hidden";
});

faqClose.addEventListener("click", () => {
  faqWrapper.style.top = "-44rem";
  document.documentElement.style.overflow = "scroll";
});
// Fine FAQ Wrapper

// mobile sidebar

let mobileSideToggle = document.getElementById("mobile-nav-toggle");

mobileSideToggle.addEventListener("click", () => {
  tabletSidebar.style.left = "0";
  sidebarOverlay.style.display = "block";
  sidebarOverlay.style.visibility = "visible";
  document.documentElement.style.overflow = "hidden";
  document.body.scroll = "no";
});

// Navbar mobile
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar2").style.top = "36px";
  } else {
    document.getElementById("navbar").style.top = "-20px";
    document.getElementById("navbar2").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
};

// Fine Navbar mobile
