// animazione quadrati Featured Games 

const square = document.querySelector(".square-logos-container");
const squareContainer = document.querySelector(".translateContainer");
const officialSite = document.querySelector(".official-site");


square.addEventListener('mouseover', function () {
    squareContainer.style.transform = "translateY(-10%)";
    squareContainer.style.transition = "all 0.5s ease";
    officialSite.style.visibility = "visible";
});


square.addEventListener('mouseout', function () {
    squareContainer.style.transform = "translateY(0%)";
    officialSite.style.visibility = "hidden";
});

const square1 = document.querySelector(".square-logos-container1");
const squareContainer1 = document.querySelector(".translateContainer1");
const officialSite1 = document.querySelector(".official-site1");


square1.addEventListener('mouseover', function () {
    squareContainer1.style.transform = "translateY(-10%)";
    squareContainer1.style.transition = "all 0.5s ease";
    officialSite1.style.visibility = "visible";
});


square1.addEventListener('mouseout', function () {
    squareContainer1.style.transform = "translateY(0%)";
    officialSite1.style.visibility = "hidden";
});

const square2 = document.querySelector(".square-logos-container2");
const squareContainer2 = document.querySelector(".translateContainer2");
const officialSite2 = document.querySelector(".official-site2");


square2.addEventListener('mouseover', function () {
    squareContainer2.style.transform = "translateY(-10%)";
    squareContainer2.style.transition = "all 0.5s ease";
    officialSite2.style.visibility = "visible";
});


square2.addEventListener('mouseout', function () {
    squareContainer2.style.transform = "translateY(0%)";
    officialSite2.style.visibility = "hidden";
});

const square3 = document.querySelector(".square-logos-container3");
const squareContainer3 = document.querySelector(".translateContainer3");
const officialSite3 = document.querySelector(".official-site3");


square3.addEventListener('mouseover', function () {
    squareContainer3.style.transform = "translateY(-10%)";
    squareContainer3.style.transition = "all 0.5s ease";
    officialSite3.style.visibility = "visible";
});


square3.addEventListener('mouseout', function () {
    squareContainer3.style.transform = "translateY(0%)";
    officialSite3.style.visibility = "hidden";
});

const square4 = document.querySelector(".square-logos-container4");
const squareContainer4 = document.querySelector(".translateContainer4");
const officialSite4 = document.querySelector(".official-site4");


square4.addEventListener('mouseover', function () {
    squareContainer4.style.transform = "translateY(-10%)";
    squareContainer4.style.transition = "all 0.5s ease";
    officialSite4.style.visibility = "visible";
});


square4.addEventListener('mouseout', function () {
    squareContainer4.style.transform = "translateY(0%)";
    officialSite4.style.visibility = "hidden";
});

const square5 = document.querySelector(".square-logos-container5");
const squareContainer5 = document.querySelector(".translateContainer5");
const officialSite5 = document.querySelector(".official-site5");


square5.addEventListener('mouseover', function () {
    squareContainer5.style.transform = "translateY(-10%)";
    squareContainer5.style.transition = "all 0.5s ease";
    officialSite5.style.visibility = "visible";
});


square5.addEventListener('mouseout', function () {
    squareContainer5.style.transform = "translateY(0%)";
    officialSite5.style.visibility = "hidden";
});

// Fine animazione quadrati Featured Games

//Inizio animazione bottoni

const selectButton = document.querySelector(".selectRegion");
const nationsList = document.querySelector(".nationsSelect");
const arrowUp = document.getElementById("arrow-up")

function showMenu() {
    if (nationsList.style.visibility == 'visible') {
        nationsList.style.visibility = 'hidden';
        arrowUp.style.transform = "rotate(360deg)";
    } else {
        nationsList.style.visibility = 'visible';
        arrowUp.style.transform = "rotate(180deg)";
    }

}

const selectButton2 = document.querySelector(".selectRegion1");
const nationsList2 = document.querySelector(".nationsSelect1");
const arrowUp2 = document.getElementById("arrow-up1")

function showMenu2() {
    if (nationsList2.style.visibility == 'visible') {
        nationsList2.style.visibility = 'hidden';
        arrowUp2.style.transform = "rotate(360deg)";
    } else {
        nationsList2.style.visibility = 'visible';
        arrowUp2.style.transform = "rotate(180deg)";
    }

}

//Fine animazione bottoni