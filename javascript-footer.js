const square = document.getElementsByClassName("featured-square");
const squareContainer = document.getElementsByClassName(".square-logos-container");
const officialSite = document.getElementsByClassName(".official-site");

// square.addEventListener('mouseover', function(){
//     squareContainer.style.transform = "translateY(-10%)";
//     squareContainer.style.transition = "all 0.5s ease";
//     officialSite.style.visibility = "visible";
// })
// square.addEventListener('mouseout', function(){
//     squareContainer.style.transform = "translateY(0%)";
//     officialSite.style.visibility = "hidden";
// })




const selectButton = document.querySelector(".selectRegion");
const nationsList = document.querySelector(".nationsSelect");
const arrowUp = document.getElementById("arrow-up")

function showMenu(){
    if (nationsList.style.visibility == 'visible') {
        nationsList.style.visibility = 'hidden';
        arrowUp.style.transform = "rotate(360deg)";
    }
    else{
        nationsList.style.visibility = 'visible';
        arrowUp.style.transform = "rotate(180deg)";
    }
    
}

const selectButton2 = document.querySelector(".selectRegion1");
const nationsList2 = document.querySelector(".nationsSelect1");
const arrowUp2 = document.getElementById("arrow-up1")

function showMenu2(){
    if (nationsList2.style.visibility == 'visible') {
        nationsList2.style.visibility = 'hidden';
        arrowUp2.style.transform = "rotate(360deg)";
    }
    else{
        nationsList2.style.visibility = 'visible';
        arrowUp2.style.transform = "rotate(180deg)";
    }
    
}
    