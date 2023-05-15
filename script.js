let sidebar = document.getElementById("sidebar-wrapper");
let sideToggle = document.getElementById("side-toggle");

sideToggle.addEventListener("click", () => {
  console.log("click");
  sidebar.style.left = "0";
});
